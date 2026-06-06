"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  hasConfiguredWhatsApp,
  homePageContent,
} from "@/app/(pages)/(home)/_components/home-content";

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation } = homePageContent;
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.98)"],
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 2px 12px rgba(0,0,0,0.06)"],
  );

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[var(--irex-border)] backdrop-blur"
      style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
    >
      <div className="irex-container flex min-h-[76px] items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={navigation.brandName}
        >
          <span className="flex h-9 w-[54px] items-center justify-center rounded-[10px] bg-[var(--irex-ink)] text-sm font-bold text-white">
            IR
          </span>
          <span className="flex flex-col">
            <span className="text-lg font-bold text-[var(--irex-ink)]">
              {navigation.brandName}
            </span>
            <span className="text-[11px] text-[var(--irex-muted)]">
              {navigation.brandTagline}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-[var(--irex-text-soft)] transition-colors hover:text-[var(--irex-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <motion.a
            href={navigation.primaryCta.href}
            className="irex-button irex-button--whatsapp"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {navigation.primaryCta.label}
          </motion.a>
          <a
            href={navigation.secondaryCta.href}
            className="text-sm font-semibold text-[var(--irex-text-subtle)] transition-colors hover:text-[var(--irex-ink)]"
          >
            {navigation.secondaryCta.label}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--irex-border)] text-[var(--irex-ink)] lg:hidden"
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
          className="border-t border-[var(--irex-border)] bg-white lg:hidden"
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
                className="text-base font-semibold text-[var(--irex-ink)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={navigation.primaryCta.href}
              className="irex-button irex-button--whatsapp w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              {navigation.primaryCta.label}
            </a>
            <a
              href={navigation.secondaryCta.href}
              className="irex-button irex-button--secondary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              {navigation.secondaryCta.label}
            </a>
            {!hasConfiguredWhatsApp ? (
              <p className="text-sm text-[var(--irex-muted)]">
                WhatsApp em configuração. O botão leva direto para contato.
              </p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
