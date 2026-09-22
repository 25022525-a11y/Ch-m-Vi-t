import { FlavorCard } from "@/components/flavor-card";
import { flavors } from "@/data/flavors";

export function FlavorCollection() {
  return (
    <section id="bo-suu-tap" className="flavor-collection" aria-labelledby="collection-title">
      <div className="section-shell">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">Bộ sưu tập mở đầu</p>
            <h2 id="collection-title">Một bộ sưu tập.<br />Muôn miền hương vị.</h2>
          </div>
          <a className="text-link" href="#unlock-story">
            Thử kết nối hai Mảnh Vị <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="flavor-grid">
          {flavors.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} />
          ))}
        </div>
        <div className="collection-bottomline"><span>01 — 08 / HƯƠNG VỊ MỞ ĐẦU</span><p>Từ món ăn quen thuộc, khám phá những câu chuyện chưa từng kể.</p></div>
      </div>
    </section>
  );
}
