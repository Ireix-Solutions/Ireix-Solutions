"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { homePageContent } from "./home-content";
import { TopNavigation } from "./TopNavigation";
import {
  heroStaggerVariants,
  heroChildVariants,
  useAccessibleVariants,
} from "./shared/animation-config";

export function HeroSection() {
  const { hero } = homePageContent;
  const container = useAccessibleVariants(heroStaggerVariants);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#061014]">
      <Image
        src="/images/home/hero-background.png"
        fill
        priority
        alt=""
        aria-hidden={true}
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #061014F2 0%, #061014B8 45%, #06101426 100%), #0610148F",
        }}
      />

      <TopNavigation />

      <div className="irex-container relative z-10 flex min-h-screen flex-col justify-center pb-16 pt-[120px]">
        <motion.div
          className="flex max-w-[640px] flex-col gap-[22px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-[12px] font-bold uppercase tracking-[0.6px] text-[#D7F7FF]"
            variants={heroChildVariants}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="text-[2.55rem] font-bold leading-[1.03] tracking-normal text-white sm:text-[3.2rem] lg:text-[3.75rem]"
            variants={heroChildVariants}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="max-w-[545px] text-[18px] leading-[1.52] text-[#D7E5E9]"
            variants={heroChildVariants}
          >
            {hero.body}
          </motion.p>

          <motion.div className="flex flex-col gap-3 sm:flex-row" variants={heroChildVariants}>
            <motion.a
              href={hero.ctas[0].href}
              className="irex-button irex-button--primary shadow-[0_12px_28px_0_rgba(67,163,190,0.25)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.ctas[0].label}
            </motion.a>
            <motion.a
              href={hero.ctas[1].href}
              className="irex-button irex-button--dark-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.ctas[1].label}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div
        data-testid="hero-accent-bar"
        className="absolute bottom-0 h-1 w-full bg-[var(--irex-accent)]"
      />
    </section>
  );
}
