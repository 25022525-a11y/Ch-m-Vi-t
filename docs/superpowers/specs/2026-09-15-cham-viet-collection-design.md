# Chạm Việt Collection Design

## Mục tiêu

Xây route `/collection` như một không gian cá nhân sau khi người dùng bắt đầu sưu tầm Mảnh Vị. Trong vài giây đầu, trang phải cho thấy tiến trình, những mảnh đã có/chưa có, cặp đang kết nối, câu chuyện mở khóa và hành trình vùng miền.

## Visual language

Giữ nguyên hệ thống của homepage: giấy gạo ấm, xanh heritage, vàng xỉn, nâu gỗ và serif editorial. Composition lấy `02-collection-dashboard.png` làm source of truth nhưng bỏ hero marketing lớn để đưa trạng thái bộ sưu tập lên ngay đầu trang. Không biến mỗi thông tin thành card; phân khu bằng đường kẻ, nền giấy khác sắc độ và nhịp typography.

Điểm nhận diện chính là “bàn ghép” nằm ở trung tâm: hai Mảnh Vị có hình vuông, dấu cộng và mũi tên dẫn tới trạng thái Story. Đây là nơi duy nhất dùng nền xanh đậm có độ tương phản mạnh.

## Kiến trúc và dữ liệu

- `src/app/collection/page.tsx`: Server Component cho route và metadata.
- `src/data/collections.ts`: mock collection có type rõ ràng, gồm trạng thái owned, region, category, story IDs và asset key.
- `src/data/stories.ts`: story metadata và cặp `requiredFlavorIds`.
- `src/components/collection/collection-dashboard.tsx`: Client Component giữ filter và hai ID đang chọn.
- Các component con tách sidebar, unlock/story và journey; nhận props thuần, không có backend.
- Asset mới được thêm vào catalog tập trung; thay `src` sau này không đổi layout.

## Bố cục responsive

- Desktop: grid 22/51/27; left là collection ledger, center là unlock + story, right là journey + origin.
- Tablet: left và center cùng hàng; right panel chiếm toàn hàng phía dưới.
- Mobile: một cột theo thứ tự collection progress/list, unlock, story, journey. Danh sách collection là rail cuộn ngang nội bộ.
- Không cho phép document-level horizontal overflow ở 1440, 1024, 768 và 390px.

## Interaction và accessibility

- Filter: tất cả, đã sưu tầm, chưa mở, theo vùng.
- Mảnh chưa có hiển thị muted và không thể chọn để kết nối.
- Tối đa hai mảnh đã có được chọn; mảnh thứ ba thay mảnh cũ nhất.
- Cặp Bánh chưng + Bánh tét mở story Tết; thiếu mảnh hoặc cặp chưa có story hiển thị locked state.
- Button có `aria-pressed`; filter dùng `aria-pressed`; trạng thái unlock dùng `aria-live="polite"`.
- Transition giới hạn ở màu, opacity và translate nhẹ; `prefers-reduced-motion` dùng rule chung hiện có.

## Phạm vi không làm

Không thêm authentication, backend, database, payment, NFC thật, profile hoặc admin. Không tạo ảnh AI và không dùng screenshot reference làm asset.
