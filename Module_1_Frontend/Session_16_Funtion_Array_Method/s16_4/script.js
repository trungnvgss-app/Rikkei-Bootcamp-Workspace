// 1. Định nghĩa hàm isEven nhận vào 1 số và trả về true/false
function isEven(number) {
    // Nếu số chia lấy dư cho 2 bằng 0 thì là số chẵn (trả về true)
    // Ngược lại là số lẻ (trả về false)
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
    
    // Cách viết rút gọn dành cho Developer:
    // return number % 2 === 0;
}

// 2. Hàm xử lý tương tác người dùng
function xuLyKiemTra() {
    // Yêu cầu người dùng nhập vào 1 số nguyên bằng hàm prompt()
    let input = prompt("Vui lòng nhập vào một số nguyên bất kỳ:");

    // Xử lý trường hợp người dùng bấm Cancel hoặc để trống
    if (input === null || input.trim() === "") {
        return; 
    }

    // Ép kiểu dữ liệu nhập vào thành dạng số (Number)
    let soKiemTra = Number(input);

    // Kiểm tra xem dữ liệu nhập vào có phải là số hợp lệ hay không
    if (isNaN(soKiemTra) || !Number.isInteger(soKiemTra)) {
        alert("Lỗi: Vui lòng nhập một số nguyên hợp lệ!");
        return;
    }

    // Gọi hàm isEven và lưu kết quả (true/false) vào biến ketQua
    let ketQua = isEven(soKiemTra);

    // Hiển thị kết quả bằng hàm alert()
    if (ketQua === true) {
        alert("Kết quả trả về: true\nSố " + soKiemTra + " LÀ số chẵn.");
    } else {
        alert("Kết quả trả về: false\nSố " + soKiemTra + " KHÔNG PHẢI là số chẵn (số lẻ).");
    }
}