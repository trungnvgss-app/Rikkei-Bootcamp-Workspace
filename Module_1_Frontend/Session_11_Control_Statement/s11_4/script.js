//Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 1 đến 5.
for (let i = 1; i <= 5; i++) {
  console.log(
    `The number is ${i}`,
  ); /*Sử dụng console.log() để in ra chuỗi "The number is N" với giá trị của i từ 1 đến 5. */
}
document.write(
  `The number is ${i}<br>`,
); /*Sử dụng document.write() để hiển thị chuỗi "The number is N" trên trang web, với giá trị của i từ 1 đến 5. Thêm <br> để xuống dòng sau mỗi lần hiển thị. */
alert(
  `The number is ${i}`,
); /*Sử dụng alert() để hiển thị một hộp thoại thông báo với chuỗi "The number is N", với giá trị của i từ 1 đến 5.*/

//" Trong JavaScript, ${} là một tính năng của template literals (chuỗi mẫu), được giới thiệu trong ECMAScript 2015 (ES6). Tính năng này cho phép bạn chèn giá trị biểu thức vào chuỗi bằng cách sử dụng cặp dấu backtick (`) xung quanh chuỗi và biểu thức được bao quanh ${}.

//Ví dụ:

//Javascript

//Apply
//let i = 3;
//console.log(`The number is ${i}`);
//Trong ví dụ trên, ${i} sẽ được thay thế bằng giá trị của biến i, kết quả cuối cùng là "The number is 3".

//Nếu bạn viết mã như sau:

//Javascript

//Apply
//for (let i = 0; i <= 5; i++) {
//    console.log("The number is " + i);
//}
//Đoạn mã trên sẽ hoạt động bình thường, nhưng nếu bạn muốn sử dụng template literals để làm việc này, nó sẽ trông như sau:

//Javascript

//Apply
//for (let i = 0; i <= 5; i++) {
//    console.log(`The number is ${i}`);
//}
//Trong trường hợp ${i}, $ là phần bắt đầu của biểu thức được chèn vào chuỗi.""
