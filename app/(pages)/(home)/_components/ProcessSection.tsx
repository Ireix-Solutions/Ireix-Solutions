"use client";

import { motion } from "framer-motion";

import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";
import { FadeInView } from "@/app/(pages)/(home)/_components/shared/fade-in-view";
import {
  slideLeftVariants,
  slideRightVariants,
  useAccessibleVariants,
} from "@/app/(pages)/(home)/_components/shared/animation-config";

export function ProcessSection() {
  const { process } = homePageContent;

  return (
    <section id="processo" className="bg-white">
      <div className="irex-container irex-section grid gap-8 lg:grid-cols-[440px_minmax(0,1fr)]">
        <FadeInView className="max-w-[27.5rem]" direction="left">
          <p className="irex-eyebrow">{process.eyebrow}</p>
          <h2 className="irex-section-title mt-2">{process.title}</h2>
          <p className="irex-section-body mt-3">{process.body}</p>
          <motion.a
            href={process.cta.href}
            className="irex-button irex-button--secondary mt-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {process.cta.label}
          </motion.a>
        </FadeInView>

        <div className="grid gap-3.5">
          {process.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const variants = useAccessibleVariants(
              isEven ? slideLeftVariants : slideRightVariants,
            );

            return (
              <motion.article
                key={step.number}
                className="flex gap-4 rounded-3xl bg-[var(--irex-surface)] p-[22px]"
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[var(--irex-ink)] text-[15px] font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-[1.25] text-[var(--irex-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-7 text-[var(--irex-muted)]">
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
