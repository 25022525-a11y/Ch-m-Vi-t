import type { AssetKey } from "@/data/assets";

export type CollectionStory = {
  id: string;
  title: string;
  subtitle: string;
  requiredFlavorIds: [string, string];
  excerpt: string;
  image: AssetKey;
  region: string;
};

export const collectionStories: CollectionStory[] = [
  {
    id: "tet-two-regions",
    title: "Bánh chưng × Bánh tét",
    subtitle: "Cùng một tấm lòng, hai miền đất, một mùa Tết",
    requiredFlavorIds: ["banh-chung", "banh-tet"],
    excerpt:
      "Một chiếc vuông, một đòn tròn. Khác hình dáng và miền đất, cả hai cùng gói ký ức sum vầy, bàn tay gia đình và niềm mong năm mới đủ đầy.",
    image: "collection-story-tet",
    region: "Miền Bắc × Miền Trung – Nam",
  },
];
