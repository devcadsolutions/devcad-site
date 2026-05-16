"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageHeroBackground from "@/components/layout/PageHeroBackground";

export default function AvatarHero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const avatarRef   = useRef<HTMLDivElement>(null);
  const idleRef     = useRef<number>(0);
  const mouseActive = useRef(false);
  const lastMouse   = useRef({ x: 0.5, y: 0.5 });
  const current     = useRef({ rx: 0, ry: 0, float: 0 });
  const floatT      = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const avatar  = avatarRef.current;
    if (!section || !avatar) return;

    // ── Mouse tracking ───────────────────────────────────────────────────
    let idleTimer: ReturnType<typeof setTimeout>;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      // Normalise 0→1
      lastMouse.current = {
        x: (e.clientX - rect.left)  / rect.width,
        y: (e.clientY - rect.top)   / rect.height,
      };
      mouseActive.current = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { mouseActive.current = false; }, 2000);
    };

    const onMouseLeave = () => {
      mouseActive.current = false;
      clearTimeout(idleTimer);
    };

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    // ── Raf loop ─────────────────────────────────────────────────────────
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      floatT.current += 0.012;

      // Target rotation from mouse (max ±8deg horizontal, ±5deg vertical)
      const targetRx = mouseActive.current
        ? (lastMouse.current.y - 0.5) * -10   // tilt up when cursor is high
        : 0;
      const targetRy = mouseActive.current
        ? (lastMouse.current.x - 0.5) * 16    // turn toward cursor
        : 0;

      // Idle float (sine wave, ±6px vertical)
      const targetFloat = mouseActive.current
        ? 0
        : Math.sin(floatT.current) * 6;

      // Smooth interpolation
      current.current.rx    = lerp(current.current.rx,    targetRx,    0.05);
      current.current.ry    = lerp(current.current.ry,    targetRy,    0.05);
      current.current.float = lerp(current.current.float, targetFloat, 0.06);

      avatar.style.transform = [
        `translateY(${current.current.float.toFixed(2)}px)`,
        `perspective(800px)`,
        `rotateX(${current.current.rx.toFixed(2)}deg)`,
        `rotateY(${current.current.ry.toFixed(2)}deg)`,
      ].join(" ");

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
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

          {/* ── Avatar ── */}
          <div className="flex shrink-0 justify-center md:order-last md:w-[42%]">
            <div
              ref={avatarRef}
              style={{
                transformOrigin: "50% 85%",
                willChange: "transform",
                transition: "none",
              }}
            >
              <div className="relative">
                {/* Glow ring behind the avatar */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: "radial-gradient(circle, hsl(27 8% 45%), transparent 70%)" }}
                />
                <Image
                  src="/profile/moving-image.png"
                  alt="Justine Bautista — AEC Automation Developer"
                  width={480}
                  height={480}
                  priority
                  className="relative z-10 w-56 drop-shadow-2xl sm:w-72 md:w-80 lg:w-96"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>
          </div>

          {/* ── Copy ── */}
          <div className="space-y-6 text-center reveal-up md:text-left md:order-first md:flex-1">
            <span className="eyebrow">AEC Automation Specialist</span>

            <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I&apos;m{" "}
              <span className="text-primary">Justine.</span>
            </h1>

            <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0 md:text-xl">
              I build automation tools for{" "}
              <strong className="font-semibold text-foreground">Revit</strong>,{" "}
              <strong className="font-semibold text-foreground">AutoCAD</strong>, and{" "}
              <strong className="font-semibold text-foreground">AEC workflows</strong> — turning repetitive manual tasks into reliable internal tools.
            </p>

            {/* Skill chips */}
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {["Revit API", "AutoCAD .NET", "AutoLISP", "WPF Tools", "APS / Cloud"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-sm text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
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
                className="rounded-full border-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
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
