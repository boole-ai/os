export function Footer() {
  return (
    <div className="border-t border-[rgba(242,241,237,0.09)]">
      <div className="max-w-[1280px] mx-auto px-16 py-11 flex items-center justify-between gap-8 font-[family-name:var(--font-mono)] font-normal text-[10px] tracking-[0.16em] text-[rgba(242,241,237,0.32)]">
        <span>IMAGINE OS · © 2026 BOOLE AI, INC.</span>
        <div className="flex gap-7">
          <a href="#" className="text-[rgba(242,241,237,0.32)] hover:text-[#6E8BFF] transition-colors">
            BOOLE LOCAL
          </a>
          <a href="#" className="text-[rgba(242,241,237,0.32)] hover:text-[#6E8BFF] transition-colors">
            PLAYGROUND
          </a>
          <a href="#" className="text-[rgba(242,241,237,0.32)] hover:text-[#6E8BFF] transition-colors">
            PRIVACY
          </a>
        </div>
      </div>
    </div>
  );
}
