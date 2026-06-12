// Hàm hỗ trợ in kết quả ra màn hình (thẻ div id="result")
function inKetQua(noiDung) {
    document.getElementById("result").innerText = noiDung;
}

// Bài 1: Đếm từ 1 đến 100. Khi số là 99 thì hiển thị hộp thoại
function bai1() {
    let ketQua = "";
    for (let i = 1; i <= 100; i++) {
        ketQua += i + " ";
        if (i === 99) {
            alert("Đã hoàn thành!");
        }
    }
    inKetQua(ketQua);
}

// Bài 2: Lấy thông tin nhiệt độ và kiểm tra
function bai2() {
    let nhietDo = parseFloat(prompt("Vui lòng nhập nhiệt độ hiện tại:"));
    
    // Sử dụng vòng lặp while để yêu cầu nhập lại nếu nhiệt độ không hợp lệ
    while (nhietDo > 100 || nhietDo < 20) {
        if (nhietDo > 100) {
            alert("Nhiệt độ trên 100 độ! Yêu cầu giảm nhiệt độ.");
        } else if (nhietDo < 20) {
            alert("Nhiệt độ dưới 20 độ! Yêu cầu tăng nhiệt độ.");
        }
        // Cho người dùng nhập lại để thoát khỏi vòng lặp
        nhietDo = parseFloat(prompt("Vui lòng nhập lại nhiệt độ:"));
    }
    
    alert("Nhiệt độ hiện tại bình thường: " + nhietDo + " độ.");
    inKetQua("Nhiệt độ đã thiết lập ổn định ở mức: " + nhietDo);
}

// Bài 3: Hiển thị 20 số trong dãy fibonacci đầu tiên
function bai3() {
    let n1 = 0, n2 = 1, nextTerm;
    let ketQua = [];
    
    for (let i = 1; i <= 20; i++) {
        ketQua.push(n1); // Thêm số hiện tại vào mảng
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    inKetQua("20 số Fibonacci đầu tiên: " + ketQua.join(", "));
}

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5
function bai4() {
    let n1 = 1, n2 = 1, nextTerm; // Bắt đầu từ 1, 1 để tránh lấy số 0 ngay lập tức
    
    while (true) {
        nextTerm = n1 + n2;
        if (nextTerm % 5 === 0) {
            inKetQua("Số Fibonacci đầu tiên chia hết cho 5 là: " + nextTerm);
            break; // Tìm thấy thì dừng vòng lặp ngay lập tức
        }
        n1 = n2;
        n2 = nextTerm;
    }
}

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci
function bai5() {
    let n1 = 0, n2 = 1, nextTerm;
    let tong = 0;
    
    for (let i = 1; i <= 20; i++) {
        tong += n1; // Cộng dồn số hiện tại vào tổng
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    inKetQua("Tổng 20 số Fibonacci đầu tiên là: " + tong);
}

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên
function bai6() {
    let dem = 0; // Đếm xem đã tìm được bao nhiêu số chia hết cho 7
    let tong = 0;
    let n = 1;   // Bắt đầu kiểm tra từ số 1
    
    while (dem < 30) {
        if (n % 7 === 0) {
            tong += n;
            dem++;
        }
        n++;
    }
    inKetQua("Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là: " + tong);
}

// Bài 7: In số từ 1 đến 100. Thay thế bằng Fizz, Buzz, FizzBuzz
function bai7() {
    let ketQua = "";
    for (let i = 1; i <= 100; i++) {
        // Ưu tiên kiểm tra chia hết cho cả 3 và 5 trước
        if (i % 3 === 0 && i % 5 === 0) {
            ketQua += "FizzBuzz, ";
        } else if (i % 3 === 0) {
            ketQua += "Fizz, ";
        } else if (i % 5 === 0) {
            ketQua += "Buzz, ";
        } else {
            ketQua += i + ", ";
        }
    }
    // Xóa dấu phẩy và khoảng trắng ở cuối chuỗi
    ketQua = ketQua.slice(0, -2);
    inKetQua(ketQua);
}