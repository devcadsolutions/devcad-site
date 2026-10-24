"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ClipboardCopy } from "lucide-react";
import { Button } from "@/components/ui/button";

type CopyState = "idle" | "copied" | "manual";

type CopyBriefButtonProps = {
  template: string;
};

function legacyCopy(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export default function CopyBriefButton({ template }: CopyBriefButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (state === "manual") {
      fallbackRef.current?.focus();
      fallbackRef.current?.select();
    }
  }, [state]);

  async function handleCopy() {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(template);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) ok = legacyCopy(template);

    if (ok) {
      setState("copied");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setState("idle"), 2500);
    } else {
      setState("manual");
    }
  }

  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        onClick={handleCopy}
        className="rounded-full border border-foreground bg-transparent px-5 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
      >
        {state === "copied" ? (
          <>
            <Check aria-hidden="true" />
            Copied
          </>
        ) : (
          <>
            <ClipboardCopy aria-hidden="true" />
            Copy email template
          </>
        )}
      </Button>
      <p role="status" aria-live="polite" className="sr-only">
        {state === "copied" ? "Email template copied to clipboard." : ""}
      </p>
      {state === "manual" && (
        <div className="space-y-2">
          <label htmlFor="brief-template" className="block text-sm text-muted-foreground">
            Copying isn&apos;t available in this browser. Select the text below and copy it manually.
          </label>
          <textarea
            id="brief-template"
            ref={fallbackRef}
            readOnly
            rows={10}
            value={template}
            className="w-full rounded-lg border border-border/70 bg-white/80 p-3 font-mono text-xs leading-5 text-foreground"
          />
        </div>
      )}
    </div>
  );
}
