import { ArrowUpRight, Check, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CopyBriefButton from "@/components/contact/CopyBriefButton";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Describe the Revit, AutoCAD, or APS workflow that keeps wasting your team's time. Email or LinkedIn; a short description is enough to start.",
  path: "/contact",
});

const email = siteConfig.links.email;
const emailSubject = "Workflow automation enquiry";
const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}`;
const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(emailSubject)}`;
const linkedinHref = siteConfig.links.linkedin;
// Hidden while empty. TODO(Justine): set siteConfig.links.whatsapp.
const whatsappHref = siteConfig.links.whatsapp;

const whatToSend = [
  {
    title: "Software involved",
    detail: "Revit, AutoCAD, APS / ACC, Excel or Sheets, and the versions you run.",
  },
  {
    title: "The manual steps today",
    detail: "What someone actually clicks, copies, or checks, and how often.",
  },
  {
    title: "Where the process breaks",
    detail: "The step that causes rework, delays, or depends on one person remembering.",
  },
  {
    title: "What a better handoff looks like",
    detail: "The output you want: a clean sheet set, an export, a report, a checked model.",
  },
  {
    title: "Rough timeline",
    detail: "Any deadline, project milestone, or simply “whenever it’s ready.”",
  },
];

const nextSteps = [
  {
    title: "I reply",
    detail: "I read what you sent and come back with questions or first thoughts.",
  },
  {
    title: "We clarify",
    detail: "A short call or a few messages to pin down the workflow and constraints.",
  },
  {
    title: "You get a proposal",
    detail: "A recommendation on scope: a small script, a Revit or AutoCAD add-in, an APS workflow, or documentation.",
  },
];

const briefTemplate = `Hi Justine,

Software involved:
(e.g. Revit 2024, AutoCAD, APS / ACC, Excel)

The manual steps today:
(what we do, who does it, how often)

Where the process breaks:
(the step that causes rework or delays)

What a better handoff looks like:
(the output or result we want)

Rough timeline:
(deadline or "no rush")

Thanks,
[Your name / company]`;

const outlineButton =
  "rounded-full border border-foreground bg-transparent px-6 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background";

export default function ContactPage() {
  return (
    <>
      <section className="pb-8 pt-12 md:pb-10 md:pt-16 lg:pb-12 lg:pt-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 reveal-up">
            <span className="eyebrow">Contact</span>
            <h1 className="font-headline text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
              Tell me the workflow that keeps wasting your team&apos;s time.
            </h1>
            <p className="section-copy">
              Whether it&apos;s a repeated export, a fragile AutoLISP routine, or a handoff that always needs fixing, a short description is enough to start. I&apos;ll help you work out whether it needs a script, an add-in, an APS workflow, or better documentation.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={mailtoHref}>
                  <Mail aria-hidden="true" />
                  Email me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className={outlineButton}>
                <a href={linkedinHref} target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" />
                  Message on LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Button>
              {whatsappHref && (
                <Button asChild size="lg" variant="outline" className={outlineButton}>
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    Chat on WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              )}
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <p>
                <span className="font-semibold text-foreground">{email}</span>
                {" · "}
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-foreground"
                >
                  Open in Gmail
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <p className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                Based in {siteConfig.location} · working with teams remotely
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 md:pt-0 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <article className="soft-panel p-6 sm:p-8 reveal-up" aria-labelledby="what-to-send">
              <h2 id="what-to-send" className="font-headline text-2xl font-semibold tracking-[-0.03em] text-foreground">
                What to send
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Rough notes are fine. These five points cover most of what I need to give you a useful answer.
              </p>
              <ul className="mt-6 space-y-4">
                {whatToSend.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border/70 pt-6">
                <p className="mb-3 text-sm text-muted-foreground">
                  Want a head start? Copy a plain-text brief and paste it into your email.
                </p>
                <CopyBriefButton template={briefTemplate} />
              </div>
            </article>

            <aside
              className="rounded-xl border border-border/70 bg-white/60 p-6 sm:p-8 reveal-up"
              style={{ animationDelay: "120ms" }}
              aria-labelledby="what-happens-next"
            >
              <h2 id="what-happens-next" className="font-headline text-2xl font-semibold tracking-[-0.03em] text-foreground">
                What happens next
              </h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
