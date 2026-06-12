// Task 1: Khai báo biến
let tasks = getTasks();
let autoIncrementId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1; 
const taskform = document.getElementById("taskForm");
const taskIdInput = document.getElementById("taskId");
const taskNameInput = document.getElementById("taskName");
const userInput = document.getElementById("user");
const deadlineInput = document.getElementById("deadline");
const statusInput = document.getElementById("status");
const errorName = document.getElementById("errorName");
const errorUser = document.getElementById("errorUser");
const errorDeadline = document.getElementById("errorDeadline");
const taskTableBody = document.querySelector("#taskTable tbody"); 
const buttonSubmit = document.querySelector("button[type='submit']"); 

// Task 2: Tạo cấu trúc mảng tasks & LocalStorage
function getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Task 3: Hiển thị dữ liệu
function renderTasks(tasksToRender = getTasks()) {
    taskTableBody.innerHTML = ""; 
    tasksToRender.forEach(task => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.user}</td>
            <td>${task.deadline}</td>
            <td>${task.status}</td>
            <td>
                <button class="btn-edit" onclick="editTask(${task.id})">Sửa</button>
                <button class="btn-delete" onclick="deleteTask(${task.id})">Xóa</button>
            </td>
        `;
        taskTableBody.appendChild(row);
    });
}

// Task 4: Validate dữ liệu đầu vào
function validateForm() {
    let isValid = true;
    const today = new Date().toISOString().split("T")[0];

    if (taskNameInput.value.trim().length < 5) {
        errorName.textContent = "Tên công việc phải có ít nhất 5 ký tự.";
        isValid = false;
    } else {
        errorName.textContent = "";
    }

    if (userInput.value.trim() === "") {
        errorUser.textContent = "Người thực hiện không được để trống.";
        isValid = false;
    } else {
        errorUser.textContent = "";
    }

    if (deadlineInput.value === "") {
        errorDeadline.textContent = "Deadline không được để trống.";
        isValid = false;
    } else if (deadlineInput.value < today) {
        errorDeadline.textContent = "Deadline phải là ngày tương lai.";
        isValid = false;
    } else {
        errorDeadline.textContent = "";
    }

    if (statusInput.value === "") {
        statusInput.value = "Chờ làm";
    }

    return isValid;
}

// Task 5: Thêm công việc mới
taskform.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    if (validateForm()) { 
               tasks = getTasks(); 
                const isUpdate = taskIdInput.value !== ""; 
        if (isUpdate) { 
            const index = tasks.findIndex(t => t.id === parseInt(taskIdInput.value)); 
            if (index !== -1) { 
                tasks[index].name = taskNameInput.value.trim();
                tasks[index].user = userInput.value.trim(); 
                tasks[index].deadline = deadlineInput.value; 
                tasks[index].status = statusInput.value; 
                                saveTasks(tasks);
                                taskIdInput.value = "";
                buttonSubmit.textContent = "Lưu công việc";
            }
        } else { 
            const newTask = {
                id: autoIncrementId++, 
                name: taskNameInput.value.trim(), 
                user: userInput.value.trim(), 
                deadline: deadlineInput.value, 
                status: statusInput.value || "Chờ làm" 
            };
            
            tasks.push(newTask);
            saveTasks(tasks);
        }

        renderTasks();
        taskform.reset();
    }
});

// Task 6: Chức năng Sửa dữ liệu
function editTask(id) {
    const tasks = getTasks(); 
    const taskToEdit = tasks.find(task => task.id === id); 
    
    if (taskToEdit) { 
        taskIdInput.value = taskToEdit.id; 
        taskNameInput.value = taskToEdit.name; 
        userInput.value = taskToEdit.user; 
        deadlineInput.value = taskToEdit.deadline; 
        statusInput.value = taskToEdit.status; 
        buttonSubmit.textContent = "Cập nhật"; 
    }
}

// Task 7: Chức năng Xóa dữ liệu
function deleteTask(id) {
    if(confirm("Bạn có chắc muốn xóa công việc này?")) {
        const tasks = getTasks(); 
        const updatedTasks = tasks.filter(task => task.id !== id); 
        saveTasks(updatedTasks); 
        renderTasks(); 
    }
} 

// Task 8: Chức năng Tìm kiếm
function searchTasks(keyword) {
    const tasks = getTasks(); 
    const filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(keyword.toLowerCase()) || 
        task.user.toLowerCase().includes(keyword.toLowerCase())
    ); 
    renderTasks(filteredTasks); 
}

document.getElementById("searchInput").addEventListener("input", function(e) {
    searchTasks(e.target.value);
});

// Task 9: Chức năng Sắp xếp (Anpha b)
function sortTasksByName() {
    const tasks = getTasks(); 
    const sortedTasks = tasks.sort((a, b) => a.name.localeCompare(b.name)); 
    renderTasks(sortedTasks); 
}

document.getElementById("sortSelect").addEventListener("change", function(e) {
    if (e.target.value === "name") sortTasksByName();
    else renderTasks(); 
});

renderTasks();
