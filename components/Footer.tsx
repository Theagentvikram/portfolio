import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const UpworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="wordmark text-2xl tracking-tight mb-3">
              <span className="light">Tech</span>
              <span className="bold">Abhee</span>
              <span className="fade">.me</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              AI/ML Engineer building intelligent systems and full-stack
              products. Open to opportunities.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-500 uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/skills", label: "Skills" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs font-500 uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Connect
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:cherupallyabhi@gmail.com"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#FF3333] transition-colors cursor-pointer"
              >
                <Mail size={15} />
                cherupallyabhi@gmail.com
              </a>
              <a
                href="https://github.com/Theagentvikram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
              >
                <Github size={15} />
                github.com/Theagentvikram
              </a>
              <a
                href="https://linkedin.com/in/AbhiCherupally"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#0A66C2] transition-colors cursor-pointer"
              >
                <Linkedin size={15} />
                linkedin.com/in/AbhiCherupally
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01677b33e344495620"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#14A800] transition-colors cursor-pointer"
              >
                <UpworkIcon />
                Upwork
              </a>
              <a
                href="https://techabhee.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#FF0000] transition-colors cursor-pointer"
              >
                <ExternalLink size={15} />
                techabhee.dev
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border-lt)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-dim)] font-mono">
            © {year} Abhinay Cherupally. Built with Next.js & TechAbhee brand kit.
          </p>
          <div className="brand-tag">Available for work</div>
        </div>
      </div>
    </footer>
  );
}
