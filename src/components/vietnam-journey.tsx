// Simplified mainland outline from Natural Earth 1:50m public-domain geometry.
// https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries/
const vietnamLandPath = "M250 77.8 L229.8 84.2 L227.8 90.9 L220.9 94 L203.6 92.5 L206.1 100.2 L198.8 106.2 L197.6 113.1 L178.4 123.3 L165.4 151.5 L175 164.9 L197 181.1 L196.2 187.6 L192.3 186.8 L245 228.1 L252.1 227.9 L280.6 255.5 L297.9 299.7 L296.8 316.4 L302.3 325.8 L303 336.1 L299.1 331.7 L294.9 334.8 L298 342.2 L294.4 341.5 L296.3 354.8 L294.2 353.5 L294.2 361.5 L288.4 365.3 L286.5 372.7 L224.4 399.9 L215.2 392.3 L213.1 399.9 L205.2 396 L200.8 398 L205.7 398.6 L206.3 402.9 L195.7 402.8 L207.3 408.1 L200.4 415.6 L183.9 405.1 L199.6 421.9 L192.6 424.4 L172.9 411.5 L184.7 423.3 L185.1 429 L161 437.8 L147.1 451.3 L134.7 452.2 L139.3 447.8 L136.5 446.2 L137.4 422.9 L139.5 416.8 L146.4 413.1 L122.3 399.6 L137.6 396 L144.7 391.2 L144.6 385.1 L154.3 387 L170.2 382.8 L184.9 388.4 L184.8 381.4 L173.8 374 L173.7 364.1 L179.2 360.5 L193.4 362.6 L193.9 355 L233.2 342.9 L232.1 323.6 L236.8 311.8 L226.9 291.8 L234.3 276.7 L232.3 267.1 L238.5 259.1 L221 243.2 L229.3 236.3 L212.5 227.3 L209.6 222.5 L202.6 223.2 L197.1 209.8 L167.9 187.1 L159.5 175 L147.1 167.7 L148.3 160.6 L103.1 141.7 L109.3 136.5 L108.2 130.9 L128.2 132.6 L140.4 121 L137.5 115.6 L120.2 108.7 L128 102.7 L110.6 94.1 L93.9 101.3 L74.8 95.6 L65.6 84.8 L69.2 72.7 L64.4 69.1 L58.8 72.9 L56 66.3 L39.6 52.5 L52 41.7 L70.3 50.5 L82.8 41.2 L88.7 46.4 L93.3 40.8 L104.9 47.8 L112.2 40.3 L120.4 43.1 L131.7 39.7 L138.1 30.5 L152.9 24.5 L173.3 36.7 L184.3 35.4 L207.1 40.9 L198.8 49 L202.9 64.1 L214 65.7 L227.6 74.8 L242.3 73.5 L247.7 76.2 Z";

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
          <div className="journey__map-art">
            <div className="journey__mainland">
              <svg className="journey__map-svg" viewBox="0 0 360 480" aria-hidden="true">
                <path className="journey__land-shadow" d={vietnamLandPath} />
                <path className="journey__land" d={vietnamLandPath} />
                <path className="journey__route-secondary" d="M236 224 C249 244 259 256 251 274 S283 322 274 349 S223 384 195 405" />
                <path className="journey__route-primary" d="M173 92 C181 125 177 149 195 173 S218 203 236 224" />
                <circle className="journey__map-point journey__map-point--primary" cx="173" cy="92" r="6" />
                <circle className="journey__map-point journey__map-point--primary" cx="236" cy="224" r="6" />
                <circle className="journey__map-point" cx="251" cy="274" r="4" />
                <circle className="journey__map-point" cx="195" cy="405" r="4" />
              </svg>
              <span className="journey__pin journey__pin--north">Hà Nội <small>Phở · Cà phê trứng</small></span>
              <span className="journey__pin journey__pin--central">Huế <small>Bún bò Huế</small></span>
              <span className="journey__pin journey__pin--hoian">Hội An <small>Cao lầu</small></span>
              <span className="journey__pin journey__pin--south">Nam Bộ <small>Bánh mì · Gỏi cuốn</small></span>
            </div>

            <div className="journey__archipelagoes" role="group" aria-label="Hai quần đảo trên lược đồ minh họa">
              <p className="journey__map-label">BẢN ĐỒ VỊ VIỆT <small>Đất liền · biển đảo</small></p>
              <div className="journey__island journey__island--hoang-sa">
                <span className="journey__island-marker" aria-hidden="true" />
                <div className="journey__island-copy">
                  <span>QUẦN ĐẢO</span>
                  <strong>Hoàng Sa</strong>
                </div>
              </div>
              <div className="journey__island journey__island--truong-sa">
                <span className="journey__island-marker" aria-hidden="true" />
                <div className="journey__island-copy">
                  <span>QUẦN ĐẢO</span>
                  <strong>Trường Sa</strong>
                </div>
              </div>
              <p className="journey__map-footnote">Lược đồ minh họa · đảo không theo tỷ lệ</p>
            </div>
          </div>
          <a className="text-link" href="#bo-suu-tap">Khám phá các mảnh vị <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
