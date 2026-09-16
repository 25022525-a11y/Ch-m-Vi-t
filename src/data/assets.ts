export const assetCatalog = {
  "banh-chung": {
    label: "Bánh chưng",
    aspectRatio: "4 / 5",
    src: null,
  },
  "banh-tet": {
    label: "Bánh tét",
    aspectRatio: "4 / 5",
    src: null,
  },
  "hero-vietnam-landscape": {
    label: "Phong cảnh Việt Nam cho hero",
    aspectRatio: "16 / 10",
    src: null,
  },
  "pho-hanoi": {
    label: "Phở Hà Nội",
    aspectRatio: "4 / 5",
    src: null,
  },
  "bun-bo-hue": {
    label: "Bún bò Huế",
    aspectRatio: "4 / 5",
    src: null,
  },
  "banh-mi-saigon": {
    label: "Bánh mì Sài Gòn",
    aspectRatio: "4 / 5",
    src: null,
  },
  "goi-cuon": {
    label: "Gỏi cuốn Nam Bộ",
    aspectRatio: "4 / 5",
    src: null,
  },
  "ca-phe-trung": {
    label: "Cà phê trứng Hà Nội",
    aspectRatio: "4 / 5",
    src: null,
  },
  "cao-lau": {
    label: "Cao lầu Hội An",
    aspectRatio: "4 / 5",
    src: null,
  },
  "unlock-linked-story": {
    label: "Minh họa câu chuyện liên kết",
    aspectRatio: "16 / 9",
    src: null,
  },
  "collection-story-tet": {
    label: "Bánh chưng và bánh tét trong câu chuyện Tết",
    aspectRatio: "16 / 10",
    src: null,
  },
  "collection-origin-tet": {
    label: "Không gian nguồn gốc và văn hóa Tết Việt",
    aspectRatio: "16 / 10",
    src: null,
  },
  "vietnam-journey-map": {
    label: "Bản đồ hành trình Vị Việt",
    aspectRatio: "3 / 4",
    src: null,
  },
  "featured-story-rice-fields": {
    label: "Cánh đồng và người giữ vị",
    aspectRatio: "16 / 10",
    src: null,
  },
  "seasonal-tet": {
    label: "Không khí Tết Việt",
    aspectRatio: "16 / 9",
    src: null,
  },
} as const;

export type AssetKey = keyof typeof assetCatalog;
