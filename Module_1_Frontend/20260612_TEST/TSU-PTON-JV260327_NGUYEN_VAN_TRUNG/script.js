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
    event.preventDefault() // Ngăn chặn hành vi mặc định của form (tải lại trang)
    if (validateForm()) { // Nếu dữ liệu hợp lệ
        const tasks = getTasks(); // Lấy danh sách công việc hiện tại
        const updateTask = taskIdInput.value !== "" ? {
        //Nút "Lưu công việc" chuyển thành "Cập nhật". Khi nhấn "Cập nhật", tiến hành lưu các thay đổi vào mảng tasks và hiển thị lại dữ liệu mới trên bảng.
    if (updateTask) {  
        const index = tasks.findIndex(task => task.id === parseInt(taskIdInput.value)); // Tìm vị trí công việc cần cập nhật trong mảng
        if (index !== -1) { // Nếu tìm thấy công việc cần cập nhật
                       tasks[index].name = taskNameInput.value.trim();// Cập nhật tên công việc
                       tasks[index].user = userInput.value.trim(); // Cập nhật người thực hiện
                       tasks[index].deadline = deadlineInput.value; // Cập nhật deadline
                       tasks[index].status = statusInput.value; // Cập nhật trạng thái
                       saveTasks(tasks); // Lưu lại danh sách công việc sau khi cập nhật

            else { // Nếu không tìm thấy công việc cần cập nhật (trường hợp này hiếm khi xảy ra vì ID được lấy từ input ẩn)
                const newTask = {
                    id: autoIncrementId++, // Tự động tăng ID cho công việc mới
                    name: taskNameInput.value.trim(), // Lấy tên công việc từ input và loại bỏ khoảng trắng thừa
                    user: userInput.value.trim(), // Lấy người thực hiện từ input và loại bỏ khoảng trắng thừa
                    deadline: deadlineInput.value, // Lấy deadline từ input
                    status: statusInput.value || "Chờ làm" // Lấy trạng thái từ input hoặc đặt giá trị mặc định "Chờ làm" nếu chưa chọn
                };
                tasks.push(newTask); // Thêm công việc mới vào mảng
                saveTasks(tasks); // Lưu lại danh sách công việc sau khi thêm
                renderTasks(); // Hiển thị lại danh sách công việc sau khi thêm mới
                }
            }
        }
    }

    //Task 6 : Chức năng Sửa & Cập nhật dữ liệu
        funtion editTask(id) {
            const tasks = getTasks(); // Lấy danh sách công việc hiện tại
            const taskToEdit = tasks.find(task => task.id === id); // Tìm công việc cần sửa theo ID
            if (taskToEdit) { // Nếu tìm thấy công việc cần sửa
                taskIdInput.value = taskToEdit.id; // Đặt giá trị ID vào input ẩn để biết đang sửa công việc nào
                taskNameInput.value = taskToEdit.name; // Điền tên công việc vào input để người dùng có thể chỉnh sửa
                userInput.value = taskToEdit.user; // Điền người thực hiện vào input để người dùng có thể chỉnh sửa
                deadlineInput.value = taskToEdit.deadline; // Điền deadline vào input để người dùng có thể chỉnh sửa
                statusInput.value = taskToEdit.status; // Điền trạng thái vào input để người dùng có thể chỉnh sửa
                buttonSubmit.textContent = "Cập nhật"; // Đổi tên nút từ "Lưu công việc" thành "Cập nhật"


            }
        }
    
    }
//Task 7 : Chức năng Xóa dữ liệu
function deleteTask(id) {
    const tasks = getTasks(); // Lấy danh sách công việc hiện tại
    const updatedTasks = tasks.filter(task => task.id !== id); // Tạo một mảng mới chỉ chứa các công việc có ID khác với ID cần xóa
    saveTasks(updatedTasks); // Lưu lại danh sách công việc sau khi xóa
    renderTasks(); // Hiển thị lại danh sách công việc sau khi xóa
}   

//Task 8 : Chức năng Tìm kiếm
function searchTasks(keyword) {
    const tasks = getTasks(); // Lấy danh sách công việc hiện tại
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(keyword.toLowerCase())); // Lọc công việc theo từ khóa tìm kiếm (không phân biệt hoa thường)
    renderTasks(filteredTasks); // Hiển thị lại danh sách công việc sau khi lọc
}

//Task 9 : Chức năng Sắp xếp (Anpha b)
function sortTasksByName() {
    const tasks = getTasks(); // Lấy danh sách công việc hiện tại
    const sortedTasks = tasks.sort((a, b) => a.name.localeCompare(b.name)); // Sắp xếp công việc theo tên (theo thứ tự chữ cái Anphla b)
    renderTasks(sortedTasks); // Hiển thị lại danh sách công việc sau khi sắp xếp
}
