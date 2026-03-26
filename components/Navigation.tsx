"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import FontPicker from "@/components/FontPicker";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/freelance", label: "Freelance" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed left-4 right-4 top-4 z-50 rounded-xl border transition-all duration-300 ${
          scrolled
            ? "border-[var(--border)] bg-[var(--bg)]/90 shadow-lg shadow-black/40 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          {/* Wordmark */}
          <Link href="/" className="wordmark text-xl tracking-tight cursor-pointer">
            <span className="light">Tech</span>
            <span className="bold">Abhee</span>
            <span className="fade">.me</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active ? "text-[#FF0000]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA + theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            {/* Font picker */}
            <FontPicker />

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-lt)] transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm hover:border-[#FF0000]/40 hover:text-[var(--text)] transition-colors duration-200 cursor-pointer"
            >
              <Download size={13} />
              Resume
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-md bg-[#FF0000] text-white text-sm font-600 hover:bg-[#FF3333] transition-colors duration-200 cursor-pointer"
            >
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-3xl font-700 tracking-tight cursor-pointer transition-colors ${
                pathname === href ? "text-[#FF0000]" : "text-[var(--text)] hover:text-[#FF3333]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-8 py-3 rounded-md bg-[#FF0000] text-white text-lg font-600 hover:bg-[#FF3333] transition-colors cursor-pointer"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </>
  );
}
