import type { AssetKey } from "@/data/assets";

export const featuredUnlockIds = ["pho-hanoi", "bun-bo-hue", "banh-chung", "banh-tet"] as const;

export type UnlockPreview = {
  flavorIds: readonly [string, string];
  title: string;
  excerpt: string;
  image: AssetKey;
  href: string;
  action: string;
};

// Cặp chuyện mẫu cho demo. Nội dung dài có thể nối vào CMS sau này.
export const unlockPreviews: UnlockPreview[] = [
  {
    flavorIds: ["pho-hanoi", "bun-bo-hue"],
    title: "Hai tô nước — Hai miền ký ức",
    excerpt: "Cùng là nước dùng, mỗi tô lại kể về một miền đất và một cách nâng niu hương vị riêng.",
    image: "unlock-linked-story",
    href: "#cau-chuyen",
    action: "Xem câu chuyện nổi bật",
  },
  {
    flavorIds: ["banh-chung", "banh-tet"],
    title: "Hai miền gói một mùa Tết",
    excerpt: "Một chiếc vuông, một đòn tròn. Cả hai cùng gói trong lá xanh ký ức sum vầy của người Việt.",
    image: "collection-story-tet",
    href: "#tet-viet",
    action: "Xem chủ đề Tết",
  },
];
