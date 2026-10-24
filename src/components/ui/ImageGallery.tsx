"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  /** Grid classes for the thumbnails. */
  className?: string;
  /** Classes for each thumbnail frame (aspect ratio etc.). */
  itemClassName?: string;
  /** `contain` for UI screenshots that must not be cropped. */
  fit?: "cover" | "contain";
  sizes?: string;
  /** Load the first thumbnail eagerly (above-the-fold hero image). */
  priorityFirst?: boolean;
};

/**
 * Thumbnail grid with an accessible lightbox (focus trap, Esc to close,
 * arrow keys / buttons to move between images).
 */
export default function ImageGallery({
  images,
  className,
  itemClassName,
  fit = "contain",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priorityFirst = false,
}: ImageGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const count = images.length;

  const step = useCallback(
    (delta: number) => setIndex((current) => (current === null ? current : (current + delta + count) % count)),
    [count]
  );

  if (count === 0) return null;
  const current = index !== null ? images[index] : null;

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && setIndex(null)}>
      <ul className={className}>
        {images.map((image, i) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-xl border border-border/70 bg-[#f1ede8] text-left",
                itemClassName
              )}
            >
              <span className="sr-only">Enlarge image: </span>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                sizes={sizes}
                priority={priorityFirst && i === 0}
                className={cn(
                  "h-full w-full transition duration-300 group-hover:scale-[1.015]",
                  fit === "cover" ? "object-cover" : "object-contain"
                )}
              />
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#0c0b0a]/85 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 motion-reduce:animate-none" />
        <Dialog.Content
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 outline-none sm:p-10"
          onKeyDown={(event) => {
            if (count < 2) return;
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIndex(null);
          }}
        >
          <Dialog.Title className="sr-only">{current?.alt ?? "Image preview"}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {count > 1 ? `Image ${(index ?? 0) + 1} of ${count}. Use the arrow keys to move between images.` : "Full-size image."}
          </Dialog.Description>
          {current && (
            <figure className="flex max-h-full w-full max-w-6xl flex-col items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- full-size preview of an already-exported static asset */}
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[78vh] w-auto max-w-full rounded-lg bg-white object-contain shadow-[0_34px_100px_rgba(0,0,0,0.55)]"
              />
              <figcaption className="max-w-3xl text-center text-sm text-white/85">
                {current.alt}
                {count > 1 && <span className="ml-2 text-white/60">({(index ?? 0) + 1} / {count})</span>}
              </figcaption>
            </figure>
          )}
          <Dialog.Close className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-white sm:right-6 sm:top-6">
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-white sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Previous image</span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-white sm:right-6"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Next image</span>
              </button>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
