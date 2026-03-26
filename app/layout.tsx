import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Outfit,
  DM_Sans,
  Onest,
  Geist,
} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techabhee.me"),
  title: {
    default: "Abhinay Cherupally — AI/ML Engineer",
    template: "%s · Abhinay Cherupally",
  },
  description:
    "AI/ML Engineer & Full-Stack Developer building production ML pipelines, GenAI apps, and full-stack products. Founder of TechAbhee. Based in Hyderabad, India.",
  keywords: [
    "Abhinay Cherupally",
    "AI Engineer",
    "ML Engineer",
    "Full Stack Developer",
    "GenAI",
    "LangChain",
    "Python",
    "React",
    "Next.js",
    "TechAbhee",
    "Hyderabad",
  ],
  authors: [{ name: "Abhinay Cherupally", url: "https://techabhee.me" }],
  creator: "Abhinay Cherupally",
  openGraph: {
    title: "Abhinay Cherupally — AI/ML Engineer & Builder",
    description:
      "Building intelligent systems & products — ML pipelines, GenAI apps, full-stack.",
    url: "https://techabhee.me",
    siteName: "Abhinay Cherupally",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinay Cherupally — AI/ML Engineer & Builder",
    description:
      "Building intelligent systems & products — ML pipelines, GenAI apps, full-stack.",
    creator: "@AbhiCherupally",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var t=localStorage.getItem('theme')==='light'?'light':'dark';
              document.documentElement.setAttribute('data-theme',t);
              var f=localStorage.getItem('font');
              if(['plus-jakarta','outfit','dm-sans','onest','geist'].includes(f))document.documentElement.setAttribute('data-font',f);
              var link=document.createElement('link');
              link.rel='icon';link.type='image/svg+xml';
              link.href=t==='light'?'/favicon-light.svg':'/favicon-dark.svg';
              document.head.appendChild(link);
            })();`,
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${outfit.variable} ${dmSans.variable} ${onest.variable} ${geist.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            <CustomCursor />
            <Navigation />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
