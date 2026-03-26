"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

type Category = "All" | "AI/ML" | "SaaS" | "Research" | "Tool";

const projects = [
  {
    id: "01",
    name: "CollateralQC",
    category: "AI/ML" as Category,
    status: "Production",
    period: "Aug 2025 – Present",
    role: "ML Engineer (Client Project)",
    desc: "Production AI platform for document quality control in real-estate. Built a deterministic rule engine, RAG document search, and full-stack web application deployed on cloud infrastructure.",
    impact: "60–80% reduction in manual review time",
    tags: ["Python", "Flask", "Next.js", "ChromaDB", "DSPy", "OpenAI GPT-4", "Docker", "AWS", "PostgreSQL"],
    github: null,
    live: null,
    href: "/projects/collateralqc",
    logo: "/logo-collateralqc.png",
  },
  {
    id: "02",
    name: "JobEasy",
    category: "SaaS" as Category,
    status: "Active",
    period: "Mar 2025 – Present",
    role: "Founder & Engineer",
    desc: "AI hiring assistant SaaS platform featuring an ATS resume scanner, resume manager, job application tracker, and AutoApply automation. Built end-to-end — from backend to polished React UI.",
    impact: "Solving the job search grind with AI",
    tags: ["React", "FastAPI", "LangChain", "PostgreSQL", "OpenAI", "Supabase"],
    github: "https://github.com/Theagentvikram",
    live: null,
    href: "/projects/jobeasy",
  },
  {
    id: "03",
    name: "MeetNote",
    category: "Tool" as Category,
    status: "Active",
    period: "Aug 2025 – Present",
    role: "Founder & Engineer",
    desc: "Real-time meeting transcription tool available as a Chrome extension and native Swift macOS app. Generates AI summaries, action items, and searchable transcripts after every meeting.",
    impact: "Never miss a meeting detail again",
    tags: ["Swift", "Chrome Extension", "OpenAI Whisper", "FastAPI", "React"],
    github: "https://github.com/Theagentvikram",
    live: null,
    href: "/projects/meetnote",
  },
  {
    id: "04",
    name: "Nexus — Second Brain",
    category: "AI/ML" as Category,
    status: "Active",
    period: "Jan 2025 – Present",
    role: "Personal Project",
    desc: "RAG-powered knowledge management system. Upload PDFs, notes, and web pages — query them with natural language. Built custom chunking strategies achieving 95% retrieval accuracy.",
    impact: "95% retrieval accuracy",
    tags: ["Python", "ChromaDB", "LangChain", "Ollama", "Mistral", "FastAPI"],
    github: "https://github.com/Theagentvikram",
    live: null,
    href: "/projects/nexus",
  },
  {
    id: "05",
    name: "ResuMatch",
    category: "SaaS" as Category,
    status: "Shipped",
    period: "2024",
    role: "Engineer",
    desc: "Resume matching SaaS platform. Recruiters upload job descriptions, candidates upload resumes — the system ranks and matches using vector embeddings and LangChain scoring.",
    impact: "End-to-end resume intelligence",
    tags: ["FastAPI", "LangChain", "React", "ChromaDB", "PostgreSQL", "Docker"],
    github: "https://github.com/Theagentvikram",
    live: null,
    href: "/projects/resumatch",
  },
  {
    id: "06",
    name: "Retail Theft Detection",
    category: "Research" as Category,
    status: "Published",
    period: "2024",
    role: "Researcher",
    desc: "Real-time retail theft detection system using YOLOv8 for person detection and DeepSORT for multi-object tracking. Achieves high accuracy on surveillance footage. Published in IJSREM Journal.",
    impact: "Published in IJSREM peer-reviewed journal",
    tags: ["Python", "YOLOv8", "DeepSORT", "OpenCV", "TensorFlow", "Computer Vision"],
    github: "https://github.com/Theagentvikram",
    live: null,
    href: "/projects/retail-theft",
  },
];

const categories: Category[] = ["All", "AI/ML", "SaaS", "Research", "Tool"];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-12">
          <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-4">
            Projects
          </h1>
          <p className="text-[var(--text-muted)] max-w-lg">
            A mix of production systems, side projects, and research — spanning
            ML engineering, GenAI, and full-stack development.
          </p>
        </AnimateIn>

        {/* Filter tabs */}
        <AnimateIn className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-md text-sm font-500 transition-all duration-200 cursor-pointer border ${
                  active === cat
                    ? "bg-[#FF0000] text-white border-[#FF0000]"
                    : "bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--text-dim)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[#FF0000]/30 hover:bg-[var(--bg-card2)] transition-all duration-300 overflow-hidden"
              >
                {/* Clickable overlay to detail page */}
                <Link href={p.href} className="absolute inset-0 z-10" aria-label={`View ${p.name} project`} />

                <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {/* Logo if available */}
                    {"logo" in p && p.logo && (
                      <div className="mb-3">
                        <Image src={p.logo as string} alt={p.name} width={120} height={32} className="object-contain h-7 w-auto" />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#FF0000]/50">
                        {p.id}
                      </span>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          p.status === "Production"
                            ? "bg-green-500/10 text-green-400"
                            : p.status === "Published"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-[#FF0000]/10 text-[#FF3333]"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <h2 className="text-xl font-700 text-[var(--text)] group-hover:text-[#FF0000] transition-colors">
                      {p.name}
                    </h2>
                    <p className="text-xs text-[var(--text-dim)] mt-0.5">{p.period}</p>
                  </div>
                  <div className="relative z-20 flex gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md border border-[var(--border)] text-[var(--text-dim)] hover:text-[var(--text)] hover:border-[var(--text-dim)] transition-colors cursor-pointer"
                        aria-label={`GitHub for ${p.name}`}
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md border border-[var(--border)] text-[var(--text-dim)] hover:text-[#FF3333] hover:border-[#FF0000]/30 transition-colors cursor-pointer"
                        aria-label={`Live demo for ${p.name}`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Role */}
                <p className="text-xs text-[#FF0000]/70 font-500 mb-3">
                  {p.role}
                </p>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Impact */}
                <div className="flex items-center gap-2 mb-4 p-2.5 rounded-md bg-[#FF0000]/5 border border-[#FF0000]/10">
                  <ArrowUpRight size={13} className="text-[#FF0000] shrink-0" />
                  <span className="text-xs text-[#FF3333]/80 font-500">
                    {p.impact}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* View detail hint */}
                <div className="mt-4 flex items-center gap-1 text-xs text-[var(--text-dim)] group-hover:text-[#FF3333] transition-colors">
                  <ArrowUpRight size={12} />
                  View case study
                </div>
                </div>{/* end p-6 */}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
