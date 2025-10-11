document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "/tasks";
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");

  addBtn.onclick = addTask;

  async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();

    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.title;
      if (task.completed) li.classList.add("completed");

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Toggle";
      toggleBtn.onclick = async () => {
        await fetch(`${API_URL}/${task.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: !task.completed })
        });
        loadTasks(); // refresh the list
      };

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = async () => {
        await fetch(`${API_URL}/${task.id}`, { method: "DELETE" });
        loadTasks();
      };

      li.appendChild(toggleBtn);
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  }

  async function addTask() {
    const title = taskInput.value.trim();
    if (!title) return alert("Enter a task");

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    taskInput.value = "";
    loadTasks();
  }

  loadTasks();
});
