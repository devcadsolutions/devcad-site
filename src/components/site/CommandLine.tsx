"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { SiteCommand } from "@/lib/commands";

type Line = { kind: "cmd" | "out" | "err"; text: string };

const HISTORY_KEY = "devcad-cmd-history";

function match(commands: SiteCommand[], query: string, limit = 8) {
  const q = query.trim().toUpperCase();
  if (!q) return [];
  return commands
    .map((c) => {
      let score = -1;
      if (c.name === q || c.aliases.includes(q)) score = 0;
      else if (c.name.startsWith(q)) score = 1;
      else if (c.aliases.some((a) => a.startsWith(q))) score = 2;
      else if (c.label.toUpperCase().includes(q)) score = 3;
      return { c, score };
    })
    .filter((x) => x.score >= 0)
    .sort((a, b) => a.score - b.score || a.c.name.length - b.c.name.length)
    .slice(0, limit)
    .map((x) => x.c);
}

function isTypingTarget(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  return el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
}

/**
 * An AutoCAD-style command line docked to the bottom of the screen.
 * Typing anywhere on the page starts a command, as it does in AutoCAD.
 */
export default function CommandLine({ commands }: { commands: SiteCommand[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const listId = useId();

  const suggestions = useMemo(() => (showHelp ? [] : match(commands, value)), [commands, value, showHelp]);
  const open = focused && (suggestions.length > 0 || showHelp);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(HISTORY_KEY);
      if (saved) setLines(JSON.parse(saved).slice(-1));
    } catch {
      /* storage unavailable: start with an empty history */
    }
  }, []);

  const pushLines = useCallback((next: Line[]) => {
    setLines((prev) => {
      const all = [...prev, ...next].slice(-1);
      try {
        sessionStorage.setItem(HISTORY_KEY, JSON.stringify(all));
      } catch {
        /* ignore */
      }
      return all;
    });
  }, []);

  const run = useCallback(
    (cmd: SiteCommand | undefined, typed: string) => {
      const shown = typed.trim().toUpperCase();
      setValue("");
      setActive(0);
      if (!shown) return;
      if (shown === "HELP" || shown === "?") {
        setShowHelp(true);
        pushLines([{ kind: "cmd", text: `Command: ${shown}` }]);
        return;
      }
      if (!cmd) {
        pushLines([
          { kind: "cmd", text: `Command: ${shown}` },
          { kind: "err", text: `Unknown command "${shown}". Type HELP for the list.` },
        ]);
        return;
      }
      setShowHelp(false);
      pushLines([
        { kind: "cmd", text: `Command: ${cmd.name}` },
        { kind: "out", text: cmd.href.startsWith("/") ? `Opening ${cmd.label.toLowerCase()}…` : `Opening ${cmd.label}…` },
      ]);
      inputRef.current?.blur();
      if (cmd.href.startsWith("/")) router.push(cmd.href);
      else window.open(cmd.href, cmd.href.startsWith("mailto:") ? "_self" : "_blank", "noopener");
    },
    [pushLines, router],
  );

  // Typing anywhere starts a command, like AutoCAD.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
      if (isTypingTarget(e.target) || document.querySelector("dialog[open]")) return;
      if (!/^[a-zA-Z?]$/.test(e.key)) return;
      if (getComputedStyle(inputRef.current!.closest(".cmdline")!).display === "none") return;
      e.preventDefault();
      inputRef.current?.focus();
      setShowHelp(false);
      setValue((v) => v + e.key.toUpperCase());
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setShowHelp(false), [pathname]);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && suggestions.length) {
      e.preventDefault();
      setActive((a) => (a + 1) % suggestions.length);
    } else if (e.key === "ArrowUp" && suggestions.length) {
      e.preventDefault();
      setActive((a) => (a - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Tab" && suggestions.length && value) {
      e.preventDefault();
      setValue(suggestions[active].name);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const typed = value.trim().toUpperCase();
      const exact = commands.find((c) => c.name === typed || c.aliases.includes(typed));
      run(exact ?? suggestions[active], value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      if (value || showHelp) {
        setValue("");
        setShowHelp(false);
        pushLines([{ kind: "out", text: "*Cancel*" }]);
      } else inputRef.current?.blur();
    }
  };

  const groups = ["Pages", "Categories", "Case studies", "Links"] as const;

  return (
    <div className="cmdline" data-open={open}>
      {open && (
        <div className="cmd-pop" role="listbox" id={listId} aria-label={showHelp ? "All commands" : "Matching commands"}>
          {showHelp
            ? groups.map((g) => (
                <div key={g} className="cmd-group">
                  <p className="cmd-group-name">{g}</p>
                  {commands
                    .filter((c) => c.group === g)
                    .map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        role="option"
                        aria-selected={false}
                        className="cmd-opt"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => run(c, c.name)}
                      >
                        <span className="cmd-name">{c.name}</span>
                        <span className="cmd-label">{c.label}</span>
                      </button>
                    ))}
                </div>
              ))
            : suggestions.map((c, i) => (
                <button
                  key={c.name}
                  id={`${listId}-${i}`}
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  className="cmd-opt"
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => run(c, c.name)}
                >
                  <span className="cmd-name">{c.name}</span>
                  <span className="cmd-label">{c.label}</span>
                </button>
              ))}
        </div>
      )}
      <div className="cmd-history" aria-live="polite">
        {lines.map((l, i) => (
          <p key={i} className={`cmd-line cmd-${l.kind}`}>{l.text}</p>
        ))}
      </div>
      <div className="cmd-bar">
        <label htmlFor="cmd-input" className="cmd-prompt">Command:</label>
        <input
          ref={inputRef}
          id="cmd-input"
          className="cmd-input"
          value={value}
          onChange={(e) => {
            setShowHelp(false);
            setActive(0);
            setValue(e.target.value.toUpperCase());
          }}
          onKeyDown={onInputKey}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setShowHelp(false);
          }}
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={!showHelp && suggestions.length ? `${listId}-${active}` : undefined}
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          placeholder="Type a command, or HELP"
        />
        <button
          type="button"
          className="cmd-help"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            inputRef.current?.focus();
            setShowHelp((v) => !v);
          }}
          aria-pressed={showHelp}
        >
          HELP
        </button>
      </div>
    </div>
  );
}
