//(Trong phần này, chúng ta sẽ phát triển một ứng dụng nhằm kiểm tra xem một năm có phải là năm nhuận hay không.
//Ứng dụng cho phép người dùng nhập vào một năm, sau đó sẽ đưa ra thông báo là năm đó là năm nhuận hay không phải là năm nhuận.
//Năm nhuận là một năm đặc biệt, được cộng thêm một ngày để giữ cho lịch được đồng bộ với lịch thiên văn.
//Cách xác định năm nhuận: Những năm chia hết cho 4 là năm nhuận, ngoại trừ những năm chia hết cho 100 mà không chia hết cho 400.
//Từ đó, có thể rút gọn thành các quy tắc xác định năm nhuận:
//Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận
//Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận
//Những năm chia hết đồng thời cho 100 và 400 là năm nhuận)

let year = Number(prompt("Nhập vào một năm:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " là năm nhuận.");
  document.write(year + " là năm nhuận.");
  alert(year + " là năm nhuận.");
} else {
  console.log(year + " không phải là năm nhuận.");
  document.write(year + " không phải là năm nhuận.");
  alert(year + " không phải là năm nhuận.");
}

//year % 4 === 0: Kiểm tra xem năm có chia hết cho 4 hay không.
//year % 100 !== 0: Kiểm tra xem năm có chia hết cho 100 hay không. Nếu không chia hết, thì nó là một năm nhuận theo quy tắc thứ nhất.
//(year % 400 === 0): Kiểm tra xem năm có chia hết cho 400 hay không. Nếu chia hết, thì nó luôn là một năm nhuận.
