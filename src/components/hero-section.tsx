import { AssetPlaceholder } from "@/components/asset-placeholder";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Một Việt Nam trong từng Mảnh Vị</p>
          <h1 id="hero-title">
            Mỗi món ăn
            <span>là một mảnh ghép</span>
            của Việt Nam
          </h1>
          <p className="hero__lede">
            Sưu tầm Mảnh Vị, chạm NFC và kết nối những hương vị quen để mở ra
            câu chuyện về vùng đất, con người và văn hóa Việt.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#bo-suu-tap">
              Bắt đầu sưu tầm <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#cach-hoat-dong">
              Xem cách hoạt động <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero__note">
            Collectible vật lý <span aria-hidden="true">•</span> Trải nghiệm số
          </p>
          <div className="hero__stats" aria-label="Quy mô bộ sưu tập mẫu">
            <div><strong>08</strong><span>Mảnh vị mở đầu</span></div>
            <div><strong>03</strong><span>Miền hương vị</span></div>
            <div><strong>∞</strong><span>Câu chuyện để khám phá</span></div>
          </div>
        </div>

        <div className="hero__visual">
          <AssetPlaceholder assetKey="hero-vietnam-landscape" priority />
          <div className="hero__quote" aria-label="Thông điệp thương hiệu">
            <span>Từ món ăn</span>
            <strong>chạm đến một vùng đất</strong>
          </div>
          <div className="hero__nfc" aria-hidden="true">
            <span />
            CHẠM
          </div>
          <div className="hero__visual-caption"><span>01 / MẢNH VỊ</span><strong>Gom vị Việt, mở chuyện Việt</strong></div>
        </div>
      </div>
    </section>
  );
}
