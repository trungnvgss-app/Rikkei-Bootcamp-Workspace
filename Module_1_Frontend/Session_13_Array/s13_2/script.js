// Tạo một mảng có sẵn với các phần tử số
const mangBiMat = [4, 8, 15, 16, 23, 42, 55, 99];

function kiemTraSo() {
    // Cho người dùng nhập vào một số
    let input = prompt("Nhập vào một số nguyên bất kỳ để kiểm tra:");

    // Xử lý trường hợp người dùng bấm "Cancel"
    if (input === null || input.trim() === "") {
        return; 
    }

    // Chuyển đổi giá trị nhập vào thành kiểu số (Number)
    let soNhap = Number(input);

    // Kiểm tra xem dữ liệu nhập vào có phải là số hợp lệ không
    if (isNaN(soNhap)) {
        alert("Vui lòng nhập một số hợp lệ!");
        return;
    }

    // Sử dụng if...else để kiểm tra số đó có trong mảng hay không
    // Phương thức includes() sẽ trả về true nếu tìm thấy, false nếu không tìm thấy
    if (mangBiMat.includes(soNhap)) {
        alert("Bingo");
    } else {
        alert("Chúc bạn may mắn lần sau");
    }
}