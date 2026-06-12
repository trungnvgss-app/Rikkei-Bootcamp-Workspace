function taoVaHienThiMang() {
    // 1. Khởi tạo một mảng rỗng
    let mangNgauNhien = [];

    // 2. Sử dụng vòng lặp while để kiểm tra độ dài mảng
    // Vòng lặp sẽ chạy liên tục cho đến khi mảng có đủ 10 phần tử
    while (mangNgauNhien.length < 10) {
        
        // Tạo một số nguyên ngẫu nhiên từ 1 đến 100
        // Math.random() tạo số thập phân từ 0 đến dưới 1
        // Nhân với 100, làm tròn xuống (Math.floor) và cộng 1 để lấy số từ 1-100
        let soNgauNhien = Math.floor(Math.random() * 100) + 1;
        
        // 3. Sử dụng phương thức push() để thêm phần tử vào cuối mảng
        mangNgauNhien.push(soNgauNhien);
    }

    // 4. Hiển thị mảng ra màn hình
    // Sử dụng .join(", ") để biến mảng thành chuỗi cách nhau bởi dấu phẩy cho dễ nhìn
    let chuoiHienThi = "[ " + mangNgauNhien.join(", ") + " ]";
    
    document.getElementById("result").innerText = chuoiHienThi;
}