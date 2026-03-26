"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const meta = {
  id: "03",
  name: "MeetNote",
  tagline: "Real-time meeting transcription for Chrome & macOS",
  status: "Active",
  period: "Aug 2025 – Present",
  role: "Founder & Engineer",
  tags: ["Swift", "SwiftUI", "Chrome Extension", "JavaScript", "OpenAI Whisper", "FastAPI", "Python", "React"],
};

const platforms = [
  {
    name: "Chrome Extension",
    desc: "Injects a floating panel into any browser-based meeting (Google Meet, Teams, Zoom web). Captures audio via the Web Audio API, streams to the FastAPI backend, and returns live transcript segments.",
  },
  {
    name: "macOS App (Swift)",
    desc: "Native SwiftUI app that captures system audio directly. Works with any meeting app — not just browser-based ones. Displays live transcript in a minimal floating window that stays on top.",
  },
  {
    name: "AI Summary Engine",
    desc: "After each meeting, GPT-4 processes the full transcript to generate: key decisions, action items with owners, a TL;DR summary, and unresolved questions.",
  },
];

const sections = [
  {
    label: "The Problem",
    content:
      "I was constantly missing details in meetings — jotting half-formed notes while trying to pay attention. Existing tools were either too heavy, required Zoom bots that felt invasive, or only worked with one platform. I wanted something invisible that just worked everywhere.",
  },
  {
    label: "How It Works",
    content:
      "Audio is captured client-side (browser mic or macOS system audio), chunked into 10-second segments, and sent to a FastAPI backend. OpenAI Whisper transcribes each chunk. The transcript streams back to the UI in real-time. At meeting end, the full transcript is passed through a GPT-4 summarization chain to produce structured output.",
  },
  {
    label: "Why Two Platforms",
    content:
      "The Chrome extension covers browser meetings with zero install friction. The macOS app covers native apps like Slack Huddles, FaceTime, Discord, and local recordings. Together they cover 100% of my meeting scenarios — built both to scratch my own itch.",
  },
];

const highlights = [
  { label: "Platforms", value: "2" },
  { label: "ASR Engine", value: "Whisper" },
  { label: "Summary AI", value: "GPT-4" },
  { label: "Latency", value: "<3s" },
];

export default function MeetNotePage() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateIn className="mb-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[#FF3333] transition-colors cursor-pointer">
            <ArrowLeft size={14} /> All Projects
          </Link>
        </AnimateIn>

        <AnimateIn className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-[#FF0000]/50">{meta.id}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FF0000]/10 text-[#FF3333]">{meta.status}</span>
            <span className="text-xs font-mono text-[var(--text-dim)]">{meta.period}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-3">{meta.name}</h1>
          <p className="text-xl text-[var(--text-muted)] mb-2">{meta.tagline}</p>
          <p className="text-sm text-[#FF0000]">{meta.role}</p>
        </AnimateIn>

        <AnimateIn className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map(({ label, value }) => (
              <div key={label} className="p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] text-center">
                <div className="text-3xl font-800 text-[#FF0000] mb-1">{value}</div>
                <div className="text-xs text-[var(--text-dim)] font-mono">{label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Platforms */}
        <AnimateIn className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-5">Platforms</h2>
          <div className="space-y-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)]"
              >
                <div className="w-1.5 shrink-0 rounded-full bg-[#FF0000]/30 mt-1" />
                <div>
                  <h3 className="font-700 text-[var(--text)] mb-1">{p.name}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        <div className="space-y-10 mb-14">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-3">{s.label}</h2>
              <p className="text-[var(--text-muted)] leading-[1.8]">{s.content}</p>
            </motion.div>
          ))}
        </div>

        <AnimateIn className="mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-lt)]">
            <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#FF0000]/30 hover:text-[var(--text)] transition-colors cursor-pointer">
              <ArrowLeft size={14} /> All Projects
            </Link>
            <Link href="/projects/nexus" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF0000] text-white text-sm hover:bg-[#FF3333] transition-colors cursor-pointer">
              Next: Nexus <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
