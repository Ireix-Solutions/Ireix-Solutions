import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { HeroSection } from "@/app/(pages)/(home)/_components/HeroSection";

describe("HeroSection — content (matches design T5QVGA)", () => {
  it("renders the hero title as the single h1", () => {
    const { getByRole } = render(<HeroSection />);
    expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the editorial eyebrow label", () => {
    const { getByText } = render(<HeroSection />);
    expect(getByText("PRESENÇA DIGITAL E CONVERSÃO")).toBeInTheDocument();
  });

  it("renders the primary CTA button", () => {
    const { getAllByText } = render(<HeroSection />);
    // "Solicitar proposta" appears in the nav and as the hero CTA
    expect(getAllByText("Solicitar proposta").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the secondary CTA button", () => {
    const { getByText } = render(<HeroSection />);
    expect(getByText("Conhecer serviços")).toBeInTheDocument();
  });

  it("does NOT render metric blocks (absent from design)", () => {
    const { queryByText } = render(<HeroSection />);
    expect(queryByText("15+")).toBeNull();
    expect(queryByText("24h")).toBeNull();
    expect(queryByText("100%")).toBeNull();
  });
});

describe("HeroSection — full-bleed layout", () => {
  it("renders hero background image with aria-hidden", () => {
    const { container } = render(<HeroSection />);
    const img = container.querySelector("img[aria-hidden='true']");
    expect(img).toBeInTheDocument();
  });

  it("renders accent bar at the bottom of the hero", () => {
    const { container } = render(<HeroSection />);
    const accentBar = container.querySelector("[data-testid='hero-accent-bar']");
    expect(accentBar).toBeInTheDocument();
  });

  it("does NOT render HeroVisual or HeroParticles data-testids", () => {
    const { container } = render(<HeroSection />);
    expect(container.querySelector("[data-testid='hero-visual']")).toBeNull();
    expect(container.querySelector("[data-testid='hero-particles']")).toBeNull();
  });

  it("renders hero section with dark background class", () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector("section");
    expect(section?.className).toContain("bg-[#061014]");
  });
});
