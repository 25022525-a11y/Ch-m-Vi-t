import { AssetPlaceholder } from "@/components/asset-placeholder";
import {
  collectionProgress,
  type CollectionFilter,
  type CollectionFlavor,
} from "@/data/collections";

const filters: { id: CollectionFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "owned", label: "Đã sưu tầm" },
  { id: "locked", label: "Chưa mở" },
  { id: "region", label: "Theo vùng" },
];

const regionOrder: CollectionFlavor["region"][] = ["Miền Bắc", "Miền Trung", "Miền Nam"];

type CollectionSidebarProps = {
  items: CollectionFlavor[];
  filter: CollectionFilter;
  selectedIds: string[];
  onFilterChange: (filter: CollectionFilter) => void;
  onToggle: (id: string) => void;
};

function FlavorLedgerItem({
  flavor,
  selected,
  onToggle,
}: {
  flavor: CollectionFlavor;
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  const actionLabel = flavor.owned
    ? `${selected ? "Bỏ chọn" : "Chọn"} ${flavor.name}`
    : `${flavor.name} chưa được sưu tầm`;

  return (
    <li className={`collection-ledger__item${flavor.owned ? " is-owned" : " is-locked"}`}>
      <button
        type="button"
        aria-label={actionLabel}
        aria-pressed={flavor.owned ? selected : undefined}
        disabled={!flavor.owned}
        onClick={() => onToggle(flavor.id)}
      >
        <AssetPlaceholder assetKey={flavor.assetKey} decorative />
        <span className="collection-ledger__copy">
          <strong>{flavor.name}</strong>
          <small>{flavor.place}</small>
          <span>{flavor.owned ? "Đã chạm" : "Chưa mở"}</span>
        </span>
        <span className="collection-ledger__state" aria-hidden="true">
          {flavor.owned ? (selected ? "✓" : "+") : "○"}
        </span>
      </button>
    </li>
  );
}

export function CollectionSidebar({
  items,
  filter,
  selectedIds,
  onFilterChange,
  onToggle,
}: CollectionSidebarProps) {
  const filteredItems = items.filter((item) => {
    if (filter === "owned") return item.owned;
    if (filter === "locked") return !item.owned;
    return true;
  });
  const visibleItems = filter === "region"
    ? [...filteredItems].sort(
        (first, second) => regionOrder.indexOf(first.region) - regionOrder.indexOf(second.region),
      )
    : filteredItems;

  return (
    <aside className="collection-sidebar" aria-labelledby="collection-list-title">
      <div className="collection-panel-heading">
        <div>
          <p className="eyebrow">Kho Mảnh Vị</p>
          <h2 id="collection-list-title">Bộ sưu tập</h2>
        </div>
        <span>{collectionProgress.owned} / {collectionProgress.total}</span>
      </div>

      <div className="collection-filters" aria-label="Lọc bộ sưu tập">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => onFilterChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <ol
        className={`collection-ledger${filter === "region" ? " is-region-view" : ""}`}
        aria-label="Danh sách Mảnh Vị"
      >
        {visibleItems.map((flavor) => (
          <FlavorLedgerItem
            key={flavor.id}
            flavor={flavor}
            selected={selectedIds.includes(flavor.id)}
            onToggle={onToggle}
          />
        ))}
      </ol>

      <blockquote>“Sưu tầm món ăn, là sưu tầm một phần Việt Nam.”</blockquote>
    </aside>
  );
}
