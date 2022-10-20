const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const carShopMenu = document.querySelector('.navbar-shopping-car')
const mobileMenu = document.querySelector('.mobile-menu')
const productDetailClose = document.querySelector('.product-detail-close')
const DetailsOrderMenu = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')



menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
carShopMenu.addEventListener('click', toggleCarShopMenu)
productDetailClose.addEventListener('click', closeProductDetail)

function closeProductDetail(){
    productDetailContainer.classList.add('inactive')
}

function openProductDetail(){
    productDetailContainer.classList.remove('inactive')
    DetailsOrderMenu.classList.add('inactive')
}

function toggleDesktopMenu(){
    DetailsOrderMenu.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    DetailsOrderMenu.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleCarShopMenu(){
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    DetailsOrderMenu.classList.toggle('inactive')
}

const productList = []
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: './assets/pexels-bike.jpeg'
    }
)

productList.push(
    {
        name: 'Laptop',
        price: 300,
        image: './assets/pexels-bike.jpeg'
    }
)

productList.push(
    {
        name: 'Table',
        price: 60,
        image: './assets/pexels-bike.jpeg'
    }
)

productList.push(
    {
        name: 'Bike',
        price: 120,
        image: './assets/pexels-bike.jpeg'
    }
)

productList.push(
    {
        name: 'Laptop',
        price: 300,
        image: './assets/pexels-bike.jpeg'
    }
)

productList.push(
    {
        name: 'Table',
        price: 60,
        image: './assets/pexels-bike.jpeg'
    }
)

function renderProducts(productList){
    for(product of productList){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetail)

    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        const productInfoFigure = document.createElement('figure')
        const productCart = document.createElement('img')
        productCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productCart)
        productInfoDiv.append(productPrice, productName)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(productList)
