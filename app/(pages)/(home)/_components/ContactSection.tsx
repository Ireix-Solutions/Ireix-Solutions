"use client";

import { Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { homePageContent } from "./home-content";
import { ContactForm } from "./ContactForm";
import { FadeInView } from "./shared/fade-in-view";

export function ContactSection() {
  const { contact } = homePageContent;

  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #EAF3F6 100%)",
      }}
    >
      {/* Decorative brand watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 select-none text-[146px] font-bold leading-none text-[#061014] opacity-[0.04]"
      >
        IREIX
      </span>

      <div className="irex-container relative grid gap-8 py-[78px] lg:grid-cols-[500px_minmax(0,1fr)] lg:px-[48px]">
        <FadeInView className="relative flex max-w-[500px] flex-col gap-[18px]" direction="left">
          <p className="irex-eyebrow">{contact.eyebrow}</p>
          <h2 className="irex-section-title">{contact.title}</h2>
          <p className="irex-section-body">{contact.body}</p>

          <ul className="flex flex-col gap-[10px]">
            {contact.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2.5">
                <Check className="h-[18px] w-[18px] shrink-0 text-[var(--irex-accent-strong)]" />
                <span className="text-[15px] font-bold leading-[1.3] text-[var(--irex-ink)]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <motion.a
            href={contact.whatsappCta.href}
            className="irex-button w-fit bg-[var(--irex-ink)] text-[#ECF0F3] hover:bg-[#1a2c35]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            {contact.whatsappCta.label}
          </motion.a>
        </FadeInView>

        <FadeInView direction="right" delay={0.15}>
          <ContactForm />
        </FadeInView>
      </div>
    </section>
  );
}
