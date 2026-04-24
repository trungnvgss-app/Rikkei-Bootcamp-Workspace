# Rikkei Bootcamp Workspace

Đây là workspace của học viên dành cho khóa học Frontend + các module tiếp theo.

## Mục tiêu

- Xây dựng hệ thống quản lý bài tập bằng Git.
- Tạo Dashboard tập hợp link đến bài tập Module 1.
- Triển khai trên GitHub Pages với thư mục `Module_1_Frontend`.

## Cấu trúc thư mục

- `README.md` - Hướng dẫn chung cho giáo viên và học viên.
- `Module_1_Frontend/` - Chứa toàn bộ bài tập HTML, CSS, JS.
  - `index.html` - Trang Dashboard chính.
  - `assets/` - Chứa CSS, JS, hình ảnh, nếu cần.
  - `Session_01_HTML_Basic/` - Bài tập HTML cơ bản.
  - `Session_02_HTML_Table_Form/` - Bài tập bảng và biểu mẫu.
  - `Session_03_CSS_Basic/` - Bài tập CSS cơ bản.
  - `Session_08_JS_Basic/` - Bài tập JS cơ bản.
- `Module_2_Database/` - Lưu trữ file SQL, ERD, tài liệu Database.
- `Module_3_Java_Core/` - Dự án Java Maven/Gradle cho Module 3.
- `Module_4_FE_IT/` - Tài liệu, sơ đồ thuật toán, Markdown lý thuyết.
- `Module_5_Java_Web/` - Dự án Spring Boot cho Module 5.

## Hướng dẫn sử dụng

1. Mở `Module_1_Frontend/index.html` để xem Dashboard.
2. Khi hoàn thành bài tập mới, thêm link vào Dashboard.
3. Dùng Git để commit và push lên GitHub.
4. Kích hoạt GitHub Pages cho thư mục `Module_1_Frontend` để có link public.

## Tự động thêm nút quay lại Dashboard cho HTML mới

Khi bạn copy thêm file HTML mới vào `Module_1_Frontend`, chạy lệnh này để tự động chèn nút `← Quay lại Dashboard` vào các file HTML mới:

```powershell
python scripts\add_back_buttons.py
```

Script sẽ tìm tất cả file `*.html` trong `Module_1_Frontend` (ngoại trừ `index.html`) và thêm nút nếu chưa có.

## Menu điều khiển hệ thống

Bạn có thể dùng script terminal để chạy nhanh các chức năng tự động:

```powershell
python scripts\system_menu.py
```

Các lựa chọn sẽ gồm:

- `1` - đồng bộ bài tập mới vào `index.html` của từng module
- `2` - thêm nút `← Quay lại Dashboard` cho HTML chưa có
- `3` - commit và đẩy code lên GitHub

Ngoài ra, bạn có thể chạy riêng chức năng thêm nút bằng:

```powershell
python scripts\add_back_buttons.py
```

## Gợi ý tiện ích mở rộng VS Code

- Live Server
- Prettier
- Material Icon Theme
- GitLens
