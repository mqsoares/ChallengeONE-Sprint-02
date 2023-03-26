import { poductsServices } from '../services/products-services.js';


const btnLogin = document.querySelector('[data-login]')

btnLogin.addEventListener('click', () => {
    window.location.href = '../views/login.html'
})

const newProductList = (imgURL, alt, name, price) => {

    const card = document.createElement('div');      
    const template = `
        <div class="products-body">
            <img class="products-body-img" src="${imgURL}" alt="${alt}">
            <div class="product-resume">
                <p class="product-name">${name}</p>
                <p class="product-price">R$ ${price}</p>
                <p class="product-detail">Ver Produto</p>
            </div>
        </div>
    `
    card.innerHTML = template
    return card
}

const tableProductConsoles = document.querySelector('[data-product-consoles]')

const render =  async () => {
    const productsServ = await poductsServices.listProducts()
    console.log(productsServ)
    
    productsServ.map(el => {       
        const products = newProductList(el.imgURL, el.alt, el.name, el.price)
        if(el.category === "consoles"){
            tableProductConsoles.appendChild(products)
        }
    })
}

render()