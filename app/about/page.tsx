"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, Rss, MapPin, ExternalLink } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const timeline = [
  {
    year: "Aug 2025 – Present",
    title: "ML Engineer",
    org: "Syncd Analytics",
    type: "work",
    desc: "Building a production AI platform for a real-estate tech client. Engineered a deterministic rule engine, RAG pipelines, and full-stack web application. Achieved 60–80% reduction in manual review time.",
    tags: ["Flask", "Next.js", "ChromaDB", "DSPy", "OpenAI", "Docker", "AWS"],
  },
  {
    year: "Dec 2021 – Aug 2025",
    title: "B.Tech — Artificial Intelligence & Machine Learning",
    org: "SNIST, Hyderabad",
    type: "edu",
    desc: "9.02 CGPA. Top 5% of department. Published research paper on Retail Theft Detection in the peer-reviewed IJSREM Journal.",
    tags: ["AI/ML", "Deep Learning", "NLP", "Research", "9.02 CGPA"],
  },
  {
    year: "May – Jul 2023",
    title: "ML Intern",
    org: "Intel",
    type: "work",
    desc: "Built a fake news detection NLP system using transformer models and RAG pipelines on GCP. Worked with NoSQL databases and cutting-edge language models.",
    tags: ["GCP", "Transformers", "RAG", "NoSQL", "NLP"],
  },
  {
    year: "Feb 2020 – Present",
    title: "Founder",
    org: "TechAbhee",
    type: "founder",
    desc: "Built a tech blog and Quora presence from scratch to 200,000+ combined visitors through organic SEO. Covered mobiles, gadgets, software, and AI. The brand that started it all.",
    tags: ["SEO", "Content Strategy", "Affiliate", "Community"],
  },
];

