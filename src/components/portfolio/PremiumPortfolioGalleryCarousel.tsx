"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { PointerEvent } from "react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type PremiumPortfolioGalleryCarouselProps = {
  images: ImagePlaceholder[];
};

const closeAnimationMs = 260;
const baseSpeedPxPerSecond = 7;
const edgeSpeedPxPerSecond = 18;
const arrowSpeedPxPerSecond = 42;

export default function PremiumPortfolioGalleryCarousel({ images }: PremiumPortfolioGalleryCarouselProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoveredIdRef = useRef<string | null>(null);
  const selectedImageRef = useRef<ImagePlaceholder | null>(null);
  const edgeDirectionRef = useRef(0);
  const arrowDirectionRef = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    hoveredIdRef.current = hoveredId;
  }, [hoveredId]);

  useEffect(() => {
    selectedImageRef.current = selectedImage;
  }, [selectedImage]);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;
    if (!track || !firstGroup || images.length === 0) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = reducedMotionQuery.matches;
    let lastTime = performance.now();
    let raf = 0;

    const syncReducedMotion = () => {
      reducedMotion = reducedMotionQuery.matches;
      if (reducedMotion) {
        offsetRef.current = 0;
        track.style.transform = "translate3d(0, 0, 0)";
      }
    };

    reducedMotionQuery.addEventListener("change", syncReducedMotion);

    const tick = (now: number) => {
      const deltaSeconds = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const cycleWidth = firstGroup.offsetWidth;
      if (cycleWidth > 0 && !reducedMotion && !selectedImageRef.current) {
        const arrowDirection = arrowDirectionRef.current;
        const edgeDirection = edgeDirectionRef.current;
        const isInspecting = Boolean(hoveredIdRef.current);
        const speed =
          arrowDirection < 0
            ? arrowSpeedPxPerSecond
            : arrowDirection > 0
            ? -arrowSpeedPxPerSecond
            : edgeDirection < 0
            ? edgeSpeedPxPerSecond
            : edgeDirection > 0
            ? -edgeSpeedPxPerSecond
            : isInspecting
            ? 0
            : -baseSpeedPxPerSecond;

        offsetRef.current += speed * deltaSeconds;

        if (offsetRef.current <= -cycleWidth) {
          offsetRef.current += cycleWidth;
        } else if (offsetRef.current > 0) {
          offsetRef.current -= cycleWidth;
        }

        track.style.transform = `translate3d(${offsetRef.current.toFixed(2)}px, 0, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncReducedMotion);
      cancelAnimationFrame(raf);
    };
  }, [images.length]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;

    if (x < 0.24) {
      edgeDirectionRef.current = -1;
    } else if (x > 0.76) {
      edgeDirectionRef.current = 1;
    } else {
      edgeDirectionRef.current = 0;
    }
  };

  const handlePointerLeave = () => {
    edgeDirectionRef.current = 0;
    arrowDirectionRef.current = 0;
    setHoveredId(null);
  };

  const setArrowDirection = (direction: number) => {
    arrowDirectionRef.current = direction;
    edgeDirectionRef.current = 0;
  };

  const clearArrowDirection = () => {
    arrowDirectionRef.current = 0;
  };

  const openLightbox = (image: ImagePlaceholder) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setSelectedImage(image);
    requestAnimationFrame(() => requestAnimationFrame(() => setLightboxVisible(true)));
  };

  const closeLightbox = useCallback(() => {
    setLightboxVisible(false);
    closeTimerRef.current = setTimeout(() => {
      setSelectedImage(null);
      closeTimerRef.current = null;
    }, closeAnimationMs);
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };
    const closeOnScrollIntent = () => closeLightbox();

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", closeOnScrollIntent, { passive: true });
    window.addEventListener("wheel", closeOnScrollIntent, { passive: true });
    window.addEventListener("touchmove", closeOnScrollIntent, { passive: true });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", closeOnScrollIntent);
      window.removeEventListener("wheel", closeOnScrollIntent);
      window.removeEventListener("touchmove", closeOnScrollIntent);
    };
  }, [selectedImage, closeLightbox]);

  if (images.length === 0) {
    return null;
  }

  const lightbox = selectedImage ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview ${selectedImage.description}`}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-4 py-6 sm:px-8"
      onClick={closeLightbox}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0c0b0a]/80 backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: lightboxVisible ? 1 : 0 }}
      />
      <button
        type="button"
        aria-label="Close preview"
        onClick={closeLightbox}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_18px_42px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative z-10 w-full max-w-6xl transition-all duration-300 ease-out"
        style={{
          opacity: lightboxVisible ? 1 : 0,
          transform: lightboxVisible ? "scale(1) translateY(0)" : "scale(0.96) translateY(14px)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={selectedImage.imageUrl}
          alt={selectedImage.description}
          className="mx-auto block max-h-[84vh] w-auto max-w-full rounded-xl border border-white/15 bg-white object-contain shadow-[0_34px_100px_rgba(0,0,0,0.58)]"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="relative overflow-hidden py-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-background to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-background to-transparent sm:w-24"
        />

        <div
          className="premium-portfolio-carousel-viewport"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <button
            type="button"
            aria-label="Scroll gallery left faster"
            className="absolute left-2 top-1/2 z-30 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-primary/20 bg-white/45 text-primary/70 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.55)] backdrop-blur-md transition duration-200 hover:bg-white/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:left-4 sm:h-12 sm:w-8"
            onPointerEnter={() => setArrowDirection(-1)}
            onPointerDown={() => setArrowDirection(-1)}
            onPointerLeave={clearArrowDirection}
            onPointerUp={clearArrowDirection}
            onBlur={clearArrowDirection}
            onFocus={() => setArrowDirection(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll gallery right faster"
            className="absolute right-2 top-1/2 z-30 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-primary/20 bg-white/45 text-primary/70 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.55)] backdrop-blur-md transition duration-200 hover:bg-white/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:right-4 sm:h-12 sm:w-8"
            onPointerEnter={() => setArrowDirection(1)}
            onPointerDown={() => setArrowDirection(1)}
            onPointerLeave={clearArrowDirection}
            onPointerUp={clearArrowDirection}
            onBlur={clearArrowDirection}
            onFocus={() => setArrowDirection(1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="premium-portfolio-carousel-track flex w-max will-change-transform"
          >
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                ref={groupIndex === 0 ? firstGroupRef : undefined}
                aria-hidden={groupIndex === 1}
                className="flex shrink-0 gap-5 px-2 sm:gap-6 sm:px-3"
              >
                {images.map((image) => {
                  const isHovered = hoveredId === image.id;
                  const isSoftened = Boolean(hoveredId && !isHovered);

                  return (
                    <button
                      key={`${image.id}-${groupIndex}`}
                      type="button"
                      aria-label={`Open preview: ${image.description}`}
                      tabIndex={groupIndex === 0 ? 0 : -1}
                      className="premium-portfolio-carousel-card group relative z-0 w-[19rem] shrink-0 cursor-zoom-in rounded-xl border border-white/70 bg-white/90 p-2 text-left shadow-[0_18px_44px_-34px_rgba(15,23,42,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:w-[26rem] lg:w-[34rem]"
                      style={{
                        opacity: isSoftened ? 0.5 : 1,
                        filter: isSoftened ? "saturate(0.78) contrast(0.92)" : "saturate(1) contrast(1)",
                        transform: isHovered
                          ? "translate3d(0, -10px, 0) scale3d(1.035, 1.035, 1)"
                          : "translate3d(0, 0, 0) scale3d(1, 1, 1)",
                        zIndex: isHovered ? 30 : 1,
                        boxShadow: isHovered
                          ? "0 36px 92px -36px rgba(15,23,42,0.66), 0 0 0 1px rgba(255,255,255,0.92)"
                          : undefined,
                      }}
                      onMouseEnter={() => setHoveredId(image.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(image.id)}
                      onBlur={() => setHoveredId(null)}
                      onClick={() => openLightbox(image)}
                    >
                      <span className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/35 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <ZoomIn className="h-3 w-3" />
                        Preview
                      </span>
                      <span className="block overflow-hidden rounded-lg bg-slate-100">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={1400}
                          height={900}
                          sizes="(max-width: 640px) 19rem, (max-width: 1024px) 26rem, 34rem"
                          className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01] group-focus-visible:scale-[1.01]"
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {mounted && createPortal(lightbox, document.body)}
    </>
  );
}
