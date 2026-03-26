"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useAnimationFrame,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  MapPin,
  Star,
  FileText,
  Search,
  Layers,
  CheckCircle2,
  TrendingUp,
  Cpu,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

// ── External links ────────────────────────────────────────────────────────
const UPWORK_URL = "https://www.upwork.com/freelancers/~01677b33e344495620";
const QUORA_URL  = "https://www.quora.com/profile/Abhinay-Cherupally";
const GITHUB_URL = "https://github.com/Theagentvikram";

// ── Animated counter ──────────────────────────────────────────────────────
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1500, 1);
      setDisplay(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(raf);
      else setDisplay(to);
    };
    requestAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// ── Mouse-tracking orb ────────────────────────────────────────────────────
function FloatingOrb() {
  const mouseX  = useMotionValue(0.65);
  const mouseY  = useMotionValue(0.35);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 18 });
  const [pos, setPos] = useState({ left: "65%", top: "35%" });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  useAnimationFrame(() => setPos({ left: `${springX.get() * 100}%`, top: `${springY.get() * 100}%` }));

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...pos,
        width: "780px", height: "780px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,0,0,0.10) 0%, transparent 65%)",
        filter: "blur(70px)",
      }}
    />
  );
}

// ── Pulse rings ───────────────────────────────────────────────────────────
function PulseRings() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full pointer-events-none border border-[#FF0000]/20"
          initial={{ width: 180, height: 180, x: "-50%", y: "-50%", opacity: 0.5 }}
          animate={{ width: 180 + i * 240, height: 180 + i * 240, opacity: 0 }}
          transition={{ duration: 4.5, delay: i * 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

// ── Stat ─────────────────────────────────────────────────────────────────
function StatItem({ value, label, prefix = "", suffix = "" }: {
  value: number; label: string; prefix?: string; suffix?: string;
}) {
  return (
    <div className="border-l-2 border-[#FF0000]/50 pl-5 py-1">
      <div className="text-2xl font-800 text-[var(--text)] tracking-tight tabular-nums">
        <Counter to={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-xs text-[var(--text-dim)] mt-0.5 font-mono">{label}</div>
    </div>
  );
}

// ── Services ──────────────────────────────────────────────────────────────
const services = [
  {
    Icon: FileText,
    title: "Intelligent Document Processing",
    desc: "Extract structured data from PDFs, XMLs, scanned invoices using robust parsers and Vision-Language Models. Hybrid pipelines: fast, cheap, accurate.",
    tags: ["PyMuPDF", "VLMs", "XML/XPath", "Gemini Vision", "OCR"],
  },
  {
    Icon: Search,
    title: "RAG & Semantic Search",
    desc: "History-aware chatbots and search engines that source answers accurately from your proprietary data. Custom chunking, vector embeddings, retrieval tuning.",
    tags: ["LangChain", "ChromaDB", "OpenAI", "Mistral", "Ollama"],
  },
  {
    Icon: Layers,
    title: "Scalable Backend + Full-Stack",
    desc: "Async ML workloads, REST APIs, real-time frontends. End-to-end — from the Celery task queue to the Next.js dashboard.",
    tags: ["Django", "FastAPI", "Celery", "Next.js", "PostgreSQL", "Docker"],
  },
];

// ── Featured work ─────────────────────────────────────────────────────────
const featured = [
  {
    id: "01", name: "CollateralQC", role: "ML Engineer (Client Project)",
    desc: "Production AI platform for document QC in real-estate. 194 deterministic rules, RAG document search, full-stack web app on cloud infra.",
    impact: "60–80% reduction in manual review time",
    tags: ["Python", "Next.js", "ChromaDB", "DSPy", "OpenAI", "Docker"],
    href: "/projects/collateralqc", status: "Production",
  },
  {
    id: "02", name: "Nexus — Second Brain", role: "Personal Project",
    desc: "RAG-powered knowledge management. Upload PDFs, notes, web pages — query with natural language. Custom chunking achieving 95% retrieval accuracy.",
    impact: "95% retrieval accuracy",
    tags: ["Python", "ChromaDB", "LangChain", "Ollama", "Mistral"],
    href: "/projects/nexus", status: "Active",
  },
];

// ── Why hire me ───────────────────────────────────────────────────────────
const reasons = [
  { Icon: TrendingUp,    title: "Business-First",        desc: "Hybrid pipelines — AI where needed, deterministic code where it's cheaper — drastically reducing your API costs." },
  { Icon: Cpu,           title: "End-to-End Delivery",   desc: "Backend, async workers, cloud infra, and the frontend. No hand-off friction — one engineer who owns the stack." },
  { Icon: CheckCircle2,  title: "Production-Grade Code", desc: "CollateralQC processes 100s of documents monthly with zero downtime. Real systems, real teams, not toy demos." },
  { Icon: MessageSquare, title: "Clear Communication",   desc: "Regular updates, clean documentation, honest timelines. You'll always know where the project stands." },
];

// ── Word reveal ───────────────────────────────────────────────────────────
const wordVariant = {
  hidden:  { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.9, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

// ═════════════════════════════════════════════════════════════════════════
// PAGE
// ═════════════════════════════════════════════════════════════════════════
export default function FreelancePage() {
  const heroWords = ["Full-Stack", "AI", "Engineer."];

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg)] pointer-events-none" />
        <FloatingOrb />
        <PulseRings />

        {/* Horizontal streak */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.2) 30%, rgba(255,0,0,0.3) 50%, rgba(255,0,0,0.2) 70%, transparent 100%)" }}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">

          {/* ── Profile card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-5 p-5 rounded-2xl border border-[#FF0000]/25 backdrop-blur-sm bg-[#FF0000]/5">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF0000] bg-[#FF0000] flex items-center justify-center text-white text-xl font-800">
                  AC
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-[var(--bg)] bg-[#FF0000] animate-pulse" />
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-base font-700 text-[var(--text)]">Abhi C.</span>
                  <BadgeCheck size={16} className="text-[#FF0000]" />
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#FF0000]/10 text-[#FF3333] border border-[#FF0000]/25">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--text-dim)] mb-1">
                  <MapPin size={11} /> Hyderabad, India
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-700 text-[#FF0000]">$20.00/hr</span>
                  <span className="text-xs text-[var(--text-dim)] font-mono">· Machine Learning · Full-Stack AI</span>
                </div>
              </div>

              {/* Upwork CTA */}
              <motion.a
                href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
                className="ml-auto hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF0000] text-white text-sm font-600 shrink-0 hover:bg-[#FF3333] transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View on Upwork <ExternalLink size={13} />
              </motion.a>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6 pb-3">
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i} custom={i}
                  variants={wordVariant} initial="hidden" animate="visible"
                  className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-800 leading-none tracking-tight"
                  style={{ color: word === "AI" ? "#FF0000" : "var(--text)" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-2xl text-lg text-[var(--text-muted)] leading-relaxed mb-10"
          >
            Full-Stack AI Engineer | RAG Systems &amp; Complex Data Extraction.
            I build production-ready AI pipelines and robust backend systems — bridging applied AI
            (LLMs, RAG, Semantic Search) with scalable backend architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.a
              href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#FF0000] text-white font-600 text-sm hover:bg-[#FF3333] transition-colors"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              Hire on Upwork <ExternalLink size={14} />
            </motion.a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm font-500 hover:text-[var(--text)] transition-colors duration-200"
            >
              Contact Me <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <StatItem value={20}  prefix="$" suffix="/hr"   label="Upwork Rate" />
            <StatItem value={1}   suffix=" active"          label="Upwork Jobs" />
            <StatItem value={3}   suffix="+ yrs"            label="AI/ML Engineering" />
            <StatItem value={100} suffix="k+"               label="Readers — TechAbhee·Quora" />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-2 text-[#FF0000]">Services</p>
            <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">What I Offer</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.13}>
                <motion.div
                  className="shimmer-card group h-full p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] overflow-hidden relative"
                  whileHover={{ y: -5, borderColor: "rgba(255,0,0,0.3)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="shimmer-overlay" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-2.5 rounded-lg bg-[#FF0000]/10">
                      <svc.Icon size={20} className="text-[#FF0000] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-700 text-[var(--text)] mb-2 group-hover:text-[#FF0000] transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM PRESENCE ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-10">
            <p className="text-xs font-mono uppercase tracking-widest mb-2 text-[#FF0000]">Find Me On</p>
            <h2 className="text-3xl font-800 tracking-tight text-[var(--text)]">Platform Presence</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Upwork */}
            <AnimateIn delay={0}>
              <motion.a
                href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-[#FF0000]/25 bg-[#FF0000]/5 overflow-hidden relative"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,0,0,0.12) 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FF0000]">Upwork</span>
                    </div>
                    <ExternalLink size={13} className="text-[#FF0000]" />
                  </div>
                  <p className="text-xl font-800 text-[var(--text)] mb-1">Active · $20/hr</p>
                  <p className="text-sm text-[var(--text-muted)] mb-3">Full-Stack AI Engineer</p>
                  <div className="flex flex-wrap gap-2">
                    {["Verified", "GitHub Linked", "Open to Contract"].map((b) => (
                      <span key={b} className="text-xs font-mono px-2 py-0.5 rounded bg-[#FF0000]/10 text-[#FF3333] border border-[#FF0000]/20">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </AnimateIn>

            {/* Quora */}
            <AnimateIn delay={0.1}>
              <motion.a
                href={QUORA_URL} target="_blank" rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[#FF0000]/30 overflow-hidden relative"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,0,0,0.05) 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--text-dim)]" />
                      <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">Quora</span>
                    </div>
                    <ExternalLink size={13} className="text-[var(--text-dim)] group-hover:text-[#FF0000] transition-colors" />
                  </div>
                  <p className="text-xl font-800 text-[var(--text)] mb-1">AI &amp; ML Writer</p>
                  <p className="text-sm text-[var(--text-muted)]">Answering questions on LLMs, RAG, ML pipelines &amp; software engineering</p>
                </div>
              </motion.a>
            </AnimateIn>

            {/* GitHub */}
            <AnimateIn delay={0.2}>
              <motion.a
                href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[#FF0000]/30 overflow-hidden relative"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,0,0,0.05) 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Github size={12} className="text-[var(--text-dim)]" />
                      <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">GitHub</span>
                    </div>
                    <ExternalLink size={13} className="text-[var(--text-dim)] group-hover:text-[#FF0000] transition-colors" />
                  </div>
                  <p className="text-xl font-800 text-[var(--text)] mb-1">Since 2022 · Linked</p>
                  <p className="text-sm text-[var(--text-muted)]">Open source, personal projects, ML experiments &amp; tools</p>
                </div>
              </motion.a>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 px-6 bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest mb-2 text-[#FF0000]">Upwork Portfolio</p>
                <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">Featured Work</h2>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                All Projects <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <AnimateIn key={p.id} delay={i * 0.12}>
                <motion.div
                  className="group relative rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] overflow-hidden"
                  whileHover={{ borderColor: "rgba(255,0,0,0.3)", y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link href={p.href} className="absolute inset-0 z-10" aria-label={`View ${p.name}`} />
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FF0000]" />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-[var(--text-dim)]">{p.id}</span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded border bg-[#FF0000]/8 text-[#FF3333] border-[#FF0000]/20">
                            Upwork Portfolio
                          </span>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${p.status === "Production" ? "bg-[var(--bg-card2)] text-[var(--text-muted)]" : "bg-[var(--bg-card2)] text-[var(--text-muted)]"}`}>
                            {p.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-700 text-[var(--text)] group-hover:text-[#FF0000] transition-colors duration-200">{p.name}</h3>
                        <p className="text-xs font-500 mt-0.5 text-[#FF0000]">{p.role}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-[var(--text-dim)] group-hover:text-[#FF0000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex items-center gap-2 mb-4 p-2.5 rounded-md border border-[#FF0000]/20 bg-[#FF0000]/5">
                      <Star size={12} className="text-[#FF0000] shrink-0" />
                      <span className="text-xs font-500 text-[#FF3333]">{p.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HIRE ME ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-2 text-[#FF0000]">My Approach</p>
            <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">Why Work With Me</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map(({ Icon, title, desc }, i) => (
              <AnimateIn key={title} delay={i * 0.1}>
                <motion.div
                  className="p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] group"
                  whileHover={{ borderColor: "rgba(255,0,0,0.3)", y: -3 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5 p-2.5 rounded-lg bg-[#FF0000]/10">
                      <Icon size={18} className="text-[#FF0000]" />
                    </div>
                    <div>
                      <h3 className="text-base font-700 text-[var(--text)] mb-1.5">{title}</h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="relative rounded-2xl p-12 text-center overflow-hidden border border-[#FF0000]/20 bg-gradient-to-br from-[#FF0000]/5 to-transparent">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,0,0,0.07) 0%, transparent 65%)" }} />

              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF0000]"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-5">
                  <MapPin size={14} className="text-[#FF0000]" />
                  <span className="text-sm text-[var(--text-muted)] font-mono">Hyderabad, India · Remote Worldwide</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-800 tracking-tight text-[var(--text)] mb-4">
                  Ready to build something{" "}
                  <span className="text-[#FF0000]">real?</span>
                </h2>
                <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-8">
                  Open to AI/ML engineering contracts, document intelligence, RAG systems, and full-stack SaaS builds.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.a
                    href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#FF0000] text-white font-600 text-sm hover:bg-[#FF3333] transition-colors"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  >
                    Hire on Upwork <ExternalLink size={14} />
                  </motion.a>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:text-[var(--text)] transition-colors duration-200">
                    Contact Me <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  );
}
