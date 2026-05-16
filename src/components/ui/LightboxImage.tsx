"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image, { type ImageProps } from "next/image";
import { X } from "lucide-react";

type LightboxImageProps = ImageProps & {
  lightboxSrc?: string;
};

export default function LightboxImage({ lightboxSrc, className, alt, ...props }: LightboxImageProps) {
  const [open, setOpen]       = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closingRef            = useRef(false);

  const src = lightboxSrc ?? (typeof props.src === "string" ? props.src : "");

  // Ensure portal target exists (client only)
  useEffect(() => { setMounted(true); }, []);

  const openLightbox = () => {
    if (closingRef.current) return;
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setVisible(false);
    setTimeout(() => {
      setOpen(false);
      document.body.style.overflow = "";
      closingRef.current = false;
    }, 300);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey    = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    const onScroll = () => close();
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open, close]);

  const overlay = open && mounted ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${String(alt)}`}
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: visible ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0)",
        transition: "background 0.3s ease",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.92)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Close — top-right corner of the image */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.18)",
            zIndex: 1,
            transition: "background 0.15s ease",
          }}
        >
          <X style={{ width: 14, height: 14 }} />
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={String(alt)}
          style={{
            display: "block",
            maxWidth: "min(90vw, 1200px)",
            maxHeight: "88vh",
            width: "auto",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Thumbnail — only the <img> dims on hover, nothing else */}
      <button
        type="button"
        onClick={openLightbox}
        className="group relative block w-full cursor-zoom-in"
        aria-label={`View full size: ${String(alt)}`}
        style={{ background: "none", border: "none", padding: 0 }}
      >
        <Image
          alt={alt}
          className={[className, "transition-[filter] duration-200 group-hover:brightness-[0.65]"].filter(Boolean).join(" ")}
          {...props}
        />
      </button>

      {/* Portal — renders at document.body, escapes all containing blocks */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
