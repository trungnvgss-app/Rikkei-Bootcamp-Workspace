function tinhTongChanLe() {
    // 1. Khai báo mảng và xác định số lượng phần tử ngẫu nhiên (từ 10 đến 20)
    // Math.random() * 11 tạo số từ 0 đến 10.999...
    // Math.floor làm tròn xuống thành 0 đến 10
    // Cộng thêm 10 để ra khoảng từ 10 đến 20
    let soLuongPhanTu = Math.floor(Math.random() * 11) + 10;
    let mangSo = [];
    let i = 0;

    // Sử dụng vòng lặp do...while để thêm các số ngẫu nhiên vào mảng
    do {
        // Tạo số nguyên ngẫu nhiên từ 1 đến 50 cho dễ nhìn
        let soNgauNhien = Math.floor(Math.random() * 50) + 1;
        mangSo.push(soNgauNhien);
        i++;
    } while (i < soLuongPhanTu);

    // Hiển thị mảng ra màn hình HTML để người dùng dễ kiểm chứng
    document.getElementById("mangHienThi").innerText = "[ " + mangSo.join(", ") + " ]";

    // 2. Khai báo biến lưu trữ tổng
    let tongChan = 0;
    let tongLe = 0;

    // 3. Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng
    for (let j = 0; j < mangSo.length; j++) {
        
        // Sử dụng câu lệnh điều kiện if...else và phép chia lấy dư (%)
        // Nếu chia hết cho 2 (dư 0) thì là số chẵn
        if (mangSo[j] % 2 === 0) {
            tongChan += mangSo[j]; // Cộng dồn vào tổng chẵn
        } else {
            tongLe += mangSo[j];   // Cộng dồn vào tổng lẻ
        }
    }

    // 4. Hiển thị kết quả bằng hàm alert() theo yêu cầu của đề bài
    // Thêm một chút delay bằng setTimeout để mảng hiển thị trên HTML trước khi alert chặn trình duyệt
    setTimeout(function() {
        alert("Tổng các số LẺ trong mảng là: " + tongLe);
        alert("Tổng các số CHẴN trong mảng là: " + tongChan);
    }, 100);
}