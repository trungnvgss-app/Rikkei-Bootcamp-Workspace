// Hàm hỗ trợ in kết quả ra màn hình
function inKetQua(noiDung) {
    document.getElementById("result").innerText = noiDung;
}

// Bài 1: In dãy Fibonacci
function bai1() {
    let soLuong = parseInt(prompt("Bạn muốn in bao nhiêu số trong dãy Fibonacci?"));
    if (isNaN(soLuong) || soLuong <= 0) {
        alert("Vui lòng nhập một số nguyên dương!");
        return;
    }

    let n1 = 0, n2 = 1, nextTerm;
    let ketQua = [];
    
    for (let i = 1; i <= soLuong; i++) {
        ketQua.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    inKetQua("Dãy Fibonacci " + soLuong + " số đầu tiên:\n" + ketQua.join(", "));
}

// Bài 2: Tính giai thừa của một số nguyên dương
function bai2() {
    let n = parseInt(prompt("Nhập một số nguyên dương để tính giai thừa:"));
    if (isNaN(n) || n < 0) {
        alert("Vui lòng nhập số nguyên dương hợp lệ!");
        return;
    }

    let giaiThua = 1;
    // Sử dụng vòng lặp for để nhân dồn từ 1 đến n
    for (let i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    inKetQua("Giai thừa của " + n + "! là:\n" + giaiThua);
}

// Bài 3:  In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
function bai3() {
    let result = "";
    let n = 5; // Độ cao của tam giác (5 dòng)

    result += "Hình tam giác vuông 1:\n";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) result += "*";
        result += "\n";
    }

    result += "\nHình tam giác vuông 2:\n";
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) result += "*";
        result += "\n";
    }

    result += "\nHình tam giác vuông 3:\n";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) result += " "; // In khoảng trắng
        for (let k = 1; k <= i; k++) result += "*";     // In sao
        result += "\n";
    }

    result += "\nHình tam giác vuông 4:\n";
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) result += " "; // In khoảng trắng
        for (let k = 1; k <= i; k++) result += "*";     // In sao
        result += "\n";
    }

    inKetQua(result);
}

// Bài 4: In hình chữ nhật rỗng
function bai4() {
    let result = "";
    let chieuRong = 21;
    let chieuCao = 7;

    for (let i = 1; i <= chieuCao; i++) {
        for (let j = 1; j <= chieuRong; j++) {
            // In dấu * nếu ở viền (hàng đầu, hàng cuối, cột đầu, cột cuối)
            if (i === 1 || i === chieuCao || j === 1 || j === chieuRong) {
                result += "*";
            } else {
                result += " "; // In khoảng trắng ở giữa
            }
        }
        result += "\n"; // Hết 1 hàng thì xuống dòng
    }
    inKetQua("Hình chữ nhật rỗng:\n\n" + result);
}

// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
function bai5() {
    let tienBanDau = parseFloat(prompt("Nhập số tiền ban đầu (VNĐ):"));
    let soThang = parseInt(prompt("Nhập số tháng cho vay:"));
    let laiSuatThang = parseFloat(prompt("Nhập lãi suất hàng tháng (%):"));

    if (isNaN(tienBanDau) || isNaN(soThang) || isNaN(laiSuatThang) || tienBanDau <= 0 || soThang <= 0) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return;
    }

    let tongTien = tienBanDau;
    let laiSuatThapPhan = laiSuatThang / 100;

    // Lặp qua từng tháng để tính lãi cộng dồn vào gốc (lãi mẹ đẻ lãi con)
    for (let i = 1; i <= soThang; i++) {
        let tienLaiThang = tongTien * laiSuatThapPhan;
        tongTien += tienLaiThang; // Cộng dồn lãi vào gốc
    }

    inKetQua(
        "Số tiền ban đầu: " + tienBanDau.toLocaleString("vi-VN") + " VNĐ\n" +
        "Thời gian: " + soThang + " tháng\n" +
        "Lãi suất: " + laiSuatThang + "% / tháng\n" +
        "-------------------------------\n" +
        "Tổng tiền nhận được sau " + soThang + " tháng là:\n" + 
        tongTien.toLocaleString("vi-VN", {maximumFractionDigits: 2}) + " VNĐ"
    );
}