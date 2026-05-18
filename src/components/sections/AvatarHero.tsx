"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageHeroBackground from "@/components/layout/PageHeroBackground";

export default function AvatarHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseActive = useRef(false);
  const prefersReducedMotion = useRef(false);
  const lastMouse = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({
    rx: 0,
    ry: 0,
    floatY: 0,
    driftX: 0,
    breath: 1,
    glowX: 0,
    glowY: 0,
  });
  const floatT = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const avatar = avatarRef.current;
    const portrait = portraitRef.current;
    const glow = glowRef.current;

    if (!section || !avatar || !portrait || !glow) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion.current = event.matches;
    };

    mediaQuery.addEventListener("change", onMotionPreferenceChange);

    let idleTimer: ReturnType<typeof setTimeout>;

    const onMouseMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      lastMouse.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
      mouseActive.current = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouseActive.current = false;
      }, 1800);
    };

    const onMouseLeave = () => {
      mouseActive.current = false;
      clearTimeout(idleTimer);
    };

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let raf = 0;

    const tick = () => {
      if (prefersReducedMotion.current) {
        avatar.style.transform = "translate3d(0, 0, 0)";
        portrait.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
        glow.style.transform = "translate3d(0, 0, 0) scale(1)";
        raf = requestAnimationFrame(tick);
        return;
      }

      floatT.current += 0.018;

      const targetRx = mouseActive.current ? (lastMouse.current.y - 0.5) * -4.5 : -0.75;
      const targetRy = mouseActive.current ? (lastMouse.current.x - 0.5) * 7 : 1.2;
      const targetFloatY = Math.sin(floatT.current) * 5.5;
      const targetDriftX = Math.cos(floatT.current * 0.6) * 2.4;
      const targetBreath = 1 + Math.sin(floatT.current * 1.2) * 0.015;
      const targetGlowX = mouseActive.current ? (lastMouse.current.x - 0.5) * 16 : 4;
      const targetGlowY = mouseActive.current ? (lastMouse.current.y - 0.5) * 10 : -3;

      current.current.rx = lerp(current.current.rx, targetRx, 0.08);
      current.current.ry = lerp(current.current.ry, targetRy, 0.08);
      current.current.floatY = lerp(current.current.floatY, targetFloatY, 0.07);
      current.current.driftX = lerp(current.current.driftX, targetDriftX, 0.06);
      current.current.breath = lerp(current.current.breath, targetBreath, 0.08);
      current.current.glowX = lerp(current.current.glowX, targetGlowX, 0.08);
      current.current.glowY = lerp(current.current.glowY, targetGlowY, 0.08);

      avatar.style.transform = `translate3d(${current.current.driftX.toFixed(2)}px, ${current.current.floatY.toFixed(2)}px, 0)`;
      portrait.style.transform = [
        "perspective(900px)",
        `rotateX(${current.current.rx.toFixed(2)}deg)`,
        `rotateY(${current.current.ry.toFixed(2)}deg)`,
        `scale(${current.current.breath.toFixed(4)})`,
      ].join(" ");
      glow.style.transform = `translate3d(${current.current.glowX.toFixed(2)}px, ${current.current.glowY.toFixed(2)}px, 0) scale(${(1 + (current.current.breath - 1) * 1.8).toFixed(4)})`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      mediaQuery.removeEventListener("change", onMotionPreferenceChange);
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16"
    >
      <PageHeroBackground />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="flex shrink-0 justify-center md:order-last md:w-[42%]">
            <div
              ref={avatarRef}
              style={{
                transformOrigin: "50% 80%",
                willChange: "transform",
              }}
            >
              <div
                ref={portraitRef}
                className="relative"
                style={{
                  transformOrigin: "50% 78%",
                  willChange: "transform",
                }}
              >
                <div
                  ref={glowRef}
                  aria-hidden="true"
                  className="absolute left-1/2 top-[18%] h-52 w-52 -translate-x-1/2 rounded-full blur-3xl opacity-35 sm:h-64 sm:w-64 md:h-72 md:w-72"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklab, hsl(var(--primary)) 30%, white 70%) 0%, transparent 72%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-[30%] h-[68%] w-[70%] -translate-x-1/2 rounded-[44%] bg-white/35 blur-2xl"
                />
                <Image
                  src="/profile/moving-image-cutout.png"
                  alt="Justine Bautista - AEC Automation Developer"
                  width={480}
                  height={480}
                  priority
                  className="relative z-10 w-56 drop-shadow-[0_24px_60px_rgba(15,23,42,0.22)] sm:w-72 md:w-80 lg:w-96"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
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
