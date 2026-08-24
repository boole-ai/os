"use client";

interface NavigationProps {
  onOpenRfi: () => void;
}

export function Navigation({ onOpenRfi }: NavigationProps) {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-16 py-5 bg-[rgba(15,15,17,0.85)] backdrop-blur-[14px] border-b border-[rgba(242,241,237,0.09)]">
      <div className="flex items-baseline gap-3.5">
        <span className="font-[family-name:var(--font-heading)] font-semibold text-[20px] tracking-[-0.02em] text-[#F2F1ED]">
          Imagine OS
        </span>
        <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.72)]">
          POWERED BY BOOLE AI
        </span>
      </div>
      <div className="flex gap-[34px] font-[family-name:var(--font-mono)] font-normal text-[10px] tracking-[0.2em] text-[rgba(242,241,237,0.45)]">
        <span>PLATFORM</span>
        <span>DEVICES</span>
        <span>LICENSING</span>
      </div>
      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenRfi}
          className="cursor-pointer border border-[rgba(110,139,255,0.45)] rounded-md bg-transparent text-[#6E8BFF] px-5 py-2.5 font-[family-name:var(--font-mono)] font-medium text-[10px] tracking-[0.18em] hover:bg-[rgba(110,139,255,0.1)] transition-colors"
        >
          CONTACT SALES
        </button>
        <a
          href="https://buy.stripe.com/eVq6oHd3R7KJ1sgbOydUY01"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer border-none rounded-md bg-[#2E5BFF] text-[#F2F1ED] px-5 py-2.5 font-[family-name:var(--font-mono)] font-medium text-[10px] tracking-[0.18em] hover:bg-[#4365FF] transition-colors inline-block"
        >
          GET STARTED
        </a>
      </div>
    </div>
  );
}
