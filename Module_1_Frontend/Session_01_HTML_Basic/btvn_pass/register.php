<?php // Bắt đầu file PHP, chỉ chứa logic server-side xử lý đăng ký
// ===== 1. KẾT NỐI DATABASE ===== (khởi tạo tham số để kết nối SQL)
$servername = "localhost"; // máy chủ database
$username_db = "root"; // user database
$password_db = ""; // mật khẩu database
$dbname = "mydatabase"; // tên database đang sử dụng

// Tạo kết nối tới MySQL bằng mysqli
$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error); // Dừng script nếu lỗi kết nối
}

// ===== 2. KIỂM TRA REQUEST ===== (chỉ xử lý khi form gửi bằng POST)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // ===== 3. LẤY DỮ LIỆU ===== (lấy username + password từ input form)
    $username = trim($_POST['username']); // trim loại khoảng trắng thừa
    $password = trim($_POST['password']);

    // ===== 4. VALIDATE ===== (kiểm tra dữ liệu bắt buộc không rỗng)
    if (empty($username) || empty($password)) {
        echo "Vui lòng nhập đầy đủ thông tin!";
        exit(); // dừng xử lý nếu thiếu dữ liệu
    }

    // ===== 5. KIỂM TRA USERNAME TỒN TẠI =====
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?"); // query chuẩn bị
    $stmt->bind_param("s", $username); // bind slug 1 tham số string
    $stmt->execute(); // thực thi truy vấn
    $stmt->store_result(); // lưu tạm kết quả để lấy số bản ghi

    if ($stmt->num_rows > 0) {
        echo "Username đã tồn tại!";
        $stmt->close();
        exit(); // dừng nếu username trùng
    }
    $stmt->close();

    // ===== 6. MÃ HÓA PASSWORD ===== (bảo mật password trước khi lưu)
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // ===== 7. INSERT USER ===== (chèn user mới vào database)
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashed_password);

    if ($stmt->execute()) {
        echo "Đăng ký thành công!";
    } else {
        echo "Lỗi: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close(); // đóng kết nối sau khi xong
?>