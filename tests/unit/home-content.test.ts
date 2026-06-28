import { describe, it, expect } from "vitest";
import { homePageContent } from "@/app/(pages)/(home)/_components/home-content";

describe("home-content services data", () => {
  it("should have exactly 9 service items", () => {
    expect(homePageContent.services.items).toHaveLength(9);
  });

  it("should not mention specific technology stacks in service titles", () => {
    const forbiddenTerms = ["React", "Next.js", "NestJS", "TypeScript"];
    for (const service of homePageContent.services.items) {
      for (const term of forbiddenTerms) {
        expect(service.title).not.toContain(term);
      }
    }
  });

  it("should not mention specific technology stacks in service descriptions", () => {
    const forbiddenTerms = ["React", "Next.js", "NestJS", "TypeScript"];
    for (const service of homePageContent.services.items) {
      for (const term of forbiddenTerms) {
        expect(service.description).not.toContain(term);
      }
    }
  });

  it("should have valid icon references for all services", () => {
    const validIcons = [
      "Monitor", "LayoutDashboard", "Code2", "ServerCog",
      "Workflow", "Bot", "MessageCircle", "SearchCheck", "Cloud",
    ];
    for (const service of homePageContent.services.items) {
      expect(validIcons).toContain(service.icon);
    }
  });
});

describe("home-content structure", () => {
  it("should have a navigation section", () => {
    expect(homePageContent.navigation.brandName).toBe("Ireix Solution");
  });

  it("should have a hero section with all required fields", () => {
    expect(homePageContent.hero.eyebrow).toBeTruthy();
    expect(homePageContent.hero.title).toBeTruthy();
    expect(homePageContent.hero.body).toBeTruthy();
    expect(homePageContent.hero.ctas).toHaveLength(2);
  });

  it("should have process steps", () => {
    expect(homePageContent.process.steps).toHaveLength(4);
  });

  it("should have about section content", () => {
    expect(homePageContent.about.eyebrow).toBe("QUEM SOMOS");
    expect(homePageContent.about.title).toBeTruthy();
    expect(homePageContent.about.flowChips).toHaveLength(3);
  });
});