"use client";

import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";
import { FadeInView } from "@/app/(pages)/(home)/_components/shared/fade-in-view";

export function WhatsAppSpotlight() {
  const { spotlight } = homePageContent;

  return (
    <section className="bg-[var(--irex-ink)]">
      <div className="irex-container relative overflow-hidden py-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden rounded-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${spotlight.background.src})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[rgba(7,17,24,0.83)]" />
        </div>

        <div className="relative grid items-center gap-8 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_390px]">
          <FadeInView className="max-w-[35rem]" direction="left">
            <p className="text-xs font-bold tracking-[0.02em] text-[var(--irex-gold)]">
              {spotlight.eyebrow}
            </p>
            <h2 className="mt-3 text-[2.1rem] leading-[1.12] font-medium text-white sm:text-[2.6rem] lg:text-[2.625rem]">
              {spotlight.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/92">
              {spotlight.body}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href={spotlight.ctas[0].href}
                className="irex-button irex-button--primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {spotlight.ctas[0].label}
              </motion.a>
              <motion.a
                href={spotlight.ctas[1].href}
                className="irex-button irex-button--dark-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {spotlight.ctas[1].label}
              </motion.a>
            </div>
          </FadeInView>

          <FadeInView direction="right" delay={0.15}>
            <div className="rounded-[32px] border border-white/12 bg-white p-[14px] shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
              <div className="flex h-full flex-col gap-3.5 rounded-3xl bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[var(--irex-accent-soft)]">
                      <Sparkles className="h-[18px] w-[18px] text-[var(--irex-accent)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--irex-ink)]">
                        {spotlight.chatMock.assistantName}
                      </p>
                      <p className="text-xs text-[var(--irex-muted)]">
                        {spotlight.chatMock.status}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[var(--irex-surface)] px-[9px] py-[5px] text-[10px] font-bold text-[var(--irex-text-subtle)]">
                    {spotlight.chatMock.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#E6ECF2] bg-[#F8FAFC] px-[14px] py-3">
                  <div>
                    <p className="text-[11px] font-bold text-[var(--irex-muted)]">
                      {spotlight.chatMock.contextLabel}
                    </p>
                    <p className="text-[11px] font-bold text-[var(--irex-ink)]">
                      {spotlight.chatMock.contextValue}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#E6ECF2] bg-white px-2 py-[5px] text-[10px] font-bold text-[var(--irex-muted)]">
                    ativo
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-end">
                    <div className="w-[250px] rounded-[16px_16px_6px_16px] border border-[#E9EEF3] bg-white px-[14px] py-3">
                      <p className="text-sm leading-[1.4] text-[var(--irex-ink)]">
                        {spotlight.chatMock.messages[0].body}
                      </p>
                      <p className="mt-1.5 text-[11px] text-[#8B99A5]">
                        {spotlight.chatMock.messages[0].timestamp}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="w-[280px] rounded-[16px_16px_16px_6px] bg-[#EEF4FF] px-[14px] py-3">
                      <p className="text-sm leading-[1.4] text-[var(--irex-ink)]">
                        {spotlight.chatMock.messages[1].body}
                      </p>
                      <p className="mt-2 text-[11px] text-[#6D8092]">
                        {spotlight.chatMock.messages[1].timestamp}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-[#E6ECF2] bg-[#F8FAFC] px-3 py-2.5">
                  <span className="text-[13px] text-[#8B99A5]">
                    {spotlight.chatMock.composerPlaceholder}
                  </span>
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--irex-accent-soft)]">
                    <Send className="h-4 w-4 text-[var(--irex-accent)]" />
                  </span>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
