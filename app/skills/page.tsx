"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { Award, ChevronDown } from "lucide-react";

// Brand SVG logos
const OracleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#C74634">
    <path d="M16.412 4.412a7.589 7.589 0 0 1 0 15.176H7.588a7.589 7.589 0 0 1 0-15.176h8.824zm0 2.823H7.588a4.765 4.765 0 0 0 0 9.53h8.824a4.765 4.765 0 0 0 0-9.53z"/>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF9900">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.240-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.150.167zM21.698 16.207c-2.626 1.940-6.442 2.970-9.722 2.970-4.598 0-8.74-1.700-11.87-4.526-.247-.223-.025-.527.27-.351 3.384 1.963 7.559 3.147 11.877 3.147 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.612zm1.101-1.262c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.565.695-2.994z"/>
  </svg>
);

const IBMLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#1F70C1">
    <path d="M0 7.174v1.377h5.813c-.144-.48-.24-.936-.288-1.377H0zm6.86 0c.065.445.17.9.32 1.377h9.638c.15-.476.256-.932.32-1.377H6.86zM18.475 7.174c-.048.44-.144.897-.288 1.377H24V7.174h-5.525zM.587 9.938v1.377h6.96a5.928 5.928 0 0 1-.498-1.377H.587zm8.036 0c.148.49.354.955.618 1.377h5.516c.265-.422.471-.887.619-1.377H8.623zm7.279 0a7.312 7.312 0 0 1-.497 1.377h6.96V9.938h-6.463zm-15.315 2.763v1.377h8.1a5.916 5.916 0 0 1-1.458-1.377H.587zm9.803 0c.484.546 1.057.998 1.723 1.327l.06.029.063.021H11.764l.062-.021.06-.029a5.813 5.813 0 0 0 1.723-1.327H10.39zm5.07 0a5.916 5.916 0 0 1-1.459 1.377H24v-1.377h-8.541zm-14.873 2.762V16.84h9.475a7.464 7.464 0 0 1-2.625-1.377H.587zm11.18 0a7.476 7.476 0 0 1-2.624 1.377H24v-1.377H11.767zm-11.18 2.763v1.377h5.525c.144-.48.24-.936.288-1.377H.587zm6.86 0c-.064.445-.17.9-.32 1.377h9.745c-.15-.476-.255-.932-.32-1.377H7.448zm11.027 0c.048.44.144.897.288 1.377H24v-1.377h-5.525zM.587 21.963V23.34H24v-1.377H.587z"/>
  </svg>
);

const IntelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0071C5" xmlns="http://www.w3.org/2000/svg">
    {/* i */}
    <path d="M2.482 9.491v7.386H4.14V9.491zm.83-2.63a1.007 1.007 0 1 0 0 2.014 1.007 1.007 0 0 0 0-2.014z"/>
    {/* n */}
    <path d="M9.574 9.328c-1.007 0-1.688.463-2.053 1.126V9.49H5.87v7.387h1.658v-4.18c0-.948.59-1.564 1.493-1.564.894 0 1.42.578 1.42 1.564v4.18h1.659V12.4c0-1.74-1.007-3.072-2.526-3.072z"/>
    {/* t */}
    <path d="M14.477 7.698h-1.659v1.793h-1.007v1.38h1.007v3.483c0 1.38.708 2.223 2.221 2.223.376 0 .8-.073 1.07-.182v-1.38c-.197.072-.43.109-.635.109-.572 0-.997-.29-.997-.916v-3.337h1.632v-1.38h-1.632z"/>
    {/* e */}
    <path d="M19.272 9.328c-1.916 0-3.26 1.38-3.26 3.766 0 2.42 1.38 3.766 3.368 3.766 1.26 0 2.194-.5 2.793-1.38l-1.16-.77c-.362.535-.89.826-1.597.826-.948 0-1.693-.59-1.784-1.75h4.7c.018-.218.027-.436.027-.581 0-2.24-1.17-3.877-3.087-3.877zm-1.64 3.014c.145-.984.744-1.69 1.64-1.69.93 0 1.493.68 1.548 1.69z"/>
    {/* l */}
    <path d="M23.163 6.861h-1.658v9.016h1.658z"/>
  </svg>
);

