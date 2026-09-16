import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CoreLoop } from "@/components/core-loop";
import { HeroSection } from "@/components/hero-section";

describe("homepage introduction", () => {
  it("states the product promise and its four-step loop", () => {
    const { rerender } = render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /mỗi món ăn.*mảnh ghép.*việt nam/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /bắt đầu sưu tầm/i })).toHaveAttribute(
      "href",
      "#bo-suu-tap",
    );

    rerender(<CoreLoop />);

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Mở chuyện Việt")).toBeInTheDocument();
  });
});
