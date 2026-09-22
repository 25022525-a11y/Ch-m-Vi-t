"use client";

import { useState } from "react";

import { AssetPlaceholder } from "@/components/asset-placeholder";
import { FlavorCard } from "@/components/flavor-card";
import type { Flavor } from "@/data/flavors";
import { featuredUnlockIds, unlockPreviews } from "@/data/unlock-stories";

type UnlockStoryProps = {
  flavors: Flavor[];
};

type SlotIds = [string | null, string | null];

function UnlockSlot({
  label,
  flavor,
  onRemove,
}: {
  label: "A" | "B";
  flavor?: Flavor;
  onRemove: () => void;
}) {
  return (
    <div className={`unlock-slot ${flavor ? "unlock-slot--filled" : ""}`} role="group" aria-label={`Chạm ${label}`}>
      <div className="unlock-slot__top">
        <span>Chạm {label}</span>
        {flavor ? (
          <button type="button" onClick={onRemove} aria-label={`Xóa ${flavor.name} khỏi Chạm ${label}`}>
            ×
          </button>
        ) : null}
      </div>
      {flavor ? (
        <div className="unlock-slot__item" key={flavor.id}>
          <AssetPlaceholder assetKey={flavor.assetKey} className="unlock-slot__image" decorative />
          <div className="unlock-slot__details">
            <strong>{flavor.shortName}</strong>
            <small>{flavor.place} · {flavor.region}</small>
          </div>
        </div>
      ) : (
        <div className="unlock-slot__empty">
          <span aria-hidden="true">+</span>
          <strong>Chọn mảnh thứ {label === "A" ? "nhất" : "hai"}</strong>
        </div>
      )}
    </div>
  );
}

export function UnlockStory({ flavors }: UnlockStoryProps) {
  const [slotIds, setSlotIds] = useState<SlotIds>([null, null]);

  const [flavorA, flavorB] = slotIds.map((id) => flavors.find((flavor) => flavor.id === id));
  const story = unlockPreviews.find((preview) =>
    preview.flavorIds.every((id) => slotIds.includes(id)),
  );
  const isUnlocked = Boolean(story);
  const pairSelected = Boolean(flavorA && flavorB);
  const choices = flavors.length > 3
    ? flavors.filter((flavor) => featuredUnlockIds.some((id) => id === flavor.id))
    : flavors;

  function toggleFlavor(flavor: Flavor) {
    setSlotIds(([a, b]) => {
      if (a === flavor.id) return [null, b];
      if (b === flavor.id) return [a, null];
      if (!a) return [flavor.id, b];
      // Keep A as the anchor when a new flavor is chosen after both slots fill.
      return [a, flavor.id];
    });
  }

  function removeFromSlot(slot: 0 | 1) {
    setSlotIds(([a, b]) => slot === 0 ? [null, b] : [a, null]);
  }

  return (
    <section id="unlock-story" className="unlock-story" aria-labelledby="unlock-title">
      <div className="section-shell">
        <div className="unlock-story__intro">
          <p className="eyebrow">Cơ chế cốt lõi</p>
          <h2 id="unlock-title">Chạm hai hương vị.<br />Mở một chuyện Việt.</h2>
          <p>
            Chọn hai Mảnh Vị dưới đây. Mỗi sự kết hợp hé lộ một mối liên hệ giữa
            món ăn, vùng đất và ký ức.
          </p>
        </div>

        <div className="unlock-story__workspace">
          <div className="unlock-story__picker">
            <p className="unlock-story__choice-note">
              {pairSelected
                ? "Đã đủ hai mảnh. Chọn món khác để thay Chạm B."
                : "Chọn lần lượt hai Mảnh Vị cho Chạm A và Chạm B."}
            </p>
            <div className="unlock-story__choices" role="group" aria-label="Chọn Mảnh Vị để kết nối">
              {choices.map((flavor) => (
                <FlavorCard
                  key={flavor.id}
                  flavor={flavor}
                  compact
                  selected={slotIds.includes(flavor.id)}
                  selectionSlot={slotIds[0] === flavor.id ? "A" : slotIds[1] === flavor.id ? "B" : undefined}
                  onSelect={toggleFlavor}
                />
              ))}
            </div>
          </div>

          <div className="unlock-story__equation" aria-live="polite">
            <UnlockSlot label="A" flavor={flavorA} onRemove={() => removeFromSlot(0)} />
            <span className="unlock-story__operator" aria-hidden="true">+</span>
            <UnlockSlot label="B" flavor={flavorB} onRemove={() => removeFromSlot(1)} />
            <span className="unlock-story__operator" aria-hidden="true">→</span>

            <article className={`unlock-result ${isUnlocked ? "unlock-result--open" : ""}`}>
              <div className="unlock-result__visual">
                <AssetPlaceholder assetKey={story?.image ?? "unlock-linked-story"} decorative={!isUnlocked} />
              </div>
              <div className="unlock-result__copy">
                <p className="unlock-result__status">
                  {isUnlocked ? "Đã kết nối 2 Mảnh Vị" : pairSelected ? "Đang hoàn thiện mối liên hệ" : "Câu chuyện đang khóa"}
                </p>
                <h3>{story?.title ?? (pairSelected ? "Thử một cặp chuyện khác" : "Chọn đủ hai Mảnh Vị")}</h3>
                <p>
                  {story?.excerpt ?? (pairSelected
                    ? "Bản demo hiện có chuyện Phở × Bún bò Huế và Bánh chưng × Bánh tét. Hãy chọn một trong hai cặp để mở bản xem trước."
                    : "Khi hai mảnh gặp nhau, câu chuyện phía sau sự kết nối sẽ hiện ra tại đây.")}
                </p>
                {story ? (
                  <a className="button button--gold" href={story.href}>
                    {story.action} <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
