//Luyện tập cấu trúc Switch / Case : Xây dựng một ứng dụng cho phép người dùng nhập vào 1 số từ 0 -> 9 và hiển thị cách đọc của số đó ra màn hình . Ví dụ người dùng nhập số 1 thì hiển thị là “Số Một”.
//Sử dụng prompt() để nhập thông tin
//Dùng alert() để thông báo cho người dùng
let number = parseInt(prompt("Nhập một số từ 0 -> 9:"));

switch (number) {
  case 0:
    alert("Số Không");
    break;
  case 1:
    alert("Số Một");
    break;
  case 2:
    alert("Số Hai");
    break;
  case 3:
    alert("Số Ba");
    break;
  case 4:
    alert("Số Bốn");
    break;
  case 5:
    alert("Số Năm");
    break;
  case 6:
    alert("Số Sáu");
    break;
  case 7:
    alert("Số Bảy");
    break;
  case 8:
    alert("Số Tám");
    break;
  case 9:
    alert("Số Chín");
    break;
  default:
    alert("Bạn đã nhập sai!");
}
console.log("Bạn đã nhập số: " + number);
document.write("Bạn đã nhập số: " + number);
alert("Bạn đã nhập số: " + number);
