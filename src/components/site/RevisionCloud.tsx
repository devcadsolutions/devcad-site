"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A redline revision cloud drawn around its child, the way a reviewer
 * marks the one thing on a sheet that needs attention.
 */
function cloudPath(w: number, h: number, r = 9) {
  const pts: string[] = [];
  const nx = Math.max(2, Math.round(w / (r * 2)));
  const ny = Math.max(2, Math.round(h / (r * 2)));
  const sx = w / nx;
  const sy = h / ny;
  let d = `M 0 0`;
  for (let i = 1; i <= nx; i++) d += ` A ${sx / 2} ${r} 0 0 1 ${i * sx} 0`;
  for (let i = 1; i <= ny; i++) d += ` A ${r} ${sy / 2} 0 0 1 ${w} ${i * sy}`;
  for (let i = nx - 1; i >= 0; i--) d += ` A ${sx / 2} ${r} 0 0 1 ${i * sx} ${h}`;
  for (let i = ny - 1; i >= 0; i--) d += ` A ${r} ${sy / 2} 0 0 1 0 ${i * sy}`;
  pts.push(d);
  return pts.join("");
}

export default function RevisionCloud({
  children,
  note,
}: {
  children: React.ReactNode;
  note?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [len, setLen] = useState(2000);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setSize({ w: el.offsetWidth + 32, h: el.offsetHeight + 28 });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (pathRef.current) setLen(Math.ceil(pathRef.current.getTotalLength()));
  }, [size]);

  return (
    <span className="cloud-target" ref={ref}>
      {children}
      {size && (
        <svg
          className="cloud"
          viewBox={`-4 -4 ${size.w + 8} ${size.h + 8}`}
          style={{ width: size.w + 8, height: size.h + 8, left: -20, top: -18 }}
          aria-hidden="true"
        >
          <path ref={pathRef} d={cloudPath(size.w, size.h)} style={{ ["--len" as string]: len }} />
        </svg>
      )}
      {note && (
        <span className="cloud-note hand" aria-hidden="true">
          {note}
          <svg width="34" height="34" viewBox="0 0 34 34">
            <path d="M30 30 C 22 26, 10 18, 6 5 M6 5 l -2 9 M6 5 l 7 6" />
          </svg>
        </span>
      )}
    </span>
  );
}
