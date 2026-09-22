import { AssetPlaceholder } from "@/components/asset-placeholder";

export function FeaturedStory() {
  return (
    <section id="cau-chuyen" className="featured-story" aria-labelledby="story-title">
      <div className="section-shell featured-story__grid">
        <div className="featured-story__visual">
          <AssetPlaceholder assetKey="featured-story-rice-fields" />
          <span className="featured-story__folio">Chuyện 01</span>
        </div>

        <article className="featured-story__copy">
          <p className="eyebrow">Câu chuyện nổi bật</p>
          <h2 id="story-title">Người giữ vị bên dòng sông quê</h2>
          <p className="featured-story__dek">
            Một món ăn không chỉ đi qua căn bếp. Nó đi qua bàn tay, ký ức và
            cách một vùng đất kể về chính mình.
          </p>
          <blockquote>
            “Giữ một hương vị cũng là giữ lại cách người ta nhớ về quê nhà.”
          </blockquote>
          <a className="text-link" href="#bo-suu-tap">
            Khám phá mảnh vị liên quan <span aria-hidden="true">→</span>
          </a>
          <div className="featured-story__related" aria-label="Chủ đề kể chuyện">
            <div><span>01 / CON NGƯỜI</span><strong>Bàn tay giữ bếp lửa</strong></div>
            <div><span>02 / VÙNG ĐẤT</span><strong>Mỗi miền một cách nêm</strong></div>
          </div>
        </article>
      </div>
    </section>
  );
}
