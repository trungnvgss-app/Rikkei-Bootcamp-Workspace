// 1. Tạo đối tượng car với các thuộc tính ban đầu
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// 2. Thêm một thuộc tính mới là color với giá trị "red"
// Vì thuộc tính 'color' chưa tồn tại, JavaScript sẽ tự động tạo mới nó.
car.color = "red";

// 3. Cập nhật giá trị của thuộc tính year thành 2022
// Vì thuộc tính 'year' đã tồn tại, JavaScript sẽ ghi đè giá trị cũ (2020) bằng giá trị mới (2022).
car.year = 2022;

// 4. In đối tượng ra Console (chuẩn dành cho Developer)
console.log("Đối tượng car sau khi cập nhật: ", car);

// 5. In đối tượng ra màn hình HTML (để bạn dễ quan sát ngay trên trang web)
// Sử dụng JSON.stringify(đối_tượng, null, 4) để chuyển Object thành chuỗi có định dạng thụt lề 4 ô cho đẹp mắt
document.getElementById("ketQuaHienThi").innerText = JSON.stringify(car, null, 4);