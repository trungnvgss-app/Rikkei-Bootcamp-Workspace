// 1. Khai báo hàm sum() nhận vào 2 tham số và trả về tổng của chúng
function sum(a, b) {
    return a + b;
}

// 2. Hàm xử lý khi người dùng nhấn nút trên giao diện
function xuLyTinhTong() {
    // Lấy giá trị từ các ô input và chuyển đổi thành kiểu số (Number)
    let so1 = Number(document.getElementById("soThuNhat").value);
    let so2 = Number(document.getElementById("soThuHai").value);

    // Kiểm tra xem dữ liệu nhập vào có hợp lệ (có phải là số) hay không
    if (isNaN(so1) || isNaN(so2)) {
        alert("Vui lòng nhập các số hợp lệ vào cả hai ô!");
        return; // Dừng hàm nếu dữ liệu sai
    }

    // Gọi hàm sum() và lưu kết quả trả về vào biến ketQua
    let ketQua = sum(so1, so2);

    // Hiển thị kết quả lên màn hình bằng hàm alert() theo yêu cầu
    alert("Tổng của hai số (" + so1 + " + " + so2 + ") là: " + ketQua);
}