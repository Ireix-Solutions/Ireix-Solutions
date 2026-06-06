"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";
import {
  StaggerContainer,
  StaggerItem,
} from "@/app/(pages)/(home)/_components/shared/stagger-container";
import { FadeInView } from "@/app/(pages)/(home)/_components/shared/fade-in-view";

export function TestimonialsSection() {
  const { testimonials } = homePageContent;

  return (
    <section className="bg-[var(--irex-surface)]">
      <div className="irex-container irex-section">
        <FadeInView className="max-w-[53.75rem]">
          <p className="irex-eyebrow">{testimonials.eyebrow}</p>
          <h2 className="irex-section-title mt-2">{testimonials.title}</h2>
          <p className="irex-section-body mt-3 max-w-[48.75rem]">
            {testimonials.body}
          </p>
        </FadeInView>

        <StaggerContainer className="mt-7 grid gap-[18px] xl:grid-cols-3" staggerDelay={0.12}>
          {testimonials.items.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <motion.article
                className="flex min-h-[380px] flex-col justify-between gap-6 rounded-3xl border border-[var(--irex-border)] bg-white p-7"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="space-y-4">
                  <p className="text-base font-bold text-[#F5B700]">★★★★★</p>
                  <h3 className="text-[1.375rem] leading-[1.3] font-medium text-[var(--irex-ink)]">
                    {testimonial.quote}
                  </h3>
                  <p className="text-sm leading-[1.45] text-[var(--irex-muted)]">
                    {testimonial.supportCopy}
                  </p>
                  <span className="inline-flex rounded-full bg-[var(--irex-accent-soft)] px-[10px] py-1.5 text-xs font-bold text-[var(--irex-accent)]">
                    {testimonial.outcome}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[15px] font-bold text-[var(--irex-ink)]">
                      {testimonial.name}
                    </p>
                    <p className="text-[13px] leading-[1.35] text-[var(--irex-muted)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
