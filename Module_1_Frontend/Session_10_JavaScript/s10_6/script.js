//Trong phần này, chúng ta sẽ khai báo 3 biến đại diện cho điểm các môn học ở đây là 3 môn học là (math, physics, chemistry), thực hiện tính điểm trung bình 3 môn học trên và hiển thị lên màn hình
let math = Number(prompt("Nhập điểm môn Toán:"));
let physics = Number(prompt("Nhập điểm môn Lý:"));
let chemistry = Number(prompt("Nhập điểm môn Hóa:"));
let average = (math + physics + chemistry) / 3;
console.log("Điểm trung bình của Toán, Lý, Hóa là: " + average.toFixed(2));
document.write(
  "Điểm trung bình của Toán, Lý, Hóa là: " + average.toFixed(2),
  "<br>",
);
alert("Điểm trung bình của Toán, Lý, Hóa là: " + average.toFixed(2));
