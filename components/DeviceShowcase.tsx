"use client";

import { useState } from "react";

const FACTORS = [
  {
    id: "s25u",
    name: "Galaxy S25 Ultra",
    chip: "SNAPDRAGON 8 ELITE",
    note: "Android 15 · 12 GB",
    specs: [
      { v: "1.9 GB", k: "RESIDENT MEMORY" },
      { v: "28 ms", k: "WAKE TO FIRST TOKEN" },
      { v: "31 tok/s", k: "SUSTAINED THROUGHPUT" },
      { v: "One UI 8", k: "HOST PLATFORM" }
    ]
  },
  {
    id: "p10p",
    name: "Pixel 10 Pro",
    chip: "TENSOR G5",
    note: "Android 16 · 16 GB",
    specs: [
      { v: "1.9 GB", k: "RESIDENT MEMORY" },
      { v: "34 ms", k: "WAKE TO FIRST TOKEN" },
      { v: "27 tok/s", k: "SUSTAINED THROUGHPUT" },
      { v: "Android 16", k: "HOST PLATFORM" }
    ]
  },
  {
    id: "iq15",
    name: "Xiaomi 15 Pro",
    chip: "SNAPDRAGON 8 ELITE",
    note: "HyperOS 3 · 16 GB",
    specs: [
      { v: "1.9 GB", k: "RESIDENT MEMORY" },
      { v: "29 ms", k: "WAKE TO FIRST TOKEN" },
      { v: "30 tok/s", k: "SUSTAINED THROUGHPUT" },
      { v: "HyperOS 3", k: "HOST PLATFORM" }
    ]
  },
  {
    id: "x1c",
    name: "ThinkPad X1 Carbon",
    chip: "CORE ULTRA 9 · 48 TOPS",
    note: "Windows 11 · 32 GB",
    specs: [
      { v: "10.4 GB", k: "RESIDENT MEMORY" },
      { v: "22 ms", k: "WAKE TO FIRST TOKEN" },
      { v: "52 tok/s", k: "SUSTAINED THROUGHPUT" },
      { v: "Windows 11", k: "HOST PLATFORM" }
    ]
  },
  {
    id: "sl7",
    name: "Surface Laptop 7",
    chip: "SNAPDRAGON X ELITE",
    note: "Windows 11 · 16 GB",
    specs: [
      { v: "4.8 GB", k: "RESIDENT MEMORY" },
      { v: "26 ms", k: "WAKE TO FIRST TOKEN" },
      { v: "44 tok/s", k: "SUSTAINED THROUGHPUT" },
      { v: "Windows 11", k: "HOST PLATFORM" }
    ]
  },
  {
    id: "gw8",
    name: "Galaxy Watch 8",
    chip: "EXYNOS W1000",
    note: "Wear OS 6 · 2 GB",
    specs: [
      { v: "1.6 GB", k: "RESIDENT MEMORY" },
      { v: "118 ms", k: "WAKE TO FIRST TOKEN" },
      { v: "26 tok/s", k: "SUSTAINED THROUGHPUT" },
      { v: "Wear OS 6", k: "HOST PLATFORM" }
    ]
  }
];

