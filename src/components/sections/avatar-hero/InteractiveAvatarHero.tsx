"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AvatarTrueVector from "./avatar_true_vector";

export default function InteractiveAvatarHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarFrameRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<SVGGElement | null>(null);
  const leftPupilRef = useRef<SVGGElement | null>(null);
  const rightPupilRef = useRef<SVGGElement | null>(null);
  const mouseActiveRef = useRef(false);
  const coarsePointerRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const lastPointerRef = useRef({ x: 0.5, y: 0.45 });
  const currentRef = useRef({
    headX: 0,
    headY: 0,
    headRotate: 0,
    floatY: 0,
    pupilX: 0,
    pupilY: 0,
  });
  const idleTRef = useRef(0);
  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  useEffect(() => {
    const section = sectionRef.current;
    const avatarFrame = avatarFrameRef.current;
    if (!section || !avatarFrame) {
      return;
    }

    headRef.current = section.querySelector("#head");
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
      const leftPupil = leftPupilRef.current;
      const rightPupil = rightPupilRef.current;
      if (!head || !leftPupil || !rightPupil) {
        raf = requestAnimationFrame(tick);
        return;
      }

      if (reducedMotionRef.current) {
        avatarFrame.style.transform = "translate3d(0, 0, 0)";
        head.style.transform = "translate(0, 0) rotate(0deg)";
        leftPupil.style.transform = "translate(0, 0)";
        rightPupil.style.transform = "translate(0, 0)";
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
      const targetPupilX =
        !mouseActiveRef.current || coarsePointerRef.current
          ? Math.cos(idleTRef.current * 0.8) * 0.55
          : clamp((lastPointerRef.current.x - 0.5) * 5.6, -4.8, 4.8);
      const targetPupilY =
        !mouseActiveRef.current || coarsePointerRef.current
          ? Math.sin(idleTRef.current * 1.05) * 0.35
          : clamp((lastPointerRef.current.y - 0.45) * 3.8, -3.2, 3.2);

      currentRef.current.headX = lerp(currentRef.current.headX, targetHeadX, 0.09);
      currentRef.current.headY = lerp(currentRef.current.headY, targetHeadY, 0.09);
      currentRef.current.headRotate = lerp(currentRef.current.headRotate, targetHeadRotate, 0.09);
      currentRef.current.floatY = lerp(currentRef.current.floatY, idleFloat, 0.06);
      currentRef.current.pupilX = lerp(currentRef.current.pupilX, targetPupilX, 0.12);
      currentRef.current.pupilY = lerp(currentRef.current.pupilY, targetPupilY, 0.12);

      avatarFrame.style.transform = `translate3d(0, ${currentRef.current.floatY.toFixed(2)}px, 0)`;
      head.style.transform = `translate(${currentRef.current.headX.toFixed(2)}px, ${currentRef.current.headY.toFixed(2)}px) rotate(${currentRef.current.headRotate.toFixed(2)}deg)`;
      const pupilTransform = `translate(${currentRef.current.pupilX.toFixed(2)}px, ${currentRef.current.pupilY.toFixed(2)}px)`;
      leftPupil.style.transform = pupilTransform;
      rightPupil.style.transform = pupilTransform;

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
    <section ref={sectionRef} className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(226,232,240,0.72),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(248,250,252,0.18))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="flex w-full shrink-0 justify-center md:order-last md:w-[42%]">
            <div
              ref={avatarFrameRef}
              className="relative w-[min(82vw,20rem)] sm:w-[24rem] md:w-[28rem] lg:w-[31rem]"
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
              <span className="hidden sm:inline">CAD And BIM Software Developer</span>
              <span className="sm:hidden">CAD &amp; BIM Software Developer</span>
            </span>

            <h1 className="font-headline text-[clamp(2rem,10vw,2.25rem)] font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I&apos;m <span className="block text-primary sm:inline">Justine.</span>
            </h1>

            <p className="mx-auto max-w-[20rem] px-1 text-base text-muted-foreground sm:max-w-xl sm:px-0 sm:text-lg md:mx-0 md:text-xl">
              I build automation tools for{" "}
              <strong className="font-semibold text-foreground">Revit</strong>,{" "}
              <strong className="font-semibold text-foreground">AutoCAD</strong>, and{" "}
              <strong className="font-semibold text-foreground">AEC workflows</strong> by turning repetitive manual tasks into reliable internal tools.
            </p>

            <div className="mx-auto flex max-w-[20rem] flex-wrap justify-center gap-2 sm:max-w-full md:mx-0 md:justify-start">
              {["Revit API", "AutoCAD .NET", "AutoLISP", "WPF Tools", "APS / Cloud"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Button asChild size="lg" className="w-full rounded-full px-6 sm:w-auto">
                <Link href="/work">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:w-auto"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
