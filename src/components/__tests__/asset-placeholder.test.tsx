import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AssetPlaceholder } from "@/components/asset-placeholder";

describe("AssetPlaceholder", () => {
  it("renders a named image when an asset is available", () => {
    render(<AssetPlaceholder assetKey="pho-hanoi" />);
    expect(screen.getByRole("img", { name: "Phở Hà Nội" })).toBeInTheDocument();
  });

  it("labels an asset that still needs a dedicated image", () => {
    render(<AssetPlaceholder assetKey="vietnam-journey-map" />);
    expect(screen.getByRole("img", { name: /bản đồ hành trình vị việt.*chờ asset thật/i })).toBeInTheDocument();
    expect(screen.getByText("vietnam-journey-map")).toBeInTheDocument();
  });
});
