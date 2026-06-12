// 1. Khai báo các mảng dữ liệu có sẵn từ đề bài
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9];

// 2. Xây dựng hàm tính tổng nhận vào tham số là một mảng
function calculateSum(array) {
    // Sử dụng phương thức reduce() của mảng
    // - pre (previousValue): Giá trị tích lũy từ các vòng lặp trước
    // - current (currentValue): Giá trị của phần tử hiện tại đang duyệt
    // - 0: Là giá trị khởi tạo ban đầu cho biến 'pre'
    let sum = array.reduce((pre, current) => pre + current, 0);
    
    // Trả về tổng đã tính được
    return sum;
}

// 3. Gọi hàm để tính tổng cho từng mảng
let sum1 = calculateSum(arr1);
let sum2 = calculateSum(arr2);
let sum3 = calculateSum(arr3);

// 4. Trình bày và in kết quả ra HTML
let htmlContent = "";

htmlContent += `Tổng của <span class="array-text">arr1</span> [${arr1.join(', ')}] là: <strong>${sum1}</strong> <br>`;
htmlContent += `Tổng của <span class="array-text">arr2</span> [${arr2.join(', ')}] là: <strong>${sum2}</strong> <br>`;
htmlContent += `Tổng của <span class="array-text">arr3</span> [${arr3.join(', ')}] là: <strong>${sum3}</strong> <br>`;

// Chèn chuỗi kết quả vào thẻ div bên giao diện
document.getElementById("ketQuaHienThi").innerHTML = htmlContent;

// Mở rộng: In thêm ra Console để kiểm tra chuẩn như một Developer
console.log("Tổng arr1:", sum1);
console.log("Tổng arr2:", sum2);
console.log("Tổng arr3:", sum3);