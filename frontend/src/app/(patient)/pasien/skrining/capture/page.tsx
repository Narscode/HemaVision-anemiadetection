"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  HelpCircle,
  Camera,
  CheckCircle2,
  AlertTriangle,
  Info,
  RefreshCw,
  VideoOff,
  Sun,
  Focus,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

const STEPS = [
  {
    id: 1,
    label: "Langkah 1 dari 3",
    subtitle: "Pengambilan Citra Mata",
    instruction: "Posisikan mata di dalam panduan.",
    subtext: "Pastikan kelopak mata bawah ditarik perlahan dan terlihat jelas.",
    shape: "eye",
    badges: [
      { name: "Posisi", status: "ok" },
      { name: "Cahaya", status: "ok" },
      { name: "Fokus", status: "ok" },
    ],
  },
  {
    id: 2,
    label: "Langkah 2 dari 3",
    subtitle: "Pengambilan Citra Kuku",
    instruction: "Posisikan kuku di dalam panduan.",
    subtext: "Pastikan cahaya cukup dan kuku terlihat jelas tanpa pantulan berlebih.",
    shape: "nail",
    badges: [
      { name: "Posisi", status: "ok" },
      { name: "Fokus", status: "ok" },
      { name: "Cahaya", status: "warning" },
    ],
  },
  {
    id: 3,
    label: "Langkah 3 dari 3",
    subtitle: "Pengambilan Citra Telapak Tangan",
    instruction: "Posisikan telapak tangan di dalam panduan.",
    subtext: "Buka telapak tangan sepenuhnya dan pastikan pencahayaan rata.",
    shape: "palm",
    badges: [
      { name: "Posisi", status: "ok" },
      { name: "Cahaya", status: "ok" },
      { name: "Fokus", status: "ok" },
    ],
  },
];

