const hamburger = document.getElementById("open-menu")
const closeMenu = document.getElementById("close-menu")
const menuBar = document.querySelector(".nav-ul")

hamburger.addEventListener("click", () => {
    hamburger.classList.add("hide")
    closeMenu.classList.add("show")
    menuBar.classList.add("show")
})

closeMenu.addEventListener("click", () => {
    hamburger.classList.remove("hide")
    closeMenu.classList.remove("show")
    menuBar.classList.remove("show")
})

const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmark p");

bookmark.addEventListener("click", () => {
    bookmarkText.innerText = 'Bookmark'
    bookmark.classList.toggle("bookmarked")
    let bookmarkedText = document.querySelector(".bookmarked p")
    bookmarkedText.innerText = 'Bookmarked'
})

const openProject = document.querySelector(".back-this-project button");
const modal = document.querySelector(".modal")
const closeModal = document.getElementById("close-modal")

openProject.addEventListener("click", () => {
    modal.classList.add("show")
    window.scrollTo(0,0)  
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("show")
    window.scrollTo(0,0)
})

const noReward = document.querySelector(".no-reward")
const bamboo = document.querySelector(".bamboo-stand")
const blackEdition = document.querySelector(".black-edition-stand")

const selectNoReward = document.querySelector(".no-reward label")
const selectBamboo = document.querySelector(".bamboo-stand label")
const selectBlackEdition = document.querySelector(".black-edition-stand label")

const pledgeBamboo = document.querySelector(".bamboo-stand .modal-selected")
const pledgeBlackEdition = document.querySelector(".black-edition-stand .modal-selected")

selectNoReward.addEventListener("click", () => {
    noReward.style.border = '2px solid var(--Moderate-cyan)'
    pledgeNoReward.classList.add("show")
})

selectBamboo.addEventListener("click", () => {
    bamboo.style.border = '2px solid var(--Moderate-cyan)'
    pledgeBamboo.classList.add("show")
    pledgeBlackEdition.classList.remove("show")
})

selectBlackEdition.addEventListener("click", () => {
    blackEdition.style.border = '2px solid var(--Moderate-cyan)'

    pledgeBlackEdition.classList.add("show")
    pledgeBamboo.classList.remove("show")
})

const continueButton = document.querySelectorAll(".info button")
const success = document.querySelector(".success")
const gotIt = document.querySelector(".success button")

const inputPrice = document.querySelectorAll(".input-price input")

let totalAmount = document.querySelector(".count h1")

let progressBar = document.querySelector(".progress")

let totalBacker = document.getElementById("backers")

const numberRemain = document.querySelectorAll(".remain h1")

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

continueButton[0].addEventListener("click", e => {
    e.preventDefault()
    success.classList.add("show")
    numberRemain[0].innerHTML = numberRemain[0].innerHTML - 1
    numberRemain[3].innerHTML = numberRemain[3].innerHTML - 1
    totalAmount.innerText = `$${numberWithCommas(parseInt(totalAmount.innerText.substring(1).replace(/,/g, '')) + parseInt(inputPrice[0].value.replace('$','')))}`

    progressBar.style.width = `${parseInt(totalAmount.innerText.substring(1).replace(/,/g, ''))/100000 *100}%`

    totalBacker.innerText = numberWithCommas(parseInt(totalBacker.innerText.replace(/,/g,'')) + 1)

    window.scrollTo(0,0)
})

continueButton[1].addEventListener("click", e => {
    e.preventDefault()
    success.classList.add("show")
    numberRemain[1].innerText = numberRemain[1].innerText - 1
    numberRemain[4].innerHTML = numberRemain[4].innerText - 1

    totalAmount.innerText = `$${numberWithCommas(parseInt(totalAmount.innerText.substring(1).replace(/,/g, '')) + parseInt(inputPrice[1].value.replace('$','')))}`

    progressBar.style.width = `${parseInt(totalAmount.innerText.substring(1).replace(/,/g, ''))/100000 *100}%`
    window.scrollTo(0,0)

    totalBacker.innerText = numberWithCommas(parseInt(totalBacker.innerText.replace(/,/g,'')) + 1)
})

selectNoReward.addEventListener("click", () => {
    success.classList.add("show")
})

gotIt.addEventListener("click", () => {
    success.classList.remove("show")
    modal.classList.remove("show")
    window.scrollTo(0,0)
})

const selectReward = document.querySelectorAll(".select-reward button")

selectReward.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("show")
        window.scrollTo(0,0)
    })
})
