import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { CollectionDashboard } from "@/components/collection/collection-dashboard";

describe("CollectionDashboard", () => {
  it("shows collection progress and the default unlocked Tết story", () => {
    render(<CollectionDashboard />);

    expect(screen.getByText("4 / 12")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /bánh chưng × bánh tét/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/cùng một tấm lòng, hai miền đất/i)).toBeInTheDocument();
  });

  it("filters the collection to flavors that are not owned", async () => {
    const user = userEvent.setup();
    render(<CollectionDashboard />);

    await user.click(screen.getByRole("button", { name: "Chưa mở" }));

    const collection = screen.getByLabelText("Danh sách Mảnh Vị");
    expect(within(collection).getByText("Phở Hà Nội")).toBeInTheDocument();
    expect(within(collection).getByText("Bánh mì Sài Gòn")).toBeInTheDocument();
    expect(within(collection).queryByText("Bánh chưng")).not.toBeInTheDocument();
  });

  it("returns to the locked state when one selected flavor is removed", async () => {
    const user = userEvent.setup();
    render(<CollectionDashboard />);

    await user.click(screen.getByRole("button", { name: /bỏ chọn bánh tét/i }));

    expect(
      screen.getByRole("heading", { name: /chọn thêm một mảnh vị/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/cùng một tấm lòng, hai miền đất/i)).not.toBeInTheDocument();
  });

  it("orders flavors by region when the region filter is selected", async () => {
    const user = userEvent.setup();
    const { container } = render(<CollectionDashboard />);

    await user.click(screen.getByRole("button", { name: "Theo vùng" }));

    const names = Array.from(
      container.querySelectorAll(".collection-ledger__copy strong"),
      (element) => element.textContent,
    );
    expect(names).toEqual([
      "Bánh chưng",
      "Phở Hà Nội",
      "Cà phê trứng",
      "Bánh tét",
      "Bánh mì Sài Gòn",
      "Gỏi cuốn Nam Bộ",
    ]);
  });
});
