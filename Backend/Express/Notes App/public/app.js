document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("titleInput")
    const contentInput = document.getElementById("contentInput")
    const addBtn = document.getElementById("addBtn")
    const notesList = documnet.getElementById("notesList")

    const API_URL = "/notes"
    
    
    async function loadButton(){
        const res = await fetch(API_URL);
        const notes = await res.json();

        notesList.innerHTML = "";
        notes.forEach(note => {
            const li = document.createElement("li")
            li.innerHTML = `<strong>${note.title}</strong>: ${note.content}`
            
        });

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"

        notesList.appendChild(li)
    }


})