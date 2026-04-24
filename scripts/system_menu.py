import subprocess
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent.parent
IGNORE_DIRS = {'assets', '.git'}


# get_module_dirs: 取得(しゅとく) (Lấy danh sách thư mục module)
# 1. Chức năng: Quét và trả về danh sách các thư mục bắt đầu bằng 'Module_'.
# 2. Lý do: Để động hóa việc tìm kiếm các session bài tập trong hệ thống.
# 3. Lưu ý: Chỉ lấy các thư mục (is_dir).
def get_module_dirs():
    return [p for p in ROOT.iterdir() if p.is_dir() and p.name.startswith('Module_')]


# scan_html_files: 走査(そうさ) (Quét file HTML)
# 1. Chức năng: Tìm tất cả các file .html trong một module_dir, bỏ qua index.html và các thư mục IGNORE_DIRS.
# 2. Lý do: Thu thập toàn bộ bài tập HTML để hiển thị lên Dashboard.
# 3. Lưu ý: Trả về danh sách đường dẫn đã được sắp xếp.
def scan_html_files(module_dir):
    files = []
    for path in module_dir.rglob('*.html'):
        if path.name.lower() == 'index.html':
            continue
        if any(part in IGNORE_DIRS for part in path.parts):
            continue
        files.append(path)
    return sorted(files)


# label_group_name: 表示名(ひょうじめい) (Tạo nhãn hiển thị cho nhóm)
# 1. Chức năng: Chuyển đổi tên thư mục (vd: Session_01) thành chuỗi hiển thị đẹp.
# 2. Lý do: Giúp giao diện Dashboard trực quan và dễ đọc hơn đối với học viên.
# 3. Lưu ý: Xử lý đặc biệt cho các thư mục bắt đầu bằng 'session_'.
def label_group_name(group):
    if group.lower().startswith('session_'):
        parts = group.split('_')
        if len(parts) >= 2 and parts[1].isdigit():
            num = int(parts[1])
            rest = ' '.join(parts[2:]).replace('_', ' ').strip() or 'Bài tập'
            return f'Session {num}: {rest}'
    return group.replace('_', ' ').title()


# label_file_name: ファイル名(ふぁいるめい) (Tạo nhãn hiển thị cho file)
# 1. Chức năng: Xóa đuôi .html và thay thế dấu gạch dưới/gạch ngang thành khoảng trắng.
# 2. Lý do: Định dạng tên file thành tên bài tập dễ đọc trên giao diện.
# 3. Lưu ý: Sử dụng title case cho từng từ.
def label_file_name(name):
    label = name.replace('_', ' ').replace('-', ' ').replace('.html', '')
    return ' '.join(word.capitalize() for word in label.split())


# build_module_index: 構築(こうちく) (Xây dựng trang Dashboard Index)
# 1. Chức năng: Gom nhóm các file HTML đã quét và tạo ra file index.html tổng hợp.
# 2. Lý do: Cung cấp giao diện tập trung để học viên dễ dàng truy cập bài tập.
# 3. Lưu ý: Ghi đè file index.html trong thư mục module hiện tại.
def build_module_index(module_dir):
    html_files = scan_html_files(module_dir)
    groups = {}
    for path in html_files:
        rel = path.relative_to(module_dir)
        if len(rel.parts) > 1:
            group = rel.parts[0]
        else:
            group = 'Root'
        groups.setdefault(group, []).append(rel)

    title = f'Dashboard Bài Tập - {module_dir.name}'
    header = f'🚀 Danh Sách Bài Tập {module_dir.name.replace("_", " ")}'
    if module_dir.name == 'Module_1_Frontend':
        title = 'Dashboard Bài Tập - Module 1'
        header = '🚀 Danh Sách Bài Tập Module 1: Frontend Basic'

    lines = [
        '<!DOCTYPE html>',
        '<html lang="vi">',
        '<head>',
        '  <meta charset="UTF-8" />',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        f'  <title>{title}</title>',
        '  <style>',
        '    body { font-family: Arial, sans-serif; background-color: #f4f7f6; padding: 20px; }',
        '    .container { max-width: 900px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }',
        '    h1 { text-align: center; color: #d32f2f; }',
        '    .session { margin-bottom: 24px; border-left: 4px solid #d32f2f; padding-left: 12px; }',
        '    .session h2 { font-size: 18px; color: #333; margin-bottom: 8px; }',
        '    ul { list-style-type: none; padding: 0; }',
        '    li { margin: 8px 0; }',
        '    a { text-decoration: none; color: #0066cc; font-weight: bold; }',
        '    a:hover { color: #d32f2f; text-decoration: underline; }',
        '    .badge { background: #eee; padding: 3px 8px; border-radius: 12px; font-size: 12px; color: #555; }',
        '  </style>',
        '</head>',
        '<body>',
        '  <div class="container">',
        f'    <h1>{header}</h1>',
    ]

    if not groups:
        lines += [
            '    <div class="session">',
            '      <h2>Hiện chưa có bài tập nào</h2>',
            '      <ul>',
            '        <li><i>Hãy copy các file bài tập vào thư mục này rồi chạy chức năng số 1.</i></li>',
            '      </ul>',
            '    </div>',
        ]
    else:
        for group, rel_paths in groups.items():
            label = label_group_name(group)
            lines += [
                '    <div class="session">',
                f'      <h2>{label}</h2>',
                '      <ul>',
            ]
            for rel in rel_paths:
                href = rel.as_posix()
                name = label_file_name(rel.name)
                lines.append(f'        <li><a href="{href}">{name}</a> <span class="badge">{label}</span></li>')
            lines += ['      </ul>', '    </div>']

    lines += ['  </div>', '</body>', '</html>']
    index_path = module_dir / 'index.html'
    index_path.write_text('\n'.join(lines), encoding='utf-8')
    return index_path


