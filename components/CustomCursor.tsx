"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const hovered = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onLeaveWindow = () => {
      mouse.current = { x: -200, y: -200 };
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate3d(${e.clientX - 4}px,${e.clientY - 4}px,0)`;
    };

    // Event delegation — use mouseover/mouseout but check relatedTarget
    // to avoid firing when moving between children of the same interactive element
    const isInteractive = (el: Element | null) =>
      !!el?.closest("a, button, [role=button], [tabindex='0']");

    const onOver = (e: MouseEvent) => {
      const from = e.relatedTarget as Element | null;
      const to = e.target as Element | null;
      // Only trigger enter when coming FROM outside the interactive zone
      if (isInteractive(to) && !isInteractive(from)) {
        hovered.current = true;
      }
    };

    const onOut = (e: MouseEvent) => {
      const from = e.target as Element | null;
      const to = e.relatedTarget as Element | null;
      // Only trigger leave when going TO outside the interactive zone
      if (isInteractive(from) && !isInteractive(to)) {
        hovered.current = false;
      }
    };

    // rAF loop — apply both position and scale together so they never fight
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;
      const scale = hovered.current ? 1.6 : 1;
      ringEl.style.transform = `translate3d(${ring.current.x - 18}px,${ring.current.y - 18}px,0) scale(${scale})`;
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Dot — instant position, no transition */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 rounded-full bg-[#FF0000]"
        style={{ willChange: "transform" }}
      />
      {/* Ring — lerp + scale applied together in rAF, no CSS transition on transform */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-9 w-9 rounded-full border border-[#FF0000]/50"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
