import { AssetPlaceholder } from "@/components/asset-placeholder";

export function SeasonalSection() {
  return (
    <section className="seasonal" aria-labelledby="seasonal-title">
      <div className="section-shell seasonal__grid">
        <div className="seasonal__copy">
          <p className="eyebrow">Chủ đề theo mùa · Tết Việt</p>
          <h2 id="seasonal-title">Hai mảnh gặp nhau,<br />Tết sum vầy.</h2>
          <p>
            Bánh chưng và bánh tét mang hai dáng hình, hai miền đất—nhưng cùng
            kể một câu chuyện về đoàn viên.
          </p>
          <a className="button button--paper" href="#unlock-story">
            Khám phá câu chuyện Tết <span aria-hidden="true">→</span>
          </a>
        </div>
        <AssetPlaceholder assetKey="seasonal-tet" />
      </div>
    </section>
  );
}
