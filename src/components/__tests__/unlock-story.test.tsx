import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { UnlockStory } from "@/components/unlock-story";
import { flavors } from "@/data/flavors";

describe("UnlockStory", () => {
  it("reveals a linked story after two flavors are selected", async () => {
    const user = userEvent.setup();
    render(<UnlockStory flavors={flavors.slice(0, 3)} />);

    await user.click(screen.getByRole("button", { name: /chọn phở hà nội/i }));
    expect(within(screen.getByRole("group", { name: "Chạm A" })).getByText("Phở")).toBeInTheDocument();
    expect(within(screen.getByRole("group", { name: "Chạm B" })).getByText("Chọn mảnh thứ hai")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /chọn bún bò huế/i }));

    expect(within(screen.getByRole("group", { name: "Chạm B" })).getByText("Bún bò Huế")).toBeInTheDocument();
    expect(within(screen.getByRole("group", { name: "Chạm A" })).getByText("Hà Nội · Miền Bắc")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /hai tô nước.*hai miền ký ức/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/đã kết nối 2 mảnh vị/i)).toBeInTheDocument();
  });

  it("replaces Chạm B when a third flavor is selected", async () => {
    const user = userEvent.setup();
    render(<UnlockStory flavors={flavors.slice(0, 3)} />);

    await user.click(screen.getByRole("button", { name: /chọn phở hà nội/i }));
    await user.click(screen.getByRole("button", { name: /chọn bún bò huế/i }));
    await user.click(screen.getByRole("button", { name: /chọn bánh mì sài gòn/i }));

    expect(screen.getByRole("button", { name: /bỏ chọn phở hà nội/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: /chọn bún bò huế/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.getByRole("button", { name: /bỏ chọn bánh mì sài gòn/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(within(screen.getByRole("group", { name: "Chạm A" })).getByText("Phở")).toBeInTheDocument();
    expect(within(screen.getByRole("group", { name: "Chạm B" })).getByText("Bánh mì")).toBeInTheDocument();
  });

  it("clears a selected item and fills the empty slot without duplication", async () => {
    const user = userEvent.setup();
    render(<UnlockStory flavors={flavors.slice(0, 3)} />);

    await user.click(screen.getByRole("button", { name: /chọn phở hà nội/i }));
    await user.click(screen.getByRole("button", { name: /chọn bún bò huế/i }));
    await user.click(screen.getByRole("button", { name: /bỏ chọn phở hà nội/i }));

    expect(within(screen.getByRole("group", { name: "Chạm A" })).getByText("Chọn mảnh thứ nhất")).toBeInTheDocument();
    expect(within(screen.getByRole("group", { name: "Chạm B" })).getByText("Bún bò Huế")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /chọn bánh mì sài gòn/i }));
    expect(within(screen.getByRole("group", { name: "Chạm A" })).getByText("Bánh mì")).toBeInTheDocument();
    expect(within(screen.getByRole("group", { name: "Chạm B" })).getByText("Bún bò Huế")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /xóa bún bò huế khỏi chạm b/i }));
    expect(within(screen.getByRole("group", { name: "Chạm B" })).getByText("Chọn mảnh thứ hai")).toBeInTheDocument();
  });

  it("opens the Tết preview for bánh chưng and bánh tét", async () => {
    const user = userEvent.setup();
    render(<UnlockStory flavors={flavors} />);

    await user.click(screen.getByRole("button", { name: /chọn bánh chưng bắc bộ/i }));
    await user.click(screen.getByRole("button", { name: /chọn bánh tét nam bộ/i }));

    expect(screen.getByRole("heading", { name: /hai miền gói một mùa tết/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /xem chủ đề tết/i })).toHaveAttribute("href", "#tet-viet");
  });
});
