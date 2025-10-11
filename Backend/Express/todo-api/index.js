const express = require("express");
const app = express();


app.use(express.json());
app.use(express.static("public"));

let tasks = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build a project", completed: false },
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


// POST a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = { id: tasks.length + 1, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT (update task)
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (typeof req.body.completed === "boolean")
    task.completed = req.body.completed;
  if (req.body.title) task.title = req.body.title;

  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ message: "Task deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