# add_back_buttons: ボタン追加(ぼたんついか) (Thêm nút Quay lại)
# 1. Chức năng: Tự động chèn mã HTML nút "Quay lại Dashboard" vào các bài tập.
# 2. Lý do: Cải thiện trải nghiệm UI/UX, giúp người dùng về trang chủ nhanh chóng.
# 3. Lưu ý: Chỉ chèn vào các file chưa có class 'back-dashboard'.
def add_back_buttons():
    updated = []
    for module_dir in get_module_dirs():
        for path in module_dir.rglob('*.html'):
            if path.name.lower() == 'index.html':
                continue
            if any(part in IGNORE_DIRS for part in path.parts):
                continue
            text = path.read_text(encoding='utf-8')
            if 'back-dashboard' in text:
                continue
            rel = path.parent.relative_to(module_dir)
            back = 'index.html' if not rel.parts else '/'.join(['..'] * len(rel.parts) + ['index.html'])
            insert = (
                '    <div style="margin-top: 30px; padding-top: 10px; border-top: 1px solid #ccc;">\n'
                f'      <a class="back-dashboard" href="{back}" style="display:inline-block;padding:10px 16px;background:#d32f2f;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;">← Quay lại Dashboard</a>\n'
                '    </div>\n'
            )
            if '</body>' in text:
                text = text.replace('</body>', insert + '  </body>', 1)
            elif '</html>' in text:
                text = text.replace('</html>', insert + '</html>', 1)
            else:
                text += '\n' + insert
            path.write_text(text, encoding='utf-8')
            updated.append(path)
    return updated


# git_sync: 同期(どうき) (Đồng bộ hóa Git)
# 1. Chức năng: Tự động thực hiện các lệnh git add, commit, push lên remote.
# 2. Lý do: Tự động hóa quy trình lưu trữ và chia sẻ code.
# 3. Lưu ý: Yêu cầu môi trường phải là một Git repo hợp lệ.
def git_sync():
    git_root = ROOT
    git_status = subprocess.run(['git', 'status', '--short'], cwd=git_root, capture_output=True, text=True)
    if git_status.returncode != 0:
        print('Git không thể chạy status. Hãy kiểm tra Git đã cài và thư mục đang là repo không.')
        print(git_status.stderr)
        return
    if not git_status.stdout.strip():
        print('Không có thay đổi nào để đồng bộ lên GitHub.')
        return
    print('Đang thêm và commit các thay đổi...')
    add = subprocess.run(['git', 'add', '.'], cwd=git_root)
    if add.returncode != 0:
        print('Lỗi khi chạy git add .')
        return
    commit = subprocess.run(['git', 'commit', '-m', 'Auto sync modules and dashboard'], cwd=git_root)
    if commit.returncode != 0:
        print('Lỗi khi commit. Có thể không có gì mới để commit.')
    push = subprocess.run(['git', 'push', 'origin', 'main'], cwd=git_root)
    if push.returncode == 0:
        print('Đã đẩy lên GitHub thành công.')
    else:
        print('Lỗi khi đẩy lên GitHub. Hãy kiểm tra kết nối hoặc remote.')


# main: メイン処理(めいんしょり) (Hàm xử lý chính)
# 1. Chức năng: Khởi chạy menu CLI tương tác cho phép chọn các chức năng hệ thống.
# 2. Lý do: Đóng vai trò điểm neo điều khiển trung tâm của toàn bộ script.
# 3. Lưu ý: Sử dụng vòng lặp while True để duy trì menu.
def main():
    while True:
        print('\n=== Rikkei Bootcamp System Menu ===')
        print('1. Đồng bộ các bài tập mới vào index.html của module')
        print('2. Thêm nút "← Quay lại Dashboard" cho các HTML chưa có')
        print('3. Đồng bộ các module lên GitHub')
        print('0. Thoát')
        choice = input('Chọn số (0-3): ').strip()

        if choice == '1':
            modules = get_module_dirs()
            if not modules:
                print('Không tìm thấy module nào.')
                continue
            for module_dir in modules:
                index_path = build_module_index(module_dir)
                print(f'Đã cập nhật {index_path}')
        elif choice == '2':
            updated = add_back_buttons()
            if not updated:
                print('Không tìm thấy file HTML mới cần thêm nút.')
            else:
                for path in updated:
                    print(f'Đã thêm nút cho {path}')
        elif choice == '3':
            git_sync()
        elif choice == '0':
            print('Thoát.')
            break

if __name__ == '__main__':
    main()