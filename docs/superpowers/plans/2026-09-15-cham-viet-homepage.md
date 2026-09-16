# Chạm Việt Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây một homepage Next.js responsive, có interaction chọn hai Mảnh Vị để mở câu chuyện, bám art direction của `05-main-homepage.png` và dùng placeholder có chủ đích cho toàn bộ asset chưa có.

**Architecture:** App Router render trang tĩnh bằng Server Components; chỉ navigation mobile và Unlock Story là Client Components. Dữ liệu Mảnh Vị và metadata placeholder được tách khỏi UI, giúp thay asset sau này mà không đổi layout. Styling dùng Tailwind cho composition và CSS variables trong `globals.css` cho design tokens.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS, Vitest, React Testing Library, ESLint.

## Global Constraints

- Không tạo ảnh AI, không dùng screenshot reference làm asset và không crop/slice reference.
- Không có backend hoặc authentication thật trong giai đoạn homepage.
- Mọi hình ảnh còn thiếu phải có asset key rõ, tỷ lệ ổn định và thay được từ một mapping tập trung.
- Copy là tiếng Việt tự nhiên; số liệu trình diễn không được giả thành số liệu vận hành thật.
- Interaction kéo dài 150–350ms và tôn trọng `prefers-reduced-motion`.
- Kiểm tra responsive ở 1440px, 1024px, 768px và 390px.
- Không commit hoặc tạo Git history nếu chưa có yêu cầu rõ từ người dùng.

## File map

- `package.json`: scripts và dependency của ứng dụng.
- `src/app/layout.tsx`: metadata, font và document shell.
- `src/app/page.tsx`: composition homepage, không chứa data hoặc state phức tạp.
- `src/app/globals.css`: design tokens, base styles, reduced motion và utility trang trí dùng chung.
- `src/components/asset-placeholder.tsx`: giao diện duy nhất cho asset chờ thay.
- `src/components/site-header.tsx`: desktop/mobile navigation.
- `src/components/hero-section.tsx`: hero và CTA.
- `src/components/core-loop.tsx`: bốn bước của product concept.
- `src/components/flavor-card.tsx`: collectible item dùng lại được.
- `src/components/flavor-collection.tsx`: bộ sưu tập nổi bật.
- `src/components/unlock-story.tsx`: state chọn hai Mảnh Vị và kết quả unlock.
- `src/components/vietnam-journey.tsx`: hành trình vùng miền.
- `src/components/featured-story.tsx`: feature editorial.
- `src/components/seasonal-section.tsx`: nội dung Tết.
- `src/components/site-footer.tsx`: footer.
- `src/data/flavors.ts`: mock data và type `Flavor`.
- `src/data/assets.ts`: mapping `AssetKey` → metadata/URL tương lai.
- `src/components/__tests__/asset-placeholder.test.tsx`: kiểm tra contract placeholder.
- `src/components/__tests__/unlock-story.test.tsx`: kiểm tra interaction chính.
- `vitest.config.mts`, `vitest.setup.ts`: cấu hình unit/component test.

---

### Task 1: Scaffold ứng dụng và khóa nền tảng kiểm thử

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.mts`
- Create: `vitest.setup.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

**Interfaces:**
- Produces: scripts `dev`, `build`, `lint`, `test`; alias `@/*`; App Router shell.

- [ ] **Step 1: Kiểm tra runtime**

Run: `node --version; npm --version`

Expected: Node.js `>=20.9` theo tài liệu Next.js hiện hành và npm hoạt động.

- [ ] **Step 2: Tạo cấu hình project tối thiểu**

Tạo `package.json` với scripts sau, sau đó cài dependency bằng npm để npm ghi version chính xác và tạo lockfile:

```json
{
  "name": "cham-viet-manh-vi",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

Run:

```powershell
npm install next@latest react@latest react-dom@latest
npm install --save-dev typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss eslint eslint-config-next vitest jsdom @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Expected: `node_modules` và `package-lock.json` được tạo, không có lỗi cài đặt.

- [ ] **Step 3: Tạo smoke page và cấu hình test**

`src/app/page.tsx` ban đầu:

```tsx
export default function HomePage() {
  return <main><h1>Chạm Việt – Mảnh Vị</h1></main>;
}
```

`vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

`vitest.config.mts` cấu hình `environment: "jsdom"`, `setupFiles: ["./vitest.setup.ts"]` và alias `@` đến `src`.

- [ ] **Step 4: Xác minh scaffold**

Run: `npm run lint; npm run build`

Expected: cả hai lệnh exit code 0; `/` được build thành route tĩnh.

### Task 2: Design tokens, data contracts và placeholder có thể thay asset

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/data/assets.ts`
- Create: `src/data/flavors.ts`
- Test: `src/components/__tests__/asset-placeholder.test.tsx`
- Create: `src/components/asset-placeholder.tsx`

**Interfaces:**
- Produces: `AssetKey`, `assetCatalog`, `Flavor`, `flavors`, `AssetPlaceholderProps`.
- `AssetPlaceholderProps = { assetKey: AssetKey; className?: string; decorative?: boolean; priority?: boolean }`.

- [ ] **Step 1: Viết failing test cho placeholder contract**

```tsx
render(<AssetPlaceholder assetKey="pho-hanoi" />);
expect(screen.getByRole("img", { name: /phở hà nội.*chờ asset thật/i })).toBeInTheDocument();
expect(screen.getByText("pho-hanoi")).toBeInTheDocument();
```

- [ ] **Step 2: Chạy test để xác nhận fail**

Run: `npm test -- asset-placeholder`

Expected: FAIL vì module/component chưa tồn tại.

- [ ] **Step 3: Tạo catalog và component tối thiểu**

`src/data/assets.ts` định nghĩa union gồm 11 asset key trong design spec, mỗi entry có `label`, `aspectRatio` và `src: null`.

`AssetPlaceholder` đọc metadata từ catalog, render `<div role="img" aria-label="… chờ asset thật">`, hiển thị asset key và giữ tỷ lệ bằng `style={{ aspectRatio }}`. Nhánh `src` được để sẵn trong catalog contract để sau này chuyển sang `next/image` mà không đổi call-site.

- [ ] **Step 4: Thêm token và base typography**

Trong `globals.css`, khai báo `--color-ink`, `--color-heritage`, `--color-heritage-soft`, `--color-rice`, `--color-paper`, `--color-gold`, `--color-lacquer`, `--color-wood`, `--color-line`; thêm focus-visible, selection, body background và media query reduced motion.

- [ ] **Step 5: Chạy test, lint và type/build**

Run: `npm test -- asset-placeholder; npm run lint; npm run build`

Expected: tất cả exit code 0.

### Task 3: Header, hero và core loop

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/components/site-header.tsx`
- Create: `src/components/hero-section.tsx`
- Create: `src/components/core-loop.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `AssetPlaceholder` với `assetKey="hero-vietnam-landscape"`.
- Produces: anchor targets `#bo-suu-tap`, `#cach-hoat-dong`, `#cau-chuyen`, `#hanh-trinh`.

- [ ] **Step 1: Viết cấu trúc semantic cho phần mở đầu**

`page.tsx` compose theo thứ tự:

```tsx
<SiteHeader />
<main>
  <HeroSection />
  <CoreLoop />
</main>
```

Hero có một `h1`, copy giải thích collectible + NFC, link chính tới `#bo-suu-tap`, link phụ tới `#cach-hoat-dong` và visual placeholder. Core loop dùng ordered list gồm đúng bốn bước.

- [ ] **Step 2: Implement navigation responsive và font**

Dùng `next/font/google` cho `Lora` và `Be_Vietnam_Pro`, gắn CSS variables ở `<body>`. Header desktop hiện navigation đầy đủ; mobile dùng client state nhỏ, button có `aria-expanded` và menu đóng/mở được bằng click.

- [ ] **Step 3: Style theo composition reference**

Desktop: header mảnh, hero hai vùng bất đối xứng khoảng 42/58, headline 3 dòng, CTA gần nội dung, visual chiếm chiều cao chính. Mobile: text trước visual, CTA không bị co quá nhỏ, menu không che mất nội dung.

- [ ] **Step 4: Xác minh semantic và build**

Run: `npm run lint; npm run build`

Expected: exit code 0 và không có cảnh báo heading/link rõ ràng từ source review.

### Task 4: Collection và Unlock Story interaction

**Files:**
- Create: `src/components/flavor-card.tsx`
- Create: `src/components/flavor-collection.tsx`
- Test: `src/components/__tests__/unlock-story.test.tsx`
- Create: `src/components/unlock-story.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Flavor`, `flavors`, `AssetPlaceholder`.
- Produces: `UnlockStory` với state `selectedIds: string[]`, tối đa hai item.

- [ ] **Step 1: Viết failing interaction tests**

