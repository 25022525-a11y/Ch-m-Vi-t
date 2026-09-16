import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Be_Vietnam_Pro: () => ({ variable: "--font-body" }),
  Lora: () => ({ variable: "--font-display" }),
}));

import { metadata as collectionMetadata } from "@/app/collection/page";
import { metadata as rootMetadata } from "@/app/layout";

describe("public metadata", () => {
  it("uses the official uppercase brand name", () => {
    expect(rootMetadata.title).toBe("CHẠM VIỆT – MẢNH VỊ");
    expect(collectionMetadata.title).toBe("Bộ sưu tập Mảnh Vị | CHẠM VIỆT – MẢNH VỊ");
  });
});
