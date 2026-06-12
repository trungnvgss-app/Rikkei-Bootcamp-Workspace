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
  - `Session_04_CSS_Selector/` - Bài tập CSS Selectors.
  - `Session_05_CSS_Basic_Properties/` - Bài tập CSS Properties.
  - `Session_06_CSS/` - Bài tập CSS nâng cao.
  - `Session_07_Flexbox/` - Bài tập Flexbox.
  - `Session_08_JS_Basic/` - Bài tập JS cơ bản.
  - `Session_09_CSS_Layout/` - Bài tập CSS Layout.
  - `Session_10_JavaScript/` - Bài tập JavaScript cơ bản.
  - `Session_11_Control_Statement/` - Bài tập câu lệnh điều khiển.
  - `Session_12_JavaCsript_System/` - Bài tập hệ thống JavaScript.
  - `Session_13_Array/` - Bài tập Mảng (Array).
  - `Session_14_Objectt/` - Bài tập Đối tượng (Object).
  - `Session_15_Array_Object/` - Bài tập kết hợp Mảng và Đối tượng.
  - `Session_16_Funtion_Array_Method/` - Bài tập Hàm và Phương thức mảng.
- `Module_2_Database/` - Lưu trữ file SQL, ERD, tài liệu Database.
- `Module_3_Java_Core/` - Dự án Java Maven/Gradle cho Module 3.
- `Module_4_FE_IT/` - Tài liệu, sơ đồ thuật toán, Markdown lý thuyết.
- `Module_5_Java_Web/` - Dự án Spring Boot cho Module 5.
- `scripts/` - Chứa các script tiện ích tự động hóa (Python, Batch).
  - `add_back_buttons.py` - Script thêm nút quay lại Dashboard.
  - `system_menu.py` - Menu điều khiển hệ thống bằng terminal.
- `About_Dataset/` - Chứa các dữ liệu tham khảo hoặc bài tập nâng cao.
- `scratch/` - Thư mục nháp.
- `Draft-Tag.md` - Ghi chú nháp về thẻ (tags).

## Thư mục gốc ngoài (d:\Rikkei-Bootcamp-Workspace)

Bên cạnh thư mục chính, workspace cấp ngoài cùng chứa các tài liệu bổ sung như:
- `MIGRATION_GUIDE.md` - Hướng dẫn chuyển đổi môi trường làm việc sang máy mới.
- `VSCODE_CODING_DIRECTIVES.md` - Hướng dẫn quy chuẩn code trên VS Code.
- `VSCODE_SHORTCUTS_PRO.md` - Danh sách phím tắt chuyên nghiệp cho VS Code.
- `responsive_tips.md` - Mẹo Responsive Web Design.
- `9.0 LUYỆN THI/` & `HN_JS220313_BS_[NGUYEN_VAN_TRUNG]/` - Chứa các dự án luyện thi, bài tập Hackathon.

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

Hoặc sử dụng tập lệnh Batch:
```powershell
.\run_menu.bat
```

## Gợi ý tiện ích mở rộng VS Code

- Live Server
- Prettier
- Material Icon Theme
- GitLens
