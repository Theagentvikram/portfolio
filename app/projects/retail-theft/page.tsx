"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const meta = {
  id: "06",
  name: "Retail Theft Detection",
  tagline: "Real-time computer vision system for loss prevention",
  status: "Published",
  period: "2024",
  role: "Researcher",
  tags: ["Python", "YOLOv8", "DeepSORT", "OpenCV", "TensorFlow", "Computer Vision", "NumPy"],
};

const pipeline = [
  { step: "01", name: "Frame Capture", desc: "RTSP stream or video file ingested at 25fps via OpenCV." },
  { step: "02", name: "Person Detection", desc: "YOLOv8 runs inference on each frame, detecting persons with bounding boxes." },
  { step: "03", name: "Multi-Object Tracking", desc: "DeepSORT assigns persistent IDs to each detected person across frames." },
  { step: "04", name: "Behavior Analysis", desc: "Trajectory and dwell-time analysis flags suspicious patterns (loitering, concealment zones)." },
  { step: "05", name: "Alert Generation", desc: "Flagged events logged with timestamps, track IDs, and annotated frame snapshots." },
];

const sections = [
  {
    label: "Background",
    content:
      "Retail theft costs businesses billions annually. Most loss prevention relies on reactive CCTV review after an incident. This research explores a proactive, automated approach using deep learning for real-time detection and tracking.",
  },
  {
    label: "Technical Approach",
    content:
      "YOLOv8 was chosen for its balance of speed and accuracy — it runs at real-time fps on consumer-grade hardware. DeepSORT extends single-frame detection to full trajectory tracking by combining Kalman filter predictions with deep appearance features (Re-ID). The behavior analysis layer uses heuristic rules derived from LP domain knowledge: dwell time in high-theft zones, occlusion events near shelves, and unusual trajectory patterns.",
  },
  {
    label: "Results",
    content:
      "The system achieved high detection accuracy on the evaluation dataset. False positive rate was kept low through a confidence threshold tuned to minimize unnecessary alerts. The paper was accepted and published in the IJSREM peer-reviewed journal — my first academic publication.",
  },
  {
    label: "Learnings",
    content:
      "This project taught me the gap between academic benchmarks and real-world deployment. Lighting variation, camera angle, and occlusion are far harder in-the-wild than in curated datasets. The next iteration would incorporate domain adaptation and a confidence calibration layer.",
  },
];

const highlights = [
  { label: "Detection", value: "YOLOv8" },
  { label: "Tracking", value: "DeepSORT" },
  { label: "Published", value: "IJSREM" },
  { label: "Year", value: "2024" },
];

export default function RetailTheftPage() {
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

          {/* Publication badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500/8 border border-blue-500/20 text-blue-400 text-sm">
            <BookOpen size={14} />
            Published in IJSREM — International Journal of Scientific Research in Engineering and Management
          </div>
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

        {/* Detection pipeline */}
        <AnimateIn className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF0000]/60 mb-5">Detection Pipeline</h2>
          <div className="space-y-3">
            {pipeline.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)]"
              >
                <span className="text-xs font-mono text-[#FF0000]/50 mt-0.5 shrink-0">{p.step}</span>
                <div>
                  <div className="font-600 text-[var(--text)] text-sm mb-0.5">{p.name}</div>
                  <div className="text-sm text-[var(--text-muted)]">{p.desc}</div>
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
            <Link href="/projects/collateralqc" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF0000] text-white text-sm hover:bg-[#FF3333] transition-colors cursor-pointer">
              Back to CollateralQC <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
