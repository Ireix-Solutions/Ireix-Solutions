"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";
import { FadeInView } from "@/app/(pages)/(home)/_components/shared/fade-in-view";

export function ProfessionalFooter() {
  const { footer } = homePageContent;

  return (
    <footer
      id="rodape"
      className="border-t border-[var(--irex-border)] bg-[var(--irex-ink)] text-white"
    >
      <div className="irex-container flex flex-col gap-7 px-12 py-12 max-lg:px-5">
        <FadeInView className="grid gap-9 lg:grid-cols-[420px_minmax(0,1fr)_minmax(0,1fr)_300px]">
          <div>
            <h2 className="text-[1.875rem] font-bold leading-[1.2]">
              {footer.brandName}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-white/80">
              {footer.body}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
                className="irex-button irex-button--dark-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {footer.ctas[1].label}
              </motion.a>
            </div>
          </div>

          <FooterColumn title="Serviços" items={footer.services} />
          <FooterColumn title="Empresa" items={footer.company} />

          <div>
            <p className="text-sm font-bold">Contato</p>
            <div className="mt-3 space-y-2.5">
              {footer.contact.map((item, index) => (
                <p
                  key={item}
                  className={`text-sm ${index === 2 ? "max-w-[16rem] leading-[1.45]" : ""} text-white/80`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="flex flex-col gap-3 border-t border-white/12 pt-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
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
    <div>
      <p className="text-sm font-bold">{title}</p>
      <div className="mt-3 space-y-2.5">
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
              className="block text-sm text-white/70 transition-colors hover:text-white"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
