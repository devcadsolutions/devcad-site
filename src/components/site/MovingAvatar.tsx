"use client";

import { useEffect, useRef } from "react";
import AvatarTrueVector from "@/components/site/AvatarVector";

/**
 * Justine's line-art avatar. The head, brows and pupils follow the pointer
 * anywhere inside the surrounding <section>, and idle gently otherwise.
 * Same motion as the original site's hero, restyled for the new design.
 */
export default function MovingAvatar() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const section = frame?.closest("section");
    if (!frame || !section) return;

    const svg = frame.querySelector("svg");
    const head = frame.querySelector<SVGGElement>("#head");
    const leftBrow = frame.querySelector<SVGGElement>("#eyebrow-left");
    const rightBrow = frame.querySelector<SVGGElement>("#eyebrow-right");
    const leftPupil = frame.querySelector<SVGGElement>("#pupil-left");
    const rightPupil = frame.querySelector<SVGGElement>("#pupil-right");
    if (!svg || !head || !leftBrow || !rightBrow || !leftPupil || !rightPupil) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let active = false;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    const rel = { x: 0.5, y: 0.45 };
    const client = { x: 0, y: 0 };
    const cur = { hx: 0, hy: 0, hr: 0, fy: 0, lx: 0, ly: 0, rx: 0, ry: 0, lb: 0, rb: 0 };
    let t = 0;

    const onMove = (e: PointerEvent) => {
      if (coarse.matches) return;
      const r = section.getBoundingClientRect();
      rel.x = (e.clientX - r.left) / r.width;
      rel.y = (e.clientY - r.top) / r.height;
      client.x = e.clientX;
      client.y = e.clientY;
      active = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => (active = false), 1400);
    };
    const onLeave = () => {
      active = false;
      clearTimeout(idleTimer);
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    const eyeTarget = (cx: number, cy: number, off = 0) => {
      if (!active) return { x: Math.cos(t * 0.8 + off) * 2.2, y: Math.sin(t * 1.05 + off) * 1.4 };
      const b = svg.getBoundingClientRect();
      const sx = b.width / 1024;
      const sy = b.height / 1024;
      return {
        x: clamp(((client.x - (b.left + cx * sx)) / sx) * 0.1, -14, 14),
        y: clamp(((client.y - (b.top + cy * sy)) / sy) * 0.1, -11, 11),
      };
    };

    let raf = 0;
    const tick = () => {
      if (reduced.matches) {
        frame.style.transform = "";
        head.style.transform = "";
        leftBrow.setAttribute("transform", "translate(0 0)");
        rightBrow.setAttribute("transform", "translate(0 0)");
        leftPupil.setAttribute("transform", "rotate(-1 430 414)");
        rightPupil.setAttribute("transform", "rotate(-1 589 404)");
        raf = requestAnimationFrame(tick);
        return;
      }
      t += 0.018;
      const on = active && !coarse.matches;
      const thx = on ? (rel.x - 0.5) * 5.5 : Math.cos(t * 0.55) * 0.8;
      const thy = on ? (rel.y - 0.45) * 3.4 : Math.sin(t * 0.85) * -0.6;
      const thr = on ? (rel.x - 0.5) * 3.2 : Math.sin(t * 0.7) * 0.5;
      const l = eyeTarget(430, 414);
      const r = eyeTarget(589, 404, 0.35);
      const bias = on ? rel.x - 0.5 : 0;
      const tlb = on ? (bias < -0.04 ? -7 : -1) : Math.sin(t * 0.75) * -1.2;
      const trb = on ? (bias > 0.04 ? -7 : -1) : Math.sin(t * 0.75 + 0.45) * -1.2;

      cur.hx = lerp(cur.hx, thx, 0.09);
      cur.hy = lerp(cur.hy, thy, 0.09);
      cur.hr = lerp(cur.hr, thr, 0.09);
      cur.fy = lerp(cur.fy, Math.sin(t) * 1.6, 0.06);
      cur.lx = lerp(cur.lx, l.x, 0.18);
      cur.ly = lerp(cur.ly, l.y, 0.18);
      cur.rx = lerp(cur.rx, r.x, 0.18);
      cur.ry = lerp(cur.ry, r.y, 0.18);
      cur.lb = lerp(cur.lb, tlb, 0.12);
      cur.rb = lerp(cur.rb, trb, 0.12);

      frame.style.transform = `translate3d(0, ${cur.fy.toFixed(2)}px, 0)`;
      head.style.transform = `translate(${cur.hx.toFixed(2)}px, ${cur.hy.toFixed(2)}px) rotate(${cur.hr.toFixed(2)}deg)`;
      leftBrow.setAttribute("transform", `translate(0 ${cur.lb.toFixed(2)})`);
      rightBrow.setAttribute("transform", `translate(0 ${cur.rb.toFixed(2)})`);
      leftPupil.setAttribute("transform", `translate(${cur.lx.toFixed(2)} ${cur.ly.toFixed(2)}) rotate(-1 430 414)`);
      rightPupil.setAttribute("transform", `translate(${cur.rx.toFixed(2)} ${cur.ry.toFixed(2)}) rotate(-1 589 404)`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      clearTimeout(idleTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="avatar-frame" ref={frameRef}>
      <span className="avatar-shirt" aria-hidden="true" />
      <AvatarTrueVector className="avatar-svg" />
    </div>
  );
}
