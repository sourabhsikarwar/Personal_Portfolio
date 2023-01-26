const hLinks = document.querySelectorAll("#hLink")
const body = document.querySelector("body")
const themeBtn = document.querySelector("#theme")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark")
})

hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
});