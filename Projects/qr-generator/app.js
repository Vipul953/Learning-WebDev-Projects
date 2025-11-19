const inputText = document.getElementById("inputText")
const  qrCode = document.querySelector(".qrCode")
const generateBtn = document.getElementById("generateBtn")


generateBtn.addEventListener("click", () => {
    qrCode.innerHTML = ""
    const text = inputText.value.trim()

    if (text === ""){
        alert("Please enter some text or url")
        return
    }

    new QRCode(qrCode, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000",
        colorLight: "#fff"
    })

})