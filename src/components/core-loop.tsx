const steps = [
  {
    title: "Sưu tầm",
    description: "Chọn một Mảnh Vị đại diện cho món ăn bạn yêu mến.",
  },
  {
    title: "Chạm",
    description: "Đưa điện thoại lại gần để NFC ghi nhận vào bộ sưu tập số.",
  },
  {
    title: "Kết nối",
    description: "Đặt hai hương vị cạnh nhau để tìm ra mối liên hệ.",
  },
  {
    title: "Mở chuyện Việt",
    description: "Khám phá vùng đất, con người và ký ức phía sau món ăn.",
  },
];

export function CoreLoop() {
  return (
    <section id="cach-hoat-dong" className="core-loop" aria-labelledby="core-loop-title">
      <div className="section-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Một lần chạm, nhiều lớp ký ức</p>
            <h2 id="core-loop-title">Từ hương vị đến chuyện Việt</h2>
          </div>
          <p>
            Mỗi Mảnh Vị là một điểm bắt đầu. Khi những điểm ấy gặp nhau, một
            lát cắt Việt Nam lớn hơn dần hiện ra.
          </p>
        </div>

        <ol className="core-loop__steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="core-loop__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 ? (
                <span className="core-loop__arrow" aria-hidden="true">→</span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
