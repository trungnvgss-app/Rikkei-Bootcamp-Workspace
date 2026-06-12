// Hàm đánh giá giá trị và trả về kết quả
function processConfirm(answer) {
    let result = "";
    
    // Nếu answer là true (người dùng chọn OK)
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } 
    // Nếu answer là false (người dùng chọn Cancel)
    else {
        result = "Maybe later then.";
    }
    
    // Trả về biến result cho hàm gọi
    return result;
}

// Hàm kích hoạt khi người dùng nhấn nút trên HTML
function goiHamXacNhan() {
    // Hiển thị hộp thoại confirm và lưu kết quả (true/false) vào biến userAnswer
    let userAnswer = confirm("Do you want to play a game?");
    
    // Gọi hàm processConfirm, truyền vào userAnswer và nhận lại chuỗi kết quả
    let finalResult = processConfirm(userAnswer);
    
    // In kết quả nhận được ra màn hình
    document.getElementById("ketQua").innerText = finalResult;
}