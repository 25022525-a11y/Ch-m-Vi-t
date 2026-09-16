# Chạm Việt – Mảnh Vị: Homepage Design

## Mục tiêu

Xây dựng homepage frontend chạy được cho một thương hiệu collectible văn hóa Việt Nam. Trong 10–15 giây đầu, người xem phải hiểu được chuỗi giá trị: sưu tầm Mảnh Vị vật lý, chạm NFC, kết nối các món ăn và mở khóa câu chuyện Việt.

Giai đoạn này ưu tiên layout, typography, spacing, proportions và responsive. Chưa xây backend, authentication hoặc xử lý NFC thật. Trang `/collection` nằm ngoài phạm vi cho đến khi homepage được hoàn thiện và xác nhận ổn định.

## Vai trò của reference

- `05-main-homepage.png`: nguồn chính cho hierarchy, composition, tỷ lệ và nhịp thông tin của homepage.
- `02-collection-dashboard.png`: chỉ định hướng cho route `/collection` ở giai đoạn sau.
- `01-tet-campaign.png`: định hướng cho seasonal section và lacquer red.
- `03-brand-key-visual.png`, `06-product-packaging.png`: nhận diện, chất liệu, màu sắc và cách trưng bày collectible.
- `04-unlock-mechanism.png`: logic Mảnh A + Mảnh B → câu chuyện liên kết.
- `07-product-structure.png`: ngữ nghĩa sản phẩm vật lý và NFC; không dùng làm layout homepage.

Không sử dụng screenshot làm background, không crop/slice screenshot thành UI và không tạo ảnh AI trong giai đoạn này.

## Hướng thiết kế đã chọn

### Phương án được chọn: editorial collectible

Giữ bố cục kể chuyện giàu tính biên tập của reference, nhưng tách homepage thành các section có nhịp thở và component rõ ràng. Nội dung đủ dày để thể hiện hệ sinh thái, song mỗi viewport chỉ có một trọng tâm thị giác chính.

### Các phương án không chọn

- Sao chép mật độ dashboard của reference: gần ảnh hơn ở desktop nhưng khó đọc, khó responsive và làm homepage giống màn hình tài khoản.
- Landing page marketing tối giản: dễ triển khai nhưng làm mất cơ chế collectible, hành trình vùng miền và chiều sâu văn hóa.

## Visual language

- Cảm giác: di sản Việt, vật liệu thật, trầm tĩnh, cao cấp, đương đại.
- Hình khối: cạnh vuông hoặc bo rất nhẹ; dùng viền mảnh, nền phẳng và khoảng trắng thay cho shadow nặng.
- Bề mặt: mô phỏng tinh thần giấy ngà, mực in, gỗ tối và kim loại xỉn bằng màu/tỷ lệ; không giả texture bằng hiệu ứng quá tay.
- Trang trí: đường nét bản đồ, dấu tròn NFC, dấu triện và quy tắc in ấn; chỉ dùng khi có ý nghĩa.
- Chuyển động: 150–350ms cho hover, focus, selection và reveal; tắt hoặc giảm khi `prefers-reduced-motion`.

## Design tokens

Màu được hiệu chỉnh gần reference, triển khai thành CSS variables để có thể thay đổi tập trung:

- `--color-ink`: xanh đen heritage dùng cho chữ và footer.
- `--color-heritage`: xanh chính cho CTA và trạng thái active.
- `--color-heritage-soft`: xanh nhạt cho mảng phụ.
- `--color-rice`: nền ivory giấy gạo.
- `--color-paper`: nền sáng cho section/placeholder.
- `--color-gold`: vàng xỉn cho đường nhấn và trạng thái mở khóa.
- `--color-lacquer`: đỏ sơn mài chỉ dùng cho seasonal section.
- `--color-wood`: nâu gỗ cho chữ phụ và vật liệu.
- `--color-line`: viền trung tính ấm.

Spacing dùng thang nhất quán từ 4px đến 128px. Container desktop tối đa khoảng 1360px; content text giữ line length khoảng 55–70 ký tự.

## Typography

- Heading/display: `Lora`, serif có hỗ trợ tiếng Việt, tạo cảm giác sách và biên tập nhưng vẫn đọc tốt trên web.
- Body/UI: `Be Vietnam Pro`, sans hỗ trợ tiếng Việt, rõ ở kích thước nhỏ.
- Chỉ dùng hai font family; chữ viết tay trong reference không được giả bằng một font trang trí thứ ba ở giai đoạn đầu.
- Heading dùng line-height chặt; body line-height thoáng. Không dùng toàn chữ hoa cho đoạn dài.

## Page hierarchy

