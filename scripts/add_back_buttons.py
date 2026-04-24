from pathlib import Path

root = Path('Module_1_Frontend')
if not root.exists() or not root.is_dir():
    raise SystemExit('Module_1_Frontend directory not found.')

updated = []
# 1. Chức năng: Tự động duyệt qua tất cả các file HTML trong thư mục Module_1_Frontend và thêm nút Quay lại nếu chưa có.
# 2. Lý do: Giúp người dùng dễ dàng điều hướng về trang Dashboard gốc (index.html) từ bất kỳ bài tập nào.
# 3. Lưu ý: Sử dụng tính toán đường dẫn tương đối để đảm bảo nút bấm luôn dẫn về đúng file index.html gốc.
for path in sorted(root.rglob('*.html')):
    if path.name.lower() == 'index.html':
        continue

    rel = path.parent.relative_to(root)
    back = 'index.html' if not rel.parts else '/'.join(['..'] * len(rel.parts) + ['index.html'])

    text = path.read_text(encoding='utf-8')
    if 'back-dashboard' in text:
        continue

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
    updated.append(str(path))

print(f'Updated {len(updated)} HTML files.')
for p in updated:
    print(f' - {p}')
