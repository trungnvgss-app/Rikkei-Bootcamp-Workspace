//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không và hiển thị ra thông báo bằng console hoặc alert
//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10 và hiển thị ra thông báo bằng console hoặc alert.
//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ (Xuất Sắc, Giỏi, Khá, Trung Bình, Yếu)

function calculateAll() {
    // ----- BÀI 1 -----
    let a = parseFloat(document.getElementById("a1").value);
    let b = parseFloat(document.getElementById("b1").value);
    let res1 = "";
    if (isNaN(a) || isNaN(b)) {
        res1 = "Vui lòng nhập đủ 2 số.";
    } else if (b === 0) {
        res1 = "Lỗi: Không thể chia cho 0.";
    } else {
        res1 = (a % b === 0) ? `Số ${a} chia hết cho ${b}.` : `Số ${a} không chia hết cho ${b}.`;
        console.log("Thông báo Bài 1:", res1);
    }

    // ----- BÀI 2 -----
    let age = parseInt(document.getElementById("age2").value);
    let res2 = "";
    if (isNaN(age)) {
        res2 = "Vui lòng nhập tuổi.";
    } else {
        res2 = (age < 15) ? `Học sinh ${age} tuổi KHÔNG đủ điều kiện vào học lớp 10.` : `Học sinh ${age} tuổi ĐỦ điều kiện vào học lớp 10.`;
        console.log("Thông báo Bài 2:", res2);
    }

    // ----- BÀI 3 -----
    let num = parseInt(document.getElementById("num3").value);
    let res3 = "";
    if (isNaN(num)) {
        res3 = "Vui lòng nhập số nguyên.";
    } else {
        if (num > 0) res3 = `Số ${num} lớn hơn 0.`;
        else if (num < 0) res3 = `Số ${num} nhỏ hơn 0.`;
        else res3 = `Số này bằng 0.`;
    }

    // ----- BÀI 4 -----
    let x = parseInt(document.getElementById("x4").value);
    let y = parseInt(document.getElementById("y4").value);
    let z = parseInt(document.getElementById("z4").value);
    let res4 = "";
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        res4 = "Vui lòng nhập đủ 3 số nguyên.";
    } else {
        let max = Math.max(x, y, z);
        res4 = `Giá trị lớn nhất trong (${x}, ${y}, ${z}) là ${max}.`;
    }

    // ----- BÀI 5 -----
    let test = parseFloat(document.getElementById("test5").value);
    let mid = parseFloat(document.getElementById("mid5").value);
    let final = parseFloat(document.getElementById("final5").value);
    let res5 = "";
    
    if (isNaN(test) || isNaN(mid) || isNaN(final)) {
        res5 = "Vui lòng nhập đủ 3 cột điểm.";
    } else {
        let avg = (test + (mid * 2) + (final * 3)) / 6; 
        let rank = "";
        
        if (avg >= 9.0) rank = "Xuất Sắc";
        else if (avg >= 8.0) rank = "Giỏi";
        else if (avg >= 6.5) rank = "Khá";
        else if (avg >= 5.0) rank = "Trung Bình";
        else rank = "Yếu";

        res5 = `ĐTB: ${avg.toFixed(1)} - Xếp hạng: ${rank}.`;
    }

    // ----- XUẤT KẾT QUẢ ĐỒNG LOẠT RA MÀN HÌNH -----
    let finalOutput = `Bài 1: Kết quả ${res1}\n` +
                      `Bài 2: Kết quả ${res2}\n` +
                      `Bài 3: Kết quả ${res3}\n` +
                      `Bài 4: Kết quả ${res4}\n` +
                      `Bài 5: Kết quả ${res5}`;

    document.getElementById("result").innerText = finalOutput;
}