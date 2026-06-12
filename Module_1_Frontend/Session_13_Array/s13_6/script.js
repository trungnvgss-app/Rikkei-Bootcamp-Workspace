function thucHienDem() {
    // Bước 1: Tạo ra 1 mảng gồm 10 -> 20 phần tử số nguyên
    // Tính toán độ dài ngẫu nhiên từ 10 đến 20
    let soLuongPhanTu = Math.floor(Math.random() * 11) + 10; 
    let mangSo = [];
    
    // Đổ dữ liệu vào mảng (Tôi cho random từ 1-10 để tỷ lệ xuất hiện các số trùng nhau cao hơn, dễ test bài)
    for (let i = 0; i < soLuongPhanTu; i++) {
        let soNgauNhien = Math.floor(Math.random() * 10) + 1;
        mangSo.push(soNgauNhien);
    }

    // In mảng ra màn hình ngay lập tức để người dùng có thể xem trước
    document.getElementById("mangHienThi").innerText = "[ " + mangSo.join(", ") + " ]";

    // Sử dụng setTimeout một chút trễ để trình duyệt kịp hiển thị mảng trước khi bật prompt
    setTimeout(function() {
        // Bước 2: Tạo ra biến k có giá trị là số nguyên từ người dùng nhập vào
        let kInput = prompt("Mảng đã được tạo! Hãy nhập một số nguyên từ 1 đến 10 để kiểm tra (k):");
        
        // Xử lý nếu người dùng bấm Hủy (Cancel)
        if (kInput === null || kInput.trim() === "") {
            document.getElementById("ketQua").innerHTML = "<em>Thao tác đã bị hủy.</em>";
            return;
        }

        let k = Number(kInput);

        // Kiểm tra xem dữ liệu nhập vào có phải số hợp lệ không
        if (isNaN(k)) {
            alert("Vui lòng nhập một số hợp lệ!");
            document.getElementById("ketQua").innerHTML = "<em>Dữ liệu nhập không hợp lệ.</em>";
            return;
        }

        // Bước 3: Tạo ra 1 biến count = 0 để lưu trữ kết quả
        let count = 0;

        // Bước 4: Sử dụng vòng lặp for lặp qua từng phần tử trong mảng
        for (let i = 0; i < mangSo.length; i++) {
            // So sánh giá trị phần tử đó với biến K
            if (mangSo[i] === k) {
                // Nếu bằng K thì cộng biến count thêm 1
                count++;
            }
        }

        // Bước 5: Chúng ta in ra kết quả
        document.getElementById("ketQua").innerHTML = "Số <strong>" + k + "</strong> xuất hiện <strong>" + count + "</strong> lần trong mảng.";
        
    }, 100); // Trễ 100ms
}