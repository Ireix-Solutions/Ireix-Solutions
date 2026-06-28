import { homePageContent } from "./home-content";
import { AboutBrandPanel } from "./AboutBrandPanel";

export function AboutSection() {
  const { about } = homePageContent;

  return (
    <section
      className="relative overflow-hidden border-t border-[var(--irex-border)]"
      style={{
        background:
          "linear-gradient(to bottom, #F8FDFF 0%, #FFFFFF 50%, #EAF3F6 100%)",
      }}
    >
      {/* Brand watermark faint */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[46%] top-12 select-none text-[128px] font-bold leading-none text-[#061014] opacity-[0.04]"
      >
        IREIX
      </span>

      <div className="irex-container relative py-[84px]">
        <div className="grid gap-12 lg:grid-cols-[660px_minmax(0,1fr)] lg:items-start lg:justify-items-end">
          {/* Copy column */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <p
              className="text-[12px] font-bold uppercase tracking-[1.6px]"
              style={{ color: "var(--irex-accent-strong)" }}
            >
              {about.eyebrow}
            </p>
            <h2
              className="text-[2.25rem] font-semibold leading-[1.04] text-[var(--irex-ink)] lg:text-[3.5rem]"
              style={{ maxWidth: "18ch" }}
            >
              {about.title}
            </h2>
            <p className="max-w-[620px] text-[17px] leading-[1.5] text-[var(--irex-muted)]">
              {about.body}
            </p>
          </div>

          {/* Panel column */}
          <AboutBrandPanel />
        </div>
      </div>
    </section>
  );
}
