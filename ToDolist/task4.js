const addTaskBtn = document.getElementById("addTaskBtn");
const mainPage = document.getElementById("mainPage");
const addPage = document.getElementById("addPage");

addTaskBtn.addEventListener("click", function () {

    mainPage.style.display = "none";
    addPage.style.display = "flex";

});

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

});