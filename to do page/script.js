const taskInput = document.getElementById("taskInput");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <input type="checkbox" onclick="toggleComplete(this)">
        <span>${taskText}</span>
        <button class="edit-button" onclick="editTask(this)">Edit</button>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    pendingTasks.appendChild(taskItem);
    taskInput.value = "";
}
function toggleComplete(checkbox) {
    const task = checkbox.parentElement;
    task.classList.toggle("completed");
    if (task.classList.contains("completed")) {
        completedTasks.appendChild(task);
    } else {
        pendingTasks.appendChild(task);
    }
}
function editTask(button) {
    const task = button.parentElement;
    const span = task.querySelector("span");
    const newText = prompt("Edit task:", span.innerText);
    if (newText !== null) {
        span.innerText = newText;
    }
}
function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}