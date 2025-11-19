import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static(join(__dirname, "public")))

let notes = [
    {
        id: 1,
        title: "First Note",
        content: "This is first note."
    }
]

app.get("/notes", (req, res) => {
    res.json(notes);
})


app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    const newNote = { id: notes.length + 1, title, content}
    notes.push(newNote);
    res.status(201).json(newNote);
})

app.put("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find( n => n.id === id);
    if (!note) return res.status(404).json({message: "Note Not Found"})

    if (req.body.title) note.title = req.body.title;
    if (req.body.content) note.content = req.body.content;

    res.json(note);
})

app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter((n) => n.id !== id);
  res.json({ message: "Note deleted" });
});

app.get(/.*/, (req, res) => {
    res.sendFile(join(__dirname, "public", "index.html"))
});

const PORT =  process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`))