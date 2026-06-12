// Khởi tạo mảng rỗng để lưu trữ danh sách các đối tượng sinh viên
let students = [];

// Chức năng 1: Thêm sinh viên mới
function addStudent() {
    // Lấy dữ liệu từ các ô input
    let id = document.getElementById("studentId").value.trim();
    let name = document.getElementById("studentName").value.trim();
    let age = document.getElementById("studentAge").value.trim();

    // Kiểm tra xem người dùng đã nhập đủ chưa
    if (!id || !name || !age) {
        alert("Vui lòng nhập đầy đủ thông tin: ID, Tên và Tuổi!");
        return;
    }

    // Kiểm tra ID có bị trùng lặp không (Dùng phương thức some để duyệt mảng)
    let isIdExist = students.some(function(student) {
        return student.id === id;
    });

    if (isIdExist) {
        alert("Lỗi: Mã sinh viên (ID) này đã tồn tại!");
        return;
    }

    // Tạo một đối tượng sinh viên mới
    let newStudent = {
        id: id,
        name: name,
        age: Number(age)
    };

    // Đẩy đối tượng sinh viên vào mảng students
    students.push(newStudent);

    // Xóa rỗng các ô input để tiện nhập người tiếp theo
    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";

    // Cập nhật lại danh sách hiển thị
    displayStudents();
}

// Chức năng 2: Duyệt mảng và hiển thị danh sách sinh viên
function displayStudents() {
    let tbody = document.getElementById("studentList");
    
    // Xóa toàn bộ nội dung cũ trong bảng trước khi render lại
    tbody.innerHTML = ""; 

    // Dùng vòng lặp for duyệt qua mảng đối tượng
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        
        // Cấu trúc HTML của một hàng trong bảng
        let row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
        </tr>`;
        
        // Cộng dồn hàng đó vào tbody
        tbody.innerHTML += row;
    }
}

// Chức năng 3: Xóa sinh viên theo ID
function deleteStudent() {
    let deleteId = document.getElementById("deleteId").value.trim();

    if (!deleteId) {
        alert("Vui lòng nhập ID sinh viên cần xóa!");
        return;
    }

    // Tìm VỊ TRÍ (index) của đối tượng sinh viên trong mảng dựa vào ID
    let index = students.findIndex(function(student) {
        return student.id === deleteId;
    });

    // Nếu tìm thấy (index sẽ trả về giá trị từ 0 trở lên)
    if (index !== -1) {
        // Sử dụng splice() để xóa 1 đối tượng tại vị trí index
        students.splice(index, 1); 
        alert("Đã xóa sinh viên thành công!");
        
        // Xóa ô nhập liệu ID xóa
        document.getElementById("deleteId").value = "";
        
        // Render lại bảng sau khi mảng bị thay đổi
        displayStudents(); 
    } else {
        // Nếu không tìm thấy (index trả về -1)
        alert("Lỗi: Không tìm thấy sinh viên nào có ID = " + deleteId);
    }
}