let openModalBtn = document.querySelector(".header-main__question-link")
let modalMain = document.querySelector(".modal-main")
let closeModalBtn = document.querySelector(".modal-window__close-btn")

openModalBtn.addEventListener("click", () => {
    modalMain.classList.add("modal-main-On")
})

closeModalBtn.addEventListener("click", () => {
    modalMain.classList.remove("modal-main-On")
})