"use client";

import { useState } from "react";

import { AssetPlaceholder } from "@/components/asset-placeholder";
import { FlavorCard } from "@/components/flavor-card";
import type { Flavor } from "@/data/flavors";

type UnlockStoryProps = {
  flavors: Flavor[];
};

export function UnlockStory({ flavors }: UnlockStoryProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedFlavors = selectedIds
    .map((id) => flavors.find((flavor) => flavor.id === id))
    .filter((flavor): flavor is Flavor => Boolean(flavor));
  const isUnlocked = selectedFlavors.length === 2;

  function toggleFlavor(flavor: Flavor) {
    setSelectedIds((current) => {
      if (current.includes(flavor.id)) {
        return current.filter((id) => id !== flavor.id);
      }

      return [...current.slice(-1), flavor.id];
    });
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
          <div className="unlock-story__choices" aria-label="Chọn Mảnh Vị để kết nối">
            {flavors.slice(0, 3).map((flavor) => (
              <FlavorCard
                key={flavor.id}
                flavor={flavor}
                compact
                selected={selectedIds.includes(flavor.id)}
                onSelect={toggleFlavor}
              />
            ))}
          </div>

          <div className="unlock-story__equation" aria-live="polite">
            <div className={`unlock-slot ${selectedFlavors[0] ? "unlock-slot--filled" : ""}`}>
              <span>Chạm A</span>
              <strong>{selectedFlavors[0]?.shortName ?? "Chọn mảnh thứ nhất"}</strong>
            </div>
            <span className="unlock-story__operator" aria-hidden="true">+</span>
            <div className={`unlock-slot ${selectedFlavors[1] ? "unlock-slot--filled" : ""}`}>
              <span>Chạm B</span>
              <strong>{selectedFlavors[1]?.shortName ?? "Chọn mảnh thứ hai"}</strong>
            </div>
            <span className="unlock-story__operator" aria-hidden="true">→</span>

            <article className={`unlock-result ${isUnlocked ? "unlock-result--open" : ""}`}>
              <div className="unlock-result__visual">
                <AssetPlaceholder assetKey="unlock-linked-story" decorative={!isUnlocked} />
              </div>
              <div className="unlock-result__copy">
                <p className="unlock-result__status">
                  {isUnlocked ? "Đã kết nối 2 Mảnh Vị" : "Câu chuyện đang khóa"}
                </p>
                <h3>{isUnlocked ? "Hai tô nước — Hai miền ký ức" : "Chọn đủ hai Mảnh Vị"}</h3>
                <p>
                  {isUnlocked
                    ? "Cùng là nước dùng, mỗi tô lại kể về một miền đất và một cách nâng niu hương vị riêng."
                    : "Khi hai mảnh gặp nhau, câu chuyện phía sau sự kết nối sẽ hiện ra tại đây."}
                </p>
                {isUnlocked ? (
                  <a className="button button--gold" href="#cau-chuyen">
                    Mở câu chuyện <span aria-hidden="true">→</span>
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
