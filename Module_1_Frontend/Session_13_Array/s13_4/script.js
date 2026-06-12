function timSoLonNhat() {
    // 1. Lấy chuỗi dữ liệu người dùng nhập từ ô input
    let chuoiDuLieu = document.getElementById("chuoiSo").value;

    if (chuoiDuLieu.trim() === "") {
        alert("Vui lòng nhập một dãy số!");
        return;
    }

    // 2. Sử dụng split() để cắt chuỗi thành mảng các phần tử
    let mangChuoi = chuoiDuLieu.split(",");

    // 3. Đặt phần tử đầu tiên làm số lớn nhất mặc định ban đầu
    // Sử dụng Number() để ép kiểu từ chuỗi sang số
    let max = Number(mangChuoi[0]);

    // 4. Dùng vòng lặp for duyệt từ phần tử thứ 2 (index = 1) đến cuối mảng
    for (let i = 1; i < mangChuoi.length; i++) {
        
        // Chuyển đổi phần tử đang xét thành số
        let soHienTai = Number(mangChuoi[i]);

        // Kiểm tra xem dữ liệu có phải là số hợp lệ không (!isNaN)
        if (!isNaN(soHienTai)) {
            // 5. Câu lệnh điều kiện if để so sánh
            if (soHienTai > max) {
                // Nếu số hiện tại lớn hơn max, cập nhật lại giá trị cho max
                max = soHienTai;
            }
        }
    }

    // 6. Hiển thị kết quả ra màn hình bằng hàm alert() theo yêu cầu đề bài
    if (isNaN(max)) {
        alert("Dữ liệu không hợp lệ. Vui lòng đảm bảo bạn nhập các con số!");
    } else {
        alert("Phần tử lớn nhất trong mảng là: " + max);
    }
}