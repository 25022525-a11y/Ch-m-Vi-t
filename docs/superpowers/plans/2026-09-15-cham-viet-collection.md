# Chạm Việt Collection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây route `/collection` responsive với filter bộ sưu tập, chọn hai Mảnh Vị, unlock story và journey panel dựa trên `02-collection-dashboard.png`.

**Architecture:** Route là Server Component; một Client Component nhỏ quản lý filter và selected IDs. Mock data và asset metadata tách khỏi JSX; shared header/footer/design tokens được tái sử dụng mà không đổi visual homepage.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS 4, Vitest, React Testing Library.

## Global Constraints

- Không tạo ảnh AI, không crop/slice reference và không dùng screenshot làm background.
- Không thêm dependency, backend, auth, database, payment hoặc NFC thật.
- Không sửa visual homepage ngoài việc đổi shared navigation target sang route hợp lệ.
- Không có document-level horizontal overflow ở 1440, 1024, 768 và 390px.
- Workspace không có Git repository; không tạo commit.

---

### Task 1: Data contracts và placeholder assets

**Files:**
- Modify: `src/data/assets.ts`
- Create: `src/data/collections.ts`
- Create: `src/data/stories.ts`

**Interfaces:**
- Produces: `CollectionFlavor`, `CollectionFilter`, `CollectionStory`, `collectionFlavors`, `collectionStories`, `collectionProgress`.

- [ ] Thêm asset keys `banh-chung`, `banh-tet`, `collection-story-tet`, `collection-origin-tet` với `src: null` và tỷ lệ rõ ràng.
- [ ] Tạo sáu mock collection items đúng nội dung brief; `owned` có đúng bốn item.
- [ ] Tạo story Tết yêu cầu đúng `banh-chung` và `banh-tet`.
- [ ] Chạy TypeScript qua test/build ở checkpoint sau.

### Task 2: TDD cho collection interaction

**Files:**
- Create: `src/components/__tests__/collection-dashboard.test.tsx`
- Create: `src/components/collection/collection-dashboard.tsx`
- Create: `src/components/collection/collection-sidebar.tsx`
- Create: `src/components/collection/collection-unlock.tsx`
- Create: `src/components/collection/collection-journey.tsx`

**Interfaces:**
- `CollectionDashboard()` quản lý `filter: CollectionFilter` và `selectedIds: string[]`.
- Mặc định chọn Bánh chưng + Bánh tét.

- [ ] Viết test xác nhận progress 4/12, story mặc định đã mở, filter “Chưa mở” loại item đã có và bỏ một mảnh đưa story về locked state.
- [ ] Chạy `npm test -- collection-dashboard` và xác nhận RED vì component chưa tồn tại.
- [ ] Implement tối thiểu data-driven UI và interaction; item chưa có bị disabled, selection tối đa hai theo FIFO.
- [ ] Chạy `npm test -- collection-dashboard` và xác nhận GREEN.

### Task 3: Route và visual composition

**Files:**
- Create: `src/app/collection/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/components/site-header.tsx`
- Modify: `src/components/site-footer.tsx`

**Interfaces:**
- Produces route tĩnh `/collection` với semantic landmarks và metadata.

- [ ] Compose shared header, collection masthead, dashboard và shared footer.
- [ ] Style grid desktop 22/51/27, restrained editorial dividers và central unlock emphasis.
- [ ] Thêm breakpoint tablet/mobile và rail cuộn nội bộ.
- [ ] Đổi shared anchor href thành `/#...` và collection entry thành `/collection` để hoạt động từ cả hai route.
- [ ] Chạy test, lint và build.

### Task 4: Browser review và correction

**Files:**
- Modify if needed: `src/app/globals.css`
- Create: `docs/visual-review-collection.md`

**Interfaces:**
- Produces measured responsive report cho `/collection` và homepage regression check.

- [ ] Mở `/collection`, kiểm tra filter, selection, locked/unlocked state và mobile menu.
- [ ] So sánh hierarchy/proportions với `02-collection-dashboard.png`; sửa chỉ các sai lệch lớn.
- [ ] Đo `scrollWidth/clientWidth` tại 1440×900, 1024×768, 768×1024 và 390×844.
- [ ] Mở `/` và xác nhận không có homepage regression hay horizontal overflow.
- [ ] Chạy lại `npm test`, `npm run lint`, `npm run build` trước khi báo cáo hoàn tất.
