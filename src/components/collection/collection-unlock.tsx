import { AssetPlaceholder } from "@/components/asset-placeholder";
import type { CollectionFlavor } from "@/data/collections";
import type { CollectionStory } from "@/data/stories";

type CollectionUnlockProps = {
  selectedFlavors: CollectionFlavor[];
  story?: CollectionStory;
};

function FlavorSlot({ flavor, label }: { flavor?: CollectionFlavor; label: string }) {
  return (
    <div className={`collection-slot${flavor ? " is-filled" : ""}`}>
      <span className="collection-slot__label">{label}</span>
      {flavor ? (
        <>
          <AssetPlaceholder assetKey={flavor.assetKey} decorative />
          <strong>{flavor.shortName}</strong>
          <small>{flavor.place}</small>
        </>
      ) : (
        <div className="collection-slot__empty" aria-label={`${label} chưa được chọn`}>
          <span>+</span>
          <small>Chọn một Mảnh Vị</small>
        </div>
      )}
    </div>
  );
}
export function CollectionUnlock({ selectedFlavors, story }: CollectionUnlockProps) {
  const unlocked = Boolean(story && selectedFlavors.length === 2);

  return (
    <section className="collection-center" aria-labelledby="collection-unlock-title">
      <div className="collection-center__heading">
        <div>
          <p className="eyebrow">Chạm để kết nối</p>
          <h2 id="collection-unlock-title">Mở một chuyện Việt</h2>
        </div>
        <p>{unlocked ? "Đã mở 1 câu chuyện kết nối" : `${selectedFlavors.length} / 2 Mảnh Vị`}</p>
      </div>

      <div className="collection-equation" aria-label="Tiến trình kết nối Mảnh Vị">
        <FlavorSlot flavor={selectedFlavors[0]} label="Mảnh A" />
        <span className="collection-equation__operator" aria-hidden="true">+</span>
        <FlavorSlot flavor={selectedFlavors[1]} label="Mảnh B" />
        <span className="collection-equation__operator is-arrow" aria-hidden="true">→</span>
        <div className={`collection-book${unlocked ? " is-unlocked" : ""}`}>
          <span aria-hidden="true">▤</span>
          <strong>{unlocked ? "Đã mở" : "Đang khóa"}</strong>
          <small>Câu chuyện liên kết</small>
        </div>
      </div>

      <div className={`collection-story${unlocked ? " is-unlocked" : " is-locked"}`} aria-live="polite">
        {story && unlocked ? (
          <>
            <div className="collection-story__copy">
              <p className="eyebrow">Câu chuyện đã mở</p>
              <h3>{story.title}</h3>
              <p className="collection-story__subtitle">{story.subtitle}</p>
              <p className="collection-story__excerpt">{story.excerpt}</p>
              <p className="collection-story__region">{story.region}</p>
              <div className="collection-story__actions">
                <a className="button button--primary" href="#collection-story-full">
                  Đọc trọn câu chuyện <span aria-hidden="true">→</span>
                </a>
                <a className="text-link" href="#collection-related">
                  Xem câu chuyện liên quan <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <AssetPlaceholder assetKey={story.image} className="collection-story__visual" />
          </>
        ) : (
          <div className="collection-story__locked-copy">
            <span aria-hidden="true">○</span>
            <p className="eyebrow">Câu chuyện đang khóa</p>
            <h3>
              {selectedFlavors.length < 2
                ? "Chọn thêm một Mảnh Vị"
                : "Cặp này đang chờ một câu chuyện"}
            </h3>
            <p>
              {selectedFlavors.length < 2
                ? "Kết nối đủ hai mảnh đã sưu tầm để mở lớp ký ức phía sau món ăn."
                : "Hãy thử một kết hợp khác trong bộ sưu tập hiện tại."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
