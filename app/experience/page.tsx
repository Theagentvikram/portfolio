"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

// Upwork logo SVG
const UpworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

const TechAbheeLogo = () => (
  <div className="wordmark text-base tracking-tight leading-none">
    <span className="light">Tech</span>
    <span className="bold">Abhee</span>
  </div>
);

const SyncdLogo = () => (
  <Image src="/logo-collateralqc.png" alt="CollateralQC" width={140} height={32} className="object-contain h-7 w-auto" />
);

const experiences = [
  {
    company: "Syncd Analytics",
    role: "ML Engineer",
    period: "Aug 2025 – Present",
    location: "Hyderabad, India",
    type: "Freelance",
    logo: "syncd",
    upwork: "https://www.upwork.com/freelancers/~01677b33e344495620",
    highlights: [
      "Built and shipped a production AI platform for a real-estate tech client",
      "Engineered a deterministic rule engine with 190+ rules for automated document QC",
      "Designed RAG pipeline for document intelligence using vector search + LLMs",
      "Developed full-stack — Python backend, Next.js frontend, cloud infrastructure",
      "Reduced client's manual review time by 60–80% through automation",
    ],
    tags: ["Python", "Flask", "Django", "Next.js", "ChromaDB", "DSPy", "OpenAI", "Docker", "AWS", "PostgreSQL"],
  },
  {
    company: "Intel",
    role: "ML Intern",
    period: "May 2023 – Jul 2023",
    location: "Remote",
    type: "Internship",
    logo: "intel",
    highlights: [
      "Built a fake news detection NLP system using transformer models",
      "Implemented RAG pipeline on Google Cloud Platform for document retrieval",
      "Worked with NoSQL databases for large-scale data ingestion",
      "Collaborated with Intel's AI research team on production-grade ML tooling",
    ],
    tags: ["Python", "GCP", "Transformers", "RAG", "NoSQL", "NLP", "HuggingFace"],
  },
  {
    company: "TechAbhee",
    role: "Founder & Editor",
    period: "Feb 2020 – Present",
    location: "Hyderabad, India",
    type: "Self-Founded",
    logo: "techabhee",
    highlights: [
      "Founded and grew a tech blog to 100,000+ organic monthly visitors",
      "Covered AI tools, gadgets, smart buys — built a loyal reader community",
      "Managed all aspects: content, SEO, web development, and monetization",
      "Self-taught web development (HTML, CSS, WordPress, then React) to run the site",
    ],
    tags: ["Content Strategy", "SEO", "WordPress", "React", "Web Dev"],
  },
];

const education = {
  degree: "B.Tech — Artificial Intelligence & Machine Learning",
  university: "Sreenidhi Institute of Science & Technology (SNIST)",
  period: "Dec 2021 – Aug 2025",
  location: "Hyderabad, India",
  rank: "Top 5% of department",
  highlights: [
    "Published research in IJSREM Journal — Retail Theft Detection System",
    "GATE 2025 AIR 4800 | GATE 2024 AIR 6000",
    "Relevant courses: Deep Learning, NLP, Computer Vision, Data Structures, DBMS",
    "Final year project: Multi-agent AI system for automated hiring intelligence",
  ],
};

