import { poductsServices } from '../services/products-services.js';

const newProduct = (id, imgURL, alt, name, price, description) => {

    const card = document.createElement('div');        
    const template = `
        <div class="products-body">
            <img src="${imgURL}" alt="${alt}">
            <p class="product-name">${name}</p>
            <p class="product-price">R$ ${price}</p>
            <p class="product-detail">Ver Produto</p>
        </div>
    `
    card.innerHTML = template

    return card
}

const tableProduct = document.querySelector('[data-product]')

const render =  async () => {
    const clienteServ = await poductsServices.listProducts()
    
    clienteServ.map(el => {        
        tableProduct.appendChild(newProduct(el.id, el.imgURL, el.alt, el.name, el.price, el.description))
    })
    
}

render()

