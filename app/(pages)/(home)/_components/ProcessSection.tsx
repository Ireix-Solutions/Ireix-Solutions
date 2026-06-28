"use client";

import { motion } from "framer-motion";

import { homePageContent } from "./home-content";
import { FadeInView } from "./shared/fade-in-view";
import {
  slideLeftVariants,
  slideRightVariants,
  useAccessibleVariants,
} from "./shared/animation-config";

export function ProcessSection() {
  const { process } = homePageContent;
  const evenVariants = useAccessibleVariants(slideLeftVariants);
  const oddVariants = useAccessibleVariants(slideRightVariants);

  return (
    <section id="processo" className="relative overflow-hidden bg-white">
      <div className="irex-container relative py-[86px] lg:grid lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-10 lg:px-[56px]">
        {/* Decorative brand shapes */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[44%] top-1/2 -translate-y-1/2 select-none text-[132px] font-bold leading-none text-[#061014] opacity-[0.04]"
        >
          IREIX
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-12 h-[118px] w-[328px] rounded-[34px] bg-[#061014] opacity-[0.075]"
        />

        <FadeInView className="relative flex flex-col gap-[14px]" direction="left">
          <p className="irex-eyebrow">{process.eyebrow}</p>
          <h2 className="irex-section-title">{process.title}</h2>
          <p className="irex-section-body">{process.body}</p>
          <motion.a
            href={process.cta.href}
            className="irex-button irex-button--secondary w-fit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {process.cta.label}
          </motion.a>
        </FadeInView>

        <div className="relative mt-8 flex flex-col gap-[14px] lg:mt-0">
          {process.steps.map((step, index) => {
            const variants = index % 2 === 0 ? evenVariants : oddVariants;

            return (
              <motion.article
                key={step.number}
                className="flex gap-[18px] rounded-[24px] border border-[var(--irex-border)] bg-white p-[22px] shadow-[0_10px_28px_-22px_rgba(6,16,20,0.14)]"
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border-2 border-[var(--irex-accent)] bg-[var(--irex-ink)] text-[15px] font-bold text-white">
                  {step.number}
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[15px] font-bold leading-[1.3] text-[var(--irex-ink)]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-[1.45] text-[#64747C]">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
