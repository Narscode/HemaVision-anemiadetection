"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import {
  Check,
  Camera,
  ArrowLeft,
  Info,
  Zap,
  CheckCircle2,
  RefreshCw,
  Video,
  SwitchCamera,
  Bell,
  Grid,
  Sparkles,
  ZoomIn,
  AlertTriangle,
  Clock,
  Hand,
  Maximize2,
} from "lucide-react";
import { ROUTES } from "@/lib/routes";

type CaptureSite = "eye" | "nail" | "palm";

export default function ImageCapturePage() {
  const router = useRouter();
  const params = useParams();
  const sessionId = (params?.sessionId as string) || "session-eye-101";

  // Determine initial site from route param
  const getInitialSite = (): CaptureSite => {
    if (sessionId.includes("nail") || sessionId.includes("kuku")) return "nail";
    if (sessionId.includes("palm") || sessionId.includes("telapak")) return "palm";
    return "eye";
  };

  // WebRTC Camera Refs & State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasWebcam, setHasWebcam] = useState(false);
  const [useFrontCamera, setUseFrontCamera] = useState(true);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Capture State Management
  const [activeSite, setActiveSite] = useState<CaptureSite>(getInitialSite());
  const [capturedSites, setCapturedSites] = useState<CaptureSite[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showShutterFlash, setShowShutterFlash] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [distanceStatus, setDistanceStatus] = useState<"too_close" | "ok">("too_close");
  const [sessionTimer, setSessionTimer] = useState(165); // 02:45 in seconds
  const [capturedImagePreview, setCapturedImagePreview] = useState<string | null>(null);

  // Sync active site if route param changes
  useEffect(() => {
    setActiveSite(getInitialSite());
    setCapturedImagePreview(null);
  }, [sessionId]);

  // Timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Request & Start Browser Webcam
  const startCameraStream = async () => {
    try {
      setCameraError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: useFrontCamera ? "user" : "environment",
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true");
        videoRef.current.setAttribute("muted", "true");
        await videoRef.current.play();
        setHasWebcam(true);
      }
    } catch (err: any) {
      console.warn("Webcam access error:", err);
      setHasWebcam(false);
      setCameraError("Browser belum memberi izin kamera atau webcam tidak terhubung.");
    }
  };

  useEffect(() => {
    if (!capturedImagePreview) {
      startCameraStream();
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [activeSite, useFrontCamera, capturedImagePreview]);

  // Real Photo Capture from Video Canvas
  const handleTakePhoto = () => {
    if (isCapturing) return;
    setIsCapturing(true);

    // 1. Shutter flash effect
    setShowShutterFlash(true);
    setTimeout(() => setShowShutterFlash(false), 250);

    // 2. Capture Real Frame from Video Stream
    setTimeout(() => {
      setIsCapturing(false);

      if (videoRef.current && videoRef.current.readyState >= 2) {
        const video = videoRef.current;
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || 1280;
        canvas.height = video.videoHeight || 720;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          if (useFrontCamera) {
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
          }
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const photoDataUrl = canvas.toDataURL("image/png");
          setCapturedImagePreview(photoDataUrl);
        }
      } else {
        // Fallback sample image if webcam missing
        setCapturedImagePreview(
          activeSite === "eye"
            ? "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=1000&q=80"
            : activeSite === "nail"
            ? "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80"
            : "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
        );
      }

      if (!capturedSites.includes(activeSite)) {
        setCapturedSites([...capturedSites, activeSite]);
      }
    }, 350);
  };

  const handleNextStep = () => {
    setCapturedImagePreview(null);
    if (activeSite === "eye") {
      setActiveSite("nail");
      setDistanceStatus("ok");
    } else if (activeSite === "nail") {
      setActiveSite("palm");
      setDistanceStatus("ok");
    } else {
      router.push(ROUTES.NAKES.HASIL);
    }
  };

  const getSiteTitle = () => {
    switch (activeSite) {
      case "eye":
        return "Pengambilan Citra Mata";
      case "nail":
        return "Pengambilan Citra Kuku/Jari";
      case "palm":
        return "Pengambilan Citra Telapak Tangan";
    }
  };

  const getSiteInstruction = () => {
    switch (activeSite) {
      case "eye":
        return "Posisikan mata di dalam area panduan. Pastikan kelopak mata bawah terbuka untuk menampakkan area konjungtiva secara jelas.";
      case "nail":
        return "Letakkan jari telunjuk pasien dengan kuku menghadap kamera. Pastikan kuku berada tepat di dalam kotak panduan putus-putus. Tahan posisi hingga sistem mengunci fokus.";
      case "palm":
        return "Posisikan seluruh permukaan telapak tangan di dalam bingkai panduan. Buka jari-jari dengan tenang & rileks.";
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF8FF] font-sans text-[#191B23] p-6 sm:p-8 space-y-6 pb-32">
      {/* Uniform Top Header Bar for All Sites (Mata, Kuku/Jari, Telapak) */}
      <div className="flex items-center justify-between border-b border-[#C3C6D7] pb-4">
        <h1 className="text-2xl sm:text-[28px] font-bold text-[#191B23] tracking-tight">
          {getSiteTitle()}
        </h1>

        <div className="flex items-center gap-4">
          <button className="p-2 text-[#434655] hover:text-[#004AC6] transition-colors cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-[#434655] hover:text-[#004AC6] transition-colors cursor-pointer">
            <Grid className="w-5 h-5" />
          </button>
          <img
            src="/doctor-avatar.png"
            alt="Doctor"
            className="w-9 h-9 rounded-full outline outline-1 outline-[#C3C6D7] object-cover"
          />
        </div>
      </div>

      {/* Stepper Card (6 Steps) */}
      <div className="w-full bg-white rounded-xl border border-[#C3C6D7] p-6 shadow-xs overflow-x-auto">
        <div className="min-w-[768px] flex items-center justify-between relative px-4">
          {/* Step 1: Data Pasien */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Data Pasien</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 2: Persiapan */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-full bg-[#004AC6] flex items-center justify-center text-white">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#191B23]">Persiapan</span>
          </div>

          <div className="flex-1 h-[2px] bg-[#004AC6] mx-2" />

          {/* Step 3: Mata */}
          <div
            className="flex flex-col items-center gap-2 z-10 cursor-pointer"
            onClick={() => {
              setActiveSite("eye");
              setCapturedImagePreview(null);
            }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                activeSite === "eye"
                  ? "bg-[#004AC6] text-white shadow-md ring-2 ring-[#004AC6] ring-offset-2"
                  : capturedSites.includes("eye")
                  ? "bg-[#004AC6] text-white"
                  : "bg-white outline outline-2 outline-[#C3C6D7] text-[#434655]"
              }`}
            >
              {capturedSites.includes("eye") && activeSite !== "eye" ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                "3"
              )}
            </div>
            <span className={`text-xs sm:text-sm ${activeSite === "eye" ? "font-bold text-[#004AC6]" : "font-medium text-[#191B23]"}`}>
              Mata
            </span>
          </div>

          <div className={`flex-1 h-[2px] mx-2 ${capturedSites.includes("eye") || activeSite === "nail" || activeSite === "palm" ? "bg-[#004AC6]" : "bg-[#C3C6D7]"}`} />

          {/* Step 4: Kuku/Jari */}
          <div
            className="flex flex-col items-center gap-2 z-10 cursor-pointer"
            onClick={() => {
              setActiveSite("nail");
              setCapturedImagePreview(null);
            }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                activeSite === "nail"
                  ? "bg-[#004AC6] text-white shadow-md ring-2 ring-[#004AC6] ring-offset-2"
                  : capturedSites.includes("nail")
                  ? "bg-[#004AC6] text-white"
                  : "bg-white outline outline-2 outline-[#C3C6D7] text-[#434655]"
              }`}
            >
              {capturedSites.includes("nail") && activeSite !== "nail" ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                "4"
              )}
            </div>
            <span className={`text-xs sm:text-sm ${activeSite === "nail" ? "font-bold text-[#004AC6]" : "font-medium text-[#434655]"}`}>
              Kuku/Jari
            </span>
          </div>

          <div className={`flex-1 h-[2px] mx-2 ${capturedSites.includes("nail") || activeSite === "palm" ? "bg-[#004AC6]" : "bg-[#C3C6D7] opacity-50"}`} />

          {/* Step 5: Telapak */}
          <div
            className="flex flex-col items-center gap-2 z-10 cursor-pointer"
            onClick={() => {
              setActiveSite("palm");
              setCapturedImagePreview(null);
            }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                activeSite === "palm"
                  ? "bg-[#004AC6] text-white shadow-md ring-2 ring-[#004AC6] ring-offset-2"
                  : capturedSites.includes("palm")
                  ? "bg-[#004AC6] text-white"
                  : "bg-white outline outline-2 outline-[#C3C6D7] text-[#434655]"
              }`}
            >
              {capturedSites.includes("palm") && activeSite !== "palm" ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : (
                "5"
              )}
            </div>
            <span className={`text-xs sm:text-sm ${activeSite === "palm" ? "font-bold text-[#004AC6]" : "font-medium text-[#434655]"}`}>
              Telapak
            </span>
          </div>

          <div className="flex-1 h-[2px] bg-[#C3C6D7] mx-2 opacity-50" />

          {/* Step 6: Analisis */}
          <div className="flex flex-col items-center gap-2 opacity-50 z-10">
            <div className="w-8 h-8 rounded-full bg-white outline outline-2 outline-[#C3C6D7] flex items-center justify-center text-[#434655] font-bold text-sm">
              6
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#434655]">Analisis</span>
          </div>
        </div>
      </div>

      {/* Content Layout: Uniform 2 Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Span 4) - Status Perangkat / Status Deteksi Kamera, Instruksi Klinis & Buttons */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status Card */}
          <div className="bg-white rounded-xl border border-[#C3C6D7] p-5 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-[#191B23] uppercase tracking-[0.35px]">
              {activeSite === "eye"
                ? "Status Perangkat"
                : activeSite === "palm"
                ? "STATUS DETEKSI KAMERA"
                : "Status Pemindaian"}
            </h2>

            {activeSite === "palm" ? (
              /* Palm Specific Camera Detection Status (Matching Figma Request & Image 2) */
              <div className="space-y-3">
                {/* Red Warning Box 1: Buka telapak tangan sepenuhnya */}
                <div className="p-4 bg-[#FFDAD6]/20 border border-[#FFDAD6] rounded-lg flex items-start gap-4">
                  <div className="pt-0.5 shrink-0">
                    <AlertTriangle className="w-5.5 h-5 text-[#BA1A1A]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-[#191B23] leading-5">
                      Buka telapak tangan sepenuhnya
                    </span>
                    <span className="text-sm font-normal text-[#434655] leading-5">
                      Pastikan kelima jari terlihat jelas.
                    </span>
                  </div>
                </div>

                {/* Red Warning Box 2: Sesuaikan jarak kamera */}
                <div className="p-4 bg-[#FFDAD6]/20 border border-[#FFDAD6] rounded-lg flex items-start gap-4">
                  <div className="pt-0.5 shrink-0">
                    <Maximize2 className="w-5 h-5 text-[#BA1A1A]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-[#191B23] leading-5">
                      Sesuaikan jarak kamera
                    </span>
                    <span className="text-sm font-normal text-[#434655] leading-5">
                      Dekatkan telapak tangan ke dalam garis panduan.
                    </span>
                  </div>
                </div>
              </div>
            ) : activeSite === "eye" ? (
              <div className="space-y-3">
                {/* Pencahayaan */}
                <div className="p-3 bg-teal-500/10 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#006A61]" />
                    <span className="text-sm font-medium text-[#191B23]">Pencahayaan</span>
                  </div>
                  <span className="px-3 py-1 bg-[#006A61] text-white text-xs font-bold rounded-full">
                    OK
                  </span>
                </div>

                {/* Fokus */}
                <div className="p-3 bg-teal-500/10 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ZoomIn className="w-5 h-5 text-[#006A61]" />
                    <span className="text-sm font-medium text-[#191B23]">Fokus</span>
                  </div>
                  <span className="px-3 py-1 bg-[#006A61] text-white text-xs font-bold rounded-full">
                    OK
                  </span>
                </div>

                {/* Jarak Fokus */}
                <div
                  onClick={() => setDistanceStatus(distanceStatus === "too_close" ? "ok" : "too_close")}
                  className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
                    distanceStatus === "too_close"
                      ? "bg-amber-900/10 border border-amber-900/20"
                      : "bg-teal-500/10 border border-teal-500/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={`w-5 h-5 ${distanceStatus === "too_close" ? "text-[#943700]" : "text-[#006A61]"}`} />
                    <span className="text-sm font-medium text-[#191B23]">Jarak Fokus</span>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full text-white transition-colors ${
                      distanceStatus === "too_close" ? "bg-[#943700]" : "bg-[#006A61]"
                    }`}
                  >
                    {distanceStatus === "too_close" ? "TERLALU DEKAT" : "OPTIMAL"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Posisi kuku sesuai */}
                <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7] flex items-start gap-3">
                  <div className="pt-0.5">
                    <div className="w-5 h-5 rounded-full bg-[#006A61] flex items-center justify-center text-white">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#191B23]">Posisi kuku sesuai</span>
                    <span className="text-sm text-[#434655]">Kuku berada di dalam area panduan.</span>
                  </div>
                </div>

                {/* Pencahayaan cukup */}
                <div className="p-3 bg-[#F3F3FE] rounded-lg border border-[#C3C6D7] flex items-start gap-3">
                  <div className="pt-0.5">
                    <div className="w-5 h-5 rounded-full bg-[#006A61] flex items-center justify-center text-white">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#191B23]">Pencahayaan cukup</span>
                    <span className="text-sm text-[#434655]">
                      Intensitas cahaya optimal untuk analisis klinis.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Instruksi Klinis Card (Blue Container) */}
          <div className="bg-[#2563EB] text-white rounded-xl p-5 border-l-4 border-[#004AC6] shadow-md space-y-2">
            <div className="flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-100 shrink-0" />
              <h3 className="text-xl font-bold text-white">Instruksi Klinis</h3>
            </div>
            <p className="text-sm text-blue-50 leading-relaxed pl-8">
              {getSiteInstruction()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {capturedImagePreview ? (
              <button
                onClick={handleNextStep}
                className="w-full py-4 bg-[#004AC6] hover:bg-[#003EA8] text-white font-bold text-base rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>
                  {activeSite === "eye"
                    ? "Lanjut ke Pemeriksaan Kuku ➔"
                    : activeSite === "nail"
                    ? "Lanjut ke Pemeriksaan Telapak Tangan ➔"
                    : "Lanjutkan ke Analisis AI ➔"}
                </span>
              </button>
            ) : (
              <button
                onClick={handleTakePhoto}
                disabled={isCapturing}
                className="w-full py-4 bg-[#004AC6] hover:bg-[#003EA8] active:scale-[0.98] text-white font-bold text-base rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                <Camera className="w-5 h-5 text-white" />
                <span>
                  {isCapturing
                    ? "Mengambil Gambar..."
                    : activeSite === "eye"
                    ? "Ambil Gambar"
                    : activeSite === "nail"
                    ? "Ambil Citra Kuku/Jari"
                    : "Ambil Citra Telapak Tangan"}
                </span>
              </button>
            )}

            <Link
              href="/nakes/skrining/multisite"
              className="block w-full text-center py-3.5 bg-white border border-[#004AC6] text-[#004AC6] font-bold text-sm rounded-xl hover:bg-blue-50 transition-all cursor-pointer"
            >
              {activeSite === "eye" ? "← Kembali" : "Tidak dapat mengambil citra ini"}
            </Link>
          </div>
        </div>

        {/* Right Column (Span 8) - Larger Live Viewfinder Camera Screen for Palm */}
        <div className="lg:col-span-8 space-y-4">
          <div
            className={`relative w-full bg-slate-950 rounded-2xl border-4 border-[#E1E2ED] overflow-hidden shadow-2xl transition-all duration-300 ${
              activeSite === "palm" ? "h-[540px] sm:h-[580px]" : "aspect-4/3"
            }`}
          >
            {/* Flash effect overlay */}
            {showShutterFlash && (
              <div className="absolute inset-0 bg-white z-50 animate-fade-out" />
            )}

            {/* Torch Flashlight Overlay */}
            {flashEnabled && (
              <div className="absolute inset-0 bg-amber-100/20 backdrop-brightness-125 z-10 pointer-events-none" />
            )}

            {/* Real HTML5 Live Video Stream */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={`w-full h-full object-cover ${
                useFrontCamera ? "transform -scale-x-100" : ""
              } ${capturedImagePreview ? "hidden" : "block"}`}
            />

            {/* Captured Photo Snapshot Result */}
            {capturedImagePreview ? (
              <img
                src={capturedImagePreview}
                alt="Captured Snapshot"
                className="w-full h-full object-cover"
              />
            ) : !hasWebcam ? (
              /* Fallback Viewfinder Image if Webcam disabled */
              <img
                src={
                  activeSite === "eye"
                    ? "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&w=1000&q=80"
                    : activeSite === "nail"
                    ? "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80"
                    : "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                }
                alt="Live Viewfinder"
                className="w-full h-full object-cover opacity-85"
              />
            ) : null}

            {/* Permission Prompt Overlay if camera stream not active */}
            {!hasWebcam && !capturedImagePreview && (
              <div className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center text-white p-6 space-y-4 text-center z-20">
                <Video className="w-12 h-12 text-[#004AC6] animate-bounce" />
                <h3 className="text-lg font-bold">Kamera Browser Diperlukan</h3>
                <button
                  onClick={startCameraStream}
                  className="px-6 py-3 bg-[#004AC6] hover:bg-[#003EA8] text-white font-bold text-sm rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Aktifkan Kamera Live</span>
                </button>
              </div>
            )}

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_83%_at_50%_50%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.5)_80%)] pointer-events-none" />

            {/* Target Reticle Guide Overlay */}
            {!capturedImagePreview && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                {activeSite === "palm" ? (
                  /* Palm Dashed Reticle Box with Hand Icon & Pill Badge (Matching Image 1) */
                  <div className="w-[280px] sm:w-[320px] h-[400px] sm:h-[440px] rounded-[28px] border-2 border-dashed border-sky-400 bg-sky-500/5 shadow-[0_0_30px_rgba(56,189,248,0.3)] relative flex flex-col items-center justify-center animate-pulse">
                    {/* Top Pill Badge inside Reticle */}
                    <div className="absolute top-4 px-4 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-full text-white text-xs font-medium shadow-md">
                      Sejajarkan telapak tangan
                    </div>

                    {/* Center Palm Icon Outline */}
                    <Hand className="w-28 h-28 text-white/40 stroke-[1.2]" />
                  </div>
                ) : activeSite === "nail" ? (
                  /* Vertical Rounded Box Reticle for Nail */
                  <div className="w-[140px] h-[240px] rounded-[32px] outline outline-3 outline-[#006A61] shadow-[0_0_25px_rgba(0,106,97,0.6)] relative flex items-center justify-center animate-pulse bg-[#006A61]/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#006A61]/60" />
                  </div>
                ) : (
                  /* Eye Oval Target Reticle Guide */
                  <div className="w-[340px] sm:w-[380px] h-[180px] rounded-[137px] outline outline-3 outline-[#006A61] shadow-[0_0_25px_rgba(0,106,97,0.6)] relative flex items-center justify-center animate-pulse">
                    <div className="w-4 h-[2px] bg-[#006A61] absolute left-1 top-1/2 -translate-y-1/2" />
                    <div className="w-4 h-[2px] bg-[#006A61] absolute right-1 top-1/2 -translate-y-1/2" />
                    <div className="w-[2px] h-4 bg-[#006A61] absolute top-1 left-1/2 -translate-x-1/2" />
                    <div className="w-[2px] h-4 bg-[#006A61] absolute bottom-1 left-1/2 -translate-x-1/2" />
                  </div>
                )}
              </div>
            )}

            {/* 4 Corner L-Brackets */}
            <div className="w-10 h-10 absolute top-7 left-7 border-t-4 border-l-4 border-[#004AC6] opacity-70 rounded-tl-xl pointer-events-none" />
            <div className="w-10 h-10 absolute top-7 right-7 border-t-4 border-r-4 border-[#004AC6] opacity-70 rounded-tr-xl pointer-events-none" />
            <div className="w-10 h-10 absolute bottom-7 left-7 border-b-4 border-l-4 border-[#004AC6] opacity-70 rounded-bl-xl pointer-events-none" />
            <div className="w-10 h-10 absolute bottom-7 right-7 border-b-4 border-r-4 border-[#004AC6] opacity-70 rounded-br-xl pointer-events-none" />

            {/* Top Live Feed Badge & Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
              <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/20 flex items-center gap-2 text-white">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono tracking-wider">LIVE FEED: HD 1080P</span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  onClick={() => setUseFrontCamera(!useFrontCamera)}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all cursor-pointer"
                >
                  <SwitchCamera className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setFlashEnabled(!flashEnabled)}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all cursor-pointer"
                >
                  <Zap className={`w-5 h-5 ${flashEnabled ? "text-amber-400 fill-amber-400" : "text-white"}`} />
                </button>
              </div>
            </div>

            {/* Warning Overlay Banner (Floating at Bottom of Camera for Eye) */}
            {!capturedImagePreview && activeSite === "eye" && distanceStatus === "too_close" && (
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-sm w-[90%] bg-[#943700] border-2 border-[#FFB596] text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 z-20 animate-bounce">
                <AlertTriangle className="w-6 h-6 text-amber-200 shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wide leading-tight">
                  JARAK TERLALU DEKAT - MUNDURKAN PERANGKAT
                </span>
              </div>
            )}

            {/* Captured Success Overlay Badge */}
            {capturedImagePreview && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center text-white space-y-3 z-30">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl animate-bounce">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold">
                  Citra {activeSite === "eye" ? "MATA" : activeSite === "nail" ? "KUKU/JARI" : "TELAPAK TANGAN"} Berhasil Diambil!
                </h3>
                <button
                  onClick={() => setCapturedImagePreview(null)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/30 flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Foto Ulang</span>
                </button>
              </div>
            )}
          </div>

          {/* Patient Info Footer Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-3 py-2 text-sm">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#434655] block">
                  PASIEN
                </span>
                <span className="text-base font-semibold text-[#191B23]">Ny. Sarah Wijaya</span>
              </div>
              <div className="border-l border-slate-300 pl-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#434655] block">
                  ID
                </span>
                <span className="text-base font-mono text-[#191B23]">HV-2024-0891</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#434655] text-xs font-medium">
              <Clock className="w-4 h-4 text-[#434655]" />
              <span>Waktu Sesi: {formatTimer(sessionTimer)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
