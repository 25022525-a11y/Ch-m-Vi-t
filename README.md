# CHẠM VIỆT – MẢNH VỊ

CHẠM VIỆT – MẢNH VỊ là một trải nghiệm web kể chuyện văn hóa ẩm thực Việt Nam qua những “Mảnh Vị” sưu tầm. Dự án kết hợp nội dung, hình ảnh và tương tác để gợi mở câu chuyện về món ăn, vùng đất và ký ức ba miền.

## Chức năng chính

- Homepage giới thiệu hệ sinh thái Mảnh Vị, hành trình ba miền và các câu chuyện nổi bật.
- Danh sách hương vị đại diện cho nhiều món ăn Việt Nam.
- Tương tác chọn hai Mảnh Vị để mở khóa câu chuyện kết nối.
- Trang `/collection` theo dõi các Mảnh Vị đã sưu tầm, chưa mở và tiến độ theo vùng.
- Giao diện responsive cho desktop, tablet và mobile.

## Công nghệ

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 và CSS tùy biến
- Vitest, Testing Library và ESLint

## Cài đặt và chạy local

Yêu cầu Node.js tương thích với Next.js 16 và npm.

```bash
git clone https://github.com/25022525-a11y/Ch-m-Vi-t.git
cd Ch-m-Vi-t
npm ci
npm run dev
```

Mở `http://localhost:3000` để xem website.

## Kiểm tra chất lượng

```bash
npm test
npm run lint
npm run build
```

Chạy production build trên máy local:

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```text
├── src/
│   ├── app/              # Routes, metadata và styles
│   ├── components/       # UI components và interaction
│   └── data/             # Dữ liệu hương vị, bộ sưu tập và câu chuyện
├── public/images/        # Asset hình ảnh dùng trên website
├── references/           # Hình tham chiếu thiết kế
├── docs/                 # Tài liệu thiết kế và kế hoạch triển khai
├── *.blend, *.blend1     # Mô hình 3D và bản sao lưu Blender
└── *.png                 # Các bản render và góc nhìn mô hình
```

## Deployment

Branch `main` được kết nối với Vercel. Mỗi commit được push lên `main` sẽ tự động tạo một production deployment mới.
