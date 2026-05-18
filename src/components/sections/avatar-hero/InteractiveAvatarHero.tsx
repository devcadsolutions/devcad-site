"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeroBackground from "@/components/layout/PageHeroBackground";
import AvatarTrueVector from "./avatar_true_vector";

export default function InteractiveAvatarHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarFrameRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<SVGGElement | null>(null);
  const eyesRef = useRef<SVGGElement | null>(null);
  const eyebrowRef = useRef<SVGGElement | null>(null);
  const lidsRef = useRef<SVGPathElement[]>([]);
  const pupilsRef = useRef<SVGGElement[]>([]);
  const mouseActiveRef = useRef(false);
  const coarsePointerRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const lastPointerRef = useRef({ x: 0.5, y: 0.45 });
  const currentRef = useRef({
    headX: 0,
    headY: 0,
    headRotate: 0,
    floatY: 0,
    eyeX: 0,
    eyeY: 0,
    browY: 0,
    blink: 0,
  });
  const idleTRef = useRef(0);
  const blinkUntilRef = useRef(0);
  const nextBlinkRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const avatarFrame = avatarFrameRef.current;
    if (!section || !avatarFrame) {
      return;
    }

    headRef.current = section.querySelector("#head");
    eyesRef.current = section.querySelector("#eyes");
    eyebrowRef.current = section.querySelector("#eyebrows");
    lidsRef.current = Array.from(section.querySelectorAll("[data-lid]"));
    pupilsRef.current = Array.from(section.querySelectorAll("[data-pupil]"));

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
    nextBlinkRef.current = performance.now() + 1600;

    let raf = 0;
    const tick = (time: number) => {
      const head = headRef.current;
      if (!head) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const eyes = eyesRef.current;
      const brows = eyebrowRef.current;

      idleTRef.current += 0.018;
      const idleFloat = Math.sin(idleTRef.current) * 1.6;

      const targetHeadX =
        !mouseActiveRef.current || coarsePointerRef.current || reducedMotionRef.current
          ? Math.cos(idleTRef.current * 0.55) * 0.8
          : (lastPointerRef.current.x - 0.5) * 5.5;
      const targetHeadY =
        !mouseActiveRef.current || coarsePointerRef.current || reducedMotionRef.current
          ? Math.sin(idleTRef.current * 0.85) * -0.6
          : (lastPointerRef.current.y - 0.45) * 3.4;
      const targetHeadRotate =
        !mouseActiveRef.current || coarsePointerRef.current || reducedMotionRef.current
          ? Math.sin(idleTRef.current * 0.7) * 0.5
          : (lastPointerRef.current.x - 0.5) * 3.2;
      const targetEyeX =
        !mouseActiveRef.current || coarsePointerRef.current || reducedMotionRef.current
          ? Math.cos(idleTRef.current * 0.6) * 0.8
          : (lastPointerRef.current.x - 0.5) * 9.5;
      const targetEyeY =
        !mouseActiveRef.current || coarsePointerRef.current || reducedMotionRef.current
          ? Math.sin(idleTRef.current * 0.9) * 0.35
          : (lastPointerRef.current.y - 0.45) * 5.2;

      currentRef.current.headX = lerp(currentRef.current.headX, targetHeadX, 0.09);
      currentRef.current.headY = lerp(currentRef.current.headY, targetHeadY, 0.09);
      currentRef.current.headRotate = lerp(currentRef.current.headRotate, targetHeadRotate, 0.09);
      currentRef.current.floatY = lerp(currentRef.current.floatY, idleFloat, 0.06);
      currentRef.current.eyeX = lerp(currentRef.current.eyeX, targetEyeX, 0.1);
      currentRef.current.eyeY = lerp(currentRef.current.eyeY, targetEyeY, 0.1);
      currentRef.current.browY = lerp(currentRef.current.browY, currentRef.current.eyeY * -0.12, 0.1);

      if (!reducedMotionRef.current && time >= nextBlinkRef.current) {
        blinkUntilRef.current = time + 150;
        nextBlinkRef.current = time + 3200 + Math.random() * 2800;
      }

      let blinkTarget = 0;
      if (!reducedMotionRef.current && time < blinkUntilRef.current) {
        const progress = 1 - (blinkUntilRef.current - time) / 180;
        blinkTarget = progress < 0.5 ? progress * 2 : (1 - progress) * 2;
      }
      currentRef.current.blink = lerp(currentRef.current.blink, blinkTarget, 0.3);

      avatarFrame.style.transform = `translate3d(0, ${currentRef.current.floatY.toFixed(2)}px, 0)`;
      head.style.transform = `translate(${currentRef.current.headX.toFixed(2)}px, ${currentRef.current.headY.toFixed(2)}px) rotate(${currentRef.current.headRotate.toFixed(2)}deg)`;

      if (eyes) {
        eyes.style.transform = "translate(0px, 0px)";
      }
      if (brows) {
        brows.style.transform = `translate(0, ${currentRef.current.browY.toFixed(2)}px)`;
      }

      for (const pupil of pupilsRef.current) {
        pupil.style.transform = `translate(${currentRef.current.eyeX.toFixed(2)}px, ${currentRef.current.eyeY.toFixed(2)}px)`;
      }

      const lidScale = 1 - currentRef.current.blink * 0.92;
      for (const lid of lidsRef.current) {
        lid.style.transform = `scaleY(${lidScale.toFixed(3)})`;
      }

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
      <PageHeroBackground />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="flex shrink-0 justify-center md:order-last md:w-[42%]">
            <div
              ref={avatarFrameRef}
              className="relative w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[31rem]"
              style={{ willChange: "transform" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-[10%] bottom-[11%] h-12 rounded-full bg-primary/10 blur-2xl"
              />
              <AvatarTrueVector className="relative z-10 h-auto w-full" />
            </div>
          </div>

          <div className="space-y-6 text-center reveal-up md:order-first md:flex-1 md:text-left">
            <span className="eyebrow">AEC Automation Specialist</span>

            <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I&apos;m <span className="text-primary">Justine.</span>
            </h1>

            <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0 md:text-xl">
              I build automation tools for{" "}
              <strong className="font-semibold text-foreground">Revit</strong>,{" "}
              <strong className="font-semibold text-foreground">AutoCAD</strong>, and{" "}
              <strong className="font-semibold text-foreground">AEC workflows</strong> by turning repetitive manual tasks into reliable internal tools.
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {["Revit API", "AutoCAD .NET", "AutoLISP", "WPF Tools", "APS / Cloud"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/work">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
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
