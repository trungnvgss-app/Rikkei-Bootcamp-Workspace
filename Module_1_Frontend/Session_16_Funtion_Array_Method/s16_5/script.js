// 1. Hàm kiểm tra chuỗi đối xứng
function isPalindrome(str) {
    // Chuyển chuỗi về chữ thường để so sánh chính xác hơn (VD: "Anna" vẫn tính là đối xứng)
    let chuoiGoc = str.toLowerCase();

    // Đảo ngược chuỗi bằng cách kết hợp 3 phương thức của mảng:
    // - split(''): Tách chuỗi thành mảng các ký tự
    // - reverse(): Đảo ngược thứ tự các phần tử trong mảng
    // - join(''): Ghép mảng trở lại thành chuỗi
    let chuoiDaoNguoc = chuoiGoc.split('').reverse().join('');

    // Nếu chuỗi ban đầu giống hệt chuỗi sau khi đảo ngược thì trả về true
    if (chuoiGoc === chuoiDaoNguoc) {
        return true;
    } else {
        return false;
    }
}

// 2. Hàm xử lý tương tác với người dùng
function kiemTraChuoi() {
    // Yêu cầu người dùng nhập chuỗi bằng hàm prompt()
    let input = prompt("Vui lòng nhập vào một chuỗi ký tự:");

    // Xử lý trường hợp người dùng bấm Cancel hoặc để trống
    if (input === null || input.trim() === "") {
        return; 
    }

    // Lấy chuỗi đã loại bỏ khoảng trắng ở 2 đầu
    let chuoiCanKiemTra = input.trim();

    // Gọi hàm isPalindrome để kiểm tra
    let ketQua = isPalindrome(chuoiCanKiemTra);

    // Thông báo cho người dùng bằng alert()
    if (ketQua === true) {
        alert(`KẾT QUẢ: \nChuỗi "${chuoiCanKiemTra}" LÀ chuỗi đối xứng.`);
    } else {
        alert(`KẾT QUẢ: \nChuỗi "${chuoiCanKiemTra}" KHÔNG PHẢI là chuỗi đối xứng.`);
    }
}