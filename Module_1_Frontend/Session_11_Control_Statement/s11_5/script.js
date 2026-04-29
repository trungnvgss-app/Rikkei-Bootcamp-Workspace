//Tính chỉ số cân nặng cơ thể :
//Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe dựa trên cân nặng và chiều cao. Nó được tính bằng cách lấy cân nặng đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét. Công thức:
// BMI = cân nặng (kg) / (chiều cao (m))^2
// Chỉ số BMI đối với người trên 20 tuổi được phân loại và diễn giải theo bảng sau:
//Thực hiện cho người dùng nhập vào cân nặng, chiều cao và tính toán và in ra màn hình phân loại bằng alert()

// Yêu cầu người dùng nhập liệu

let canNang = parseFloat(prompt("Nhập cân nặng của bạn (kg):")); // Chuyển đổi cân nặng từ kg sang kg nếu người dùng nhập bằng g
let chieuCao = parseFloat(prompt("Nhập chiều cao của bạn (m - ví dụ: 1.75):")); // Chuyển đổi chiều cao từ cm sang m nếu người dùng nhập bằng cm
if (chieuCao > 3) {
  // Nếu người dùng nhập chiều cao lớn hơn 3, giả sử họ nhập bằng cm và chuyển đổi sang m
  chieuCao = chieuCao / 100;
}

// Kiểm tra tính hợp lệ của dữ liệu
if (isNaN(canNang) || isNaN(chieuCao) || canNang <= 0 || chieuCao <= 0) {
  alert("Dữ liệu nhập không hợp lệ. Vui lòng thử lại!");
  console.log(
    "Dữ liệu nhập không hợp lệ: canNang = " +
      canNang +
      ", chieuCao = " +
      chieuCao,
  );
  document.write("Dữ liệu nhập không hợp lệ. Vui lòng thử lại!");
} else {
  // Tính toán BMI
  let bmi = canNang / (chieuCao * chieuCao);
  let phanLoai = "";

  // Phân loại dựa trên chuẩn WHO
  if (bmi < 18.5) {
    phanLoai = "Cân nặng thấp (gầy)";
  } else if (bmi < 25) {
    // Bao gồm từ 18.5 đến 24.9
    phanLoai = "Bình thường";
  } else if (bmi < 30) {
    // Bao gồm từ 25 đến 29.9
    phanLoai = "Tiền béo phì";
  } else if (bmi < 35) {
    // Bao gồm từ 30 đến 34.9
    phanLoai = "Béo phì độ I";
  } else if (bmi < 40) {
    // Bao gồm từ 35 đến 39.9
    phanLoai = "Béo phì độ II";
  } else {
    // Lớn hơn hoặc bằng 40
    phanLoai = "Béo phì độ III";
  }

  // In ra màn hình bằng alert
  alert(
    "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "\nPhân loại: " + phanLoai,
  );
  console.log(
    "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + ", Phân loại: " + phanLoai,
  );
  document.write(
    "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br>Phân loại: " + phanLoai,
  );
}
