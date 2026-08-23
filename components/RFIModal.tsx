"use client";

import { useState } from "react";

interface RFIModalProps {
  onClose: () => void;
}

export function RFIModal({ onClose }: RFIModalProps) {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    platform: "Android",
    use: ""
  });

  const isReady =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.company.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isReady) {
      setSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[rgba(10,10,12,0.88)] flex items-center justify-center p-8">
      <div className="w-[680px] max-w-full max-h-[92vh] overflow-auto bg-[#17171A] border border-[rgba(110,139,255,0.22)] rounded-[18px]">
        <div className="flex items-center justify-between px-[34px] py-5 border-b border-[rgba(242,241,237,0.1)]">
          <span className="font-[family-name:var(--font-mono)] font-normal text-[10px] tracking-[0.2em] text-[rgba(110,139,255,0.7)]">
            OEM PROGRAMME · TECHNICAL REVIEW
          </span>
          <button
            onClick={onClose}
            className="cursor-pointer bg-transparent border-none font-[family-name:var(--font-mono)] font-normal text-[16px] text-[rgba(242,241,237,0.45)] p-0 hover:text-[#F2F1ED] transition-colors"
          >
            ✕
          </button>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="px-[34px] py-[38px]">
            <h2 className="m-0 mb-3.5 font-[family-name:var(--font-heading)] font-medium text-[40px] leading-[1.04] tracking-[-0.03em] text-[#F2F1ED]">
              Put it on your next device.
            </h2>
            <p className="m-0 mb-[34px] max-w-[56ch] font-[family-name:var(--font-sans)] font-light text-[15px] leading-[1.7] text-[rgba(242,241,237,0.55)]">
              Tell us the platform and the ship window. We reply with an integration plan and a build for your reference hardware.
            </p>

            <div className="grid grid-cols-2 gap-[22px] mb-[22px]">
              <label className="flex flex-col gap-2.5">
                <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.4)]">
                  NAME
                </span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="bg-transparent border-none border-b border-[rgba(242,241,237,0.22)] text-[#F2F1ED] px-0 py-[9px] font-[family-name:var(--font-sans)] font-light text-[15px] outline-none focus:border-[rgba(242,241,237,0.4)] transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2.5">
                <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.4)]">
                  WORK EMAIL
                </span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@company.com"
                  className="bg-transparent border-none border-b border-[rgba(242,241,237,0.22)] text-[#F2F1ED] px-0 py-[9px] font-[family-name:var(--font-sans)] font-light text-[15px] outline-none focus:border-[rgba(242,241,237,0.4)] transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2.5">
                <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.4)]">
                  COMPANY
                </span>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company"
                  className="bg-transparent border-none border-b border-[rgba(242,241,237,0.22)] text-[#F2F1ED] px-0 py-[9px] font-[family-name:var(--font-sans)] font-light text-[15px] outline-none focus:border-[rgba(242,241,237,0.4)] transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2.5">
                <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.4)]">
                  HOST PLATFORM
                </span>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="bg-[#17171A] border-none border-b border-[rgba(242,241,237,0.22)] text-[#F2F1ED] px-0 py-[9px] font-[family-name:var(--font-sans)] font-light text-[15px] outline-none focus:border-[rgba(242,241,237,0.4)] transition-colors"
                >
                  <option>Android</option>
                  <option>Windows</option>
                  <option>Linux / embedded</option>
                  <option>RTOS / wearable</option>
                  <option>Multiple</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-2.5 mb-8">
              <span className="font-[family-name:var(--font-mono)] font-normal text-[9.5px] tracking-[0.2em] text-[rgba(242,241,237,0.4)]">
                DEVICE AND SHIP WINDOW
              </span>
              <textarea
                value={formData.use}
                onChange={(e) => setFormData({ ...formData, use: e.target.value })}
                rows={3}
                placeholder="Form factor, silicon, memory budget, and when it goes to manufacturing."
                className="bg-transparent border border-[rgba(242,241,237,0.18)] rounded-[10px] text-[#F2F1ED] px-[15px] py-[14px] font-[family-name:var(--font-sans)] font-light text-[15px] leading-[1.6] outline-none resize-vertical focus:border-[rgba(242,241,237,0.3)] transition-colors"
              />
            </label>

            <div className="flex items-center justify-between gap-[22px]">
              <span className="font-[family-name:var(--font-mono)] font-normal text-[10px] leading-[1.7] text-[rgba(242,241,237,0.32)] max-w-[38ch]">
                Covered by mutual NDA before any silicon detail is exchanged.
              </span>
              <button
                type="submit"
                disabled={!isReady}
                className="border-none rounded-md bg-[#2E5BFF] text-[#F2F1ED] cursor-pointer px-8 py-3.5 font-[family-name:var(--font-mono)] font-medium text-[11px] tracking-[0.18em] transition-opacity disabled:opacity-35 enabled:hover:bg-[#4365FF]"
                style={{ opacity: isReady ? 1 : 0.35 }}
              >
                SEND
              </button>
            </div>
          </form>
        ) : (
          <div className="px-[34px] py-[72px] text-center">
            <h2 className="m-0 mb-4 font-[family-name:var(--font-heading)] font-medium text-[38px] tracking-[-0.03em] text-[#F2F1ED]">
              Received.
            </h2>
            <p className="m-0 mb-[34px] font-[family-name:var(--font-sans)] font-light text-[15px] leading-[1.7] text-[rgba(242,241,237,0.55)]">
              A platform engineer will be in touch within two business days.
            </p>
            <button
              onClick={onClose}
              className="cursor-pointer border border-[rgba(242,241,237,0.25)] rounded-md bg-transparent text-[#F2F1ED] px-[34px] py-3.5 font-[family-name:var(--font-mono)] font-medium text-[11px] tracking-[0.18em] hover:bg-[rgba(242,241,237,0.05)] transition-colors"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
