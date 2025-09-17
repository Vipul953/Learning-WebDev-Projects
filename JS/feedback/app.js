const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "";

ratingsContainer.addEventListener("click",e => {
    if (e.target.parentNode.classList.contains("rating")){

        removeActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <div>
            <p class="heart">❤️</p>
            <strong>Thank You!</strong>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
        </div>
    `
})

function removeActive(){
    for( let i=0; i< ratings.length; i++){
        ratings[i].classList.remove("active");
    }

}


