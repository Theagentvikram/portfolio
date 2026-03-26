"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const meta = {
  id: "05",
  name: "ResuMatch",
  tagline: "AI resume-to-job matching SaaS for recruiters",
  status: "Shipped",
  period: "2024",
  role: "Engineer",
  tags: ["FastAPI", "LangChain", "React", "ChromaDB", "PostgreSQL", "Docker", "OpenAI"],
};

const flows = [
  { actor: "Recruiter", steps: ["Post job description", "Set requirements", "View ranked candidates"] },
  { actor: "Candidate", steps: ["Upload resume (PDF)", "Browse matched jobs", "See fit score + gaps"] },
];

const sections = [
  {
    label: "The Problem",
    content:
      "Recruiters receive hundreds of resumes and manually screen them — a slow, inconsistent process. Candidates don't know why they're rejected. ResuMatch automates matching using vector embeddings and LangChain scoring so both sides get value.",
  },
  {
    label: "Technical Approach",
    content:
      "Resumes and job descriptions are both embedded using OpenAI text-embedding-3-small and stored in ChromaDB. At match time, cosine similarity gives a base score. A LangChain chain then runs a structured scoring pass — checking skills overlap, experience alignment, and education fit — to produce a weighted composite score with an explanation.",
  },
  {
    label: "The Interface",
    content:
      "Recruiters get a dashboard with a ranked list of candidates per job, each with a match score, a match summary, and highlighted gaps. Candidates get a portal showing their top-matched job listings with suggestions for how to improve their fit score.",
  },
];

const highlights = [
  { label: "Matching Engine", value: "Vector+LLM" },
  { label: "Backend", value: "FastAPI" },
  { label: "Vector DB", value: "ChromaDB" },
  { label: "Status", value: "Shipped" },
];

export default function ResuMatchPage() {
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
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">{meta.status}</span>
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
                <div className="text-2xl font-800 text-[#FF0000] mb-1">{value}</div>
                <div className="text-xs text-[var(--text-dim)] font-mono">{label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* User flows */}
        <AnimateIn className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-5">User Flows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flows.map((f, i) => (
              <motion.div
                key={f.actor}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)]"
              >
                <div className="text-sm font-700 text-[var(--text)] mb-3">{f.actor}</div>
                <ol className="space-y-2">
                  {f.steps.map((step, j) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <span className="text-xs font-mono text-[#FF0000]/50 w-4">{j + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
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
            <Link href="/projects/retail-theft" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF0000] text-white text-sm hover:bg-[#FF3333] transition-colors cursor-pointer">
              Next: Retail Theft Detection <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
