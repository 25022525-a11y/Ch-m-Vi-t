import type { Metadata } from "next";

import { CollectionDashboard } from "@/components/collection/collection-dashboard";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Bộ sưu tập Mảnh Vị | Chạm Việt",
  description:
    "Theo dõi Mảnh Vị đã sưu tầm, kết nối hai hương vị và mở những câu chuyện Việt.",
};

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main className="collection-page">
        <section className="collection-masthead" aria-labelledby="collection-page-title">
          <div className="section-shell collection-masthead__inner">
            <div>
              <p className="eyebrow">Không gian của người sưu tầm</p>
              <h1 id="collection-page-title">Gom Mảnh Vị, mở chuyện Việt</h1>
            </div>
            <p>
              Theo dõi những hương vị đã chạm, thử một kết hợp mới và tiếp tục hành trình
              đi qua ba miền bằng ký ức món ăn.
            </p>
          </div>
        </section>
        <CollectionDashboard />
      </main>
      <SiteFooter />
    </>
  );
}