1. Header/navigation: logo chữ, các điểm đến chính, CTA dẫn tới collection; mobile dùng menu gọn.
2. Hero: headline rõ lời hứa thương hiệu, supporting copy, hai CTA, visual placeholder tỷ lệ lớn và nhãn asset cần thay.
3. Core loop: bốn bước Sưu tầm → Chạm → Kết nối → Mở chuyện Việt, trình bày như một chuỗi liên tục thay vì bốn card độc lập.
4. Bộ sưu tập nổi bật: sáu Mảnh Vị bằng dữ liệu mock có cấu trúc; card giữ tỷ lệ ảnh, vùng miền và trạng thái.
5. Unlock Story: interaction chính, cho chọn hai Mảnh Vị và hiển thị trạng thái khóa/mở cùng câu chuyện kết nối.
6. Hành trình Vị Việt: visual bản đồ placeholder riêng, kèm các điểm vùng miền và tiến trình không dùng số liệu người dùng bịa đặt.
7. Featured Story: một câu chuyện biên tập, ảnh placeholder riêng và CTA đọc tiếp.
8. Seasonal section: Tết làm ví dụ, dùng lacquer red có kiểm soát và asset placeholder riêng.
9. Footer: định vị thương hiệu, navigation phụ và thông tin pháp lý tối thiểu.

## Component architecture

- `SiteHeader`, `MobileNavigation`
- `HeroSection`
- `AssetPlaceholder`: nhận `assetKey`, `label`, `aspectRatio`, `className`; là điểm thay thế asset thật sau này.
- `CoreLoop`
- `FlavorCard`, `FlavorCollection`
- `UnlockStory`: quản lý lựa chọn tối đa hai item và trạng thái mở khóa ở client.
- `VietnamJourney`
- `FeaturedStory`
- `SeasonalSection`
- `SiteFooter`

Mock data được đặt riêng khỏi component, có chú thích rõ đây là dữ liệu trình diễn. Component không phụ thuộc đường dẫn ảnh cụ thể; metadata asset nằm trong data/config.

## Data flow và interaction

- Server components render nội dung tĩnh khi phù hợp.
- Các phần cần state như mobile navigation và lựa chọn Mảnh Vị dùng client components nhỏ, cô lập.
- Người dùng chọn tối đa hai Mảnh Vị trong Unlock Story. Hai item hợp lệ sẽ chuyển sang trạng thái “đã kết nối” và hiện preview câu chuyện. Thay lựa chọn không làm đổi dữ liệu toàn trang.
- CTA dùng anchor/link có điểm đến thật trong prototype; không để button không có phản hồi.
- Focus state nhìn thấy rõ, vùng chạm tối thiểu hợp lý và tương tác không chỉ phụ thuộc màu.

## Placeholder strategy

Các asset key ban đầu:

- `hero-vietnam-landscape`
- `pho-hanoi`
- `bun-bo-hue`
- `banh-mi-saigon`
- `goi-cuon`
- `ca-phe-trung`
- `cao-lau`
- `unlock-linked-story`
- `vietnam-journey-map`
- `featured-story-rice-fields`
- `seasonal-tet`

Placeholder thể hiện tên asset, tỷ lệ, trạng thái “chờ asset thật” và một composition trung tính bằng CSS. Khi có file thật, chỉ cập nhật mapping metadata/URL hoặc thay renderer bên trong `AssetPlaceholder`; layout và component gọi không đổi.

## Responsive strategy

- 1440px: hero chia cột bất đối xứng, collection sáu cột, unlock theo chiều ngang, journey/story tạo nhịp hai cột.
- 1024px: navigation rút gọn, hero cân lại tỷ lệ, collection ba cột, các section phức tạp giảm chi tiết phụ.
- 768px: hero chuyển hai hàng, collection có thể scroll ngang có snap, unlock giữ phép cộng dễ hiểu.
- 390px: header gọn, CTA rõ, headline không quá lớn, core loop xếp dọc có đường dẫn hướng, card scroll ngang, unlock xếp A → B → kết quả theo chiều dọc.

Không chỉ scale desktop; thứ tự nội dung và mật độ được điều chỉnh theo breakpoint.

## Error handling và accessibility

- Không có network dependency ở runtime ngoài font do Next.js quản lý; nếu font không tải, dùng fallback serif/sans an toàn.
- Placeholder luôn có text thay thế mô tả asset cần thay.
- Button/link dùng semantic element đúng vai trò; heading có thứ tự hợp lý; navigation có label.
- Màu chữ và control phải đạt tương phản cơ bản; trạng thái chọn có text/icon bên cạnh màu.
- Tôn trọng `prefers-reduced-motion`.

## Verification

- Chạy lint, TypeScript/build và dev server.
- Kiểm tra bằng browser ở 1440, 1024, 768 và 390px.
- So sánh với `05-main-homepage.png` về hierarchy, tỷ lệ hero, nhịp section, mật độ collection và prominence của Unlock Story.
- Tự rà soát dấu hiệu giao diện AI/template: card tràn lan, bo tròn quá mức, hierarchy yếu, gradient/glow, khoảng cách lặp máy móc.
- Ghi nhận khác biệt do chưa có asset thật; không “sửa” khác biệt này bằng screenshot reference.

## Tiêu chí hoàn thành giai đoạn homepage

- Homepage chạy được và giải thích core loop trong 10–15 giây.
- Không có screenshot reference nào được dùng như asset giao diện.
- Mọi vùng ảnh thiếu có placeholder đúng tỷ lệ, tên asset rõ và có đường thay thế tập trung.
- Tương tác chọn hai Mảnh Vị hoạt động và có trạng thái dễ hiểu.
- Không có lỗi build/type/lint liên quan tới phần triển khai.
- Layout được kiểm tra ở bốn viewport yêu cầu và các sai lệch lớn so với reference đã được chỉnh.
