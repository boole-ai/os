"use client";

import { useState, useEffect, useRef } from "react";

const VIBES = [
  {
    text: "Split the dinner bill by who ate what",
    app: {
      name: "Bill Split",
      glyph: "÷",
      hue: "255,111,177",
      size: "1.4 MB",
      desc: "Reads the itemised receipt you photographed and works out who owes what."
    }
  },
  {
    text: "Track my sourdough starter",
    app: {
      name: "Starter",
      glyph: "◍",
      hue: "78,214,168",
      size: "0.9 MB",
      desc: "Tracks rise, feeds and timing for a single sourdough starter."
    }
  },
  {
    text: "One remote for the studio lights",
    app: {
      name: "Lights",
      glyph: "◐",
      hue: "255,179,71",
      size: "1.1 MB",
      desc: "One control surface for the three fixtures already on your studio network."
    }
  },
  {
    text: "Log plant watering from a photo",
    app: {
      name: "Garden",
      glyph: "✦",
      hue: "155,123,255",
      size: "1.6 MB",
      desc: "Identifies plants from your photos and logs when each one was last watered."
    }
  }
];

const CAPTIONS = {
  ask: "The owner asks for something the device does not have.",
  propose: "Imagine OS proposes the app and says plainly what it would be.",
  install: "It is written, compiled and sandboxed on the device, with its reach shown up front.",
  run: "Installed and running. It works with no network access of its own."
};

