import { AssetPlaceholder } from "@/components/asset-placeholder";
import type { Flavor } from "@/data/flavors";

export type FlavorCardProps = {
  flavor: Flavor;
  compact?: boolean;
  selected?: boolean;
  onSelect?: (flavor: Flavor) => void;
};

function FlavorCardContent({ flavor, compact = false }: Pick<FlavorCardProps, "flavor" | "compact">) {
  return (
    <>
      <AssetPlaceholder assetKey={flavor.assetKey} decorative />
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

export function FlavorCard({ flavor, compact = false, selected = false, onSelect }: FlavorCardProps) {
  if (onSelect) {
    return (
      <button
        type="button"
        className="flavor-card flavor-card--selectable"
        aria-pressed={selected}
        aria-label={`${selected ? "Bỏ chọn" : "Chọn"} ${flavor.name}`}
        onClick={() => onSelect(flavor)}
      >
        <FlavorCardContent flavor={flavor} compact={compact} />
        <span className="flavor-card__selection" aria-hidden="true">
          {selected ? "✓" : "+"}
        </span>
      </button>
    );
  }

  return (
    <article className="flavor-card">
      <FlavorCardContent flavor={flavor} compact={compact} />
      <a className="flavor-card__link" href="#unlock-story" aria-label={`Xem chi tiết ${flavor.name}`}>
        Xem mảnh vị <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
