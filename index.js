const mainContainer = document.querySelector(".card")
const thanksContainer = document.querySelector(".card-thankyou")
const submitBtn = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})