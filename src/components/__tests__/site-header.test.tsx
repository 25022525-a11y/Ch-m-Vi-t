import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("site header", () => {
  it("uses the official brand icon alongside the existing wordmark", () => {
    const { container } = render(<SiteHeader />);

    const brandLink = screen.getByRole("link", { name: /chạm việt.*trang chủ/i });
    const logo = container.querySelector<HTMLImageElement>("img.wordmark__logo");

    expect(brandLink).toContainElement(logo);
    expect(logo).toHaveAttribute("src", "/icon-192.png");
    expect(logo).toHaveAttribute("width", "44");
    expect(logo).toHaveAttribute("height", "44");
    expect(screen.getByText("CHẠM VIỆT")).toBeInTheDocument();
    expect(screen.getByText("MẢNH VỊ")).toBeInTheDocument();
  });
});
