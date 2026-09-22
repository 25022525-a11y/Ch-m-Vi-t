export const assetCatalog = {
  "banh-chung": {
    label: "Bánh chưng",
    aspectRatio: "4 / 5",
    src: "/images/banh-chung.webp",
  },
  "banh-tet": {
    label: "Bánh tét",
    aspectRatio: "4 / 5",
    src: "/images/banh-tet.webp",
  },
  "hero-vietnam-landscape": {
    label: "Phong cảnh Việt Nam cho hero",
    aspectRatio: "16 / 10",
    src: "/images/hero-collectibles.webp",
  },
  "pho-hanoi": {
    label: "Phở Hà Nội",
    aspectRatio: "4 / 5",
    src: "/images/pho-hanoi.webp",
  },
  "bun-bo-hue": {
    label: "Bún bò Huế",
    aspectRatio: "4 / 5",
    src: "/images/bun-bo-hue.webp",
  },
  "banh-mi-saigon": {
    label: "Bánh mì Sài Gòn",
    aspectRatio: "4 / 5",
    src: "/images/banh-mi-saigon.webp",
  },
  "goi-cuon": {
    label: "Gỏi cuốn Nam Bộ",
    aspectRatio: "4 / 5",
    src: "/images/goi-cuon.webp",
  },
  "ca-phe-trung": {
    label: "Cà phê trứng Hà Nội",
    aspectRatio: "4 / 5",
    src: "/images/ca-phe-trung.webp",
  },
  "cao-lau": {
    label: "Cao lầu Hội An",
    aspectRatio: "4 / 5",
    src: "/images/cao-lau.webp",
  },
  "unlock-linked-story": {
    label: "Minh họa câu chuyện liên kết",
    aspectRatio: "16 / 9",
    src: "/images/river-journey.webp",
  },
  "collection-story-tet": {
    label: "Bánh chưng và bánh tét trong câu chuyện Tết",
    aspectRatio: "16 / 10",
    src: "/images/tet-collectibles.webp",
  },
  "collection-origin-tet": {
    label: "Không gian nguồn gốc và văn hóa Tết Việt",
    aspectRatio: "16 / 10",
    src: "/images/river-journey.webp",
  },
  "vietnam-journey-map": {
    label: "Bản đồ hành trình Vị Việt",
    aspectRatio: "3 / 4",
    src: null,
  },
  "journey-landscape": {
    label: "Phong cảnh hành trình vị Việt",
    aspectRatio: "16 / 9",
    src: "/images/river-journey.webp",
  },
  "featured-story-rice-fields": {
    label: "Cánh đồng và người giữ vị",
    aspectRatio: "16 / 10",
    src: "/images/river-journey.webp",
  },
  "seasonal-tet": {
    label: "Không khí Tết Việt",
    aspectRatio: "16 / 9",
    src: "/images/tet-collectibles.webp",
  },
  "product-packaging": {
    label: "Hộp sưu tầm Mảnh Vị và trải nghiệm số",
    aspectRatio: "4 / 3",
    src: "/images/packaging-reference.webp",
  },
} as const;

export type AssetKey = keyof typeof assetCatalog;
