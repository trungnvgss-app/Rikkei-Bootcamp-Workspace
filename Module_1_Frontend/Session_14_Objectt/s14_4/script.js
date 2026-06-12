// 1. Tạo đối tượng original
let original = {
    name: "Bob",
    age: 30
};

// 2. Sao chép đối tượng original thành đối tượng copy
// CÚ PHÁP ĐÚNG: Sử dụng Spread Operator {...} để tạo ra một vùng nhớ mới hoàn toàn
let copy = { ...original };

/* LƯU Ý QUAN TRỌNG: 
  Không dùng: let copy = original; 
  Vì nếu dùng dấu '=', cả hai sẽ bị dính chung với nhau. Đổi 1 cái là cái kia đổi theo!
*/

// 3. Thay đổi giá trị thuộc tính name của copy thành "Charlie"
copy.name = "Charlie";

// 4. In cả hai đối tượng ra Console để kiểm tra
console.log("Đối tượng Original:", original);
console.log("Đối tượng Copy:", copy);

// 5. In cả hai đối tượng ra màn hình HTML để đối chiếu trực quan
document.getElementById("hienThiOriginal").innerText = JSON.stringify(original, null, 4);
document.getElementById("hienThiCopy").innerText = JSON.stringify(copy, null, 4);