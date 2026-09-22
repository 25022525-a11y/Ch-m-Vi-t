import { AssetPlaceholder } from "@/components/asset-placeholder";
import type { Flavor } from "@/data/flavors";
import { featuredUnlockIds } from "@/data/unlock-stories";

export type FlavorCardProps = {
  flavor: Flavor;
  compact?: boolean;
  selected?: boolean;
  selectionSlot?: "A" | "B";
  onSelect?: (flavor: Flavor) => void;
};

function FlavorCardContent({ flavor, compact = false }: Pick<FlavorCardProps, "flavor" | "compact">) {
  return (
    <>
      <div className="flavor-card__image">
        <AssetPlaceholder assetKey={flavor.assetKey} decorative />
        {!compact ? <span className="flavor-card__status">{flavor.collected ? "Đã mở" : "Chờ khám phá"}</span> : null}
      </div>
      <div className="flavor-card__content">
        <p>{flavor.place}</p>
        <h3>{flavor.shortName}</h3>
        {!compact ? (
          <div className="flavor-card__meta">
            <span>{flavor.region}</span>
            <span>{flavor.collected ? "Đã sưu tầm" : "Chưa có"}</span>
          </div>
        ) : null}
      </div>
    </>
  );
}

export function FlavorCard({ flavor, compact = false, selected = false, selectionSlot, onSelect }: FlavorCardProps) {
  if (onSelect) {
    return (
      <button
        type="button"
        className={`flavor-card flavor-card--selectable${selected ? " flavor-card--assigned" : ""}`}
        aria-pressed={selected}
        aria-label={`${selected ? "Bỏ chọn" : "Chọn"} ${flavor.name}${selected && selectionSlot ? ` khỏi Chạm ${selectionSlot}` : ""}`}
        onClick={() => onSelect(flavor)}
      >
        <FlavorCardContent flavor={flavor} compact={compact} />
        <span className="flavor-card__selection" aria-hidden="true">
          {selected ? selectionSlot ?? "✓" : "+"}
        </span>
      </button>
    );
  }

  const hasStoryPreview = featuredUnlockIds.some((id) => id === flavor.id);

  return (
    <article className="flavor-card">
      <FlavorCardContent flavor={flavor} compact={compact} />
      <a
        className="flavor-card__link"
        href={hasStoryPreview ? "#unlock-story" : "#hanh-trinh"}
        aria-label={`${hasStoryPreview ? "Thử kết nối" : "Khám phá vùng vị của"} ${flavor.name}`}
      >
        {hasStoryPreview ? "Thử kết nối" : "Khám phá vùng vị"} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
