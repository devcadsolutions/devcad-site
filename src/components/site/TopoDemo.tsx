"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------
   A simplified, in-browser illustration of Import Topo from CAD:
   contour lines from a "linked survey DWG" are lifted to their
   elevations and meshed into a toposolid. Synthetic terrain only.
------------------------------------------------------------------- */

const N = 44; // surface grid
const M = 90; // contour sampling grid
const Z_MIN = 4;
const Z_MAX = 18;
const STEP = 1; // contour interval in metres

function terrain(x: number, y: number) {
  const g = (cx: number, cy: number, s: number, h: number) => h * Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * s * s));
  return 0.18 * (x + 1) + 0.08 * (1 - y) + g(-0.35, 0.25, 0.32, 0.9) + g(0.45, -0.3, 0.26, 0.62) + g(0.55, 0.55, 0.2, 0.3) - g(0.05, -0.55, 0.3, 0.22);
}

type Seg = { a: [number, number]; b: [number, number]; z: number; major: boolean };

function buildModel() {
  // sample raw heights and normalise to survey elevations
  const raw: number[] = [];
  let lo = Infinity;
  let hi = -Infinity;
  for (let j = 0; j <= M; j++)
    for (let i = 0; i <= M; i++) {
      const v = terrain((i / M) * 2 - 1, (j / M) * 2 - 1);
      raw.push(v);
      lo = Math.min(lo, v);
      hi = Math.max(hi, v);
    }
  const elev = (v: number) => Z_MIN + ((v - lo) / (hi - lo)) * (Z_MAX - Z_MIN);
  const H = raw.map(elev);
  const at = (i: number, j: number) => H[j * (M + 1) + i];

  // marching squares
  const segs: Seg[] = [];
  for (let z = Math.ceil(Z_MIN + 0.01); z < Z_MAX; z += STEP) {
    for (let j = 0; j < M; j++)
      for (let i = 0; i < M; i++) {
        const c = [at(i, j), at(i + 1, j), at(i + 1, j + 1), at(i, j + 1)];
        const p: [number, number][] = [
          [i, j],
          [i + 1, j],
          [i + 1, j + 1],
          [i, j + 1],
        ];
        const hits: [number, number][] = [];
        for (let e = 0; e < 4; e++) {
          const v0 = c[e];
          const v1 = c[(e + 1) % 4];
          if ((v0 < z) !== (v1 < z)) {
            const t = (z - v0) / (v1 - v0);
            const [x0, y0] = p[e];
            const [x1, y1] = p[(e + 1) % 4];
            hits.push([((x0 + (x1 - x0) * t) / M) * 2 - 1, ((y0 + (y1 - y0) * t) / M) * 2 - 1]);
          }
        }
        if (hits.length >= 2) segs.push({ a: hits[0], b: hits[1], z, major: z % 5 === 0 });
        if (hits.length === 4) segs.push({ a: hits[2], b: hits[3], z, major: z % 5 === 0 });
      }
  }

  // surface grid sampled from the same terrain
  const S: number[] = [];
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) S.push(elev(terrain((i / N) * 2 - 1, (j / N) * 2 - 1)));

  const levels = new Set(segs.map((s) => s.z)).size;
  return { segs, S, levels, points: (N + 1) * (N + 1), lo: Math.min(...S), hi: Math.max(...S) };
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export default function TopoDemo() {
  const model = useMemo(buildModel, []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const anim = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const css = getComputedStyle(wrap);
    const col = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback;

    const draw = () => {
      const w = wrap.clientWidth;
      const h = Math.round(w * 0.62);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.round(w * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        canvas.style.height = `${h}px`;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const k = ease(t);
      const tilt = (k * 56 * Math.PI) / 180;
      const yaw = (-k * 32 * Math.PI) / 180;
      const zs = k * 0.62;
      const scale = Math.min(w * 0.36, h * (0.44 + k * 0.08));
      const cx = w / 2;
      const cy = h / 2 + k * h * 0.06;
      const cyaw = Math.cos(yaw);
      const syaw = Math.sin(yaw);
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      const zn = (z: number) => ((z - Z_MIN) / (Z_MAX - Z_MIN)) * zs;
      const proj = (x: number, y: number, z: number): [number, number, number] => {
        const yy = -y; // world y points north (up on plan)
        const x1 = x * cyaw - yy * syaw;
        const y1 = x * syaw + yy * cyaw;
        const up = y1 * ct + z * st;
        return [cx + x1 * scale, cy - up * scale, y1]; // third value: distance away from viewer
      };

      // site boundary
      ctx.lineWidth = 1;
      ctx.strokeStyle = col("--demo-frame", "#3a434d");
      ctx.beginPath();
      [[-1, -1], [1, -1], [1, 1], [-1, 1], [-1, -1]].forEach(([x, y], i) => {
        const [px, py] = proj(x, y, 0);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();

      // shaded toposolid surface, painter's order far to near
      const fillAlpha = Math.max(0, Math.min(1, (k - 0.12) / 0.5));
      if (fillAlpha > 0) {
        const quads: { d: number; pts: [number, number][]; shade: number; z: number }[] = [];
        const at = (i: number, j: number) => model.S[j * (N + 1) + i];
        for (let j = 0; j < N; j++)
          for (let i = 0; i < N; i++) {
            const x0 = (i / N) * 2 - 1;
            const x1 = ((i + 1) / N) * 2 - 1;
            const y0 = (j / N) * 2 - 1;
            const y1 = ((j + 1) / N) * 2 - 1;
            const z00 = at(i, j);
            const z10 = at(i + 1, j);
            const z01 = at(i, j + 1);
            const z11 = at(i + 1, j + 1);
            const corners = [proj(x0, y0, zn(z00)), proj(x1, y0, zn(z10)), proj(x1, y1, zn(z11)), proj(x0, y1, zn(z01))];
            const dzdx = (z10 + z11 - z00 - z01) / 2;
            const dzdy = (z01 + z11 - z00 - z10) / 2;
            const shade = Math.max(0, Math.min(1, 0.62 - dzdx * 0.16 + dzdy * 0.1));
            quads.push({
              d: corners.reduce((s, c) => s + c[2], 0) / 4,
              pts: corners.map((c) => [c[0], c[1]] as [number, number]),
              shade,
              z: (z00 + z11) / 2,
            });
          }
        quads.sort((a, b) => b.d - a.d);
        ctx.globalAlpha = fillAlpha;
        for (const q of quads) {
          const e = (q.z - Z_MIN) / (Z_MAX - Z_MIN);
          const l = 0.55 + q.shade * 0.45;
          const r = Math.round((96 + e * 40) * l);
          const g = Math.round((128 + e * 30) * l);
          const b = Math.round((108 + e * 14) * l);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.beginPath();
          ctx.moveTo(q.pts[0][0], q.pts[0][1]);
          for (let n = 1; n < 4; n++) ctx.lineTo(q.pts[n][0], q.pts[n][1]);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = `rgba(${r},${g},${b},1)`;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // contour polylines, lifted to their elevations
      const lineAlpha = 1 - k * 0.45;
      for (const major of [false, true]) {
        ctx.strokeStyle = major ? col("--demo-major", "#e9eef0") : col("--demo-minor", "#7fcfd8");
        ctx.globalAlpha = lineAlpha * (major ? 1 : 0.85);
        ctx.lineWidth = major ? 1.4 : 0.9;
        ctx.beginPath();
        for (const s of model.segs) {
          if (s.major !== major) continue;
          const z = zn(s.z) + 0.002;
          const a = proj(s.a[0], s.a[1], z);
          const b = proj(s.b[0], s.b[1], z);
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(b[0], b[1]);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // elevation labels on major contours while still in plan
      if (k < 0.35) {
        ctx.globalAlpha = 1 - k / 0.35;
        ctx.fillStyle = col("--demo-major", "#e9eef0");
        ctx.font = "11px ui-monospace, Consolas, monospace";
        const done = new Set<number>();
        for (const s of model.segs) {
          if (!s.major || done.has(s.z)) continue;
          if (Math.abs(s.a[0] - 0.62) > 0.05) continue;
          done.add(s.z);
          const [px, py] = proj(s.a[0], s.a[1], 0);
          ctx.fillText(`${s.z.toFixed(1)}`, px + 4, py - 4);
        }
        ctx.globalAlpha = 1;
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", draw);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", draw);
    };
  }, [t, model]);

  useEffect(() => () => cancelAnimationFrame(anim.current), []);

  const play = () => {
    cancelAnimationFrame(anim.current);
    const from = t;
    const to = t > 0.5 ? 0 : 1;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(to);
      return;
    }
    const start = performance.now();
    const dur = 1900 * Math.abs(to - from);
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setT(from + (to - from) * p);
      if (p < 1) anim.current = requestAnimationFrame(step);
    };
    anim.current = requestAnimationFrame(step);
  };

  const stage =
    t < 0.04
      ? `Linked DWG: ${model.levels} contours at ${STEP} m intervals`
      : t < 0.97
        ? `Sampling ${model.points.toLocaleString("en")} points along the contours`
        : `Toposolid created, ${model.lo.toFixed(1)} m to ${model.hi.toFixed(1)} m`;

  return (
    <figure className="topo-demo" style={{ margin: 0 }}>
      <div className="model">
        <div className="model-bar">
          <span>{t < 0.5 ? "Survey.dwg, plan view" : "Revit, 3D view"}</span>
          <span aria-live="polite">{stage}</span>
        </div>
        <div className="topo-canvas" ref={wrapRef}>
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={`Illustration: contour lines from a CAD survey${t > 0.5 ? " turned into a shaded 3D toposolid" : " in plan view"}.`}
          />
        </div>
        <div className="topo-controls">
          <button type="button" className="btn btn-ink topo-play" onClick={play}>
            {t > 0.5 ? "Back to contours" : "Create toposolid"}
          </button>
          <label className="topo-range">
            <span className="visually-hidden">Progress from CAD contours to toposolid</span>
            <span aria-hidden="true">DWG</span>
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(t * 100)}
              onChange={(e) => {
                cancelAnimationFrame(anim.current);
                setT(Number(e.target.value) / 100);
              }}
            />
            <span aria-hidden="true">Toposolid</span>
          </label>
        </div>
      </div>
      <figcaption className="small" style={{ color: "var(--graphite)", marginTop: 10 }}>
        A simplified illustration running in your browser, with made-up terrain. The real add-in reads your linked
        survey drawing inside Revit.
      </figcaption>
    </figure>
  );
}
