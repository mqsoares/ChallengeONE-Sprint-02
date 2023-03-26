import { poductsServices } from '../services/products-services.js';

const btnAddProduct = document.querySelector('[data-btn-addProd]')
btnAddProduct.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = './newProduct.html'
})

const newProduct = (id, imgURL, alt, name, price, description) => {

    const card = document.createElement('div');        
    const template = `
        <div class="products-body">
            <img class="products-body-img" src="${imgURL}" alt="${alt}">
            <div class="product-resume">
                <p class="product-name">${name}</p>
                <p class="product-price">R$ ${price}</p>
                <p class="product-detail">Ver Produto</p>
            </div>
            <span class="product-btn-control">
                <a href="#" class="product-link-del"><img src="../assets/img/del.svg" alt="botão excluir" class="btn-simple btn-del" ></a>
                <a href="./editProduct.html?id=${id}" class="product-link-edit"><img src="../assets/img/edit.svg" alt="botão editar" class="btn-simple btn-edit "></a>
            </span>
        </div>
    `
    card.innerHTML = template
    card.dataset.id = id
    console.log(card)
    return card
}

const tableProduct = document.querySelector('[data-product]')

tableProduct.addEventListener('click', async (e) => {
    if(e.target.className === "btn-simple btn-del"){
        const rowProd = e.target.closest('[data-id]')
        const id = rowProd.dataset.id
        await poductsServices.deleteProduct(id)
        rowProd.remove()        
    }   
})

const render =  async () => {
    const productServer = await poductsServices.listProducts()
    
    productServer.map(el => {        
        tableProduct.appendChild(newProduct(el.id, el.imgURL, el.alt, el.name, el.price, el.description))
    })
    
}

render()