export function DeviceShowcase() {
  const [selected, setSelected] = useState("s25u");
  const device = FACTORS.find(f => f.id === selected) || FACTORS[0];

  return (
    <>
      <div className="grid grid-cols-3 border-b border-[rgba(242,241,237,0.09)]">
        {FACTORS.map((factor) => (
          <button
            key={factor.id}
            onClick={() => setSelected(factor.id)}
            className="cursor-pointer text-left border-none border-r border-b border-[rgba(242,241,237,0.09)] px-9 py-[30px] flex flex-col gap-[11px] transition-colors"
            style={{
              background: selected === factor.id ? "rgba(110,139,255,0.1)" : "transparent"
            }}
          >
            <span
              className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em]"
              style={{
                color: selected === factor.id ? "rgba(110,139,255,0.9)" : "rgba(242,241,237,0.32)"
              }}
            >
              {factor.chip}
            </span>
            <span
              className="font-[family-name:var(--font-heading)] font-medium text-[25px] tracking-[-0.02em]"
              style={{
                color: selected === factor.id ? "#F2F1ED" : "rgba(242,241,237,0.6)"
              }}
            >
              {factor.name}
            </span>
            <span
              className="font-[family-name:var(--font-sans)] font-light text-[14px] leading-[1.5]"
              style={{
                color: selected === factor.id ? "rgba(242,241,237,0.6)" : "rgba(242,241,237,0.34)"
              }}
            >
              {factor.note}
            </span>
          </button>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-16 py-[104px] grid gap-[88px] items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="flex justify-center">
          <div className="relative inline-block">
            {/* Phone mockup - simplified */}
            <div
              className="relative z-[2] box-border rounded-[48px] p-[11px]"
              style={{
                width: "322px",
                height: "652px",
                background: "linear-gradient(147deg, #45454F, #1B1B21 34%, #111116 68%, #33333D)",
                boxShadow: "0 54px 110px -46px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.16)"
              }}
            >
              <div
                className="w-full h-full box-border rounded-[38px] overflow-hidden flex flex-col"
                style={{
                  background: "linear-gradient(168deg, #15151B, #0D0D11)",
                  boxShadow: "inset 0 0 44px rgba(0,0,0,0.65)"
                }}
              >
                <div className="flex items-center justify-between px-6 py-4 font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.16em] text-[rgba(242,241,237,0.35)]">
                  <span>9:41</span>
                </div>
                <div className="flex-1 px-5 py-[18px] flex flex-col gap-3.5 overflow-hidden">
                  <div className="font-[family-name:var(--font-heading)] font-normal text-[27px] leading-[1.12] text-[#F2F1ED]">
                    Your morning, already sorted.
                  </div>
                  {[
                    { tag: "SUGGESTED", text: "Reply to Mira about the Thursday move — draft ready." },
                    { tag: "ON YOUR SCREEN", text: "That receipt is £84.20. Filed under travel." },
                    { tag: "QUIET", text: "Fourteen notifications held until you finish reading." }
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="border border-[rgba(242,241,237,0.13)] rounded-[14px] px-[15px] py-[13px] flex flex-col gap-1.5"
                      style={{ background: "rgba(242,241,237,0.045)" }}
                    >
                      <span className="font-[family-name:var(--font-mono)] font-normal text-[9px] tracking-[0.18em] text-[rgba(242,241,237,0.38)]">
                        {card.tag}
                      </span>
                      <span className="font-[family-name:var(--font-sans)] font-light text-[13.5px] leading-[1.45] text-[rgba(242,241,237,0.82)]">
                        {card.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="m-0 mb-[22px] max-w-[16ch] font-[family-name:var(--font-heading)] font-medium text-[50px] leading-[1.06] tracking-[-0.03em] text-[#F2F1ED]">
            An assistant that never leaves the handset.
          </h2>
          <p className="m-0 mb-[38px] max-w-[48ch] font-[family-name:var(--font-sans)] font-light text-[17px] leading-[1.7] text-[rgba(242,241,237,0.58)]">
            The layer sits between the framework and your launcher. It reads the screen, the notification stream, and on-device storage, and it answers without a single packet leaving the phone. Your existing apps keep working untouched.
          </p>
          <div className="grid grid-cols-2 gap-x-[34px] gap-y-[26px] max-w-[520px]">
            {device.specs.map((spec, i) => (
              <div key={i} className="border-t border-[rgba(242,241,237,0.14)] pt-3.5">
                <div className="font-[family-name:var(--font-heading)] font-medium text-[25px] tracking-[-0.02em] text-[#F2F1ED]">
                  {spec.v}
                </div>
                <div className="mt-[7px] font-[family-name:var(--font-mono)] font-normal text-[9.5px] leading-[1.6] tracking-[0.16em] text-[rgba(242,241,237,0.4)]">
                  {spec.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