const achievements = [
  {
    icon: Award,
    title: "GATE 2025 — AIR 4800",
    sub: "All India Rank in Computer Science",
  },
  {
    icon: Award,
    title: "GATE 2024 — AIR 6000",
    sub: "All India Rank in Computer Science",
  },
  {
    icon: BookOpen,
    title: "B.Tech — 9.02 CGPA",
    sub: "AI & ML at SNIST · Published in IJSREM Journal",
  },
  {
    icon: Rss,
    title: "200,000+ Combined Visitors",
    sub: "TechAbhee blog + Quora — organic SEO since 2020",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
            About Me
          </p>
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-6">
            The <span className="text-[#FF0000]">Story.</span>
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
              <MapPin size={14} className="text-[#FF0000]" />
              Hyderabad, India
            </div>
            <a
              href="https://techabhee.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#FF0000] hover:text-[#FF3333] transition-colors cursor-pointer font-500"
            >
              <ExternalLink size={13} />
              Read my blog → techabhee.dev
            </a>
          </div>
        </AnimateIn>

        {/* Story */}
        <AnimateIn className="mb-20">
          <div className="space-y-5 text-[var(--text-muted)] leading-[1.8] text-base border-l-2 border-[#FF0000]/20 pl-6">
            <p>
              Back in 2020, right after finishing my 12th standard, I had a massive
              obsession with mobiles and gadgets. I wasn&apos;t in a position to buy and
              test all the latest hardware, so I found another way in: I started
              reviewing free apps and software, sharing highly practical, real-world
              tips for everyday users.
            </p>
            <p>
              That drive to share value led to the birth of my brand,{" "}
              <a
                href="https://techabhee.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:text-[#FF3333] cursor-pointer font-500"
              >
                TechAbhee
              </a>
              . Building that platform from scratch was my real-world bootcamp. I
              taught myself everything required to make it work — blogging, SEO,
              affiliate marketing, cold emailing, and exploring various niches
              including dropshipping. I organically scaled the blog to over 100,000
              visitors and hit another 100,000+ all-time views on Quora. The motive
              behind it was incredibly real.
            </p>
            <p>
              That hands-on experience of scaling a platform naturally pushed me
              toward the technical side of the web. I started diving deep into
              Python, Java, Web Development, and Machine Learning. The deeper I
              went, the clearer it became:{" "}
              <strong className="text-[var(--text)]">AI is my strongest zone.</strong>
            </p>
            <p>
              I interned at Intel, where I built NLP systems for fake news detection
              using transformers and RAG on GCP. That showed me how powerful
              language models could be — and got me hooked on the GenAI space early.
            </p>
            <p>
              Today, I am a builder, designer, blogger, and startup enthusiast. I
              bridge the gap between complex intelligent systems and practical,
              real-world applications. As a Machine Learning Engineer at{" "}
              <strong className="text-[var(--text)]">Syncd Analytics</strong>, I
              engineer the backend AI logic for platforms like CollateralQC. On the
              side, I am constantly shipping SaaS products like{" "}
              <strong className="text-[var(--text)]">JobEasy</strong> and{" "}
              <strong className="text-[var(--text)]">MeetNote</strong>, and even
              hacking together local AI tools in Telugu for my family.
            </p>
            <p>
              Whether I&apos;m writing code, designing a system, or writing a blog post —
              my goal is the same as it was in 2020: to build things that provide
              genuine, practical value.
            </p>
          </div>
        </AnimateIn>

        {/* Blog CTA */}
        <AnimateIn className="mb-20">
          <a
            href="https://techabhee.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-xl border border-[#FF0000]/20 bg-[#FF0000]/5 hover:bg-[#FF0000]/8 hover:border-[#FF0000]/30 transition-all cursor-pointer"
          >
            <div>
              <div className="text-xs font-mono text-[#FF0000]/60 uppercase tracking-widest mb-1">My Blog</div>
              <div className="font-700 text-[var(--text)]">TechAbhee.me</div>
              <div className="text-sm text-[var(--text-muted)] mt-0.5">
                AI, gadgets, software — 200,000+ combined readers
              </div>
            </div>
            <ExternalLink size={18} className="text-[#FF0000]/40 group-hover:text-[#FF0000] transition-colors shrink-0" />
          </a>
        </AnimateIn>

        {/* Timeline */}
        <AnimateIn className="mb-20">
          <h2 className="text-2xl font-800 tracking-tight text-[var(--text)] mb-8">
            Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border-lt)]" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6"
                >
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 ${
                        item.type === "work"
                          ? "bg-[#FF0000] border-[#FF0000]"
                          : item.type === "founder"
                          ? "bg-[#FF3333] border-[#FF3333]"
                          : "bg-[var(--border)] border-[var(--text-dim)]"
                      }`}
                    />
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="text-xs font-mono text-[var(--text-dim)] mb-1">{item.year}</p>
                    <h3 className="text-lg font-700 text-[var(--text)]">{item.title}</h3>
                    <p className="text-sm text-[#FF0000] mb-2 font-500">{item.org}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Achievements */}
        <AnimateIn className="mb-20">
          <h2 className="text-2xl font-800 tracking-tight text-[var(--text)] mb-8">
            Achievements & Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)]"
              >
                <div className="p-2 rounded-md bg-[#FF0000]/10 shrink-0">
                  <Icon size={18} className="text-[#FF0000]" />
                </div>
                <div>
                  <div className="font-600 text-[var(--text)] text-sm">{title}</div>
                  <div className="text-xs text-[var(--text-dim)] mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Certs inline */}
          <div className="mt-6 p-5 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)]">
            <div className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">Certifications</div>
            <div className="flex flex-wrap gap-2">
              {[
                "Oracle Certified GenAI Professional",
                "Oracle Certified Data Science Professional",
                "AWS Trained Data Engineer",
                "Intel ML Internship",
                "IBM SkillsBuild — Data Science",
              ].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Nav links */}
        <AnimateIn>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF0000] text-white text-sm font-600 hover:bg-[#FF3333] transition-colors cursor-pointer"
            >
              See My Work <ArrowRight size={15} />
            </Link>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#FF0000]/30 hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              Full Experience
            </Link>
            <a
              href="https://techabhee.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#FF0000]/30 hover:text-[#FF0000] transition-colors cursor-pointer"
            >
              My Blog <ExternalLink size={14} />
            </a>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
