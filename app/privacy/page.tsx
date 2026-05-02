"use client";

import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--bg-accent)_0%,transparent_40%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <AnimateIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-red-500">
              <Shield size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-600 tracking-tight text-[var(--text)]">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-12">
            Effective Date: February 1, 2026
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="prose prose-invert max-w-none text-[var(--text-muted)] 
            prose-headings:text-[var(--text)] prose-headings:font-500 prose-headings:tracking-tight 
            prose-a:text-red-500 hover:prose-a:text-red-400 prose-a:transition-colors
            prose-strong:text-[var(--text)]">
            
            <p className="text-base leading-relaxed mb-8">
              This Privacy Policy ("Policy") explains how TechAbhee and its operator ("we", "us", or "our") collect, use, disclose, and safeguard your personal information when you visit the website techabhee.me (the "Site") and interact with our services. Please read this Privacy Policy carefully to understand our policies and practices regarding your information.
            </p>

            <h2 className="text-2xl mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-base leading-relaxed mb-4">
              We may collect information about you in various ways when you use our Site. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-base">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and the contents of any messages you send us via contact forms or direct communication.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4">2. Use of Your Information</h2>
            <p className="text-base leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-base">
              <li>Respond to your inquiries, job requests, and provide client support.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Deliver administrative notices, structural modifications, or security updates.</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4">3. Disclosure of Your Information</h2>
            <p className="text-base leading-relaxed mb-4">
              We value your privacy and do not sell, trade, or rent your personal information to third parties. We may share information we have collected about you in certain situations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-base">
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, such as web hosting or analytics.</li>
              <li><strong>Legal Obligations:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-base leading-relaxed mb-8">
              We use cookies, web beacons, and similar tracking technologies to customize the Site and improve your experience. You may choose to disable cookies through your browser settings; however, this may affect the functionality of certain features on the Site. We do not use intrusive cross-site marketing trackers.
            </p>

            <h2 className="text-2xl mt-12 mb-4">5. Data Security and Retention</h2>
            <p className="text-base leading-relaxed mb-8">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable. We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy or as legally required.
            </p>

            <h2 className="text-2xl mt-12 mb-4">6. Your Privacy Rights</h2>
            <p className="text-base leading-relaxed mb-8">
              Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or request its deletion in certain circumstances. To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl mt-12 mb-4">7. Contact Information</h2>
            <p className="text-base leading-relaxed mb-8">
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br/><br/>
              <strong>Email:</strong> <a href="mailto:admin@techabhee.com">admin@techabhee.com</a>
              <br/>
              <strong>Location:</strong> Hyderabad, India
            </p>
          </div>
        </AnimateIn>
      </div>
    </main>
  );
}
