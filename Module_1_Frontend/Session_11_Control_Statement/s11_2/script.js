//Sử dụng cấu trúc if…else, viết chương trình nhập vào một chuỗi câu trả lời cho câu hỏi “What is the “official” name of JavaScript?”. Nếu câu trả lời nhập vào là “ECMAScript”, thì hiển thị thông báo: “Right!”, ngược lại hiển thị thông báo: “Didn’t know? ECMAScript!”
//Sử dụng prompt() để nhập thông tin
//Dùng alert() để thông báo cho người dùng\
let answer = prompt("What is the “official” name of JavaScript?");

if (answer === "ECMAScript") {
  alert("Right!");
  console.log("Right!");
  document.write("Right!");
} else {
  alert("Didn’t know? ECMAScript!");
  console.log("Didn’t know? ECMAScript!");
  document.write("Didn’t know? ECMAScript!");
}
