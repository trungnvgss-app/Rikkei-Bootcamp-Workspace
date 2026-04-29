// Bước 1: Yêu cầu người dùng nhập vào 2 số a và b
let a = parseFloat(prompt("Mời bạn nhập vào số a")); // Chuyển đổi chuỗi nhập vào thành số thực (float)
let b = parseFloat(prompt("Mời bạn nhập vào số b")); // Chuyển đổi chuỗi nhập vào thành số thực (float)

// Bước 2: Yêu cầu nhập phép tính
let phepTinh = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

let ketQua;
let hopLe = true;

// Kiểm tra xem người dùng có nhập đúng định dạng số không
if (isNaN(a) || isNaN(b)) {
  alert("Dữ liệu nhập không hợp lệ. Vui lòng nhập số!");
  hopLe = false;
} else {
  // Bước 3: Xử lý tính toán dựa trên toán tử được nhập
  switch (phepTinh) {
    case "+":
      ketQua = a + b;
      break;
    case "-":
      ketQua = a - b;
      break;
    case "*":
      ketQua = a * b;
      break;
    case "/":
      if (b !== 0) {
        ketQua = a / b;
      } else {
        alert("Lỗi: Không thể chia cho 0!");
        hopLe = false;
      }
      break;
    default:
      alert("Phép tính không hợp lệ! Vui lòng chỉ nhập +, -, *, hoặc /.");
      hopLe = false;
      break;
  }
}

// Bước 4: Hiển thị kết quả bằng alert() nếu mọi thứ hợp lệ
if (hopLe) {
  alert(
    "Kết quả của phép tính trên: " +
      a +
      " " +
      phepTinh +
      " " +
      b +
      " = " +
      ketQua,
  );
  console.log(
    "Kết quả của phép tính trên: " +
      a +
      " " +
      phepTinh +
      " " +
      b +
      " = " +
      ketQua,
  );
  document.write(
    "Kết quả của phép tính trên: " +
      a +
      " " +
      phepTinh +
      " " +
      b +
      " = " +
      ketQua,
  );
}
