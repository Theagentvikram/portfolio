"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ExternalLink, MapPin, Zap } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const featuredProjects = [
  {
    id: "01",
    name: "CollateralQC",
    role: "ML Engineer @ Syncd Analytics",
    desc: "AI-powered QC platform for real-estate appraisals. Automated 194 deterministic rules, reduced manual review time by 60–80%.",
    tags: ["Python", "Flask", "Next.js", "ChromaDB", "OpenAI", "DSPy"],
    href: "/projects/collateralqc",
  },
  {
    id: "02",
    name: "JobEasy",
    role: "Founder & Engineer",
    desc: "AI hiring assistant SaaS — ATS scanner, resume manager, job tracker, and AutoApply. Built end-to-end from scratch.",
    tags: ["React", "FastAPI", "LangChain", "PostgreSQL"],
    href: "/projects/jobeasy",
  },
  {
    id: "03",
    name: "MeetNote",
    role: "Founder & Engineer",
    desc: "Chrome extension + native Swift macOS app for real-time meeting transcription and AI summaries.",
    tags: ["Swift", "Chrome Extension", "OpenAI Whisper", "FastAPI"],
    href: "/projects/meetnote",
  },
];

const stats = [
  { value: "3+", label: "Years building AI" },
  { value: "100k+", label: "Blog readers (TechAbhee)" },
  { value: "6+", label: "Shipped products" },
  { value: "GATE AIR", label: "4800 — 2025" },
];

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, delay: i * 0.09, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  const heroWords = ["AI/ML", "Engineer", "&", "Builder."];

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden">
        {/* Large off-center red orb — top right */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,0,0,0.13) 0%, rgba(255,0,0,0.04) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Smaller warm orb — bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(200,0,0,0.10) 0%, rgba(255,60,0,0.04) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle red horizontal streak across center */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.12) 30%, rgba(255,0,0,0.18) 50%, rgba(255,0,0,0.12) 70%, transparent 100%)",
          }}
        />

        <div className="max-w-6xl mx-auto w-full">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="brand-tag">
              Open to new opportunities — Hyderabad, India
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2"
          >
            <p className="text-sm font-mono text-[var(--text-dim)] tracking-widest uppercase">
              Abhinay Cherupally
            </p>
          </motion.div>

          {/* Hero headline */}
          <div className="overflow-hidden mb-6 pb-3">
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-[clamp(3rem,8vw,6.5rem)] font-800 leading-none tracking-tight text-[var(--text)]"
                >
                  {word === "&" ? (
                    <span className="text-[#FF0000]">&amp;</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-xl text-lg text-[var(--text-muted)] leading-relaxed mb-10"
          >
            I build intelligent systems and full-stack products — from
            production ML pipelines to sleek user interfaces. Founder of{" "}
            <a
              href="https://techabhee.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#FF3333] transition-colors cursor-pointer"
            >
              TechAbhee.me
            </a>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF0000] text-white font-600 text-sm hover:bg-[#FF3333] transition-colors duration-200 cursor-pointer"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm font-500 hover:border-[#FF0000]/40 hover:text-[var(--text)] transition-colors duration-200 cursor-pointer"
            >
              Contact Me
            </Link>
            <a
              href="https://github.com/Theagentvikram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-[var(--border)] text-[var(--text-dim)] text-sm hover:text-[var(--text)] hover:border-[var(--border)] transition-colors duration-200 cursor-pointer"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/AbhiCherupally"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-[var(--border)] text-[var(--text-dim)] text-sm hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors duration-200 cursor-pointer"
            >
              <Linkedin size={16} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="border-l-2 border-[#FF0000]/30 pl-4">
                <div className="text-2xl font-800 text-[var(--text)] tracking-tight">
                  {value}
                </div>
                <div className="text-xs text-[var(--text-dim)] mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* ── Featured Projects ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-14">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-2">
                  Selected Work
                </p>
                <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">
                  What I&apos;ve Built
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#FF3333] transition-colors cursor-pointer"
              >
                All Projects <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            {featuredProjects.map((p, i) => (
              <AnimateIn key={p.id} delay={i * 0.12}>
                <Link
                  href={p.href}
                  className="group relative block rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] overflow-hidden hover:border-[#FF0000]/40 hover:shadow-lg hover:shadow-[#FF0000]/5 transition-all duration-300 cursor-pointer"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF0000]/20 group-hover:bg-[#FF0000] transition-colors duration-300" />
                  {/* Large number watermark */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[6rem] font-800 text-[var(--border-lt)] leading-none select-none pointer-events-none group-hover:text-[#FF0000]/8 transition-colors duration-300">
                    {p.id}
                  </div>

                  <div className="relative pl-7 pr-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-700 text-[var(--text)] group-hover:text-[#FF0000] transition-colors">
                          {p.name}
                        </h3>
                        <span className="text-xs text-[var(--text-dim)] font-mono hidden md:inline">
                          — {p.role}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl mb-3">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[var(--text-dim)] group-hover:text-[#FF0000] group-hover:translate-x-1 transition-all shrink-0 hidden md:block"
                    />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="mt-6 md:hidden">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-md border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[#FF3333] hover:border-[#FF0000]/30 transition-colors cursor-pointer"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section className="py-24 px-6 bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-14">
            <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-2">
              Expertise
            </p>
            <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">
              What I Do
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "ML Engineering",
                desc: "Production ML pipelines, deterministic QC engines, NLP systems, computer vision (YOLOv8), and fine-tuning LLMs with LoRA/QLoRA.",
                href: "/skills",
              },
              {
                icon: "⚡",
                title: "GenAI Applications",
                desc: "RAG systems, LangChain agents, DSPy-powered pipelines, OpenAI/Mistral/Ollama integrations, and ChromaDB vector search.",
                href: "/skills",
              },
              {
                icon: "🔧",
                title: "Full-Stack Dev",
                desc: "React/Next.js frontends, FastAPI & Flask backends, PostgreSQL/MongoDB databases, Docker, AWS — end-to-end product delivery.",
                href: "/skills",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.12}>
                <Link
                  href={item.href}
                  className="group block h-full p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[#FF0000]/30 hover:bg-[var(--bg-card2)] transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl mb-4" aria-hidden>
                    <Zap
                      size={24}
                      className="text-[#FF0000] group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-700 text-[var(--text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Bio ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
                About Me
              </p>
              <h2 className="text-4xl font-800 tracking-tight text-[var(--text)] mb-5">
                Engineer. Founder.{" "}
                <span className="text-[#FF0000]">Builder.</span>
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                I&apos;m Abhi — a final-year B.Tech AI &amp; ML student at SNIST,
                Hyderabad. I&apos;ve been shipping software since 2020, starting with
                TechAbhee.dev (a tech blog that grew to 100k+ readers) to ML
                systems in production at Syncd Analytics.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                I love the full stack — from training models to deploying
                polished UIs. Currently building at Syncd and working on JobEasy
                &amp; MeetNote on the side.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm text-[#FF0000] hover:text-[#FF3333] transition-colors cursor-pointer font-600"
                >
                  Full Story <ArrowRight size={14} />
                </Link>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
                >
                  Experience <ArrowRight size={14} />
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "University", value: "SNIST, Hyderabad" },
                  { label: "Degree", value: "B.Tech AI & ML" },
                  { label: "Current Role", value: "ML Engineer @ Syncd" },
                  { label: "Location", value: "Hyderabad, India" },
                  { label: "Blog", value: "TechAbhee.dev" },
                  { label: "Status", value: "Open to Work" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-lg border border-[var(--border-lt)] bg-[var(--bg-card)]"
                  >
                    <div className="text-xs font-mono text-[var(--text-dim)] mb-1">
                      {label}
                    </div>
                    <div className="text-sm font-500 text-[var(--text)]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="relative rounded-2xl border border-[#FF0000]/20 bg-gradient-to-br from-[#FF0000]/5 to-transparent p-12 text-center overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,0,0,0.05) 0%, transparent 70%)",
                }}
              />
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={14} className="text-[#FF0000]" />
                <span className="text-sm text-[var(--text-muted)] font-mono">
                  Hyderabad, India · Remote OK
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-800 tracking-tight text-[var(--text)] mb-4">
                Let&apos;s build something{" "}
                <span className="text-[#FF0000]">great</span>.
              </h2>
              <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-8">
                Open to ML engineering roles, full-stack positions, and
                interesting freelance projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#FF0000] text-white font-600 text-sm hover:bg-[#FF3333] transition-colors duration-200 cursor-pointer"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <a
                  href="https://linkedin.com/in/AbhiCherupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#0A66C2]/40 hover:text-[#0A66C2] transition-colors duration-200 cursor-pointer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
