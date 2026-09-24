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

  it("references every official favicon asset", () => {
    expect(rootMetadata.icons).toEqual({
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    });
  });
});
