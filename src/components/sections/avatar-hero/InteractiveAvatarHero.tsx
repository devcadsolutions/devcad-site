"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AvatarTrueVector from "./avatar_true_vector";

export default function InteractiveAvatarHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarFrameRef = useRef<HTMLDivElement>(null);
  const avatarSvgRef = useRef<SVGSVGElement | null>(null);
  const headRef = useRef<SVGGElement | null>(null);
  const leftBrowRef = useRef<SVGGElement | null>(null);
  const rightBrowRef = useRef<SVGGElement | null>(null);
  const leftPupilRef = useRef<SVGGElement | null>(null);
  const rightPupilRef = useRef<SVGGElement | null>(null);
  const mouseActiveRef = useRef(false);
  const coarsePointerRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const lastPointerRef = useRef({ x: 0.5, y: 0.45 });
  const pointerClientRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({
    headX: 0,
    headY: 0,
    headRotate: 0,
    floatY: 0,
    leftPupilX: 0,
    leftPupilY: 0,
    rightPupilX: 0,
    rightPupilY: 0,
    leftBrowY: 0,
    rightBrowY: 0,
  });
  const idleTRef = useRef(0);
  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  useEffect(() => {
    const section = sectionRef.current;
    const avatarFrame = avatarFrameRef.current;
    if (!section || !avatarFrame) {
      return;
    }

    avatarSvgRef.current = section.querySelector("svg");
    headRef.current = section.querySelector("#head");
    leftBrowRef.current = section.querySelector("#eyebrow-left");
    rightBrowRef.current = section.querySelector("#eyebrow-right");
    leftPupilRef.current = section.querySelector("#pupil-left");
    rightPupilRef.current = section.querySelector("#pupil-right");

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    reducedMotionRef.current = reducedMotionQuery.matches;
    coarsePointerRef.current = coarsePointerQuery.matches;

    const syncMotionPrefs = () => {
      reducedMotionRef.current = reducedMotionQuery.matches;
      coarsePointerRef.current = coarsePointerQuery.matches;
    };

    reducedMotionQuery.addEventListener("change", syncMotionPrefs);
    coarsePointerQuery.addEventListener("change", syncMotionPrefs);

    let idleTimer: ReturnType<typeof setTimeout>;

    const onPointerMove = (event: PointerEvent) => {
      if (coarsePointerRef.current) {
        return;
      }

      const rect = section.getBoundingClientRect();
      lastPointerRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
      pointerClientRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
      mouseActiveRef.current = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouseActiveRef.current = false;
      }, 1400);
    };

    const onPointerLeave = () => {
      mouseActiveRef.current = false;
      clearTimeout(idleTimer);
    };

    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);

    const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

    let raf = 0;
    const tick = () => {
      const head = headRef.current;
      const leftBrow = leftBrowRef.current;
      const rightBrow = rightBrowRef.current;
      const leftPupil = leftPupilRef.current;
      const rightPupil = rightPupilRef.current;
      const avatarSvg = avatarSvgRef.current;
      if (!head || !leftBrow || !rightBrow || !leftPupil || !rightPupil || !avatarSvg) {
        raf = requestAnimationFrame(tick);
        return;
      }

      if (reducedMotionRef.current) {
        avatarFrame.style.transform = "translate3d(0, 0, 0)";
        head.style.transform = "translate(0, 0) rotate(0deg)";
        leftBrow.setAttribute("transform", "translate(0 0)");
        rightBrow.setAttribute("transform", "translate(0 0)");
        leftPupil.setAttribute("transform", "rotate(-1 430 414)");
        rightPupil.setAttribute("transform", "rotate(-1 589 404)");
        raf = requestAnimationFrame(tick);
        return;
      }

      idleTRef.current += 0.018;
      const idleFloat = Math.sin(idleTRef.current) * 1.6;

      const targetHeadX =
        !mouseActiveRef.current || coarsePointerRef.current
          ? Math.cos(idleTRef.current * 0.55) * 0.8
          : (lastPointerRef.current.x - 0.5) * 5.5;
      const targetHeadY =
        !mouseActiveRef.current || coarsePointerRef.current
          ? Math.sin(idleTRef.current * 0.85) * -0.6
          : (lastPointerRef.current.y - 0.45) * 3.4;
      const targetHeadRotate =
        !mouseActiveRef.current || coarsePointerRef.current
          ? Math.sin(idleTRef.current * 0.7) * 0.5
          : (lastPointerRef.current.x - 0.5) * 3.2;
      const getEyeTarget = (centerX: number, centerY: number, idleOffset = 0) => {
        if (!mouseActiveRef.current || coarsePointerRef.current) {
          return {
            x: Math.cos(idleTRef.current * 0.8 + idleOffset) * 2.2,
            y: Math.sin(idleTRef.current * 1.05 + idleOffset) * 1.4,
          };
        }

        const svgRect = avatarSvg.getBoundingClientRect();
        const scaleX = svgRect.width / 1024;
        const scaleY = svgRect.height / 1024;
        const eyeClientX = svgRect.left + centerX * scaleX;
        const eyeClientY = svgRect.top + centerY * scaleY;

        return {
          x: clamp((pointerClientRef.current.x - eyeClientX) / scaleX * 0.1, -14, 14),
          y: clamp((pointerClientRef.current.y - eyeClientY) / scaleY * 0.1, -11, 11),
        };
      };

      const leftTarget = getEyeTarget(430, 414);
      const rightTarget = getEyeTarget(589, 404, 0.35);
      const cursorBias = mouseActiveRef.current && !coarsePointerRef.current ? lastPointerRef.current.x - 0.5 : 0;
      const targetLeftBrowY =
        mouseActiveRef.current && !coarsePointerRef.current
          ? cursorBias < -0.04
            ? -7
            : -1
          : Math.sin(idleTRef.current * 0.75) * -1.2;
      const targetRightBrowY =
        mouseActiveRef.current && !coarsePointerRef.current
          ? cursorBias > 0.04
            ? -7
            : -1
          : Math.sin(idleTRef.current * 0.75 + 0.45) * -1.2;

      currentRef.current.headX = lerp(currentRef.current.headX, targetHeadX, 0.09);
      currentRef.current.headY = lerp(currentRef.current.headY, targetHeadY, 0.09);
      currentRef.current.headRotate = lerp(currentRef.current.headRotate, targetHeadRotate, 0.09);
      currentRef.current.floatY = lerp(currentRef.current.floatY, idleFloat, 0.06);
      currentRef.current.leftPupilX = lerp(currentRef.current.leftPupilX, leftTarget.x, 0.18);
      currentRef.current.leftPupilY = lerp(currentRef.current.leftPupilY, leftTarget.y, 0.18);
      currentRef.current.rightPupilX = lerp(currentRef.current.rightPupilX, rightTarget.x, 0.18);
      currentRef.current.rightPupilY = lerp(currentRef.current.rightPupilY, rightTarget.y, 0.18);
      currentRef.current.leftBrowY = lerp(currentRef.current.leftBrowY, targetLeftBrowY, 0.12);
      currentRef.current.rightBrowY = lerp(currentRef.current.rightBrowY, targetRightBrowY, 0.12);

      avatarFrame.style.transform = `translate3d(0, ${currentRef.current.floatY.toFixed(2)}px, 0)`;
      head.style.transform = `translate(${currentRef.current.headX.toFixed(2)}px, ${currentRef.current.headY.toFixed(2)}px) rotate(${currentRef.current.headRotate.toFixed(2)}deg)`;
      leftBrow.setAttribute("transform", `translate(0 ${currentRef.current.leftBrowY.toFixed(2)})`);
      rightBrow.setAttribute("transform", `translate(0 ${currentRef.current.rightBrowY.toFixed(2)})`);
      leftPupil.setAttribute(
        "transform",
        `translate(${currentRef.current.leftPupilX.toFixed(2)} ${currentRef.current.leftPupilY.toFixed(2)}) rotate(-1 430 414)`,
      );
      rightPupil.setAttribute(
        "transform",
        `translate(${currentRef.current.rightPupilX.toFixed(2)} ${currentRef.current.rightPupilY.toFixed(2)}) rotate(-1 589 404)`,
      );

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      reducedMotionQuery.removeEventListener("change", syncMotionPrefs);
      coarsePointerQuery.removeEventListener("change", syncMotionPrefs);
      clearTimeout(idleTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(248,250,252,0.16))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16 lg:gap-24">
          <div className="flex w-full shrink-0 justify-center md:order-last md:w-[42%]">
            <div
              ref={avatarFrameRef}
              className="relative w-[min(80vw,20rem)] sm:w-96 md:w-[28rem] lg:w-[31rem]"
              style={{ willChange: "transform" }}
            >
              <div
                aria-hidden="true"
                className="absolute left-[16%] top-[11%] z-[1] h-[34%] w-[52%] rounded-[2rem] border border-sky-300/70 bg-[linear-gradient(135deg,rgba(125,211,252,0.24)_0,rgba(125,211,252,0.24)_40%,rgba(255,255,255,0)_40%,rgba(255,255,255,0)_50%,rgba(125,211,252,0.24)_50%,rgba(125,211,252,0.24)_90%,rgba(255,255,255,0)_90%,rgba(255,255,255,0)_100%)] bg-[length:11px_11px] opacity-95 shadow-[0_20px_48px_-34px_rgba(14,116,144,0.22)]"
              />
              <div
                aria-hidden="true"
                className="absolute left-[12%] top-[8%] z-[1] h-[42%] w-[60%] rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.56),rgba(255,255,255,0))]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[14%] bottom-[10%] h-12 rounded-full bg-slate-500/10 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-[2.5%] left-[18%] z-10 h-[32%] w-[64%] rounded-t-[42%] bg-[#a4dfe5]/70"
                style={{
                  clipPath: "polygon(14% 0%, 86% 0%, 100% 100%, 0% 100%)",
                }}
              />
              <AvatarTrueVector className="relative z-10 h-auto w-full" />
            </div>
          </div>

          <div className="w-full space-y-6 text-center reveal-up md:order-first md:flex-1 md:text-left">
            <span className="eyebrow hero-eyebrow">
              <span className="hidden sm:inline">AEC Workflow Automation Developer</span>
              <span className="sm:hidden">CAD &amp; BIM Software Developer</span>
            </span>

            <h1 className="font-headline text-[clamp(2.5rem,12vw,4rem)] font-semibold tracking-[-0.05em] text-foreground md:text-7xl">
              Hey, I&apos;m <span className="block text-primary sm:inline">Justine.</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:mx-0">
              I work close to real CAD/BIM production problems: repeated clicks, slow exports, missing references, and standards that are easy to break under deadline pressure.
            </p>

            <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:mx-0">
              I build practical tools for{" "}
              <strong className="font-semibold text-foreground">Revit</strong>,{" "}
              <strong className="font-semibold text-foreground">AutoCAD</strong>, and{" "}
              <strong className="font-semibold text-foreground">AEC workflows</strong> so teams can reduce repetitive work and deliver with more consistency.
            </p>

            <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
              {["Revit API", "AutoCAD .NET", "AutoLISP", "WPF Tools", "APS / Cloud"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/70 bg-white/70 px-4 py-2 text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button asChild size="lg" className="w-full rounded-full px-6 sm:w-auto">
                <Link href="/work">
                  See Project Examples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:w-auto"
              >
                <Link href="/contact">Tell Me The Workflow</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