const skillGroups = [
  {
    category: "Languages",
    color: "#FF0000",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL", "R", "Swift"],
  },
  {
    category: "ML & AI",
    color: "#FF3333",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "YOLOv8", "OpenCV",
      "DSPy", "NLP", "Vision Models", "Fine-tuning", "LoRA", "QLoRA",
    ],
  },
  {
    category: "GenAI & LLMs",
    color: "#CC0000",
    skills: [
      "LangChain", "Transformers", "Ollama", "Mistral", "OpenAI GPT-4",
      "RAG", "Prompt Engineering", "ChromaDB", "Vector Search",
    ],
  },
  {
    category: "Frontend",
    color: "#FF0000",
    skills: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    category: "Backend",
    color: "#FF3333",
    skills: ["FastAPI", "Flask", "Django", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Data & Databases",
    color: "#CC0000",
    skills: [
      "PostgreSQL", "MongoDB", "MySQL", "ChromaDB", "Supabase",
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter",
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#FF0000",
    skills: ["AWS (EC2, S3, Lambda, EB, Fargate)", "Docker", "Git", "Linux", "OCI", "GitHub Actions", "Cloudflare"],
  },
];

const certifications = [
  {
    name: "Oracle Certified GenAI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    color: "#C74634",
    bg: "from-[#C74634]/10 to-[#C74634]/5",
    border: "border-[#C74634]/30",
    desc: "Certified in designing and implementing Generative AI solutions using Oracle Cloud Infrastructure.",
    logo: OracleLogo,
  },
  {
    name: "Oracle Certified Data Science Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    color: "#C74634",
    bg: "from-[#C74634]/10 to-[#C74634]/5",
    border: "border-[#C74634]/30",
    desc: "Certified in building, evaluating, and deploying ML models on Oracle Cloud Infrastructure.",
    logo: OracleLogo,
  },
  {
    name: "AWS Trained Data Engineer",
    issuer: "Amazon Web Services",
    date: "Oct 2023",
    color: "#FF9900",
    bg: "from-[#FF9900]/10 to-[#FF9900]/5",
    border: "border-[#FF9900]/30",
    desc: "Trained in designing, building, and maintaining data pipelines and data lakes on AWS.",
    logo: AWSLogo,
  },
  {
    name: "Intel ML Internship Certificate",
    issuer: "Intel Corporation",
    date: "Jul 2023",
    color: "#0071C5",
    bg: "from-[#0071C5]/10 to-[#0071C5]/5",
    border: "border-[#0071C5]/30",
    desc: "Completed ML internship building NLP systems and RAG pipelines on GCP with Intel's AI team.",
    logo: IntelLogo,
  },
  {
    name: "IBM SkillsBuild — Data Science Foundations",
    issuer: "IBM",
    date: "Jan 2023",
    color: "#1F70C1",
    bg: "from-[#1F70C1]/10 to-[#1F70C1]/5",
    border: "border-[#1F70C1]/30",
    desc: "Completed IBM's Data Science Foundations curriculum covering Python, ML, and data analysis.",
    logo: IBMLogo,
  },
  {
    name: "PMKVY — Data Science",
    issuer: "ESCI · 480 hrs",
    date: "2022",
    color: "#FF0000",
    bg: "from-[#FF0000]/10 to-[#FF0000]/5",
    border: "border-[#FF0000]/30",
    desc: "480-hour government-recognized Data Science certification under the PMKVY skilling initiative.",
    logo: null,
  },
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateIn delay={index * 0.08}>
      <motion.div
        layout
        onClick={() => setOpen(!open)}
        className={`rounded-xl border bg-gradient-to-br ${cert.bg} ${cert.border} overflow-hidden cursor-pointer select-none transition-shadow hover:shadow-lg`}
        style={{ "--cert-color": cert.color } as React.CSSProperties}
      >
        {/* Top accent stripe */}
        <div className="h-1 w-full" style={{ background: cert.color }} />

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            {/* Logo + info */}
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 p-2.5"
                style={{ background: cert.color + "18", border: `1px solid ${cert.color}35` }}
              >
                {cert.logo ? <cert.logo /> : <Award size={20} style={{ color: cert.color }} />}
              </div>
              <div>
                <div className="font-700 text-[var(--text)] text-sm leading-snug mb-1">
                  {cert.name}
                </div>
                <div className="text-xs text-[var(--text-dim)]">
                  {cert.issuer}
                </div>
              </div>
            </div>
            {/* Date + chevron */}
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className="text-xs font-mono px-2 py-0.5 rounded-md border text-[var(--text-dim)]" style={{ borderColor: cert.color + "40", background: cert.color + "10", color: cert.color }}>
                {cert.date}
              </span>
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} className="text-[var(--text-dim)]" />
              </motion.div>
            </div>
          </div>

          {/* Expandable description */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t flex items-start gap-2" style={{ borderColor: cert.color + "25" }}>
                  <Award size={13} className="shrink-0 mt-0.5" style={{ color: cert.color }} />
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimateIn>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-4">
            Skills & <span className="text-[#FF0000]">Tools</span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-lg">
            A broad stack across ML, GenAI, and full-stack development — built
            through real production work, not just courses.
          </p>
        </AnimateIn>

        {/* Skill groups */}
        <div className="space-y-10 mb-24">
          {skillGroups.map((group, gi) => (
            <AnimateIn key={group.category} delay={gi * 0.07}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: group.color }}
                  />
                  <h2 className="text-sm font-600 uppercase tracking-widest text-[var(--text-dim)]">
                    {group.category}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: gi * 0.05 + si * 0.04,
                        ease: "easeOut",
                      }}
                      className="inline-flex px-3 py-1.5 rounded-md text-sm font-500 border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[#FF0000]/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Certifications */}
        <AnimateIn className="mb-8">
          <h2 className="text-2xl font-800 tracking-tight text-[var(--text)] mb-2">
            Certifications
          </h2>
          <p className="text-sm text-[var(--text-dim)]">
            Industry-recognized credentials from Oracle, AWS, Intel & IBM.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>

        {/* Currently learning */}
        <AnimateIn className="mt-16 p-6 rounded-xl border border-[#FF0000]/15 bg-[#FF0000]/5">
          <p className="text-xs font-mono text-[#FF0000]/60 uppercase tracking-widest mb-2">
            Currently Exploring
          </p>
          <h3 className="text-lg font-700 text-[var(--text)] mb-3">
            Always leveling up
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Agentic AI Systems",
              "Multi-Agent Frameworks",
              "Rust",
              "System Design",
              "LLM Fine-tuning at Scale",
              "Graph RAG",
            ].map((item) => (
              <span key={item} className="brand-tag" style={{ fontSize: "0.72rem" }}>
                {item}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
