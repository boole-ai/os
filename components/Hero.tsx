"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  onOpenRfi: () => void;
}

export function Hero({ onOpenRfi }: HeroProps) {
  const gradientRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = gradientRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

      el.style.animationPlayState = "paused";
      el.style.backgroundPosition = `${x * 100}% ${20 + y * 60}%`;
    };

    const handleMouseLeave = () => {
      el.style.animationPlayState = "running";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-hidden border-b border-[rgba(242,241,237,0.09)]">
      <div className="relative max-w-[1280px] mx-auto px-16 py-[120px] pb-[108px]">
        <h1 className="m-0 mb-10 max-w-[14ch] font-[family-name:var(--font-heading)] font-medium text-[112px] leading-[0.94] tracking-[-0.045em] text-[#F2F1ED]" style={{ textWrap: "pretty" } as any}>
          The hardware is yours.{" "}
          <span
            ref={gradientRef}
            className="inline-block cursor-crosshair"
            style={{
              backgroundImage: "linear-gradient(96deg, #6E8BFF, #9B7BFF 30%, #FF6FB1 55%, #FFB347 78%, #4ED6A8)",
              backgroundSize: "280% 100%",
              backgroundPosition: "0% 50%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "wings 11s ease-in-out infinite"
            }}
          >
            The experience is not.
          </span>
        </h1>
        <p className="m-0 mb-[52px] max-w-[56ch] font-[family-name:var(--font-sans)] font-light text-[19px] leading-[1.65] text-[rgba(242,241,237,0.6)]">
          A complete intelligence layer for the OS you already ship. It installs above Android, Windows, or your own embedded stack, runs entirely on the device, and makes the hardware feel like nothing else on the shelf.
        </p>
        <div className="flex gap-3.5 items-center">
          <button
            onClick={onOpenRfi}
            className="cursor-pointer border-none rounded-md bg-[#2E5BFF] text-[#F2F1ED] px-9 py-[17px] font-[family-name:var(--font-mono)] font-medium text-[11px] tracking-[0.18em] hover:bg-[#4365FF] transition-colors"
          >
            CONTACT SALES
          </button>
          <button
            onClick={onOpenRfi}
            className="cursor-pointer border border-[rgba(242,241,237,0.22)] rounded-md bg-transparent px-9 py-[17px] font-[family-name:var(--font-mono)] font-medium text-[11px] tracking-[0.18em] text-[#F2F1ED] hover:bg-[rgba(242,241,237,0.05)] transition-colors"
          >
            REQUEST A DEMO
          </button>
        </div>
      </div>
    </div>
  );
}
