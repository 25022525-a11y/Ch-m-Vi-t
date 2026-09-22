import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FeaturedStory } from "@/components/featured-story";
import { SeasonalSection } from "@/components/seasonal-section";
import { VietnamJourney } from "@/components/vietnam-journey";

describe("homepage lower content", () => {
  it("keeps journey, editorial story, and seasonal content distinct", () => {
    const { rerender } = render(<VietnamJourney />);
    expect(screen.getByRole("heading", { name: /hành trình vị việt/i })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Hoàng Sa")).toBeInTheDocument();
    expect(screen.getByText("Trường Sa")).toBeInTheDocument();

    rerender(<FeaturedStory />);
    expect(screen.getByRole("heading", { name: /người giữ vị bên dòng sông quê/i })).toBeInTheDocument();

    rerender(<SeasonalSection />);
    expect(screen.getByRole("heading", { name: /tết sum vầy/i })).toBeInTheDocument();
  });
});
