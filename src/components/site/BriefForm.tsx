"use client";

import { useState } from "react";

const EMAIL = "devcadsolutions@gmail.com";

const fields = [
  { name: "software", label: "Software and versions", hint: "Revit 2024, AutoCAD, ACC, Excel…", rows: 1 },
  { name: "today", label: "What someone does by hand today", hint: "What they click, copy or check, and how often.", rows: 3 },
  { name: "breaks", label: "Where it goes wrong", hint: "Rework, delays, or a step that depends on one person.", rows: 2 },
  { name: "output", label: "What a good result looks like", hint: "A clean sheet set, an export, a report, a checked model.", rows: 2 },
] as const;

export default function BriefForm() {
  const [copied, setCopied] = useState(false);

  const compose = (form: HTMLFormElement) => {
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const company = String(d.get("company") || "").trim();
    const lines = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      "",
      ...fields.flatMap((f) => [`${f.label}:`, String(d.get(f.name) || "").trim() || "-", ""]),
      `Timing: ${String(d.get("timing") || "").trim() || "-"}`,
    ].filter((l): l is string => typeof l === "string");
    return {
      subject: `Workflow brief${company ? ` from ${company}` : name ? ` from ${name}` : ""}`,
      body: lines.join("\n"),
    };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { subject, body } = compose(e.currentTarget);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onCopy = async (form: HTMLFormElement | null) => {
    if (!form) return;
    const { subject, body } = compose(form);
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form className="brief" onSubmit={onSubmit} id="brief">
      <div className="brief-row">
        <label>
          <span className="lettering">Your name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span className="lettering">Company (optional)</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      {fields.map((f) => (
        <label key={f.name}>
          <span className="lettering">{f.label}</span>
          {f.rows > 1 ? (
            <textarea name={f.name} rows={f.rows} placeholder={f.hint} />
          ) : (
            <input name={f.name} placeholder={f.hint} />
          )}
        </label>
      ))}
      <label>
        <span className="lettering">Timing (optional)</span>
        <input name="timing" placeholder="A deadline, a milestone, or whenever it's ready" />
      </label>
      <div className="hero-actions">
        <button type="submit" className="btn btn-ink">Open in my email app</button>
        <button
          type="button"
          className="btn btn-line"
          onClick={(e) => onCopy(e.currentTarget.closest("form"))}
        >
          {copied ? "Brief copied" : "Copy the brief"}
        </button>
      </div>
      <p className="small" style={{ color: "var(--graphite)", margin: 0 }} aria-live="polite">
        {copied
          ? `Paste it into an email to ${EMAIL}, LinkedIn or wherever suits you.`
          : `Nothing is sent from this page. It opens a pre-filled email to ${EMAIL}.`}
      </p>
    </form>
  );
}
