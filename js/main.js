/* -------- Start Modal Function -------- */
let openModalBtn = document.querySelector(".header-main__question-link");
let modalMain = document.querySelector(".modal-main")
let closeModalBtn = document.querySelector(".modal-window__close-btn");

openModalBtn.addEventListener("click", () => {
    modalMain.classList.add("modal-main-On")
});

closeModalBtn.addEventListener("click", () => {
    modalMain.classList.remove("modal-main-On")
});
/* -------- End of Modal Function -------- */

/* -------- Start Useful Card Function -------- */
let openCardBtn = document.querySelectorAll(".useful-list__link")

let usefulItem = document.querySelectorAll(".useful-list__item");


openCardBtn.forEach(function (cardBtns) {
    cardBtns.addEventListener("click", function () {
        usefulItem.forEach(function (items) {
            items.classList.remove("useful-list__item--active")
        })
        cardBtns.closest(".useful-list__item").classList.add("useful-list__item--active")
    })
})

/* -------- End of Useful Function -------- */