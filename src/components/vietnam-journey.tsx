import { AssetPlaceholder } from "@/components/asset-placeholder";

const places = [
  { city: "Hà Nội", note: "Thanh tao trong từng lớp vị", state: "Đã chạm" },
  { city: "Huế", note: "Đậm đà một miền kinh kỳ", state: "Đã chạm" },
  { city: "Hội An", note: "Giao thoa trong lòng phố cổ", state: "Đang đợi" },
  { city: "Nam Bộ", note: "Hào sảng như đất và người", state: "Đang đợi" },
];

export function VietnamJourney() {
  return (
    <section id="hanh-trinh" className="journey" aria-labelledby="journey-title">
      <div className="section-shell journey__grid">
        <div className="journey__copy">
          <p className="eyebrow">Đi dọc theo những món ăn</p>
          <h2 id="journey-title">Hành trình Vị Việt</h2>
          <p className="journey__lede">
            Mỗi Mảnh Vị đánh dấu một nơi đã đi qua. Bộ sưu tập lớn dần thành
            bản đồ ký ức ẩm thực của riêng bạn.
          </p>

          <ol className="journey__places">
            {places.map((place) => (
              <li key={place.city}>
                <span className="journey__dot" aria-hidden="true" />
                <div>
                  <strong>{place.city}</strong>
                  <p>{place.note}</p>
                </div>
                <small>{place.state}</small>
              </li>
            ))}
          </ol>
        </div>

        <div className="journey__map">
          <AssetPlaceholder assetKey="vietnam-journey-map" />
          <p>Visual bản đồ sẽ được thay bằng asset riêng; các điểm hành trình giữ nguyên theo dữ liệu.</p>
        </div>
      </div>
    </section>
  );
}
