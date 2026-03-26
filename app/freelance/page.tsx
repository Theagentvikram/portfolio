"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useAnimationFrame,
  animate,
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

// ── Color transition: red → green on page mount ───────────────────────────
// We interpolate a single "brand hue" from 0 (red) → 115 (green) over 1.8s
// Everything reads from this single source of truth.
function useBrandColor() {
  const hue = useMotionValue(0); // starts red (hue=0)

  useEffect(() => {
    // Delay slightly so user sees the nav turn green as they land
    const timeout = setTimeout(() => {
      animate(hue, 115, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // spring-like easing
      });
    }, 120);
    return () => clearTimeout(timeout);
  }, [hue]);

  // Slow oscillation after initial transition (green band: 105↔130)
  const t = useRef(0);
  const settled = useRef(false);
  useAnimationFrame((_, delta) => {
    if (!settled.current) {
      if (hue.get() >= 113) settled.current = true;
      return;
    }
    t.current += delta * 0.000022;
    hue.set(Math.sin(t.current * Math.PI * 2) * 12.5 + 115);
  });

  return hue;
}

// Derive CSS color strings from a live hue value
function useColorFromHue(hue: ReturnType<typeof useMotionValue<number>>) {
  const [c, setC] = useState({
    base:   "hsl(0,100%,40%)",
    bright: "hsl(0,100%,50%)",
    dim:    "hsla(0,100%,40%,0.12)",
    border: "hsla(0,100%,40%,0.30)",
    text:   "hsl(0,100%,55%)",
    glow:   "hsla(0,100%,40%,0.18)",
  });

  useEffect(() => {
    return hue.on("change", (h) => {
      setC({
        base:   `hsl(${h},100%,38%)`,
        bright: `hsl(${h},100%,48%)`,
        dim:    `hsla(${h},100%,38%,0.12)`,
        border: `hsla(${h},100%,38%,0.30)`,
        text:   `hsl(${h},100%,52%)`,
        glow:   `hsla(${h},100%,38%,0.20)`,
      });
    });
  }, [hue]);

  return c;
}

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
function FloatingOrb({ C }: { C: ReturnType<typeof useColorFromHue> }) {
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
        background: `radial-gradient(circle, ${C.glow} 0%, transparent 65%)`,
        filter: "blur(70px)",
        transition: "background 0.5s ease",
      }}
    />
  );
}

