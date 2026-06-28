import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { homePageContent } from "./home-content";

export function AboutBrandPanel() {
  const { about } = homePageContent;

  return (
    <div
      data-testid="about-brand-panel"
      className="relative w-full max-w-[562px] overflow-hidden rounded-[40px] shadow-[0_24px_60px_-28px_rgba(6,16,20,0.30)]"
      style={{
        background:
          "linear-gradient(140deg, #0B2B34 0%, #061014 50%, #123744 100%)",
      }}
    >
      {/* Cyan focus glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-[#43A3BE] opacity-[0.28] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-[300px] h-[220px] w-[220px] rounded-full bg-[#43A3BE] opacity-[0.12] blur-[80px]"
      />

      {/* Giant brand watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-9 top-6 select-none text-[94px] font-bold leading-none text-white opacity-[0.075]"
      >
        IREIX
      </span>

      <div className="relative z-10 flex flex-col gap-6 px-[42px] pb-[42px] pt-9">
        {/* Brand pill */}
        <div className="inline-flex w-fit items-center gap-3 rounded-[18px] bg-white px-3.5 py-2">
          <Image
            src="/images/ireix-logo.png"
            alt="Ireix"
            width={38}
            height={38}
            className="h-[38px] w-[38px] rounded-[8px] object-cover"
          />
          <span className="text-[18px] font-bold text-[#061014]">Ireix</span>
        </div>

        {/* Website preview mock */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#F8FDFF] shadow-[0_20px_44px_-20px_rgba(0,0,0,0.45)]">
          {/* Browser top bar */}
          <div className="flex h-[58px] items-center justify-between bg-[#EAF3F6] px-7">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#B9DEE8]" />
              <span className="h-2 w-2 rounded-full bg-[#B9DEE8]" />
              <span className="h-2 w-2 rounded-full bg-[#B9DEE8]" />
            </div>
            <span className="h-[18px] w-[54px] rounded-full bg-[#061014]" />
          </div>

          {/* Preview content */}
          <div className="relative px-[30px] pb-7 pt-6">
            <p className="text-[9px] font-bold tracking-[1.2px] text-[#258CA6]">
              PRESENÇA DIGITAL
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <span className="h-[14px] w-[210px] max-w-full rounded-full bg-[#061014]" />
              <span className="h-[14px] w-[162px] max-w-full rounded-full bg-[#061014]" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <span className="h-2 w-[236px] max-w-full rounded-full bg-[#9FB4BC]" />
              <span className="h-2 w-[186px] max-w-full rounded-full bg-[#C6D8DE]" />
            </div>
            <span className="mt-5 block h-[34px] w-[126px] rounded-full bg-[#43A3BE]" />

            {/* Conversion card */}
            <div className="absolute right-[34px] top-6 flex w-[134px] flex-col gap-2.5 rounded-[24px] bg-[#061014] p-4">
              <MessageCircle className="h-[22px] w-[22px] text-[#43A3BE]" />
              <p className="text-[13px] font-bold leading-tight text-white">
                Contato mais simples
              </p>
              <p className="text-[11px] leading-snug text-[#BFD4DB]">
                do interesse até a conversa
              </p>
            </div>
          </div>
        </div>

        {/* Flow row */}
        <div className="flex gap-2.5">
          {about.flowChips.map((chip, index) => (
            <div
              key={chip}
              className="flex flex-1 items-center gap-2 rounded-[18px] border border-white/[0.18] bg-white/[0.08] px-3 py-3"
            >
              <span className="text-[10px] font-bold tracking-[0.8px] text-[#43A3BE]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[12px] font-bold text-white">{chip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating result badge */}
      <div className="absolute right-[52px] top-[54px] z-20 flex w-[168px] flex-col gap-0.5 rounded-[24px] bg-white p-4 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.4)]">
        <p className="text-[22px] font-bold leading-tight text-[#061014]">
          {about.resultBadge.value}
        </p>
        <p className="text-[11px] font-medium leading-snug text-[#53636C]">
          {about.resultBadge.label}
        </p>
      </div>
    </div>
  );
}
