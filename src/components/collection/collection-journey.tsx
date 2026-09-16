import { AssetPlaceholder } from "@/components/asset-placeholder";
import { regionProgress } from "@/data/collections";

export function CollectionJourney() {
  return (
    <aside className="collection-journey" aria-labelledby="collection-journey-title">
      <section className="collection-journey__map">
        <div className="collection-panel-heading">
          <div>
            <p className="eyebrow">Dấu chân vùng miền</p>
            <h2 id="collection-journey-title">Hành trình Vị Việt</h2>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
        <AssetPlaceholder assetKey="vietnam-journey-map" />
        <ol>
          {regionProgress.map((item) => (
            <li key={item.region}>
              <span>{item.explored}/{item.total}</span>
              <div>
                <strong>{item.region}</strong>
                <small>{item.note}</small>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="collection-origin" id="collection-related">
        <p className="eyebrow">Nguồn gốc &amp; Văn hóa</p>
        <h3>Gói một mùa sum họp</h3>
        <AssetPlaceholder assetKey="collection-origin-tet" />
        <p>
          Từ hạt gạo, lá dong đến dáng bánh, mỗi miền gìn giữ một cách kể riêng về đất,
          người và mùa đoàn viên.
        </p>
        <a className="text-link" href="#collection-story-full">
          Khám phá nguồn gốc <span aria-hidden="true">→</span>
        </a>
      </section>
    </aside>
  );
}
