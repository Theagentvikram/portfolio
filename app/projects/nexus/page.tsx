"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const meta = {
  id: "04",
  name: "Nexus",
  tagline: "A second brain — RAG-powered knowledge management",
  status: "Active",
  period: "Jan 2025 – Present",
  role: "Personal Project",
  tags: ["Python", "ChromaDB", "LangChain", "Ollama", "Mistral", "FastAPI", "React", "PostgreSQL"],
};

const sections = [
  {
    label: "The Concept",
    content:
      "Nexus is a personal knowledge management system that makes all your saved content queryable. Upload PDFs, paste article URLs, drop in markdown notes — then ask questions across your entire knowledge base with natural language. It's like having a conversation with everything you've ever read.",
  },
  {
    label: "How It Works",
    content:
      "Documents are chunked using a hybrid strategy (semantic + fixed-size with overlap) and embedded using sentence-transformers. Vectors are stored in ChromaDB with rich metadata. At query time, a LangChain retrieval chain fetches the top-k relevant chunks, then Mistral (via Ollama) generates a grounded answer with source citations. The system runs fully locally — no data leaves your machine.",
  },
  {
    label: "What Makes It Different",
    content:
      "Most RAG demos use naive chunking and get poor results on long documents. Nexus uses a custom chunking strategy that respects document structure — headings, paragraphs, and sections stay together. This is why it achieves 95% retrieval accuracy on benchmarked test sets. It also supports multi-document reasoning: ask a question that spans 3 different PDFs and get a synthesized answer.",
  },
  {
    label: "Privacy First",
    content:
      "Everything runs locally. Ollama serves Mistral on your own hardware — no OpenAI API keys, no cloud calls, no data sent anywhere. This makes it viable for notes on sensitive topics, private research, or client documents.",
  },
];

const highlights = [
  { label: "Retrieval Accuracy", value: "95%" },
  { label: "Runs Locally", value: "100%" },
  { label: "LLM", value: "Mistral" },
  { label: "Vector DB", value: "ChromaDB" },
];

export default function NexusPage() {
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

        {/* Pipeline callout */}
        <AnimateIn className="mb-14">
          <div className="rounded-xl border border-[#FF0000]/15 bg-[#FF0000]/4 p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-4">RAG Pipeline</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {["Ingest PDF/URL/MD", "→", "Chunk + Embed", "→", "ChromaDB Store", "→", "Query", "→", "Retrieve k chunks", "→", "Mistral Generate", "→", "Answer + Citations"].map((step, i) => (
                <span key={i} className={step === "→" ? "text-[#FF0000]/40" : "px-3 py-1 rounded bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] font-mono text-xs"}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

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
            <Link href="/projects/resumatch" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF0000] text-white text-sm hover:bg-[#FF3333] transition-colors cursor-pointer">
              Next: ResuMatch <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
