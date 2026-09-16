import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { UnlockStory } from "@/components/unlock-story";
import { flavors } from "@/data/flavors";

describe("UnlockStory", () => {
  it("reveals a linked story after two flavors are selected", async () => {
    const user = userEvent.setup();
    render(<UnlockStory flavors={flavors.slice(0, 3)} />);

    await user.click(screen.getByRole("button", { name: /chọn phở hà nội/i }));
    await user.click(screen.getByRole("button", { name: /chọn bún bò huế/i }));

    expect(
      screen.getByRole("heading", { name: /hai tô nước.*hai miền ký ức/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/đã kết nối 2 mảnh vị/i)).toBeInTheDocument();
  });

  it("keeps only the two most recently selected flavors", async () => {
    const user = userEvent.setup();
    render(<UnlockStory flavors={flavors.slice(0, 3)} />);

    await user.click(screen.getByRole("button", { name: /chọn phở hà nội/i }));
    await user.click(screen.getByRole("button", { name: /chọn bún bò huế/i }));
    await user.click(screen.getByRole("button", { name: /chọn bánh mì sài gòn/i }));

    expect(screen.getByRole("button", { name: /chọn phở hà nội/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.getByRole("button", { name: /bỏ chọn bún bò huế/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: /bỏ chọn bánh mì sài gòn/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
