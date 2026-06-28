"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { homePageContent } from "./home-content";
import { FadeInView } from "./shared/fade-in-view";

export function ProfessionalFooter() {
  const { footer } = homePageContent;

  return (
    <footer
      id="rodape"
      className="relative overflow-hidden border-t border-[var(--irex-border)] bg-[#0A1317] text-[#ECF0F3]"
    >
      {/* Brand watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-6 select-none text-[116px] font-bold leading-none text-white opacity-[0.045]"
      >
        IREIX
      </span>

      <div className="irex-container relative flex flex-col gap-[28px] p-12 max-lg:px-5">
        <FadeInView className="grid gap-9 lg:grid-cols-[420px_minmax(0,1fr)_minmax(0,1fr)_300px]">
          {/* Brand column */}
          <div className="flex flex-col gap-[14px]">
            <Image
              src="/images/ireix-logo.png"
              alt={footer.brandName}
              width={54}
              height={54}
              className="h-[54px] w-[54px] rounded-[14px] object-cover"
            />
            <h2 className="text-[1.875rem] font-bold leading-[1.2]">
              {footer.brandName}
            </h2>
            <p className="max-w-[420px] text-[15px] leading-[1.5] text-[#ECF0F3]/80">
              {footer.body}
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <motion.a
                href={footer.ctas[0].href}
                className="irex-button irex-button--primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {footer.ctas[0].label}
              </motion.a>
              <motion.a
                href={footer.ctas[1].href}
                className="irex-button bg-transparent text-[#ECF0F3] hover:bg-white/10"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {footer.ctas[1].label}
              </motion.a>
            </div>
          </div>

          <FooterColumn title="Serviços" items={footer.services} />
          <FooterColumn title="Empresa" items={footer.company} />

          <div className="flex flex-col gap-[10px]">
            <p className="text-sm font-bold">Contato</p>
            {footer.contact.map((item, index) => (
              <p
                key={item}
                className={`text-sm ${index === 2 ? "max-w-[18rem] leading-[1.45]" : ""} text-[#ECF0F3]/80`}
              >
                {item}
              </p>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="flex flex-col gap-3 border-t border-white/[0.12] pt-4 text-xs text-[#ECF0F3]/60 sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.legal}</p>
            <p>{footer.stack}</p>
          </div>
        </FadeInView>
      </div>
    </footer>
  );
}

function FooterColumn({
  items,
  title,
}: {
  items: readonly string[];
  title: string;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-sm font-bold">{title}</p>
      {items.map((item) => {
        const href =
          item === "Blog"
            ? "/blog"
            : item === "Processo"
              ? "/#processo"
              : "/#contato";

        return (
          <Link
            key={item}
            href={href}
            className="text-sm text-[#ECF0F3]/70 transition-colors hover:text-[#ECF0F3]"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
