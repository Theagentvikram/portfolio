"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const meta = {
  id: "02",
  name: "JobEasy",
  tagline: "AI hiring assistant SaaS — from job search to offer",
  status: "Active",
  period: "Mar 2025 – Present",
  role: "Founder & Engineer",
  tags: ["React", "FastAPI", "LangChain", "PostgreSQL", "OpenAI", "Supabase", "Tailwind CSS"],
};

const features = [
  { name: "ATS Scanner", desc: "Upload your resume and a job description — get an ATS compatibility score, keyword gaps, and rewrite suggestions powered by GPT-4." },
  { name: "Resume Manager", desc: "Version-controlled resume storage with AI-suggested tailoring per job role. Compare versions side by side." },
  { name: "Job Tracker", desc: "Kanban-style board to track applications across stages: Applied → Interview → Offer → Rejected. Never lose track of a lead." },
  { name: "AutoApply", desc: "Automated job application submission to compatible job boards. Fill forms, attach resume, and submit — while you sleep." },
];

const sections = [
  {
    label: "Why I Built This",
    content:
      "Job searching is broken. Candidates spend hours tailoring resumes, tracking applications in messy spreadsheets, and guessing why they never hear back. I experienced this firsthand while job hunting and decided to build the tool I wished existed.",
  },
  {
    label: "The Stack",
    content:
      "React frontend with a component library built on Tailwind. FastAPI backend with async endpoints. LangChain orchestrates the AI resume analysis pipeline with OpenAI GPT-4. PostgreSQL via Supabase for auth + data. The ATS scanner uses custom prompt chains that extract keywords, score matches, and suggest targeted rewrites.",
  },
  {
    label: "Current Status",
    content:
      "Active development. Core features (ATS scanner, resume manager, job tracker) are shipped and in use. AutoApply is in beta with support for select job boards. Working on adding email draft generation and interview prep flashcards.",
  },
];

const highlights = [
  { label: "Core Features", value: "4" },
  { label: "AI Model", value: "GPT-4" },
  { label: "Status", value: "Live" },
  { label: "Stage", value: "Beta" },
];

export default function JobEasyPage() {
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

        {/* Stats */}
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

        {/* Feature grid */}
        <AnimateIn className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-5">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
                  <h3 className="font-600 text-[var(--text)] text-sm">{f.name}</h3>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        {/* Sections */}
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

        {/* Tags */}
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
            <Link href="/projects/meetnote" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF0000] text-white text-sm hover:bg-[#FF3333] transition-colors cursor-pointer">
              Next: MeetNote <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
