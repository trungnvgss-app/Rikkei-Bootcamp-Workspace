// Hàm kiểm tra một số có phải là số nguyên tố hay không
function kiemTraSNT(n) {
    // Số nguyên tố phải lớn hơn hoặc bằng 2
    if (n < 2) {
        return false;
    }
    // Sử dụng vòng lặp for để kiểm tra các ước số từ 2 đến căn bậc hai của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Nếu n chia hết cho i thì không phải SNT
        }
    }
    return true;
}

// Hàm chính để tìm và hiển thị N số nguyên tố
function hienThiCacSoNguyenTo(soLuong) {
    let dem = 0; // Biến đếm số lượng SNT đã tìm thấy
    let n = 2;   // Bắt đầu kiểm tra từ số 2
    let ketQua = []; // Mảng để lưu các số nguyên tố

    // Sử dụng vòng lặp while để dừng khi đã tìm đủ số lượng yêu cầu
    while (dem < soLuong) {
        if (kiemTraSNT(n)) {
            ketQua.push(n); // Thêm số nguyên tố vào mảng
            dem++;          // Tăng biến đếm lên 1
        }
        n++; // Chuyển sang số tiếp theo để kiểm tra
    }

    // Tìm phần tử HTML có id="result" và thay đổi nội dung của nó bằng mảng kết quả
    document.getElementById("result").innerText = ketQua.join(", ");
}

// Gọi hàm để hiển thị 20 số nguyên tố đầu tiên
hienThiCacSoNguyenTo(20);