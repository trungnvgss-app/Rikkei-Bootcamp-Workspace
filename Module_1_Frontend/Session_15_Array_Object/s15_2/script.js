// Hàm hỗ trợ in kết quả ra giao diện HTML
function inKetQua(noiDung) {
    document.getElementById("ketQua").innerText = noiDung;
}

// Bài 1: In các ký tự đảo ngược của mảng thành chuỗi liền nhau
function bai1() {
    let arr = ['c', 's', 'c', '2', '6', '1'];
    
    // reverse() đảo ngược mảng
    // join('') ghép các phần tử lại với nhau mà không có khoảng trắng ở giữa
    let ketQuaStr = arr.reverse().join('');
    
    inKetQua(`Mảng ban đầu: ['c', 's', 'c', '2', '6', '1']\n\nChuỗi sau khi đảo ngược và ghép lại: "${ketQuaStr}"`);
}

// Bài 2: Đếm số "ký tự số" trong mảng ký tự
function bai2() {
    let arr = ['a', '1', 'b', '3', 'c', '5', 'x', '9', ' ', 'Z'];
    let count = 0;
    let foundNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra xem ký tự có phải là số không bằng isNaN
        // Lưu ý: isNaN(" ") trả về false (nghĩa là nó coi khoảng trắng là số 0), 
        // nên ta cần điều kiện (arr[i].trim() !== '') để loại bỏ khoảng trắng.
        if (!isNaN(arr[i]) && arr[i].trim() !== '') {
            count++;
            foundNumbers.push(arr[i]);
        }
    }

    inKetQua(`Mảng ký tự: [ ${arr.map(c => `'${c}'`).join(', ')} ]\n\nSố lượng "ký tự số" trong mảng là: ${count} \n(Bao gồm các ký tự: ${foundNumbers.join(', ')})`);
}

// Bài 3: Đếm số ký tự trong một chuỗi
function bai3() {
    let chuoi = prompt("Nhập vào một chuỗi bất kỳ để đếm số ký tự:", "Xin chao JavaScript");
    
    if (chuoi !== null) {
        // Thuộc tính .length đếm tổng số ký tự (bao gồm cả dấu cách, dấu chấm...)
        let soKyTu = chuoi.length;
        inKetQua(`Chuỗi bạn vừa nhập: "${chuoi}"\n\nTổng số ký tự trong chuỗi (tính cả khoảng trắng): ${soKyTu}`);
    }
}

// Bài 4: Kiểm tra hai chuỗi có giống nhau hay không
function bai4() {
    let chuoi1 = prompt("Nhập vào chuỗi thứ NHẤT:");
    if (chuoi1 === null) return;
    
    let chuoi2 =