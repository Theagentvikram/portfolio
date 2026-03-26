"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, MapPin, Send, Phone } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "cherupallyabhi@gmail.com",
    href: "mailto:cherupallyabhi@gmail.com",
    hover: "hover:text-[#FF3333]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6302323643",
    href: "tel:+916302323643",
    hover: "hover:text-[#22C55E]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Theagentvikram",
    href: "https://github.com/Theagentvikram",
    hover: "hover:text-[var(--text)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/AbhiCherupally",
    href: "https://linkedin.com/in/AbhiCherupally",
    hover: "hover:text-[#0A66C2]",
  },
  {
    icon: ExternalLink,
    label: "Blog",
    value: "techabhee.me",
    href: "https://techabhee.me",
    hover: "hover:text-[#FF0000]",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    value: "upwork.com/freelancers/~01677b33e344495620",
    href: "https://www.upwork.com/freelancers/~01677b33e344495620",
    hover: "hover:text-[#14A800]",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailto = `mailto:cherupallyabhi@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Hi Abhi,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateIn className="mb-16">
          <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-800 tracking-tight text-[var(--text)] mb-4">
            Let&apos;s <span className="text-[#FF0000]">Talk.</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
            <MapPin size={14} className="text-[#FF0000]" />
            Hyderabad, India · Available for remote work globally
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — info */}
          <AnimateIn direction="left">
            <div className="space-y-8">
              <div>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                  I&apos;m open to ML engineering roles, full-stack positions, and
                  interesting freelance or startup collaborations. Whether it&apos;s a
                  job opportunity, a project idea, or just to say hi — reach out!
                </p>
                <div className="brand-tag mb-6">Open to opportunities</div>
              </div>

              {/* Socials */}
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, value, href, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-[var(--border-lt)] bg-[var(--bg-card)] hover:border-[var(--border)] text-[var(--text-muted)] ${hover} transition-all duration-200 cursor-pointer group`}
                  >
                    <div className="p-2 rounded-md bg-[var(--bg-card2)] group-hover:bg-[#FF0000]/10 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-dim)] font-mono mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm font-500 text-[var(--text)]">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick links */}
              <div className="pt-4 border-t border-[var(--border-lt)]">
                <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">
                  Quick Links
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/projects"
                    className="text-sm text-[var(--text-muted)] hover:text-[#FF3333] transition-colors cursor-pointer"
                  >
                    → Projects
                  </Link>
                  <Link
                    href="/experience"
                    className="text-sm text-[var(--text-muted)] hover:text-[#FF3333] transition-colors cursor-pointer"
                  >
                    → Experience
                  </Link>
                  <Link
                    href="/skills"
                    className="text-sm text-[var(--text-muted)] hover:text-[#FF3333] transition-colors cursor-pointer"
                  >
                    → Skills
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn direction="right">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] rounded-xl border border-[#FF0000]/20 bg-[#FF0000]/5 p-10 text-center"
              >
                <div className="text-4xl mb-4">📬</div>
                <h3 className="text-2xl font-800 text-[var(--text)] mb-2">
                  Email opened!
                </h3>
                <p className="text-[var(--text-muted)] mb-6">
                  Your email client should have opened. Hit send and I&apos;ll get
                  back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-[#FF3333] hover:text-[#FF0000] transition-colors cursor-pointer"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[#FF0000]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[#FF0000]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration / Hello"
                    className="w-full px-4 py-3 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[#FF0000]/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity, project, or just say hello..."
                    className="w-full px-4 py-3 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[#FF0000]/50 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#FF0000] text-white font-600 text-sm hover:bg-[#FF3333] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <Send size={15} />
                  Send Message
                </button>

                <p className="text-xs text-[var(--text-dim)] text-center">
                  This will open your email client. I respond within 24 hours.
                </p>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
