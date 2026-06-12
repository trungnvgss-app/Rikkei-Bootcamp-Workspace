// 1. Tạo đối tượng book với các thuộc tính ban đầu theo yêu cầu
let book = {
    title: "JavaScript Basics",
    author: "John Smith",
    page: 200
};

// Hiển thị trạng thái ban đầu ra màn hình và Console để tiện so sánh
document.getElementById("truocKhiXoa").innerText = JSON.stringify(book, null, 4);
console.log("Đối tượng book ban đầu:", book);

// -----------------------------------------------------
// 2. YÊU CẦU CỦA ĐỀ BÀI: Xóa thuộc tính 'page'
// Sử dụng toán tử 'delete' để xóa một thuộc tính khỏi đối tượng
delete book.page;
// -----------------------------------------------------

// 3. In ra đối tượng sau khi đã xóa thuộc tính
// Hiển thị lên giao diện web
document.getElementById("sauKhiXoa").innerText = JSON.stringify(book, null, 4);

// Hiển thị ra Console theo đúng chuẩn
console.log("Đối tượng book sau khi xóa thuộc tính 'page':", book);