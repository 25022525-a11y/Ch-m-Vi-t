import { AssetPlaceholder } from "@/components/asset-placeholder";

const touchpoints = [
  { number: "01", title: "Giữ trong tay", description: "Mỗi Mảnh Vị là một vật phẩm nhỏ mang hình ảnh và hương vị của một vùng đất." },
  { number: "02", title: "Chạm để lưu", description: "NFC nối vật phẩm với bộ sưu tập số, nơi hành trình của bạn được ghi lại." },
  { number: "03", title: "Ghép để kể", description: "Hai mảnh gặp nhau mở thêm lớp chuyện về món ăn, con người và ký ức." },
];

export function ProductEcosystem() {
  return (
    <section id="san-pham" className="product-ecosystem" aria-labelledby="product-title">
      <div className="section-shell product-ecosystem__grid">
        <div className="product-ecosystem__visual">
          <AssetPlaceholder assetKey="product-packaging" />
          <span>VẬT PHẨM THẬT · CÂU CHUYỆN SỐ</span>
        </div>
        <div className="product-ecosystem__copy">
          <p className="eyebrow">Một trải nghiệm trong lòng bàn tay</p>
          <h2 id="product-title">Mang vị Việt về nhà.<br /><em>Mang chuyện Việt đi xa.</em></h2>
          <p className="product-ecosystem__lede">Chiếc hộp là điểm bắt đầu. Mỗi lần chạm mở ra một món ăn, một nơi chốn và một mối liên hệ mới trong bản đồ văn hóa của riêng bạn.</p>
          <ol>
            {touchpoints.map((point) => (
              <li key={point.number}><span>{point.number}</span><div><h3>{point.title}</h3><p>{point.description}</p></div></li>
            ))}
          </ol>
          <a className="button button--primary" href="#cach-hoat-dong">Xem cách hoạt động <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
