"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const meta = {
  id: "01",
  name: "CollateralQC",
  tagline: "AI-powered QC platform for real-estate appraisals",
  status: "Production",
  period: "Aug 2025 – Present",
  role: "ML Engineer",
  company: "Syncd Analytics",
  tags: ["Python", "Flask", "Next.js", "Django", "ChromaDB", "DSPy", "OpenAI GPT-4", "Docker", "AWS", "PostgreSQL"],
};

const sections = [
  {
    label: "The Problem",
    content:
      "Real-estate appraisal management companies (AMCs) had to manually review hundreds of UAD XML appraisal reports against complex rule sets — a slow, error-prone process consuming 4–6 hours per report. Quality control was inconsistent across reviewers.",
  },
  {
    label: "What I Built",
    content:
      "CollateralQC is a full-stack AI platform that automates this entire workflow. I engineered a 194-rule deterministic QC engine (version 5.0.0) that parses MISMO 2.6/3.6 XML, evaluates compliance rules, and produces a pass/fail/N/A report in seconds. On top of that, I built a RAG-powered Doc Intelligence layer using ChromaDB so reviewers can query appraisal documents naturally.",
  },
  {
    label: "Technical Deep Dive",
    content:
      "The QC engine uses a YAML-defined rule set (TF, IFTHEN, IMAGE, DTD categories) with real MISMO XPath lookups for field extraction. Evidence search scans narrative fields like reconciliation summaries, income analysis, and valuation methods. DSPy powers a rule enhancement system that improves rule accuracy over time. The backend is Django REST + Flask microservices; the frontend is Next.js 14 with Tailwind and React Query. Deployed on DigitalOcean via Docker Compose, with Cloudflare R2 for document storage.",
  },
  {
    label: "Impact",
    content:
      "Reduced manual appraisal review time by 60–80%. Benchmark results on the 7416HEAT test file: PASS=99, FAIL=0, NA=65, VISION=30 — fully deterministic, zero false failures. AMC staff went from spending hours per report to reviewing a pre-scored result in minutes.",
  },
];

const highlights = [
  { label: "Rules Automated", value: "194" },
  { label: "Time Reduction", value: "60–80%" },
  { label: "QC Accuracy", value: "PASS=99" },
  { label: "Stack Layers", value: "5" },
];

export default function CollateralQCPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <AnimateIn className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[#FF3333] transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
        </AnimateIn>

        {/* Hero */}
        <AnimateIn className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#FF0000]/50">{meta.id}</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400">
              {meta.status}
            </span>
            <span className="text-xs font-mono text-[var(--text-dim)]">{meta.period}</span>
          </div>
          <Image src="/logo-collateralqc.png" alt="CollateralQC" width={200} height={48} className="object-contain h-10 w-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-3">
            {meta.name}
          </h1>
          <p className="text-xl text-[var(--text-muted)] mb-2">{meta.tagline}</p>
          <p className="text-sm text-[#FF0000]">
            {meta.role} @ {meta.company}
          </p>
        </AnimateIn>

        {/* Stats */}
        <AnimateIn className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map(({ label, value }) => (
              <div
                key={label}
                className="p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] text-center"
              >
                <div className="text-3xl font-800 text-[#FF0000] mb-1">{value}</div>
                <div className="text-xs text-[var(--text-dim)] font-mono">{label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Content sections */}
        <div className="space-y-10 mb-14">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-3">
                {s.label}
              </h2>
              <p className="text-[var(--text-muted)] leading-[1.8]">{s.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture callout */}
        <AnimateIn className="mb-14">
          <div className="rounded-xl border border-[#FF0000]/15 bg-[#FF0000]/4 p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-4">
              Architecture Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { layer: "Frontend", desc: "Next.js 14, Tailwind CSS, React Query, TypeScript" },
                { layer: "Backend", desc: "Django REST API, Flask microservice, PostgreSQL, Cloudflare R2" },
                { layer: "ML/AI", desc: "QC Engine 5.0.0, ChromaDB RAG, OpenAI GPT-4, DSPy, PDF Extractor" },
              ].map(({ layer, desc }) => (
                <div key={layer} className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)]">
                  <div className="text-xs font-mono text-[#FF0000]/70 mb-1">{layer}</div>
                  <div className="text-sm text-[var(--text-muted)]">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Tags */}
        <AnimateIn className="mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </AnimateIn>

        {/* Nav */}
        <AnimateIn>
          <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-lt)]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#FF0000]/30 hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
            <Link
              href="/projects/jobeasy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF0000] text-white text-sm hover:bg-[#FF3333] transition-colors cursor-pointer"
            >
              Next: JobEasy <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
