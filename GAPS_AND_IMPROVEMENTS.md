# Gaps in Existing Palm-Based Anemia Detection Methods & AI-Model Improvements

This document critically reviews the four reference papers in `paper/` and the pipeline
reproduced in `anemia_detection.ipynb`, identifies the **methodological and AI-modeling gaps**,
and proposes concrete, prioritized improvements to the AI model itself.

**Papers reviewed**

| ID | Reference | Core approach |
|----|-----------|---------------|
| **P1** | Kesarwani *et al.*, *Biomed. Signal Process. Control* 79 (2023) 104045 | Video palm-pallor + pressure device → ROI → ensemble regression + MLP |
| **P2** | Keneshlou *et al.*, medRxiv 2026 | U-Net palm segmentation → RGB/CIELab/HSV color features → LogReg / GradBoost / CNN |
| **P3** | Rizal *et al.*, IJAERS 9(9) 2022 | Palm images → CNN classifier |
| **P4** | Appiahene *et al.*, BioData Mining 16:2 (2023) | Palm images (this dataset) → CIELab features → CNN, k-NN, NB, SVM, DT |

---

## 1. Executive Summary

The published palm-anemia models report near-perfect accuracy (P4: Naïve Bayes 99.96%, CNN 99.92%;
P3: 96.43%). Our reproduction **matches these numbers under the same protocol** (MLP 99.8%, RF/XGBoost
99.6%) — **but only because of a data-leakage artifact**. When we re-evaluate with a *subject-grouped*
split (no augmented copy of the same palm appears in both train and test), accuracy collapses to
**~65–71%**. This single finding drives most of the recommendations below: the headline metrics in the
literature are optimistic, and the biggest wins are in **evaluation rigor, dataset design, calibration,
robustness, and clinical validity** rather than in raw model capacity.

---

## 2. Gaps in the Existing Methods

### 2.1 Evaluation methodology (most critical)

- **Augmentation leakage.** P4 augments 527 images → 2,635 via rotation/flip/translation, then does a
  *random* 70/10/20 split. Near-identical copies of one palm land in both train and test, so the model
  memorizes subjects instead of learning pallor. **Evidence from our notebook:** random split = 99.8%
  vs. subject-grouped split = 71%. The reported 99.9% figures therefore do **not** reflect
  generalization to new patients.
- **No patient-level / grouped cross-validation.** None of the papers report `GroupKFold` by subject,
  which is the correct protocol for augmented or multi-image-per-patient datasets.
- **Tiny or single test splits.** P3 uses ~19–28 samples; P1 uses 131 participants. Single-split point
  estimates with no confidence intervals make the metrics statistically fragile.
- **Metric selection bias.** Accuracy is emphasized on class-imbalanced data (our set is 60/40).
  Sensitivity, specificity, **ROC-AUC, PR-AUC**, and calibration are under-reported. For a *screening*
  tool, sensitivity and false-negative cost matter most and are not consistently optimized.

### 2.2 Dataset & labeling

- **Binary labels lose clinical information.** Anemia is defined by continuous hemoglobin (Hb) with
  age/sex/pregnancy-specific thresholds. Collapsing to Anemic/Non-anemic discards severity and makes
  labels threshold-dependent. Only P1 and P2 touch Hb regression.
- **Small, single-site, homogeneous cohorts.** P2's cohort is largely one skin-tone population; P4 is
  single-site (Ghana). This limits **skin-tone and geographic generalization**, despite P2's claim of
  robustness (which is itself measured on the majority group).
- **No acquisition-condition control in the features.** Lighting, white balance, camera model, and
  exposure strongly affect palm color, yet these confounders are neither recorded nor corrected for
  systematically. A model can learn the *camera/lighting* rather than the *patient*.
- **Class imbalance and duplication** are not addressed with principled resampling or class weighting.

### 2.3 Feature & preprocessing pipeline

- **Hand-crafted color statistics are illumination-sensitive.** Mean/Std/Skew in RGB/HSV/Lab/YCbCr
  (P2, P4, and our notebook) shift with lighting. Without device-level color calibration
  (e.g., a color reference card), features are not comparable across phones/clinics.
- **Segmentation brittleness.** P2's U-Net needs pixel masks (expensive); classical skin-thresholding
  (our fallback, and implicit in P4) fails on very pale palms, shadows, jewelry, and non-skin
  backgrounds. Segmentation errors propagate silently into the color features.
- **No explicit melanin/skin-tone disentanglement.** Pallor and melanin both change palm color; the
  models do not separate the hemoglobin signal from the melanin confounder (P2 acknowledges skin-tone
  dependence but does not remove it).

### 2.4 Modeling choices

- **Classical ML on global statistics ignores spatial structure.** Palmar creases and localized pallor
  patterns carry signal that mean/std features discard.
- **CNNs trained on tiny augmented sets overfit.** P3/P4 CNNs on a few hundred originals are prone to
  memorization; no transfer learning or regularization strategy is detailed.
- **No uncertainty or calibration.** Predictions are hard labels; there is no probability calibration,
  no abstention/"refer to lab" option, and no out-of-distribution (OOD) detection.
- **Not deployment-aware.** P1 needs a custom pressure device + video; the image-based models assume
  clean, centered palms. Robustness to real-world phone capture (motion blur, glare, partial palms) is
  untested.

### 2.5 Interpretability, fairness, and clinical validity

- **Limited explainability.** Only P2 uses SHAP; the CNN papers offer no saliency/attribution, making
  clinical trust and debugging hard.
- **No fairness auditing across subgroups** (skin tone, age, sex). A screening tool that
  underperforms on lighter/darker palms is a safety issue.
