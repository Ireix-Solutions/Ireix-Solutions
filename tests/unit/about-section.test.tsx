import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { AboutSection } from "@/app/(pages)/(home)/_components/AboutSection";

// RED tests — MUST FAIL before AboutSection is created (T013-T015)
describe("AboutSection", () => {
  it("renders the eyebrow label QUEM SOMOS", () => {
    const { getByText } = render(<AboutSection />);
    expect(getByText("QUEM SOMOS")).toBeInTheDocument();
  });

  it("renders the section title", () => {
    const { getByText } = render(<AboutSection />);
    expect(
      getByText("Digital que faz sua empresa parecer tão boa quanto ela é."),
    ).toBeInTheDocument();
  });

  it("renders the AboutBrandPanel with correct data-testid", () => {
    const { getByTestId } = render(<AboutSection />);
    expect(getByTestId("about-brand-panel")).toBeInTheDocument();
  });

  it("renders as a section element", () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
