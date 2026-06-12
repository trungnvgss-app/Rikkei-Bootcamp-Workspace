function daoNguoc() {
    // 1. Lấy dữ liệu từ ô input có id là "chuoiNhap"
    let chuoiDuLieu = document.getElementById("chuoiNhap").value;

    // Kiểm tra xem người dùng có nhập dữ liệu hay không
    if (chuoiDuLieu.trim() === "") {
        alert("Vui lòng nhập một dãy số!");
        return;
    }

    // 2. Sử dụng split() để chuyển chuỗi (string) thành mảng (array)
    // Dấu "," được dùng làm điểm phân tách các phần tử
    let mangDuLieu = chuoiDuLieu.split(",");

    // Bước phụ: Dùng vòng lặp dọn dẹp các khoảng trắng thừa ở mỗi phần tử 
    // (Ví dụ: " 2 " sẽ thành "2") để mảng sạch sẽ hơn
    for (let i = 0; i < mangDuLieu.length; i++) {
        mangDuLieu[i] = mangDuLieu[i].trim();
    }

    // 3. Sử dụng reverse() để đảo ngược thứ tự các phần tử trong mảng
    mangDuLieu.reverse();

    // 4. Hiển thị kết quả ra màn hình
    // Sử dụng join(", ") để ghép mảng lại thành chuỗi cho dễ đọc khi hiển thị
    document.getElementById("ketQua").innerText = "Kết quả: [ " + mangDuLieu.join(", ") + " ]";
}