- **No external validation or prospective study.** All results are internal; none compare against
  a gold-standard lab Hb on an *independent* cohort.

---

## 3. Recommended Improvements to the AI Model

Ordered by expected impact on real-world reliability.

### 3.1 Fix evaluation first (highest impact, lowest cost)

1. **Subject-grouped splits everywhere.** Use `GroupKFold`/`StratifiedGroupKFold` keyed on patient ID;
   never let augmentations of one palm cross the train/test boundary. (Already demonstrated in the
   notebook — this alone changes the honest accuracy from ~99% to ~71%.)
2. **Report the full metric suite with confidence intervals:** Sensitivity, Specificity, ROC-AUC,
   **PR-AUC**, F1, **Brier score / calibration curve**, obtained via repeated grouped CV + bootstrap CIs.
3. **Nested CV** for hyperparameter selection to avoid optimistic tuning bias.
4. **Prospective / external test set** from a different site and device as the headline result.

### 3.2 Reframe the learning target

5. **Predict Hb as a regression target** (as P1/P2 partially do), then threshold with age/sex-specific
   WHO cutoffs. This preserves severity, enables ordinal/mild/moderate/severe outputs, and is more
   clinically actionable than binary labels.
6. **Multi-task learning:** jointly predict Hb (regression) + anemia class + skin-tone group; the
   auxiliary skin-tone head encourages the model to *disentangle* melanin from pallor.

### 3.3 Robustness to acquisition conditions

7. **Device color calibration:** capture a reference color card and apply per-image color correction
   before feature extraction, or learn an illumination-invariant embedding.
8. **Realistic augmentation & domain randomization:** simulate lighting/white-balance/glare/blur so the
   model becomes invariant to capture conditions (not just geometric flips).
9. **Domain adaptation / domain-adversarial training** to remove camera- and site-specific signals.
10. **Quality gating:** an automatic image-quality and OOD check that rejects blurry/occluded/non-palm
    images and asks the user to recapture, instead of silently producing a wrong prediction.

### 3.4 Better representations

11. **Learned segmentation with lightweight models** (e.g., a small U-Net/SAM-based ROI) with a
    confidence score; fall back to "unclassifiable" when the ROI is unreliable.
12. **Hybrid features:** combine hand-crafted, calibration-invariant color indices (red-fraction,
    erythema, a\*) with **CNN embeddings from a pretrained backbone** (transfer learning) fine-tuned
    on palms. This retains interpretability while capturing spatial pallor patterns.
13. **Melanin-normalization layer:** estimate baseline skin tone from a non-pallor palm region and
    normalize color features against it, isolating the hemoglobin-driven variation.

### 3.5 Trustworthy, deployable outputs

14. **Probability calibration** (Platt/temperature/isotonic) so the output probability is meaningful.
15. **Uncertainty quantification** (MC-dropout, deep ensembles, or conformal prediction) to produce
    a "refer to laboratory test" abstention band around the decision threshold — essential for a
    screening tool where false negatives are costly.
16. **Threshold tuning for screening:** operate at high sensitivity (minimize missed anemia), reporting
    the sensitivity/specificity trade-off explicitly.

### 3.6 Fairness & interpretability

17. **Subgroup performance reporting** (skin tone, age, sex) with fairness gaps quantified; enforce
    minimum per-group sensitivity.
18. **Built-in explainability:** SHAP for tabular features and Grad-CAM/attention maps for the CNN,
    validated against clinical intuition (pallor localized to creases/skin).
19. **Skin-tone-balanced sampling / reweighting** during training to prevent majority-group bias.

### 3.7 Data-centric improvements

20. **Larger, multi-site, skin-tone-stratified dataset** with paired gold-standard Hb, standardized
    capture protocol, and recorded metadata (device, lighting, age, sex).
21. **Semi-supervised / self-supervised pretraining** on unlabeled palm images to reduce reliance on
    scarce labeled Hb pairs.
22. **Principled imbalance handling:** class weights or focal loss rather than blind augmentation.

---

## 4. Prioritized Roadmap

| Priority | Improvement | Effort | Expected benefit |
|----------|-------------|--------|------------------|
| **P0** | Subject-grouped CV + full metrics + CIs (§3.1) | Low | Honest, reproducible benchmarks; unblocks all other work |
| **P0** | Calibration + abstention band (§3.5) | Low–Med | Safe screening outputs; fewer harmful false negatives |
| **P1** | Hb regression + WHO thresholding (§3.2) | Med | Clinically meaningful, severity-aware predictions |
| **P1** | Color calibration + realistic augmentation (§3.3) | Med | Cross-device/site robustness |
| **P1** | Hybrid CNN-embedding + hand-crafted features (§3.4) | Med | Higher honest accuracy with interpretability |
| **P2** | Melanin normalization + fairness auditing (§3.4/§3.6) | Med–High | Equitable performance across skin tones |
| **P2** | Multi-site dataset + external validation (§3.7, §3.1) | High | Trustworthy, deployable, publishable evidence |

---

## 5. How This Maps Back to Our Notebook

`anemia_detection.ipynb` already implements two of the P0 items — it reports a **subject-grouped
(leakage-aware) split** alongside the papers' random split, and evaluates the full metric suite
(Accuracy, Sensitivity, Specificity, ROC-AUC). The gap between the two splits (≈99% → ≈71%) is the
concrete, reproducible motivation for the improvements above. The remaining items (Hb regression,
calibration/abstention, color calibration, hybrid CNN features, melanin normalization, and fairness
auditing) are the natural next steps to turn a leaderboard-style pipeline into a **clinically
trustworthy screening model**.
