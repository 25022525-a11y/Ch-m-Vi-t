import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__top">
        <div>
          <p className="site-footer__brand">CHẠM VIỆT <span>— MẢNH VỊ</span></p>
          <p className="site-footer__statement">
            Góp nhặt hương vị.<br />Kể một Việt Nam trọn vẹn.
          </p>
        </div>
        <nav aria-label="Điều hướng chân trang">
          <Link href="/#cach-hoat-dong">Cách hoạt động</Link>
          <Link href="/collection">Bộ sưu tập</Link>
          <Link href="/#cau-chuyen">Câu chuyện</Link>
          <Link href="/#hanh-trinh">Hành trình</Link>
        </nav>
      </div>
      <div className="section-shell site-footer__bottom">
        <span>Prototype trải nghiệm collectible văn hóa Việt</span>
        <span>CHẠM · SƯU TẦM · KẾT NỐI · MỞ CHUYỆN VIỆT</span>
      </div>
    </footer>
  );
}
