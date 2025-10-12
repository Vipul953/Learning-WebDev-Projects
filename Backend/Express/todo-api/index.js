import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, "public")));

// In-memory tasks
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

// ✅ FIX: Use a wildcard *regex route instead of "*"
app.get(/.*/, (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
