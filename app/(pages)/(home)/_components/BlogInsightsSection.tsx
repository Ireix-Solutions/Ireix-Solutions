"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  SearchCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  homePageContent,
  type BlogCard,
} from "./home-content";
import {
  StaggerContainer,
  StaggerItem,
} from "./shared/stagger-container";
import { FadeInView } from "./shared/fade-in-view";

const iconMap: Record<BlogCard["icon"], LucideIcon> = {
  SearchCheck,
  Workflow,
  Bot,
};

export function BlogInsightsSection() {
  const { blog } = homePageContent;

  return (
    <section className="relative overflow-hidden bg-[var(--irex-canvas)]">
      <div className="irex-container relative py-[76px] lg:px-[48px]">
        {/* Decorative brand slice (left) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-0 h-[170px] w-[270px] rounded-r-[72px] bg-[#061014] opacity-[0.055]"
        />

        <FadeInView className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[760px] flex-col gap-2.5">
            <p className="irex-eyebrow">{blog.eyebrow}</p>
            <h2 className="irex-section-title">{blog.title}</h2>
            <p className="irex-section-body">{blog.body}</p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={blog.cta.href}
              className="irex-button irex-button--secondary whitespace-nowrap"
            >
              {blog.cta.label}
            </Link>
          </motion.div>
        </FadeInView>

        <StaggerContainer className="relative mt-7 grid gap-[18px] lg:grid-cols-3" staggerDelay={0.12}>
          {blog.items.map((post) => {
            const Icon = iconMap[post.icon];

            return (
              <StaggerItem key={post.title}>
                <motion.article
                  className="flex h-full min-h-[278px] flex-col gap-[14px] rounded-[22px] border border-[var(--irex-border)] bg-white p-6"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-[#B9DEE8] bg-[#DDF4FA] px-[10px] py-[5px] text-[11px] font-bold text-[#1C8AAB]">
                      {post.tag}
                    </span>
                    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#B9DEE8] bg-[#DDF4FA]">
                      <Icon className="h-[18px] w-[18px] text-[#1C2B33]" />
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold leading-[1.3] text-[var(--irex-ink)]">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-[13px] leading-[1.45] text-[#64747C]">
                    {post.summary}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-flex w-fit items-center gap-2 text-[14px] font-bold text-[var(--irex-accent-strong)]"
                  >
                    Ler artigo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
