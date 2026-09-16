import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AssetPlaceholder } from "@/components/asset-placeholder";

describe("AssetPlaceholder", () => {
  it("exposes the missing asset name and replacement key", () => {
    render(<AssetPlaceholder assetKey="pho-hanoi" />);

    expect(
      screen.getByRole("img", {
        name: /phở hà nội.*chờ asset thật/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("pho-hanoi")).toBeInTheDocument();
  });
});
