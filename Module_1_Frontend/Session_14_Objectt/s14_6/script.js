// Khởi tạo mảng chứa danh sách các đối tượng sách
let danhSachSach = [];

// Hàm hỗ trợ: Cập nhật danh sách hiển thị trên giao diện HTML
function capNhatGiaoDien() {
    let theHienThi = document.getElementById("hienThiDanhSach");
    if (danhSachSach.length === 0) {
        theHienThi.innerText = "Thư viện hiện chưa có sách nào.";
    } else {
        // Chuyển mảng đối tượng thành chuỗi JSON đẹp mắt để hiển thị
        theHienThi.innerText = JSON.stringify(danhSachSach, null, 4);
    }
}

// Hàm chính: Quản lý thư viện (Sử dụng vòng lặp Menu)
function quanLyThuVien() {
    let luaChon;

    do {
        let menu = "===== QUẢN LÝ THƯ VIỆN =====\n" +
                   "1. Thêm sách mới\n" +
                   "2. Hiển thị danh sách sách\n" +
                   "3. Tìm kiếm sách theo tên\n" +
                   "4. Xóa sách theo ID\n" +
                   "5. Thoát chương trình\n\n" +
                   "Nhập lựa chọn của bạn (1-5):";

        luaChon = prompt(menu);

        // Xử lý khi người dùng bấm Cancel
        if (luaChon === null) {
            break; 
        }

        switch (luaChon) {
            case '1': // THÊM SÁCH MỚI
                let id = prompt("Nhập ID sách:");
                let tenSach = prompt("Nhập Tên sách:");
                let tacGia = prompt("Nhập Tác giả:");
                let namXuatBan = prompt("Nhập Năm xuất bản:");

                if (id && tenSach && tacGia && namXuatBan) {
                    // Kiểm tra ID trùng
                    let trungId = danhSachSach.some(sach => sach.id === id);
                    if (trungId) {
                        alert("Lỗi: ID này đã tồn tại!");
                    } else {
                        // Tạo đối tượng mới và push vào mảng
                        let sachMoi = {
                            id: id,
                            tenSach: tenSach,
                            tacGia: tacGia,
                            namXuatBan: namXuatBan
                        };
                        danhSachSach.push(sachMoi);
                        alert("Thêm sách thành công!");
                        capNhatGiaoDien();
                    }
                } else {
                    alert("Bạn chưa nhập đủ thông tin!");
                }
                break;

            case '2': // HIỂN THỊ DANH SÁCH
                if (danhSachSach.length === 0) {
                    alert("Danh sách trống!");
                } else {
                    let thongTin = "--- DANH SÁCH SÁCH ---\n";
                    for (let i = 0; i < danhSachSach.length; i++) {
                        let s = danhSachSach[i];
                        thongTin += `ID: ${s.id} | Tên: ${s.tenSach} | Tác giả: ${s.tacGia} | Năm XB: ${s.namXuatBan}\n`;
                    }
                    alert(thongTin);
                }
                break;

            case '3': // TÌM KIẾM SÁCH THEO TÊN
                let tuKhoa = prompt("Nhập tên sách cần tìm:");
                if (tuKhoa) {
                    let ketQuaTimKiem = "";
                    // Chuyển từ khóa về chữ thường để so sánh
                    let tuKhoaThuong = tuKhoa.toLowerCase();

                    for (let i = 0; i < danhSachSach.length; i++) {
                        // Chuyển tên sách trong mảng về chữ thường và dùng includes() để tìm chuỗi con
                        if (danhSachSach[i].tenSach.toLowerCase().includes(tuKhoaThuong)) {
                            let s = danhSachSach[i];
                            ketQuaTimKiem += `ID: ${s.id} | Tên: ${s.tenSach} | Tác giả: ${s.tacGia}\n`;
                        }
                    }

                    if (ketQuaTimKiem === "") {
                        alert("Không tìm thấy sách nào phù hợp.");
                    } else {
                        alert("KẾT QUẢ TÌM KIẾM:\n" + ketQuaTimKiem);
                    }
                }
                break;

            case '4': // XÓA SÁCH THEO ID
                let idXoa = prompt("Nhập ID sách cần xóa:");
                if (idXoa) {
                    // Tìm vị trí (index) của sách cần xóa
                    let index = danhSachSach.findIndex(sach => sach.id === idXoa);

                    if (index !== -1) {
                        danhSachSach.splice(index, 1);
                        alert("Đã xóa sách thành công!");
                        capNhatGiaoDien();
                    } else {
                        alert("Lỗi: Không tìm thấy sách với ID đã nhập.");
                    }
                }
                break;

            case '5': // THOÁT
                alert("Đã thoát ứng dụng Quản lý Thư viện.");
                break;

            default:
                alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 5.");
                break;
        }

    } while (luaChon !== '5' && luaChon !== null);
}