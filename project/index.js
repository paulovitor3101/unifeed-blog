const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

function initMenu() {
    nav.classList.toggle('active')
}

menu.addEventListener('click', initMenu)

const year = document.querySelector('#current-year')

year.innerHTML = new Date().getFullYear()