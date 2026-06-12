//Task 1 : Khai báo biến
let tasks = [];// Mảng để lưu trữ công việc
let autoIncrementId = 1; // Biến để tự động tăng ID công việc
const taskform = document.getElementById("taskForm"); // Biến để lưu trữ form
const taskIdInput = document.getElementById("taskId"); // Biến để lưu trữ input ẩn chứa ID công việc (dùng cho chỉnh sửa)
const taskNameInput = document.getElementById("taskName");// Biến để lưu trữ input Tên công việc
const userInput = document.getElementById("user"); // Biến để lưu trữ input Người thực hiện
const deadlineInput = document.getElementById("deadline"); // Biến để lưu trữ input Deadline
const statusInput = document.getElementById("status"); // Biến để lưu trữ input Trạng thái
const errorName = document.getElementById("errorName"); // Biến để lưu trữ phần hiển thị lỗi Tên công việc
const errorUser = document.getElementById("errorUser"); // Biến để lưu trữ phần hiển thị lỗi Người thực hiện
const errorDeadline = document.getElementById("errorDeadline"); // Biến để lưu trữ phần hiển thị lỗi Deadline
const taskListContainer = document.querySelector(".task-list");// Biến để lưu trữ Danh sách công việc


//Task 2 : Tạo cấu trúc mảng tasks & LocalStorage
function getTasks() {
    const tasks = localStorage.getItem("tasks"); // Lấy dữ liệu từ localStorage
    return tasks ? JSON.parse(tasks) : []; // Nếu có dữ liệu thì parse và trả về, nếu không thì trả về mảng rỗng
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Lưu dữ liệu vào localStorage dưới dạng chuỗi Json
}

//Task 3 : Hiển thị dữ liệu
function renderTasks(tasksToRender = getTasks())
     {
        taskTableBody.innerHTML = ""; // Xóa nội dung cũ trước khi render lại
        tasksToRender.forEach(task => {
            const row = document.createElement("tr"); // Tạo hàng mới
            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td>${task.user}</td>
                <td>${task.deadline}</td>
                <td>${task.status}</td>
                <td></td>
                    <button class="btn-edit" data-id="${task.id}">Sửa</button>
                    <button class="btn-delete" data-id="${task.id}">Xóa</button>
                </td>
            `;
            taskTableBody.appendChild(row);
        });
    }

//Task 4 : Validate dữ liệu đầu vào [20 điểm]
function validateForm() 
{    let isValid = true;
    const today = new Date().toISOString().split("T")[0]; // Lấy ngày hiện tại theo định dạng YYYY-MM-DD

    //Tên công việc: Không được để trống, tối thiểu 5 ký tự.
    if (taskNameInput.value.trim().length < 5) {
        errorName.textContent = "Tên công việc phải có ít nhất 5 ký tự.";
        isValid = false;
    } else {
        errorName.textContent = "";
    }
    //Người thực hiện: Không được để trống.
    if (userInput.value.trim() === "") {
        errorUser.textContent = "Người thực hiện không được để trống.";
        isValid = false;
    } else {
        errorUser.textContent = "";
    }
    //Deadline (Ngày hoàn thành): Phải là một ngày ở tương lai (không được chọn ngày trong quá khứ hoặc ngày hiện tại).
    if (deadlineInput.value === "") {
        errorDeadline.textContent = "Deadline không được để trống.";
        isValid = false;
    } else if (deadlineInput.value < today) {
        errorDeadline.textContent = "Deadline phải là một ngày ở trong tương lai.";
        isValid = false;
    } else {
        errorDeadline.textContent = "";
    }

    //Trạng thái: Mặc định ban đầu là "Chờ làm".
    if (statusInput.value === "") {
        statusInput.value = "Chờ làm"; // Đặt giá trị mặc định là "Chờ làm" nếu chưa chọn
    }

    return isValid; // Trả về true nếu hợp lệ, false nếu không hợp lệ
}

//Task 5 : Thêm công việc mới 
taskform.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)
    if (validateForm()) { // Nếu dữ liệu hợp lệ
        const newTask = {
            id: autoIncrementId++, // Tự động tăng ID  
            name: taskNameInput.value.trim(), // Lấy giá trị Tên công việc
            user: userInput.value.trim(), // Lấy giá trị Người thực hiện
            deadline: deadlineInput.value, // Lấy giá trị Deadline
            status: statusInput.value // Lấy giá trị Trạng thái
        };
        // Thêm công việc mới vào mảng tasks
        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks); // Lưu vào localStorage
        renderTasks(); // Render lại danh sách công việc
        taskform.reset(); // Reset form
    }
});