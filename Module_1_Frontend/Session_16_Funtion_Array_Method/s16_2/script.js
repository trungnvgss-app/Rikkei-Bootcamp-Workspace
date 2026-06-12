// 1. Xây dựng hàm nhận vào 1 tham số là mảng
function timGiaTriNhoNhat(arr) {
    // Xử lý trường hợp ngoại lệ: Nếu mảng rỗng (không có phần tử nào)
    if (arr.length === 0) {
        return "Mảng rỗng (Không có giá trị)";
    }

    // Đặt phần tử đầu tiên làm giá trị nhỏ nhất mặc định ban đầu
    let min = arr[0];

    // Sử dụng vòng lặp for chạy từ phần tử thứ 2 (index = 1) đến hết mảng
    for (let i = 1; i < arr.length; i++) {
        // Nếu tìm thấy phần tử nào nhỏ hơn min hiện tại, cập nhật lại min
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Trả về kết quả
    return min;
}

// 2. Các mảng dữ liệu có sẵn từ đề bài
const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

// 3. Gọi hàm và lấy kết quả hiển thị ra HTML
let htmlContent = "";

htmlContent += `Mảng <span class="array-text">arr1</span>: Giá trị nhỏ nhất là <strong>${timGiaTriNhoNhat(arr1)}</strong> <br>`;
htmlContent += `Mảng <span class="array-text">arr2</span>: Giá trị nhỏ nhất là <strong>${timGiaTriNhoNhat(arr2)}</strong> <br>`;
htmlContent += `Mảng <span class="array-text">arr3</span>: Giá trị nhỏ nhất là <strong>${timGiaTriNhoNhat(arr3)}</strong> <br>`;
htmlContent += `Mảng <span class="array-text">arr4</span>: Giá trị nhỏ nhất là <strong>${timGiaTriNhoNhat(arr4)}</strong> <br>`;

// Chèn chuỗi kết quả vào thẻ div bên giao diện
document.getElementById("ketQuaHienThi").innerHTML = htmlContent;

// Mở rộng: In thêm ra Console để kiểm tra thử
console.log("Min của arr1:", timGiaTriNhoNhat(arr1));
console.log("Min của arr2:", timGiaTriNhoNhat(arr2));
console.log("Min của arr3:", timGiaTriNhoNhat(arr3));
console.log("Min của arr4:", timGiaTriNhoNhat(arr4));