const certs = [
  { name: "Oracle Certified GenAI Professional", date: "Oct 2025" },
  { name: "Oracle Certified Data Science Professional", date: "Oct 2025" },
  { name: "AWS Trained Data Engineer", date: "Oct 2023" },
  { name: "Intel ML Internship Certificate", date: "Jul 2023" },
  { name: "IBM SkillsBuild — Data Science Foundations", date: "Jan 2023" },
  { name: "PMKVY Certificate — Data Science (480 hrs, ESCI)", date: "2022" },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
            Work History
          </p>
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-4">
            Experience
          </h1>
          <p className="text-[var(--text-muted)] max-w-lg">
            From internships to production engineering. Here&apos;s where I&apos;ve
            built my craft.
          </p>
        </AnimateIn>

        {/* Work */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] overflow-hidden hover:border-[#FF0000]/20 transition-colors"
            >
              {/* Top bar */}
              <div className="px-6 py-5 border-b border-[var(--border-lt)] flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-4">
                  {/* Company logo */}
                  <div className="shrink-0">
                    {exp.logo === "intel" && (
                      <svg viewBox="0 0 24 24" className="w-14 h-7" fill="#0071C5">
                        <path d="M2.482 9.491v7.386H4.14V9.491zm.83-2.63a1.007 1.007 0 1 0 0 2.014 1.007 1.007 0 0 0 0-2.014z"/>
                        <path d="M9.574 9.328c-1.007 0-1.688.463-2.053 1.126V9.49H5.87v7.387h1.658v-4.18c0-.948.59-1.564 1.493-1.564.894 0 1.42.578 1.42 1.564v4.18h1.659V12.4c0-1.74-1.007-3.072-2.526-3.072z"/>
                        <path d="M14.477 7.698h-1.659v1.793h-1.007v1.38h1.007v3.483c0 1.38.708 2.223 2.221 2.223.376 0 .8-.073 1.07-.182v-1.38c-.197.072-.43.109-.635.109-.572 0-.997-.29-.997-.916v-3.337h1.632v-1.38h-1.632z"/>
                        <path d="M19.272 9.328c-1.916 0-3.26 1.38-3.26 3.766 0 2.42 1.38 3.766 3.368 3.766 1.26 0 2.194-.5 2.793-1.38l-1.16-.77c-.362.535-.89.826-1.597.826-.948 0-1.693-.59-1.784-1.75h4.7c.018-.218.027-.436.027-.581 0-2.24-1.17-3.877-3.087-3.877zm-1.64 3.014c.145-.984.744-1.69 1.64-1.69.93 0 1.493.68 1.548 1.69z"/>
                        <path d="M23.163 6.861h-1.658v9.016h1.658z"/>
                      </svg>
                    )}
                    {exp.logo === "syncd" && <SyncdLogo />}
                    {exp.logo === "techabhee" && <TechAbheeLogo />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-800 text-[var(--text)]">
                        {exp.role}
                      </h2>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          exp.type === "Full-Time"
                            ? "bg-green-500/10 text-green-400"
                            : exp.type === "Freelance"
                            ? "bg-[#14A800]/10 text-[#14A800]"
                            : exp.type === "Self-Founded"
                            ? "bg-[#FF0000]/10 text-[#FF3333]"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-[#FF0000] font-600 text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <p className="text-sm font-mono text-[var(--text-dim)]">{exp.period}</p>
                  <p className="text-xs text-[var(--text-dim)]">{exp.location}</p>
                  {"upwork" in exp && exp.upwork && (
                    <a
                      href={exp.upwork as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#14A800]/10 border border-[#14A800]/30 text-[#14A800] text-xs font-600 hover:bg-[#14A800]/20 transition-colors cursor-pointer"
                    >
                      <UpworkIcon />
                      Upwork
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-[var(--text-muted)] leading-relaxed">
                      <span className="text-[#FF0000]/50 mt-1 shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <AnimateIn className="mb-20">
          <h2 className="text-2xl font-800 tracking-tight text-[var(--text)] mb-6">
            Education
          </h2>
          <div className="rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] overflow-hidden">
            <div className="px-6 py-5 border-b border-[var(--border-lt)] flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-700 text-[var(--text)]">
                  {education.degree}
                </h3>
                <p className="text-[#FF0000] text-sm font-500 mt-0.5">
                  {education.university}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono text-[var(--text-dim)]">{education.period}</p>
                <p className="text-xs text-[var(--text-dim)]">{education.location}</p>
              </div>
            </div>
            <div className="px-6 py-5">
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#FF0000]/10 text-[#FF3333] text-xs font-600 mb-4">
                {education.rank}
              </div>
              <ul className="space-y-2">
                {education.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[var(--text-muted)] leading-relaxed">
                    <span className="text-[#FF0000]/50 mt-1 shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        {/* Certifications */}
        <AnimateIn className="mb-16">
          <h2 className="text-2xl font-800 tracking-tight text-[var(--text)] mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center justify-between p-4 rounded-lg border border-[var(--border-lt)] bg-[var(--bg-card)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000]" />
                  <span className="text-sm text-[var(--text)] font-500">
                    {cert.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-[var(--text-dim)] shrink-0 ml-2">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF0000] text-white text-sm font-600 hover:bg-[#FF3333] transition-colors cursor-pointer"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#FF0000]/30 hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              See My Projects
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
