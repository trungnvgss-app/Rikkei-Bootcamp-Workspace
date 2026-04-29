let firstNumber = Number(prompt("Số tiền USD là:"));
const exchangeRate = 25000;
const product = firstNumber * exchangeRate;
console.log(
  "Tích của " + firstNumber + " và " + exchangeRate + " là: " + product,
);
document.write(
  "Tích của " + firstNumber + " và " + exchangeRate + " là: " + product,
  "<br>",
);
alert("Tích của " + firstNumber + " và " + exchangeRate + " là: " + product);
