export function PrivacySection() {
  const TRUST = [
    {
      v: "0 B",
      k: "LEAVES THE DEVICE",
      color: "rgb(78,214,168)",
      note: "The layer holds no network capability. Prompts, screen content, and generated apps stay in local storage."
    },
    {
      v: "No account",
      k: "NOTHING TO SIGN IN TO",
      color: "#F2F1ED",
      note: "No identity, no sync, no profile for a breach to expose. The device is the only place anything exists."
    },
    {
      v: "Up to 200 tok/s",
      k: "ON CURRENT FLAGSHIP SILICON",
      color: "#F2F1ED",
      note: "Local does not mean slow. Responses start in tens of milliseconds and hold well past reading speed."
    },
    {
      v: "< 4 %",
      k: "DAILY BATTERY BUDGET",
      color: "#F2F1ED",
      note: "Measured on a flagship handset in ordinary use, with the assistant available all day."
    }
  ];

  return (
    <div className="border-t border-[rgba(242,241,237,0.09)]" style={{ background: "radial-gradient(1000px 420px at 78% 30%, rgba(78,214,168,0.12), transparent 70%)" }}>
      <div className="max-w-[1280px] mx-auto px-16 py-24">
        <div className="flex items-end justify-between gap-14 mb-[52px]">
          <h2 className="m-0 max-w-[20ch] font-[family-name:var(--font-heading)] font-medium text-[50px] leading-[1.06] tracking-[-0.032em] text-[#F2F1ED]">
            Private by construction, not by policy.
          </h2>
          <p className="m-0 max-w-[40ch] font-[family-name:var(--font-sans)] font-light text-[16px] leading-[1.7] text-[rgba(242,241,237,0.55)]">
            Every privacy property below is a consequence of where the work happens. None of them cost the owner speed.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[1px] bg-[rgba(242,241,237,0.12)] border border-[rgba(242,241,237,0.12)]">
          {TRUST.map((t, i) => (
            <div key={i} className="bg-[#0F0F11] px-7 py-8 flex flex-col gap-3.5">
              <span
                className="font-[family-name:var(--font-heading)] font-medium text-[38px] tracking-[-0.035em]"
                style={{ color: t.color }}
              >
                {t.v}
              </span>
              <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.18em] text-[rgba(242,241,237,0.42)]">
                {t.k}
              </span>
              <span className="font-[family-name:var(--font-sans)] font-light text-[14px] leading-[1.7] text-[rgba(242,241,237,0.52)]">
                {t.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
