import { poductsServices } from '../services/products-services.js';


const formNewProd = document.querySelector('[data-form-newProd]')

formNewProd.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputImgURL = e.target.querySelector('[data-imgURL]').value
    const inputAlt = e.target.querySelector('[data-alt]').value
    const inputCategory = e.target.querySelector('[data-category]').value
    const inputNameProd = e.target.querySelector('[data-nameProd]').value
    const inputPriceProd = e.target.querySelector('[data-priceProd]').value
    const inputDescProd = e.target.querySelector('[data-descProd]').value
    
    // console.log(inputImgURL, inputAlt, inputCategory, inputNameProd, inputPriceProd,inputDescProd)

    poductsServices.createProduct(inputImgURL, inputAlt, inputCategory, inputNameProd, inputPriceProd, inputDescProd)
    .then(() => {
        window.location.href = './listProducts.html'
        // alert('Cadastro Concluido')
    })
})