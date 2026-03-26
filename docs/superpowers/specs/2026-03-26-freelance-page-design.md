# Freelance Page Design Spec
Date: 2026-03-26

## Goal
Add a dedicated `/freelance` page to the existing Next.js 14 portfolio that integrates Upwork profile info, Quora presence, GitHub, stats, services, and portfolio highlights. Targets prospective clients who want to hire Abhi.

## Route
`app/freelance/page.tsx`

## Navigation
Add "Freelance" link to `components/Navigation.tsx` between Projects and Skills.

## Animations
- **Flowing color orb**: `useMotionValue` + `useSpring` tracking mouse position, hue cycles via `useAnimationFrame` (0→360, ~20s loop). Orb shifts between red → orange → amber.
- **Flowing accent color**: `hsl(hue, 100%, 55%)` applied to stat left-borders, card glows via inline style driven by the same hue loop. Pauses on hover.
- **Word-by-word hero reveal**: same `wordVariant` pattern as `app/page.tsx`.
- **AnimateIn**: reuse existing component for all sections.
- **Animated counters**: count up from 0 on scroll-in using `useInView` + `useMotionValue` + `useTransform`.
- **Card shimmer on hover**: CSS `linear-gradient` sweep left→right using a keyframe animation.

## Sections

### 1. Hero
- Flowing hue orb background (top-right, large)
- Tag: "Available for Hire · $20/hr"
- Word-by-word headline: "Full-Stack AI Engineer. Available for Hire."
- Subtext: Upwork bio opener
- CTAs: "Hire on Upwork" (primary red) + "Contact Me" (border)

### 2. Stats Bar
| Stat | Value | Source |
|------|-------|--------|
| Rate | $20/hr | Upwork |
| Jobs | 1 (in progress) | Upwork |
| Experience | 3+ yrs AI | Self |
| Reach | 100k+ readers | TechAbhee/Quora |

Each has animated counter + flowing color left-border.

### 3. Services (3 cards)
1. Intelligent Document Processing — PDFs, XMLs, VLMs
2. RAG & Semantic Search — LangChain, ChromaDB, chatbots
3. Scalable Backend + Full-Stack — Django/FastAPI + Next.js, Celery

Cards: hover shimmer sweep + `border-[#FF0000]/30` on hover.

### 4. Platform Presence Bar
- Upwork: "Active · $20/hr · Full-Stack AI Engineer" + link
- Quora: "AI & ML writer" + link
- GitHub: "Since 2022 · Linked" + link

Each badge: platform color left-border glow.

### 5. Featured Work (2 cards)
CollateralQC + Nexus — same card style as `/projects` with "Upwork Portfolio" badge. Links to case study pages.

### 6. CTA Banner
Red gradient glow. "Let's build something great." Primary: "Hire on Upwork". Secondary: "Contact Me".

## Tech
- Next.js 14, TypeScript, Tailwind v4, Framer Motion
- No new dependencies needed
- Reuses: `AnimateIn`, CSS variables, `chip` class, existing card patterns