export default function CameraCapturePage() {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [hasCameraError, setHasCameraError] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentStep = STEPS[currentStepIndex];

  // Initialize Real WebRTC Camera Stream
  useEffect(() => {
    let stream: MediaStream | null = null;

    async function startCameraStream() {
      setHasCameraError(false);
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          try {
            stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: { ideal: "user" }, width: { ideal: 1280 }, height: { ideal: 720 } },
            });
          } catch {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
          }

          if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
            await videoRef.current.play().catch(() => {});
            setCameraActive(true);
          }
        } else {
          setHasCameraError(true);
        }
      } catch (err) {
        console.error("Camera permission error:", err);
        setHasCameraError(true);
        setCameraActive(false);
      }
    }

    startCameraStream();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Handle Manual Retry if camera access was blocked
  const handleRetryCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => {});
        setCameraActive(true);
        setHasCameraError(false);
      }
    } catch {
      alert("Akses kamera tidak diizinkan. Silakan aktifkan izin kamera pada browser Anda.");
    }
  };

  // Handle Capture Trigger
  const handleCapture = () => {
    // Trigger Camera Shutter Flash Effect
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 250);

    // Advance to next step or complete screening flow
    if (currentStepIndex < STEPS.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 300);
    } else {
      // Completed all 3 steps: Navigate to Summary Review Page
      setTimeout(() => {
        router.push(ROUTES.PATIENT.ONBOARDING_LANGKAH4);
      }, 400);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      router.push(ROUTES.PATIENT.SKRINING_PERSIAPAN);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#191B23] font-sans flex items-center justify-center select-none overflow-hidden">
      
      {/* Mobile App Container Frame */}
      <div className="relative w-full max-w-[480px] h-screen max-h-[920px] bg-[#2E3039] flex flex-col justify-between overflow-hidden shadow-2xl border-x border-[#C3C6D7]/20">
        
        {/* Shutter Flash Screen Effect */}
        {isFlashing && (
          <div className="absolute inset-0 bg-white z-50 animate-pulse pointer-events-none transition-opacity duration-150" />
        )}

        {/* Real Live Camera Feed Background */}
        <div className="absolute inset-0 z-0 bg-[#2E3039] flex items-center justify-center overflow-hidden">
          
          {/* Always rendered real video element */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover transform scale-105 transition-opacity duration-300 ${
              cameraActive ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Camera Access Blocked Fallback UI */}
          {hasCameraError && !cameraActive && (
            <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center space-y-4 bg-[#2E3039]/95 text-white">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <VideoOff className="w-8 h-8 text-[#86F2E4]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">Kamera Belum Aktif</h3>
                <p className="text-sm text-slate-300 max-w-xs">
                  Izinkan akses kamera pada browser Anda untuk dapat melakukan skrining langsung.
                </p>
              </div>
              <button
                onClick={handleRetryCamera}
                className="px-5 py-2.5 bg-[#004AC6] hover:bg-[#003DA3] active:scale-95 text-white font-semibold text-sm rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Aktifkan Kamera REALL</span>
              </button>
            </div>
          )}

          {/* Radial Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_105%_56%_at_50%_50%,rgba(25,27,35,0)_30%,rgba(25,27,35,0.80)_100%)] pointer-events-none" />

          {/* Floating Instruction Toast Badge */}
          <div className="absolute top-[18%] left-0 right-0 z-20 flex justify-center px-4">
            <div className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full border border-[#C3C6D7]/40 shadow-md flex items-center gap-2">
              <Info className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
              <span className="text-[#191B23] text-sm font-medium leading-5">
                {currentStep.instruction}
              </span>
            </div>
          </div>

          {/* Dynamic Viewfinder Reticle Target */}
          <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {currentStep.shape === "nail" ? (
              /* Step 2: Kuku Vertical Arched Guide */
              <div className="w-[192px] h-[256px] rounded-t-[40px] rounded-b-[16px] border-2 border-white/70 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-x-0 h-0.5 bg-[#89F5E7] shadow-[0_0_10px_#89F5E7] animate-float-gentle pointer-events-none" />
              </div>
            ) : currentStep.shape === "eye" ? (
              /* Step 1: Mata Horizontal Guide */
              <div className="w-[256px] h-[128px] rounded-xl border-2 border-white/70 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#004AC6] rounded-full" />
                <div className="absolute inset-x-0 h-0.5 bg-[#89F5E7] shadow-[0_0_10px_#89F5E7] animate-float-gentle pointer-events-none" />
              </div>
            ) : (
              /* Step 3: Telapak Tangan Guide */
              <div className="w-[220px] h-[270px] rounded-[32px] border-2 border-white/70 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-x-0 h-0.5 bg-[#89F5E7] shadow-[0_0_10px_#89F5E7] animate-float-gentle pointer-events-none" />
              </div>
            )}
          </div>

          {/* 3 Floating Quality Badges Overlay near bottom of preview */}
          <div className="absolute bottom-[24%] left-0 right-0 z-20 px-4 flex items-center justify-center gap-3">
            {currentStep.badges.map((b) => (
              <div
                key={b.name}
                className={`px-3 py-2 bg-white/90 backdrop-blur-md rounded-lg shadow-xs flex flex-col items-center justify-center min-w-[100px] border ${
                  b.status === "warning"
                    ? "border-[#BA1A1A]/50 text-[#BA1A1A]"
                    : "border-[#C3C6D7]/30 text-[#006A61]"
                }`}
              >
                {b.status === "warning" ? (
                  <AlertTriangle className="w-5 h-5 text-[#BA1A1A]" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#006A61]" />
                )}
                <span className="text-[#434655] font-mono text-xs font-normal mt-1">
                  {b.name}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Top Header Glassmorphism Bar */}
        <div className="relative z-20 w-full p-4 bg-white/20 backdrop-blur-md border-b border-white/30 flex items-center justify-between">
          
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="w-10 h-10 bg-white/30 hover:bg-white/40 active:scale-95 backdrop-blur-md rounded-full flex items-center justify-center text-[#191B23] transition-all cursor-pointer"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Step Title & Subtitle Stack */}
          <div className="text-center space-y-0.5">
            <h2 className="text-white text-sm font-semibold leading-tight">
              {currentStep.label}
            </h2>
            <p className="text-white/80 font-mono text-xs font-medium leading-tight">
              {currentStep.subtitle}
            </p>
          </div>

          {/* Help Button */}
          <button
            onClick={() => router.push(ROUTES.PATIENT.SKRINING_PERSIAPAN)}
            className="w-10 h-10 bg-white/30 hover:bg-white/40 active:scale-95 backdrop-blur-md rounded-full flex items-center justify-center text-[#191B23] transition-all cursor-pointer"
            aria-label="Bantuan"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Sheet Modal Controls */}
        <div className="relative z-20 w-full bg-white rounded-t-xl p-6 shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.05)] border-t border-[#C3C6D7] space-y-4">
          
          {/* Instruction Subtext */}
          <p className="text-[#434655] text-sm font-normal text-center leading-relaxed max-w-sm mx-auto">
            {currentStep.subtext}
          </p>

          {/* Shutter Capture Button */}
          <button
            onClick={handleCapture}
            className="w-full py-4 bg-[#2563EB] hover:bg-[#004AC6] active:scale-[0.98] text-white font-medium text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Camera className="w-5 h-5 text-white" />
            <span>Ambil Gambar</span>
          </button>

        </div>

      </div>

    </main>
  );
}
