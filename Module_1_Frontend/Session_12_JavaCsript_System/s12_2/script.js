//Bài 1: Chuyển từ độ C sang độ F.
//Bài 2: Chuyển từ mét sang feet
//Bài 3: Tính diện tích hình vuông khi biết cạnh a.
//Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
//Bài 6: Tính diện tích hình tròn khi biết bán kính r.
//Bài 6: Giải phương trình bậc 1.
//Bài 7: Giải phương trình bậc 2.
//Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.

function calculateAll() {
    // Hàm hỗ trợ lấy giá trị từ ô input
    const getValue = (id) => parseFloat(document.getElementById(id).value);

    // ----- BÀI 1: Độ C sang độ F (F = C * 9/5 + 32) -----
    let c = getValue("c1");
    let res1 = isNaN(c) ? "Chưa nhập dữ liệu." : `${c}°C = ${(c * 9/5 + 32).toFixed(2)}°F`;

    // ----- BÀI 2: Mét sang feet (1m ≈ 3.28084 ft) -----
    let m = getValue("m2");
    let res2 = isNaN(m) ? "Chưa nhập dữ liệu." : `${m}m = ${(m * 3.28084).toFixed(4)} feet`;

    // ----- BÀI 3: Diện tích hình vuông (S = a^2) -----
    let a3 = getValue("a3");
    let res3 = isNaN(a3) ? "Chưa nhập dữ liệu." : (a3 > 0 ? `Diện tích = ${a3 * a3}` : "Lỗi: Cạnh phải lớn hơn 0.");

    // ----- BÀI 4: Diện tích hình chữ nhật (S = a * b) -----
    let a4 = getValue("a4");
    let b4 = getValue("b4");
    let res4 = (isNaN(a4) || isNaN(b4)) ? "Chưa nhập đủ 2 cạnh." : ((a4 > 0 && b4 > 0) ? `Diện tích = ${a4 * b4}` : "Lỗi: Các cạnh phải lớn hơn 0.");

    // ----- BÀI 5: Diện tích tam giác vuông (S = 1/2 * a * b) -----
    let a5 = getValue("a5");
    let b5 = getValue("b5");
    let res5 = (isNaN(a5) || isNaN(b5)) ? "Chưa nhập đủ 2 cạnh." : ((a5 > 0 && b5 > 0) ? `Diện tích = ${(a5 * b5) / 2}` : "Lỗi: Các cạnh phải lớn hơn 0.");

    // ----- BÀI 6: Giải phương trình bậc 1 (ax + b = 0) -----
    let a6 = getValue("a6");
    let b6 = getValue("b6");
    let res6 = "";
    if (isNaN(a6) || isNaN(b6)) {
        res6 = "Chưa nhập đủ hệ số a và b.";
    } else {
        if (a6 === 0) {
            res6 = (b6 === 0) ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.";
        } else {
            res6 = `Phương trình có nghiệm x = ${(-b6 / a6).toFixed(2)}`;
        }
    }

    // ----- BÀI 7: Giải phương trình bậc 2 (ax^2 + bx + c = 0) -----
    let a7 = getValue("a7");
    let b7 = getValue("b7");
    let c7 = getValue("c7");
    let res7 = "";
    if (isNaN(a7) || isNaN(b7) || isNaN(c7)) {
        res7 = "Chưa nhập đủ hệ số a, b và c.";
    } else {
        if (a7 === 0) {
            // Rơi về phương trình bậc 1: bx + c = 0
            if (b7 === 0) {
                res7 = (c7 === 0) ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.";
            } else {
                res7 = `(a=0 nên là PT bậc 1) Nghiệm x = ${(-c7 / b7).toFixed(2)}`;
            }
        } else {
            let delta = (b7 * b7) - (4 * a7 * c7);
            if (delta < 0) {
                res7 = "Phương trình vô nghiệm.";
            } else if (delta === 0) {
                res7 = `Phương trình có nghiệm kép x1 = x2 = ${(-b7 / (2 * a7)).toFixed(2)}`;
            } else {
                let x1 = (-b7 + Math.sqrt(delta)) / (2 * a7);
                let x2 = (-b7 - Math.sqrt(delta)) / (2 * a7);
                res7 = `Phương trình có 2 nghiệm phân biệt: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
            }
        }
    }

    // ----- BÀI 8: Kiểm tra tuổi (0 < tuổi < 120, và là số nguyên) -----
    let age8 = getValue("age8");
    let res8 = "";
    if (isNaN(age8)) {
        res8 = "Chưa nhập dữ liệu.";
    } else {
        // Kiểm tra xem số nhập vào có phải số nguyên không
        if (Number.isInteger(age8)) {
            if (age8 > 0 && age8 < 120) {
                res8 = `Hợp lệ! ${age8} là tuổi của một người.`;
            } else {
                res8 = `Không hợp lệ! Độ tuổi phải lớn hơn 0 và nhỏ hơn 120.`;
            }
        } else {
            res8 = `Không hợp lệ! Tuổi phải là một số nguyên.`;
        }
    }

    // ----- XUẤT KẾT QUẢ ĐỒNG LOẠT RA MÀN HÌNH -----
    let finalOutput = `Bài 1: Kết quả: ${res1}\n` +
                      `Bài 2: Kết quả: ${res2}\n` +
                      `Bài 3: Kết quả: ${res3}\n` +
                      `Bài 4: Kết quả: ${res4}\n` +
                      `Bài 5: Kết quả: ${res5}\n` +
                      `Bài 6: Kết quả: ${res6}\n` +
                      `Bài 7: Kết quả: ${res7}\n` +
                      `Bài 8: Kết quả: ${res8}`;

    document.getElementById("result").innerText = finalOutput;
}