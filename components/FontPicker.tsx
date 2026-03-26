"use client";

import { useEffect, useState } from "react";

type FontOption = "plus-jakarta" | "outfit" | "dm-sans" | "onest" | "geist";

const FONTS: { id: FontOption; label: string; cssVar: string; desc: string }[] = [
  { id: "plus-jakarta", label: "Plus Jakarta",  cssVar: "var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif", desc: "refined" },
  { id: "outfit",       label: "Outfit",         cssVar: "var(--font-outfit), 'Outfit', sans-serif",                  desc: "geometric" },
  { id: "dm-sans",      label: "DM Sans",        cssVar: "var(--font-dm-sans), 'DM Sans', sans-serif",                desc: "smooth" },
  { id: "onest",        label: "Onest",          cssVar: "var(--font-onest), 'Onest', sans-serif",                    desc: "distinctive" },
  { id: "geist",        label: "Geist",          cssVar: "var(--font-geist), 'Geist', sans-serif",                    desc: "techy" },
];

export default function FontPicker() {
  const [active, setActive] = useState<FontOption>("plus-jakarta");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("font") as FontOption | null;
    if (stored && FONTS.some((f) => f.id === stored)) {
      setActive(stored);
      document.documentElement.setAttribute("data-font", stored);
    } else {
      document.documentElement.setAttribute("data-font", "plus-jakarta");
    }
  }, []);

  function pick(id: FontOption) {
    setActive(id);
    localStorage.setItem("font", id);
    document.documentElement.setAttribute("data-font", id);
    setOpen(false);
  }

  const activeFont = FONTS.find((f) => f.id === active)!;

  return (
    <div className="relative" style={{ zIndex: 9999 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch font"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          borderRadius: "6px",
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          color: "var(--text-muted)",
          fontSize: "0.75rem",
          fontFamily: activeFont.cssVar,
          fontWeight: 600,
          letterSpacing: "0.01em",
          cursor: "none",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,0,0,0.4)";
          (e.currentTarget as HTMLElement).style.color = "var(--text)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
        }}
      >
        Aa
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ opacity: 0.4 }}>
          <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div
            style={{ position: "fixed", inset: 0, zIndex: 9998 }}
            onClick={() => setOpen(false)}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              minWidth: "200px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
              zIndex: 9999,
            }}
          >
            {FONTS.map((f) => (
              <button
                key={f.id}
                onClick={() => pick(f.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderRadius: "6px",
                  border: "none",
                  background: active === f.id ? "rgba(255,0,0,0.08)" : "transparent",
                  cursor: "none",
                  transition: "background 0.15s",
                  width: "100%",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (active !== f.id)
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card2)";
                }}
                onMouseLeave={(e) => {
                  if (active !== f.id)
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: f.cssVar,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: active === f.id ? "#FF3333" : "var(--text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.label}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: active === f.id ? "rgba(255,51,51,0.6)" : "var(--text-dim)",
                    fontFamily: "var(--font-jetbrains), monospace",
                    letterSpacing: "0.04em",
                  }}
                >
                  {f.desc}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