// ── Pulse rings ───────────────────────────────────────────────────────────
function PulseRings({ C }: { C: ReturnType<typeof useColorFromHue> }) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full pointer-events-none border"
          style={{ borderColor: C.border }}
          initial={{ width: 180, height: 180, x: "-50%", y: "-50%", opacity: 0.5 }}
          animate={{ width: 180 + i * 240, height: 180 + i * 240, opacity: 0 }}
          transition={{ duration: 4.5, delay: i * 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

// ── Stat with live border ─────────────────────────────────────────────────
function StatItem({ value, label, prefix = "", suffix = "", C }: {
  value: number; label: string; prefix?: string; suffix?: string;
  C: ReturnType<typeof useColorFromHue>;
}) {
  return (
    <div className="border-l-2 pl-5 py-1" style={{ borderColor: C.base }}>
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
  const hue = useBrandColor();
  const C   = useColorFromHue(hue);
  const heroWords = ["Full-Stack", "AI", "Engineer."];

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg)] pointer-events-none" />
        <FloatingOrb C={C} />

        {/* Horizontal streak */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${C.border} 30%, ${C.glow} 50%, ${C.border} 70%, transparent 100%)`, transition: "background 0.5s ease" }}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">

          {/* ── Profile card (Upwork style) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-10"
          >
            <div
              className="inline-flex items-center gap-5 p-5 rounded-2xl border backdrop-blur-sm"
              style={{ borderColor: C.border, background: `linear-gradient(135deg, ${C.dim} 0%, transparent 70%)`, transition: "border-color 0.5s ease, background 0.5s ease" }}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="w-16 h-16 rounded-full overflow-hidden border-2 flex items-center justify-center text-white text-xl font-800"
                  style={{ borderColor: C.base, background: C.base, transition: "border-color 0.5s ease, background 0.5s ease" }}
                >
                  AC
                </div>
                {/* Online dot */}
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-[var(--bg)] animate-pulse"
                  style={{ background: C.base, transition: "background 0.5s ease" }}
                />
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-base font-700 text-[var(--text)]">Abhi C.</span>
                  <BadgeCheck size={16} style={{ color: C.base, transition: "color 0.5s ease" }} />
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{ background: C.dim, color: C.text, border: `0.5px solid ${C.border}`, transition: "all 0.5s ease" }}
                  >
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--text-dim)] mb-1">
                  <MapPin size={11} /> Hyderabad, India
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-700" style={{ color: C.base, transition: "color 0.5s ease" }}>$20.00/hr</span>
                  <span className="text-xs text-[var(--text-dim)] font-mono">· Machine Learning · Full-Stack AI</span>
                </div>
              </div>

              {/* Upwork CTA inside card */}
              <motion.a
                href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
                className="ml-auto hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-600 shrink-0"
                style={{ background: C.base, transition: "background 0.5s ease" }}
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
                  style={{ color: word === "AI" ? C.base : "var(--text)", transition: "color 0.5s ease" }}
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-white font-600 text-sm"
              style={{ background: C.base, transition: "background 0.5s ease" }}
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
            <StatItem value={20}  prefix="$" suffix="/hr"   label="Upwork Rate"              C={C} />
            <StatItem value={1}   suffix=" active"          label="Upwork Jobs"               C={C} />
            <StatItem value={3}   suffix="+ yrs"            label="AI/ML Engineering"         C={C} />
            <StatItem value={100} suffix="k+"               label="Readers — TechAbhee·Quora" C={C} />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 bg-[var(--bg-surface)]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: C.base, transition: "color 0.5s ease" }}>Services</p>
            <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">What I Offer</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.13}>
                <motion.div
                  className="shimmer-card group h-full p-6 rounded-xl border bg-[var(--bg-card)] overflow-hidden relative"
                  style={{ borderColor: "var(--border-lt)" }}
                  whileHover={{ y: -5, borderColor: C.border }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="shimmer-overlay" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-2.5 rounded-lg" style={{ background: C.dim, transition: "background 0.5s ease" }}>
                      <svc.Icon size={20} style={{ color: C.base, transition: "color 0.5s ease" }} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-700 text-[var(--text)] mb-2 group-hover:transition-colors duration-300" style={{ transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.base)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >{svc.title}</h3>
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
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: C.base, transition: "color 0.5s ease" }}>Find Me On</p>
            <h2 className="text-3xl font-800 tracking-tight text-[var(--text)]">Platform Presence</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Upwork — full brand card */}
            <AnimateIn delay={0}>
              <motion.a
                href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
                className="group block p-6 rounded-xl border overflow-hidden relative"
                style={{ borderColor: C.border, background: C.dim, transition: "border-color 0.5s ease, background 0.5s ease" }}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${C.glow} 0%, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.base, transition: "background 0.5s ease" }} />
                      <span className="text-xs font-mono uppercase tracking-widest" style={{ color: C.base, transition: "color 0.5s ease" }}>Upwork</span>
                    </div>
                    <ExternalLink size={13} style={{ color: C.base, transition: "color 0.5s ease" }} />
                  </div>
                  <p className="text-xl font-800 text-[var(--text)] mb-1">Active · $20/hr</p>
                  <p className="text-sm text-[var(--text-muted)] mb-3">Full-Stack AI Engineer</p>
                  <div className="flex flex-wrap gap-2">
                    {["Verified", "GitHub Linked", "Open to Contract"].map((b) => (
                      <span key={b} className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{ background: C.dim, color: C.text, border: `0.5px solid ${C.border}`, transition: "all 0.5s ease" }}>
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
                className="group block p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[#B92B27]/40 overflow-hidden relative"
                style={{ borderLeftWidth: "3px", borderLeftColor: "#B92B27" }}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#B92B27]" />
                    <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">Quora</span>
                  </div>
                  <ExternalLink size={13} className="text-[var(--text-dim)] group-hover:text-[#B92B27] transition-colors" />
                </div>
                <p className="text-base font-700 text-[var(--text)] mb-1">AI &amp; ML Writer</p>
                <p className="text-sm text-[var(--text-muted)]">Answering questions on LLMs, RAG,<br />ML pipelines &amp; software engineering</p>
              </motion.a>
            </AnimateIn>

            {/* GitHub */}
            <AnimateIn delay={0.2}>
              <motion.a
                href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[#6e40c9]/40 overflow-hidden relative"
                style={{ borderLeftWidth: "3px", borderLeftColor: "#6e40c9" }}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github size={10} className="text-[#6e40c9]" />
                    <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest">GitHub</span>
                  </div>
                  <ExternalLink size={13} className="text-[var(--text-dim)] group-hover:text-[#6e40c9] transition-colors" />
                </div>
                <p className="text-base font-700 text-[var(--text)] mb-1">Since 2022 · Linked</p>
                <p className="text-sm text-[var(--text-muted)]">Open source, personal projects,<br />ML experiments &amp; tools</p>
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
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: C.base, transition: "color 0.5s ease" }}>Upwork Portfolio</p>
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
                  whileHover={{ borderColor: C.border, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link href={p.href} className="absolute inset-0 z-10" aria-label={`View ${p.name}`} />
                  {/* Animated top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: C.base, transition: "background 0.5s ease" }} />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-[var(--text-dim)]">{p.id}</span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded border"
                            style={{ background: C.dim, color: C.text, borderColor: C.border, transition: "all 0.5s ease" }}>
                            Upwork Portfolio
                          </span>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${p.status === "Production" ? "bg-green-500/10 text-green-400" : "bg-[var(--bg-card2)] text-[var(--text-muted)]"}`}>
                            {p.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-700 text-[var(--text)] transition-colors duration-300 group-hover:text-inherit"
                          style={{ transition: "color 0.2s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = C.base)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                        >{p.name}</h3>
                        <p className="text-xs font-500 mt-0.5" style={{ color: C.base, transition: "color 0.5s ease" }}>{p.role}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-[var(--text-dim)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => ((e.currentTarget as SVGElement).style.color = C.base)}
                      />
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex items-center gap-2 mb-4 p-2.5 rounded-md border"
                      style={{ background: C.dim, borderColor: C.border, transition: "all 0.5s ease" }}>
                      <Star size={12} style={{ color: C.base, transition: "color 0.5s ease" }} className="shrink-0" />
                      <span className="text-xs font-500" style={{ color: C.text, transition: "color 0.5s ease" }}>{p.impact}</span>
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
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: C.base, transition: "color 0.5s ease" }}>My Approach</p>
            <h2 className="text-4xl font-800 tracking-tight text-[var(--text)]">Why Work With Me</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map(({ Icon, title, desc }, i) => (
              <AnimateIn key={title} delay={i * 0.1}>
                <motion.div
                  className="p-6 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] group"
                  whileHover={{ borderColor: C.border, y: -3 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5 p-2.5 rounded-lg" style={{ background: C.dim, transition: "background 0.5s ease" }}>
                      <Icon size={18} style={{ color: C.base, transition: "color 0.5s ease" }} />
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
            <div
              className="relative rounded-2xl p-12 text-center overflow-hidden border"
              style={{ borderColor: C.border, background: `linear-gradient(135deg, ${C.dim} 0%, transparent 60%)`, transition: "all 0.5s ease" }}
            >
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${C.glow} 0%, transparent 65%)`, transition: "background 0.5s ease" }} />

              {/* Animated top bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: C.base, transition: "background 0.5s ease" }}
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-5">
                  <MapPin size={14} style={{ color: C.base, transition: "color 0.5s ease" }} />
                  <span className="text-sm text-[var(--text-muted)] font-mono">Hyderabad, India · Remote Worldwide</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-800 tracking-tight text-[var(--text)] mb-4">
                  Ready to build something{" "}
                  <span style={{ color: C.base, transition: "color 0.5s ease" }}>real?</span>
                </h2>
                <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-8">
                  Open to AI/ML engineering contracts, document intelligence, RAG systems, and full-stack SaaS builds.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.a
                    href={UPWORK_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-white font-600 text-sm"
                    style={{ background: C.base, transition: "background 0.5s ease" }}
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
