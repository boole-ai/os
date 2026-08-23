interface FinalCTAProps {
  onOpenRfi: () => void;
}

export function FinalCTA({ onOpenRfi }: FinalCTAProps) {
  return (
    <div className="relative overflow-hidden border-t border-[rgba(242,241,237,0.09)]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(760px 420px at 18% 120%, rgba(110,139,255,0.30), transparent 70%), radial-gradient(700px 400px at 50% 130%, rgba(255,111,177,0.26), transparent 70%), radial-gradient(760px 420px at 84% 120%, rgba(255,179,71,0.22), transparent 70%)"
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(96deg, #6E8BFF, #9B7BFF 30%, #FF6FB1 55%, #FFB347 78%, #4ED6A8)"
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-16 py-[132px] pb-[140px] text-center">
        <h2
          className="m-0 mx-auto mb-[38px] max-w-[17ch] font-[family-name:var(--font-heading)] font-medium text-[80px] leading-[1.0] tracking-[-0.04em] text-[#F2F1ED]"
        >
          The operating system of your{" "}
          <em
            className="inline-block not-italic cursor-crosshair"
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
            dreams
          </em>
          .
        </h2>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button
            onClick={onOpenRfi}
            className="cursor-pointer border-none rounded-md bg-[#2E5BFF] text-[#F2F1ED] px-10 py-[18px] font-[family-name:var(--font-mono)] font-medium text-[11px] tracking-[0.18em] hover:bg-[#4365FF] transition-colors"
          >
            BOOK A TECHNICAL REVIEW
          </button>
          <button
            onClick={onOpenRfi}
            className="cursor-pointer border border-[rgba(242,241,237,0.28)] rounded-md bg-transparent text-[#F2F1ED] px-10 py-[18px] font-[family-name:var(--font-mono)] font-medium text-[11px] tracking-[0.18em] hover:bg-[rgba(242,241,237,0.05)] transition-colors"
          >
            CONTACT SALES
          </button>
        </div>
      </div>
    </div>
  );
}