```tsx
render(<UnlockStory flavors={flavors.slice(0, 3)} />);
await user.click(screen.getByRole("button", { name: /chọn phở hà nội/i }));
await user.click(screen.getByRole("button", { name: /chọn bún bò huế/i }));
expect(screen.getByText(/hai tô nước.*hai miền ký ức/i)).toBeInTheDocument();
expect(screen.getByText(/đã kết nối 2 mảnh vị/i)).toBeInTheDocument();
```

Thêm test thứ hai: chọn item thứ ba thay item cũ theo quy tắc FIFO và UI vẫn chỉ báo hai item đang chọn.

- [ ] **Step 2: Chạy test để xác nhận fail**

Run: `npm test -- unlock-story`

Expected: FAIL vì `UnlockStory` chưa tồn tại.

- [ ] **Step 3: Implement collection từ mock data**

`FlavorCard` nhận `{ flavor, compact?, selected?, onSelect? }`; dùng placeholder theo `flavor.assetKey`, tên, vùng miền và trạng thái. `FlavorCollection` render sáu item bằng `map`, desktop sáu cột và mobile scroll-snap ngang.

- [ ] **Step 4: Implement Unlock Story tối thiểu**

Client component cho phép toggle item; nếu đã có hai item và chọn item mới, bỏ item được chọn lâu nhất. Khi đủ hai, result panel đổi từ trạng thái khóa sang preview “Hai tô nước — Hai miền ký ức”; nút đọc câu chuyện trỏ tới `#cau-chuyen`.

- [ ] **Step 5: Chạy test và verification tĩnh**

Run: `npm test -- unlock-story; npm run lint; npm run build`

Expected: hai test interaction PASS; lint/build exit code 0.

### Task 5: Journey, featured story, seasonal section và footer

**Files:**
- Create: `src/components/vietnam-journey.tsx`
- Create: `src/components/featured-story.tsx`
- Create: `src/components/seasonal-section.tsx`
- Create: `src/components/site-footer.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `AssetPlaceholder` với `vietnam-journey-map`, `featured-story-rice-fields`, `seasonal-tet`.
- Produces: hoàn chỉnh thứ tự section homepage theo design spec.

- [ ] **Step 1: Implement ba section nội dung**

Journey dùng landmark/region list có nhãn Bắc, Trung, Nam bên cạnh map placeholder; Featured Story dùng layout editorial ảnh + copy; Seasonal Section dùng lacquer red giới hạn trong section và CTA nội bộ.

- [ ] **Step 2: Implement footer semantic**

Footer có wordmark, một câu định vị, navigation phụ và copyright không kèm số liệu kinh doanh chưa xác minh.

- [ ] **Step 3: Hoàn thiện composition page**

`page.tsx` chỉ import/compose component; không chứa mảng mock data hoặc client state. Section xen kẽ nền rice/paper/heritage để tạo nhịp, không bọc mọi section trong card.

- [ ] **Step 4: Chạy full static verification**

Run: `npm test; npm run lint; npm run build`

Expected: test, lint và build đều exit code 0.

### Task 6: Browser verification và visual correction

**Files:**
- Modify if needed: `src/app/globals.css`
- Modify if needed: `src/components/*.tsx`
- Create: `docs/visual-review-homepage.md`

**Interfaces:**
- Consumes: homepage hoàn chỉnh và dev server.
- Produces: visual review ghi rõ khác biệt có chủ đích, khác biệt do thiếu asset và các correction đã áp dụng.

- [ ] **Step 1: Chạy dev server**

Run: `npm run dev`

Expected: server sẵn sàng tại localhost, không có runtime error.

- [ ] **Step 2: Kiểm tra bốn viewport**

Mở `/` ở 1440×900, 1024×768, 768×1024 và 390×844. Ở mỗi viewport kiểm tra overflow ngang, text wrapping, CTA visibility, mobile navigation, card scroll và Unlock Story selection.

- [ ] **Step 3: So sánh với source of truth**

Đối chiếu `05-main-homepage.png`: prominence của hero, flow core loop, density của sáu collectible, Unlock Story là interaction nổi bật, journey/featured/seasonal giữ vai trò phụ. Ghi khác biệt do placeholder asset tách riêng khỏi lỗi layout.

- [ ] **Step 4: Chỉnh sai lệch lớn và retest**

Chỉ chỉnh typography, spacing, proportions, breakpoint hoặc interaction có bằng chứng từ browser; không thêm framework/dependency hoặc trang `/collection`.

- [ ] **Step 5: Chạy verification cuối**

Run: `npm test; npm run lint; npm run build`

Expected: tất cả exit code 0; browser không còn lỗi console/overflow rõ ràng tại bốn viewport.
