"use client";

import { useState } from "react";

const LAYERS = [
  {
    name: "Display & surfaces",
    note: "Your launcher, widgets, and lock screen.",
    tag: "YOURS",
    hue: "110,139,255"
  },
  {
    name: "Generated apps",
    note: "Software the owner asked for, sandboxed on install.",
    tag: "NEW",
    hue: "255,111,177"
  },
  {
    name: "Imagine OS",
    note: "The intelligence layer and its framework hooks.",
    tag: "OURS",
    hue: "155,123,255"
  },
  {
    name: "Host OS",
    note: "Android, Windows, or your own embedded stack.",
    tag: "YOURS",
    hue: "78,214,168"
  },
  {
    name: "Silicon",
    note: "NPU, GPU, and the memory already in the BOM.",
    tag: "YOURS",
    hue: "255,179,71"
  }
];

export function LayersSection() {
  const [hoveredLayer, setHoveredLayer] = useState(2);

  return (
    <div className="border-t border-[rgba(242,241,237,0.09)]" style={{ background: "radial-gradient(1200px 500px at 22% 40%, rgba(110,139,255,0.14), transparent 70%)" }}>
      <div className="max-w-[1280px] mx-auto px-16 py-[104px] grid grid-cols-2 gap-[72px] items-center">
        <div className="h-[540px] flex items-center justify-center" style={{ perspective: "1500px" }}>
          <div
            className="relative w-[340px] h-[340px]"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(58deg) rotateZ(-40deg)"
            }}
          >
            {LAYERS.map((layer, i) => {
              const on = i === hoveredLayer;
              const z = (LAYERS.length - 1 - i) * 46 + (on ? 34 : 0);
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredLayer(i)}
                  className="absolute inset-0 rounded-[26px] border transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  style={{
                    borderColor: `rgba(${layer.hue}, ${on ? "0.85" : "0.4"})`,
                    background: `linear-gradient(150deg, rgba(${layer.hue}, 0.30), rgba(${layer.hue}, 0.07))`,
                    boxShadow: on
                      ? `0 26px 70px -18px rgba(${layer.hue}, 0.55)`
                      : "0 14px 40px -22px rgba(0,0,0,0.8)",
                    transform: `translateZ(${z}px)`
                  }}
                />
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="m-0 mb-[22px] max-w-[16ch] font-[family-name:var(--font-heading)] font-medium text-[50px] leading-[1.06] tracking-[-0.03em] text-[#F2F1ED]">
            Five layers. You already own four of them.
          </h2>
          <p className="m-0 mb-9 max-w-[46ch] font-[family-name:var(--font-sans)] font-light text-[17px] leading-[1.7] text-[rgba(242,241,237,0.58)]">
            Imagine OS slots in between your platform and your surfaces. Everything below it stays exactly as your team built it.
          </p>
          <div className="flex flex-col">
            {LAYERS.map((layer, i) => {
              const on = i === hoveredLayer;
              return (
                <button
                  key={i}
                  onMouseEnter={() => setHoveredLayer(i)}
                  onClick={() => setHoveredLayer(i)}
                  className="grid items-center text-left cursor-pointer border-none border-t border-[rgba(242,241,237,0.12)] px-3 py-4 transition-colors"
                  style={{
                    gridTemplateColumns: "14px 1fr auto",
                    gap: "18px",
                    background: on ? `rgba(${layer.hue}, 0.09)` : "transparent"
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-[3px]"
                    style={{ background: `rgb(${layer.hue})` }}
                  />
                  <span className="flex flex-col gap-[5px]">
                    <span className="font-[family-name:var(--font-heading)] font-medium text-[17px] tracking-[-0.015em] text-[#F2F1ED]">
                      {layer.name}
                    </span>
                    <span className="font-[family-name:var(--font-sans)] font-light text-[13.5px] leading-[1.5] text-[rgba(242,241,237,0.5)]">
                      {layer.note}
                    </span>
                  </span>
                  <span
                    className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.16em]"
                    style={{ color: on ? `rgb(${layer.hue})` : "rgba(242,241,237,0.32)" }}
                  >
                    {layer.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
