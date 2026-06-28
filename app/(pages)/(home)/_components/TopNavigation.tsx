"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { homePageContent } from "./home-content";

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigation } = homePageContent;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const isSolid = scrolled || isOpen;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        isSolid
          ? "bg-[#061014] shadow-[0_2px_20px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="irex-container flex min-h-[76px] items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={navigation.brandName}
        >
          <Image
            src="/images/ireix-logo.png"
            alt={navigation.brandName}
            width={38}
            height={38}
            className="h-[38px] w-[38px] rounded-[10px] object-cover"
          />
          <span className="text-[17px] font-bold leading-tight text-white">
            {navigation.brandName}
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[12px] font-bold transition-colors hover:text-white ${
                index === 0 ? "text-white" : "text-[#D3E0E5]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <motion.a
            href={navigation.primaryCta.href}
            className="irex-button irex-button--primary text-[12px] shadow-[0_8px_20px_-4px_rgba(67,163,190,0.2)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {navigation.primaryCta.label}
          </motion.a>
          <a
            href={navigation.secondaryCta.href}
            className="text-[12px] font-bold text-white/80 transition-colors hover:text-white"
          >
            {navigation.secondaryCta.label}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          id="mobile-navigation"
          className="border-t border-white/15 bg-[#061014]/95 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="irex-container flex flex-col gap-4 py-5">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={navigation.primaryCta.href}
              className="irex-button irex-button--primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              {navigation.primaryCta.label}
            </a>
            <a
              href={navigation.secondaryCta.href}
              className="irex-button irex-button--dark-secondary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              {navigation.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
