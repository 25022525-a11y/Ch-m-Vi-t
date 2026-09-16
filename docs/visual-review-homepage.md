# Visual review — Homepage Chạm Việt

Ngày kiểm tra: 2026-09-15

## Phạm vi

Đối chiếu implementation với `references/05-main-homepage.png` về hierarchy, proportions, spacing, typography và responsive. Các reference khác chỉ được dùng đúng vai trò đã định nghĩa trong design spec. Không có screenshot reference nào được đưa vào giao diện.

## Những điểm bám sát reference

- Header mảnh, wordmark ở trái, navigation ở giữa và lối vào bộ sưu tập ở phải.
- Hero chia bất đối xứng giữa thông điệp thương hiệu và vùng visual chính; headline giữ đúng ba nhịp trên desktop/tablet.
- Core loop xuất hiện ngay sau hero và diễn đạt rõ Sưu tầm → Chạm → Kết nối → Mở chuyện Việt.
- Sáu Mảnh Vị được trình bày cùng một hàng ở desktop và ba cột ở tablet.
- Unlock Story là khối tương phản mạnh và là interaction nổi bật nhất sau collection.
- Journey, Featured Story và Seasonal giữ vai trò kể chuyện phụ, không biến homepage thành dashboard.
- Palette giới hạn trong xanh heritage, ivory, vàng xỉn, nâu ấm và đỏ sơn mài theo mùa.

## Khác biệt có chủ đích

- Reference desktop có mật độ gần dashboard và nhiều số liệu; implementation bỏ các số chưa xác minh, tăng whitespace và line length để dùng được như homepage thật.
- Reference dùng ảnh món ăn và phong cảnh hoàn chỉnh; implementation dùng placeholder có asset key và tỷ lệ rõ vì chưa có asset riêng.
- Mobile chuyển collection và lựa chọn Unlock Story thành horizontal scroll; đây là thiết kế riêng cho viewport nhỏ, không scale layout desktop.
- Featured Story xếp nội dung trước visual ở tablet/mobile để người đọc hiểu section trước khi gặp placeholder lớn.

## Sai lệch đã phát hiện và chỉnh

### 1024px

- Trước sửa: `min-height` kết hợp `aspect-ratio` ép hero visual rộng 640px, làm cột headline chỉ còn khoảng 291px; headline vỡ thành năm dòng.
- Đã sửa: tại tablet, hero visual dùng chiều cao cố định hợp lý nhưng không ép aspect-ratio vào sizing của grid. Hai track còn khoảng 458px; headline trở lại ba dòng.
- Featured Story chuyển thành một cột ở breakpoint này, tránh cột copy hẹp và tiêu đề vỡ vụn.

### 768px và 390px

- Trước sửa: card rail rộng hơn container và các placeholder có `min-height` lớn ép grid track vượt viewport, gây horizontal overflow 35–80px.
- Đã sửa: scroll rail bị giới hạn trong chiều rộng section; grid một cột dùng `minmax(0, 1fr)`; placeholder mobile bỏ `min-height` xung đột với aspect ratio.
- Sau sửa: `document.body.scrollWidth === document.documentElement.clientWidth` ở cả hai viewport. Collection vẫn scroll ngang trong chính container như dự kiến.

## Kết quả kiểm tra viewport

| Viewport yêu cầu | Client/body width | Horizontal overflow | Hero headline | Navigation | Collection |
| --- | --- | --- | --- | --- | --- |
| 1440×900 | 1425 / 1425 | Không | 3 dòng | Desktop | 6 cột |
| 1024×768 | 1009 / 1009 | Không | 3 dòng | Desktop rút gọn | 3 cột |
| 768×1024 | 753 / 753 | Không | 3 dòng | Mobile | Scroll ngang nội bộ |
| 390×844 | 375 / 375 | Không | 4 dòng | Mobile | Scroll ngang nội bộ |

Phần chênh 15px giữa viewport và client width là scrollbar dọc của browser, không phải overflow ngang.

## Interaction và runtime

- Menu mobile mở/đóng đúng, cập nhật `aria-expanded` và hiển thị đủ bốn link.
- Chọn Phở Hà Nội + Bún bò Huế chuyển trạng thái sang “Đã kết nối 2 Mảnh Vị” và hiển thị “Hai tô nước — Hai miền ký ức”.
- Không có Next.js error overlay.
- Không có lỗi runtime xuất phát từ source ứng dụng. Chrome Work có một hydration warning do extension Monica chèn `monica-id` và `monica-version` vào `<body>` trước khi React hydrate; production build, test và lint không tái hiện lỗi này.

## Phần còn phụ thuộc asset thật

Các vùng `hero-vietnam-landscape`, sáu món ăn, bản đồ, câu chuyện liên kết, featured story và seasonal Tết vẫn là placeholder đúng chủ đích. Khi có asset thật, cập nhật `src` trong `src/data/assets.ts`; component và layout không cần đổi.
