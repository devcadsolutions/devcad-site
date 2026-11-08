"use client";

import { useEffect, useRef, useState } from "react";
import type { WorkImage } from "@/lib/work";

export default function Gallery({ images, label }: { images: WorkImage[]; label: string }) {
  const [i, setI] = useState(0);
  const dlg = useRef<HTMLDialogElement>(null);
  const img = images[i];

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowRight") setI((v) => (v + 1) % images.length);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  return (
    <div className="gallery">
      <div className="model">
        <div className="model-bar">
          <span>{label}</span>
          <span>{i + 1} of {images.length}</span>
        </div>
        <button type="button" className="gallery-main" onClick={() => dlg.current?.showModal()} aria-label="View larger">
          <img src={img.src} alt={img.alt} />
        </button>
      </div>
      {images.length > 1 && (
        <div className="thumbs" role="group" aria-label="Screenshots">
          {images.map((m, n) => (
            <button key={m.src} type="button" aria-pressed={n === i} onClick={() => setI(n)} aria-label={`Show screenshot ${n + 1}`}>
              <img src={m.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <dialog ref={dlg} className="zoom" onClick={(e) => e.target === dlg.current && dlg.current?.close()}>
        <img src={img.src} alt={img.alt} />
        <div className="zoom-bar">
          {images.length > 1 && (
            <>
              <button type="button" className="btn btn-line" onClick={() => setI((v) => (v - 1 + images.length) % images.length)}>Previous</button>
              <button type="button" className="btn btn-line" onClick={() => setI((v) => (v + 1) % images.length)}>Next</button>
            </>
          )}
          <button type="button" className="btn btn-ink" onClick={() => dlg.current?.close()} autoFocus>Close</button>
        </div>
      </dialog>
    </div>
  );
}
