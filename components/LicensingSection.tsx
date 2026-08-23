const TIERS = [
  {
    name: "EVALUATION",
    price: "Free",
    body: "For teams deciding whether it fits. Runs on reference hardware under NDA.",
    items: [
      "Reference build for your hardware",
      "Two form factors",
      "Community support"
    ],
    accent: false
  },
  {
    name: "PRODUCTION",
    price: "Per unit",
    body: "Ships on retail devices, priced per shipped unit against volume.",
    items: [
      "Full theming and voice authoring",
      "Dedicated integration engineer",
      "OTA model channel",
      "Privacy audit harness"
    ],
    accent: true
  },
  {
    name: "FOUNDATION",
    price: "Bespoke",
    body: "For platform owners who need the weights, the recipe, and the roadmap.",
    items: [
      "Custom quantisation targets",
      "Source access to the layer",
      "Co-development on new form factors",
      "Roadmap input"
    ],
    accent: false
  }
];

export function LicensingSection() {
  return (
    <div className="max-w-[1280px] mx-auto px-16 py-24 border-b border-[rgba(242,241,237,0.09)]">
      <h2 className="m-0 mb-[54px] font-[family-name:var(--font-heading)] font-medium text-[44px] tracking-[-0.03em] text-[#F2F1ED]">
        Licensing.
      </h2>
      <div className="grid grid-cols-3 gap-7">
        {TIERS.map((tier, i) => (
          <div
            key={i}
            className="border rounded-2xl px-[30px] py-[34px] flex flex-col gap-[18px]"
            style={{
              borderColor: tier.accent ? "rgba(110,139,255,0.42)" : "rgba(242,241,237,0.14)",
              background: tier.accent ? "rgba(110,139,255,0.07)" : "transparent"
            }}
          >
            <span
              className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em]"
              style={{ color: tier.accent ? "rgba(110,139,255,0.85)" : "rgba(242,241,237,0.4)" }}
            >
              {tier.name}
            </span>
            <span className="font-[family-name:var(--font-heading)] font-medium text-[36px] tracking-[-0.03em] text-[#F2F1ED]">
              {tier.price}
            </span>
            <span className="font-[family-name:var(--font-sans)] font-light text-[14.5px] leading-[1.65] text-[rgba(242,241,237,0.55)]">
              {tier.body}
            </span>
            <div className="flex flex-col gap-[9px] mt-1.5 font-[family-name:var(--font-mono)] font-normal text-[12px] leading-[1.5] text-[rgba(242,241,237,0.45)]">
              {tier.items.map((item, j) => (
                <span key={j}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
