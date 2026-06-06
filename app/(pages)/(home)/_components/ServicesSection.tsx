"use client";

import {
  Bot,
  Code2,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  Rocket,
  SearchCheck,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  homePageContent,
  type ServiceItem,
} from "@/app/(pages)/(home)/_components/home-content";
import {
  StaggerContainer,
  StaggerItem,
} from "@/app/(pages)/(home)/_components/shared/stagger-container";
import { FadeInView } from "@/app/(pages)/(home)/_components/shared/fade-in-view";

const iconMap: Record<ServiceItem["icon"], LucideIcon> = {
  Monitor,
  LayoutDashboard,
  Code2,
  ServerCog,
  Workflow,
  Bot,
  MessageCircle,
  SearchCheck,
  Rocket,
};

export function ServicesSection() {
  const { services } = homePageContent;

  return (
    <section id="solucoes" className="bg-[var(--irex-surface)]">
      <div className="irex-container irex-section">
        <FadeInView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[47.5rem]">
            <p className="irex-eyebrow">{services.eyebrow}</p>
            <h2 className="irex-section-title mt-2">{services.title}</h2>
            <p className="irex-section-body mt-3">{services.body}</p>
          </div>
          <motion.a
            href={services.cta.href}
            className="irex-button irex-button--primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {services.cta.label}
          </motion.a>
        </FadeInView>

        <StaggerContainer className="mt-7 grid gap-[18px] md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.08}>
          {services.items.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <StaggerItem key={service.title}>
                <motion.article
                  className="flex min-h-[210px] flex-col gap-3.5 rounded-2xl border border-[var(--irex-border)] bg-white p-6"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--irex-accent-soft)]">
                    <Icon className="h-[21px] w-[21px] text-[var(--irex-accent)]" />
                  </div>
                  <h3 className="text-lg font-bold leading-[1.25] text-[var(--irex-ink)]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-7 text-[var(--irex-muted)]">
                    {service.description}
                  </p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
