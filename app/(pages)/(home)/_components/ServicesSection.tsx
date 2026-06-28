"use client";

import {
  Bot,
  Cloud,
  Code2,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  SearchCheck,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  homePageContent,
  type ServiceItem,
} from "./home-content";
import {
  StaggerContainer,
  StaggerItem,
} from "./shared/stagger-container";
import { FadeInView } from "./shared/fade-in-view";

const iconMap: Record<ServiceItem["icon"], LucideIcon> = {
  Monitor,
  LayoutDashboard,
  Code2,
  ServerCog,
  Workflow,
  Bot,
  MessageCircle,
  SearchCheck,
  Cloud,
};

export function ServicesSection() {
  const { services } = homePageContent;

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F6FBFD 0%, #ECF6F9 100%)",
      }}
    >
      <div className="irex-container relative py-[84px] lg:px-[56px]">
        {/* Decorative brand shapes (top-right) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-[52px] h-[220px] w-[210px] rounded-l-[72px] bg-[#061014] opacity-[0.055]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-12 top-[114px] h-[96px] w-[340px] rounded-full bg-[#43A3BE] opacity-[0.075]"
        />

        <FadeInView className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <p className="irex-eyebrow">{services.eyebrow}</p>
            <h2 className="irex-section-title mt-2.5">{services.title}</h2>
            <p className="irex-section-body mt-2.5">{services.body}</p>
          </div>
          <motion.a
            href={services.cta.href}
            className="irex-button irex-button--primary whitespace-nowrap"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {services.cta.label}
          </motion.a>
        </FadeInView>

        <StaggerContainer className="relative mt-8 grid gap-[18px] md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.08}>
          {services.items.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <StaggerItem key={service.title}>
                <motion.article
                  className="flex h-full min-h-[210px] flex-col gap-[14px] rounded-[22px] border border-[var(--irex-border)] bg-white p-[24px]"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--irex-border-icon)] bg-[#DDF4FA]">
                    <Icon className="h-[21px] w-[21px] text-[var(--irex-accent-strong)]" />
                  </div>
                  <h3 className="text-[15px] font-bold leading-[1.3] text-[var(--irex-ink)]">
                    {service.title}
                  </h3>
                  <p className="text-[13px] leading-[1.45] text-[#64747C]">
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
