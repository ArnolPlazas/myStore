const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const carShopMenu = document.querySelector('.navbar-shopping-car')
const mobileMenu = document.querySelector('.mobile-menu')
const DetailsOrderMenu = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
carShopMenu.addEventListener('click', toggleCarShopMenu)

function toggleDesktopMenu(){
    DetailsOrderMenu.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    DetailsOrderMenu.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCarShopMenu(){
    mobileMenu.classList.add('inactive')
    DetailsOrderMenu.classList.toggle('inactive')
}

