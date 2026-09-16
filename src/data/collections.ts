import type { AssetKey } from "@/data/assets";

export type CollectionFilter = "all" | "owned" | "locked" | "region";

export type CollectionFlavor = {
  id: string;
  name: string;
  shortName: string;
  region: "Miền Bắc" | "Miền Trung" | "Miền Nam";
  place: string;
  category: "Món ăn" | "Thức uống";
  assetKey: AssetKey;
  owned: boolean;
  storyIds: string[];
};

export const collectionProgress = {
  owned: 4,
  total: 12,
} as const;

// Mock data cho prototype /collection, không đại diện dữ liệu tài khoản thật.
export const collectionFlavors: CollectionFlavor[] = [
  {
    id: "banh-chung",
    name: "Bánh chưng",
    shortName: "Bánh chưng",
    region: "Miền Bắc",
    place: "Bắc Bộ",
    category: "Món ăn",
    assetKey: "banh-chung",
    owned: true,
    storyIds: ["tet-two-regions"],
  },
  {
    id: "banh-tet",
    name: "Bánh tét",
    shortName: "Bánh tét",
    region: "Miền Trung",
    place: "Trung Bộ – Nam Bộ",
    category: "Món ăn",
    assetKey: "banh-tet",
    owned: true,
    storyIds: ["tet-two-regions"],
  },
  {
    id: "pho-hanoi",
    name: "Phở Hà Nội",
    shortName: "Phở",
    region: "Miền Bắc",
    place: "Hà Nội",
    category: "Món ăn",
    assetKey: "pho-hanoi",
    owned: false,
    storyIds: [],
  },
  {
    id: "banh-mi-saigon",
    name: "Bánh mì Sài Gòn",
    shortName: "Bánh mì",
    region: "Miền Nam",
    place: "Sài Gòn",
    category: "Món ăn",
    assetKey: "banh-mi-saigon",
    owned: false,
    storyIds: [],
  },
  {
    id: "goi-cuon",
    name: "Gỏi cuốn Nam Bộ",
    shortName: "Gỏi cuốn",
    region: "Miền Nam",
    place: "Nam Bộ",
    category: "Món ăn",
    assetKey: "goi-cuon",
    owned: true,
    storyIds: [],
  },
  {
    id: "ca-phe-trung",
    name: "Cà phê trứng",
    shortName: "Cà phê trứng",
    region: "Miền Bắc",
    place: "Hà Nội",
    category: "Thức uống",
    assetKey: "ca-phe-trung",
    owned: true,
    storyIds: [],
  },
];

export const regionProgress = [
  { region: "Miền Bắc", explored: 2, total: 4, note: "Thanh nhã, nhiều lớp vị" },
  { region: "Miền Trung", explored: 1, total: 4, note: "Đậm đà và chỉn chu" },
  { region: "Miền Nam", explored: 1, total: 4, note: "Cởi mở, hào sảng" },
] as const;
