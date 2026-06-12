// Hàm hỗ trợ in kết quả ra HTML
function inKetQua(noiDung) {
    document.getElementById("ketQua").innerText = noiDung;
}

// Hàm hỗ trợ lấy dữ liệu nhập từ người dùng và chuyển thành mảng số
function nhapMang(thongDiep = "Nhập 10 số nguyên, cách nhau bởi dấu phẩy:", macDinh = "1, 5, 12, 8, 20, -5, 10, 3, 15, 7") {
    let input = prompt(thongDiep, macDinh);
    if (!input) return null;
    // Tách chuỗi, bỏ khoảng trắng, chuyển thành số và lọc các giá trị không hợp lệ (NaN)
    return input.split(',').map(item => Number(item.trim())).filter(n => !isNaN(n));
}

// Bài 1: Đếm số nguyên >= 10
function bai1() {
    let arr = nhapMang();
    if (!arr) return;
    
    // filter() lọc ra các phần tử thỏa mãn điều kiện, sau đó lấy chiều dài mảng (length)
    let soLuong = arr.filter(n => n >= 10).length;
    inKetQua(`Mảng đã nhập: [${arr.join(', ')}]\nCó ${soLuong} số nguyên lớn hơn hoặc bằng 10.`);
}

// Bài 2: Tìm phần tử lớn nhất và vị trí
function bai2() {
    let arr = nhapMang();
    if (!arr) return;

    // Cú pháp Spread (...) giúp rải các phần tử của mảng vào hàm Math.max
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    
    inKetQua(`Mảng đã nhập: [${arr.join(', ')}]\nPhần tử lớn nhất là ${max}, nằm ở vị trí index = ${index}.`);
}

// Bài 3: Max và Trung bình cộng
function bai3() {
    let arr = nhapMang();
    if (!arr || arr.length === 0) return;

    let max = Math.max(...arr);
    // reduce() dùng để cộng dồn tất cả các phần tử trong mảng
    let tong = arr.reduce((acc, curr) => acc + curr, 0);
    let trungBinh = tong / arr.length;

    inKetQua(`Mảng: [${arr.join(', ')}]\nGiá trị lớn nhất: ${max}\nGiá trị trung bình: ${trungBinh}`);
}

// Bài 4: Đảo ngược mảng
function bai4() {
    let arr = nhapMang();
    if (!arr) return;

    // Lưu ý: reverse() làm thay đổi mảng gốc. 
    // Dùng [...arr] để copy ra một mảng mới trước khi đảo ngược để giữ nguyên mảng cũ in ra đối chiếu.
    let mangDaoNguoc = [...arr].reverse();
    inKetQua(`Mảng ban đầu: [${arr.join(', ')}]\nMảng sau khi đảo ngược: [${mangDaoNguoc.join(', ')}]`);
}

// Bài 5: Đếm số nguyên âm trong một chuỗi
function bai5() {
    let chuoi = prompt("Nhập một chuỗi chứa các số (cách nhau bởi dấu phẩy):", "-1, 2, -4, 5, -9");
    if (!chuoi) return;

    let arr = chuoi.split(',').map(Number).filter(n => !isNaN(n));
    let demAm = arr.filter(n => n < 0).length;

    inKetQua(`Chuỗi đã nhập: "${chuoi}"\nSố lượng số nguyên âm trong chuỗi là: ${demAm}`);
}

// Bài 6: Tìm phần tử V trong mảng
function bai6() {
    let arr = nhapMang();
    if (!arr) return;

    let v = prompt("Nhập số nguyên V cần tìm:");
    if (!v || isNaN(Number(v))) return;
    
    v = Number(v);

    // includes() kiểm tra xem mảng có chứa giá trị V hay không
    if (arr.includes(v)) {
        inKetQua(`Number ${v} is in the array [${arr.join(', ')}]`);
    } else {
        inKetQua(`Number ${v} is not in the array [${arr.join(', ')}]`);
    }
}

// Bài 7: Sắp xếp mảng giảm dần
function bai7() {
    let arr = nhapMang();
    if (!arr) return;

    // sort() với callback function (b - a) để sắp xếp giảm dần
    let mangGiamDan = [...arr].sort((a, b) => b - a);
    inKetQua(`Mảng ban đầu: [${arr.join(', ')}]\nMảng sắp xếp giảm dần: [${mangGiamDan.join(', ')}]`);
}

// Bài 8: Nối mảng a và b vào mảng c
function bai8() {
    let a = nhapMang("Nhập mảng a (10 phần tử):", "1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
    if (!a) return;
    
    let b = nhapMang("Nhập mảng b (10 phần tử):", "11, 12, 13, 14, 15, 16, 17, 18, 19, 20");
    if (!b) return;

    // concat() được sử dụng để nối mảng. Đề yêu cầu nối b và a (b đứng trước)
    let c = b.concat(a);
    
    inKetQua(`Mảng a: [${a.join(', ')}]\nMảng b: [${b.join(', ')}]\n\nMảng c (Nối từ b và a):\n[${c.join(', ')}]`);
}