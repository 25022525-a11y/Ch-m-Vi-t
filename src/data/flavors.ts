import type { AssetKey } from "@/data/assets";

export type Flavor = {
  id: string;
  name: string;
  shortName: string;
  region: string;
  place: string;
  assetKey: AssetKey;
  collected: boolean;
};

// Mock data phục vụ prototype; không phải dữ liệu người dùng hoặc số liệu vận hành thật.
export const flavors: Flavor[] = [
  {
    id: "pho-hanoi",
    name: "Phở Hà Nội",
    shortName: "Phở",
    region: "Miền Bắc",
    place: "Hà Nội",
    assetKey: "pho-hanoi",
    collected: true,
  },
  {
    id: "bun-bo-hue",
    name: "Bún bò Huế",
    shortName: "Bún bò Huế",
    region: "Miền Trung",
    place: "Thừa Thiên Huế",
    assetKey: "bun-bo-hue",
    collected: true,
  },
  {
    id: "banh-mi-saigon",
    name: "Bánh mì Sài Gòn",
    shortName: "Bánh mì",
    region: "Miền Nam",
    place: "Sài Gòn",
    assetKey: "banh-mi-saigon",
    collected: true,
  },
  {
    id: "goi-cuon",
    name: "Gỏi cuốn Nam Bộ",
    shortName: "Gỏi cuốn",
    region: "Miền Nam",
    place: "Nam Bộ",
    assetKey: "goi-cuon",
    collected: true,
  },
  {
    id: "ca-phe-trung",
    name: "Cà phê trứng Hà Nội",
    shortName: "Cà phê trứng",
    region: "Miền Bắc",
    place: "Hà Nội",
    assetKey: "ca-phe-trung",
    collected: false,
  },
  {
    id: "cao-lau",
    name: "Cao lầu Hội An",
    shortName: "Cao lầu",
    region: "Miền Trung",
    place: "Hội An",
    assetKey: "cao-lau",
    collected: false,
  },
  {
    id: "banh-chung",
    name: "Bánh chưng Bắc Bộ",
    shortName: "Bánh chưng",
    region: "Miền Bắc",
    place: "Bắc Bộ",
    assetKey: "banh-chung",
    collected: true,
  },
  {
    id: "banh-tet",
    name: "Bánh tét Nam Bộ",
    shortName: "Bánh tét",
    region: "Miền Nam",
    place: "Nam Bộ",
    assetKey: "banh-tet",
    collected: true,
  },
];
