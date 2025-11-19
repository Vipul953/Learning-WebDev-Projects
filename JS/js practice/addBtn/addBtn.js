
const jsContainer = document.getElementById("js-container");


const addBtn = document.createElement("button");
addBtn.textContent = "Button with JS"
addBtn.style.padding = "8px 12px"
addBtn.style.background = "Pink"

jsContainer.appendChild(addBtn)

addBtn.addEventListener("click", () => {
    const displayText = document.createElement("p")
    displayText.textContent = "This is paragraph is made with js..hehe"
    jsContainer.appendChild(displayText)
})