export function AppGenDemo() {
  const [vibeIndex, setVibeIndex] = useState(0);
  const [phase, setPhase] = useState<"ask" | "propose" | "install" | "run">("ask");
  const [typed, setTyped] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout>();

  const currentVibe = VIBES[vibeIndex];
  const vhue = currentVibe.app.hue;

  useEffect(() => {
    if (paused) return;

    const clearCurrent = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    clearCurrent();

    if (phase === "ask") {
      if (typed < currentVibe.text.length) {
        timeoutRef.current = setTimeout(() => {
          setTyped(t => t + 1);
        }, 52);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase("propose");
        }, 900);
      }
    } else if (phase === "propose") {
      timeoutRef.current = setTimeout(() => {
        setPhase("install");
        setProgress(0);
      }, 3800);
    } else if (phase === "install") {
      if (progress < 100) {
        timeoutRef.current = setTimeout(() => {
          setProgress(p => Math.min(100, p + 25));
        }, 620);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase("run");
        }, 800);
      }
    } else if (phase === "run") {
      timeoutRef.current = setTimeout(() => {
        const nextIndex = (vibeIndex + 1) % VIBES.length;
        setVibeIndex(nextIndex);
        setPhase("ask");
        setTyped(0);
        setProgress(0);
      }, 7500);
    }

    return clearCurrent;
  }, [phase, typed, progress, vibeIndex, currentVibe.text.length, paused]);

  const jumpToVibe = (index: number) => {
    setPaused(true);
    setVibeIndex(index);
    setPhase("ask");
    setTyped(0);
    setProgress(0);
    setTimeout(() => setPaused(false), 100);
  };

  return (
    <div
      className="border-t border-[rgba(242,241,237,0.09)] transition-all duration-[1200ms]"
      style={{ background: `radial-gradient(1100px 480px at 26% 30%, rgba(${vhue}, 0.15), transparent 68%)` }}
    >
      <div className="max-w-[1280px] mx-auto px-16 py-[104px] grid gap-[88px] items-center" style={{ gridTemplateColumns: "420px 1fr" }}>

        <div className="relative flex flex-col items-center gap-[26px]">
          <div
            className="absolute left-1/2 w-[460px] h-[520px] -ml-[230px] top-[60px] rounded-full pointer-events-none blur-[18px] transition-all duration-[800ms]"
            style={{
              background: `radial-gradient(closest-side, rgba(${vhue}, 0.5), transparent 72%)`,
              animation: "halo 5.5s ease-in-out infinite"
            }}
          />
          <div
            className="relative box-border w-[322px] h-[652px] rounded-[48px] p-[11px] transition-all duration-[800ms]"
            style={{
              background: "linear-gradient(147deg, #45454F, #1B1B21 34%, #111116 68%, #33333D)",
              boxShadow: `0 54px 110px -46px rgba(0,0,0,0.95), 0 0 0 1px rgba(${vhue}, 0.3), 0 0 60px -6px rgba(${vhue}, 0.5), inset 0 1px 0 rgba(255,255,255,0.16)`
            }}
          >
            <div
              className="w-full h-full box-border rounded-[38px] overflow-hidden flex flex-col transition-all duration-[800ms]"
              style={{
                background: "linear-gradient(168deg, #15151B, #0D0D11)",
                boxShadow: `inset 0 0 44px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(${vhue}, 0.3)`
              }}
            >
              <div className="flex items-center justify-between px-6 py-[15px] pb-2.5 font-medium text-[11px] text-[rgba(242,241,237,0.75)]">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-end gap-[1.5px] h-[9px]">
                    <span className="w-[2.5px] h-1 bg-[rgba(242,241,237,0.75)] rounded-[1px]" />
                    <span className="w-[2.5px] h-1.5 bg-[rgba(242,241,237,0.75)] rounded-[1px]" />
                    <span className="w-[2.5px] h-2 bg-[rgba(242,241,237,0.75)] rounded-[1px]" />
                    <span className="w-[2.5px] h-[9px] bg-[rgba(242,241,237,0.35)] rounded-[1px]" />
                  </div>
                  <span className="w-4 h-2 border border-[rgba(242,241,237,0.5)] rounded-[2.5px] p-[1px] flex">
                    <span className="w-[70%] bg-[rgba(242,241,237,0.8)] rounded-[1px]" />
                  </span>
                </div>
              </div>

              {phase === "ask" && (
                <div className="flex-1 flex flex-col px-5 py-2.5 pb-5">
                  <div className="flex items-center gap-[9px] pb-[18px]">
                    <span
                      className="w-[18px] h-[18px] rounded-md transition-all duration-[400ms]"
                      style={{
                        background: `rgb(${vhue})`,
                        boxShadow: `0 0 16px rgba(${vhue}, 0.5)`
                      }}
                    />
                    <span className="font-[family-name:var(--font-heading)] font-medium text-[14px] tracking-[-0.01em] text-[#F2F1ED]">
                      Imagine
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-end gap-2.5 pb-[18px]">
                    <span className="self-start border border-[rgba(242,241,237,0.12)] rounded-lg px-[13px] py-[9px] font-[family-name:var(--font-sans)] font-light text-[12.5px] text-[rgba(242,241,237,0.32)]">
                      Summarise the page I am reading
                    </span>
                    <span className="self-start border border-[rgba(242,241,237,0.12)] rounded-lg px-[13px] py-[9px] font-[family-name:var(--font-sans)] font-light text-[12.5px] text-[rgba(242,241,237,0.32)]">
                      What did I spend on food this week?
                    </span>
                    <span className="self-start border border-[rgba(242,241,237,0.12)] rounded-lg px-[13px] py-[9px] font-[family-name:var(--font-sans)] font-light text-[12.5px] text-[rgba(242,241,237,0.32)]">
                      Remind me when the bread is ready
                    </span>
                  </div>
                  <div
                    className="flex items-end gap-2.5 border rounded-[14px] px-3 py-3 pl-3.5 transition-all duration-500"
                    style={{
                      borderColor: typed >= currentVibe.text.length ? `rgba(${vhue}, 0.7)` : "rgba(242,241,237,0.14)",
                      background: "rgba(242,241,237,0.05)"
                    }}
                  >
                    <span className="flex-1 min-w-0 font-[family-name:var(--font-sans)] font-light text-[14.5px] leading-[1.4] text-[#F2F1ED]">
                      {currentVibe.text.slice(0, typed)}
                      <span
                        className="inline-block w-[2px] h-4 ml-[1px] -mb-[3px] align-bottom"
                        style={{
                          background: `rgb(${vhue})`,
                          animation: "cur 1s steps(1) infinite"
                        }}
                      />
                    </span>
                    <span
                      className="flex-none w-[30px] h-[30px] rounded-[9px] flex items-center justify-center font-normal text-[14px] transition-all duration-[400ms]"
                      style={{
                        background: typed >= currentVibe.text.length ? `rgb(${vhue})` : "rgba(242,241,237,0.1)",
                        color: typed >= currentVibe.text.length ? "#0F0F11" : "rgba(242,241,237,0.35)"
                      }}
                    >
                      ↑
                    </span>
                  </div>
                </div>
              )}

              {phase === "propose" && (
                <div className="flex-1 flex flex-col px-5 py-2.5 pb-5">
                  <div className="flex items-center gap-[9px] pb-[18px]">
                    <span
                      className="w-[18px] h-[18px] rounded-md"
                      style={{
                        background: `rgb(${vhue})`,
                        boxShadow: `0 0 16px rgba(${vhue}, 0.5)`
                      }}
                    />
                    <span className="font-[family-name:var(--font-heading)] font-medium text-[14px] tracking-[-0.01em] text-[#F2F1ED]">
                      Imagine
                    </span>
                  </div>
                  <div className="flex justify-end mb-[18px]">
                    <span className="max-w-[82%] rounded-[14px_14px_4px_14px] bg-[rgba(242,241,237,0.09)] px-3.5 py-[11px] font-[family-name:var(--font-sans)] font-light text-[14px] leading-[1.45] text-[#F2F1ED]">
                      {currentVibe.text}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-sans)] font-light text-[14px] leading-[1.5] text-[rgba(242,241,237,0.72)] mb-3.5">
                    I can build that. Here is what it would be.
                  </span>
                  <div
                    className="border rounded-2xl px-4 py-4"
                    style={{
                      borderColor: `rgba(${vhue}, 0.6)`,
                      background: `linear-gradient(150deg, rgba(${vhue}, 0.4), rgba(${vhue}, 0.12))`
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="w-[38px] h-[38px] rounded-[11px] border flex items-center justify-center font-[family-name:var(--font-heading)] font-medium text-[17px]"
                        style={{
                          background: "rgba(242,241,237,0.08)",
                          borderColor: `rgba(${vhue}, 0.6)`,
                          color: `rgb(${vhue})`
                        }}
                      >
                        {currentVibe.app.glyph}
                      </span>
                      <span className="flex flex-col gap-[3px]">
                        <span className="font-[family-name:var(--font-heading)] font-medium text-[16px] tracking-[-0.015em] text-[#F2F1ED]">
                          {currentVibe.app.name}
                        </span>
                        <span className="font-[family-name:var(--font-mono)] font-normal text-[8.5px] tracking-[0.16em] text-[rgba(242,241,237,0.45)]">
                          NEW APP · {currentVibe.app.size}
                        </span>
                      </span>
                    </div>
                    <span className="block font-[family-name:var(--font-sans)] font-light text-[13px] leading-[1.55] text-[rgba(242,241,237,0.66)]">
                      {currentVibe.app.desc}
                    </span>
                  </div>
                  <div className="mt-auto flex gap-2.5 pt-[18px]">
                    <span className="flex-none border border-[rgba(242,241,237,0.16)] rounded-xl px-[18px] py-[13px] font-normal text-[13.5px] text-[rgba(242,241,237,0.5)]">
                      Not now
                    </span>
                    <span
                      className="flex-1 rounded-xl px-[13px] py-[13px] text-center font-medium text-[13.5px] text-[#0F0F11]"
                      style={{
                        background: `rgb(${vhue})`,
                        boxShadow: `0 12px 30px -12px rgb(${vhue})`
                      }}
                    >
                      Build it
                    </span>
                  </div>
                </div>
              )}

              {phase === "install" && (
                <div className="flex-1 flex flex-col px-5 py-2.5 pb-5">
                  <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.4)] pb-[22px]">
                    INSTALLING
                  </span>
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <span
                      className="w-[72px] h-[72px] rounded-[20px] border flex items-center justify-center font-[family-name:var(--font-heading)] font-medium text-[30px]"
                      style={{
                        background: `linear-gradient(150deg, rgba(${vhue}, 0.4), rgba(${vhue}, 0.12))`,
                        borderColor: `rgba(${vhue}, 0.6)`,
                        color: `rgb(${vhue})`,
                        boxShadow: `0 18px 44px -16px rgb(${vhue})`
                      }}
                    >
                      {currentVibe.app.glyph}
                    </span>
                    <span className="font-[family-name:var(--font-heading)] font-medium text-[19px] tracking-[-0.02em] text-[#F2F1ED]">
                      {currentVibe.app.name}
                    </span>
                  </div>
                  <div className="h-[3px] bg-[rgba(242,241,237,0.1)] rounded mb-[22px] overflow-hidden">
                    <div
                      className="h-full transition-all duration-[800ms] ease-[cubic-bezier(0.3,0.9,0.3,1)]"
                      style={{
                        width: `${progress}%`,
                        background: `rgb(${vhue})`,
                        boxShadow: `0 0 14px rgb(${vhue})`
                      }}
                    />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] font-normal text-[9px] tracking-[0.2em] text-[rgba(242,241,237,0.35)] mb-3.5">
                    WHAT IT CAN REACH
                  </span>
                  <div className="flex flex-col">
                    <div className="grid items-start gap-3 py-[11px] border-t border-[rgba(242,241,237,0.08)]" style={{ gridTemplateColumns: "16px 1fr" }}>
                      <span className="font-normal text-[12px] leading-[1.35]" style={{ color: `rgb(${vhue})` }}>✓</span>
                      <span className="flex flex-col gap-[2px]">
                        <span className="font-normal text-[13px] text-[#F2F1ED]">Photos</span>
                        <span className="font-light text-[11.5px] text-[rgba(242,241,237,0.45)]">Only the receipt you scanned</span>
                      </span>
                    </div>
                    <div className="grid items-start gap-3 py-[11px] border-t border-[rgba(242,241,237,0.08)]" style={{ gridTemplateColumns: "16px 1fr" }}>
                      <span className="font-normal text-[12px] leading-[1.35] text-[rgba(242,241,237,0.4)]">✕</span>
                      <span className="flex flex-col gap-[2px]">
                        <span className="font-normal text-[13px] text-[#F2F1ED]">No network access</span>
                        <span className="font-light text-[11.5px] text-[rgba(242,241,237,0.45)]">Cannot reach the internet or your LAN</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {phase === "run" && (
                <div className="flex-1 flex flex-col overflow-hidden" style={{ animation: "pop 0.45s cubic-bezier(0.2,0.9,0.2,1)" }}>
                  <div className="flex items-center justify-between px-[22px] py-1.5 pb-4">
                    <span className="font-[family-name:var(--font-heading)] font-medium text-[19px] tracking-[-0.02em] text-[#F2F1ED]">
                      {currentVibe.app.name}
                    </span>
                    <span className="flex gap-[3.5px] items-center">
                      <span className="w-[3.5px] h-[3.5px] rounded-full bg-[rgba(242,241,237,0.5)]" />
                      <span className="w-[3.5px] h-[3.5px] rounded-full bg-[rgba(242,241,237,0.5)]" />
                      <span className="w-[3.5px] h-[3.5px] rounded-full bg-[rgba(242,241,237,0.5)]" />
                    </span>
                  </div>
                  <div className="mx-[18px] mb-[18px] rounded-2xl border px-[18px] py-[18px]" style={{
                    borderColor: `rgba(${vhue}, 0.6)`,
                    background: `linear-gradient(150deg, rgba(${vhue}, 0.4), rgba(${vhue}, 0.12))`
                  }}>
                    <div className="font-[family-name:var(--font-mono)] font-normal text-[9px] tracking-[0.2em] text-[rgba(242,241,237,0.5)]">
                      TOTAL · SATURDAY
                    </div>
                    <div className="mt-[9px] font-[family-name:var(--font-heading)] font-medium text-[34px] tracking-[-0.035em] text-[#F2F1ED]">
                      £69.40
                    </div>
                    <div className="mt-[5px] font-[family-name:var(--font-sans)] font-light text-[12.5px] text-[rgba(242,241,237,0.6)]">
                      Three people · itemised from the photo
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden px-[18px]">
                    {["Mira", "Tom", "You"].map((name, i) => (
                      <div
                        key={name}
                        className="grid items-center gap-[13px] py-3 border-t border-[rgba(242,241,237,0.08)]"
                        style={{ gridTemplateColumns: "32px 1fr auto" }}
                      >
                        <span
                          className="w-8 h-8 rounded-[10px] bg-[rgba(242,241,237,0.07)] flex items-center justify-center font-[family-name:var(--font-heading)] font-medium text-[12px]"
                          style={{ color: `rgb(${vhue})` }}
                        >
                          {name[0]}
                        </span>
                        <span className="flex flex-col gap-[2px] min-w-0">
                          <span className="font-normal text-[14px] text-[#F2F1ED]">{name}</span>
                          <span className="font-light text-[11.5px] text-[rgba(242,241,237,0.45)]">
                            {name === "You" ? "Paid the whole bill" : i === 0 ? "Two courses, no wine" : "Shared the starter"}
                          </span>
                        </span>
                        <span className="flex flex-col items-end gap-1">
                          <span className="font-[family-name:var(--font-heading)] font-medium text-[14px] text-[#F2F1ED]">
                            £{i === 0 ? "26.40" : i === 1 ? "18.90" : "24.10"}
                          </span>
                          <span
                            className="font-[family-name:var(--font-mono)] font-normal text-[8.5px] tracking-[0.14em] border rounded px-[5px] py-[2px]"
                            style={{
                              color: i === 0 || name === "You" ? `rgb(${vhue})` : "rgba(242,241,237,0.55)",
                              borderColor: i === 0 || name === "You" ? `rgba(${vhue}, 0.5)` : "rgba(242,241,237,0.18)"
                            }}
                          >
                            {name === "You" ? "HOST" : i === 0 ? "PAID" : "PENDING"}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="px-[18px] pt-3.5">
                      <button
                        className="w-full border-none rounded-xl text-center font-medium text-[14px] text-[#0F0F11] px-3.5 py-3.5 cursor-pointer"
                        style={{
                          background: `rgb(${vhue})`,
                          boxShadow: `0 12px 30px -12px rgb(${vhue})`
                        }}
                      >
                        Send three requests
                      </button>
                    </div>
                    <div className="grid grid-cols-3 mt-[18px] border-t border-[rgba(242,241,237,0.1)]">
                      {["Split", "History", "Settings"].map((tab, i) => (
                        <span key={tab} className="flex flex-col items-center gap-[11px] pt-3.5 pb-4">
                          <span
                            className="font-medium text-[12.5px] tracking-[-0.005em]"
                            style={{ color: i === 0 ? `rgb(${vhue})` : "rgba(242,241,237,0.35)" }}
                          >
                            {tab}
                          </span>
                          <span
                            className="w-[22px] h-[2px] rounded-[1px]"
                            style={{ background: i === 0 ? `rgb(${vhue})` : "transparent" }}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="m-0 mb-5 max-w-[18ch] font-[family-name:var(--font-heading)] font-medium text-[54px] leading-[1.04] tracking-[-0.032em] text-[#F2F1ED]">
            Software that did not exist this morning.
          </h2>
          <p className="m-0 mb-11 max-w-[44ch] font-[family-name:var(--font-sans)] font-light text-[17px] leading-[1.7] text-[rgba(242,241,237,0.58)]">
            The owner asks for something the device does not have. Imagine OS writes it, compiles it against your platform APIs, sandboxes it away from the network, and puts it on the home screen. No store, no account, no connection.
          </p>
          <div
            className="flex items-start gap-3.5 mb-10 px-[22px] py-5 border-l-2 transition-all duration-[800ms]"
            style={{
              borderColor: `rgb(${vhue})`,
              background: `rgba(${vhue}, 0.08)`
            }}
          >
            <span className="font-[family-name:var(--font-sans)] font-light text-[21px] leading-[1.45] text-[#F2F1ED]">
              {CAPTIONS[phase]}
            </span>
          </div>
          <div className="flex flex-col">
            {VIBES.map((vibe, i) => {
              const on = i === vibeIndex;
              return (
                <button
                  key={i}
                  onClick={() => jumpToVibe(i)}
                  className="grid items-center text-left cursor-pointer border-none border-t border-[rgba(242,241,237,0.12)] px-3 py-[18px] transition-all duration-[400ms]"
                  style={{
                    gridTemplateColumns: "12px 1fr auto",
                    gap: "18px",
                    background: on ? `rgba(${vibe.app.hue}, 0.1)` : "transparent"
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: on ? `rgb(${vibe.app.hue})` : "rgba(242,241,237,0.2)" }}
                  />
                  <span
                    className="font-[family-name:var(--font-sans)] font-light text-[16px] transition-colors"
                    style={{ color: on ? "#F2F1ED" : "rgba(242,241,237,0.55)" }}
                  >
                    {vibe.text}
                  </span>
                  <span
                    className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.16em]"
                    style={{ color: on ? `rgb(${vibe.app.hue})` : "rgba(242,241,237,0.3)" }}
                  >
                    {on ? (phase === "run" ? "RUNNING" : phase === "install" ? "INSTALLING" : phase === "propose" ? "PROPOSED" : "ASKING") : ""}
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
