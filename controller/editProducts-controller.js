import { poductsServices } from '../services/products-services.js';

(async () => {

    const getURL = new URL(window.location)
    const id = getURL.searchParams.get('id')
    
    const inputImgURL = document.querySelector('[data-imgURL]')
    const inputAlt = document.querySelector('[data-alt]')
    const inputCategory = document.querySelector('[data-category]')
    const inputNameProd = document.querySelector('[data-nameProd]')
    const inputPriceProd = document.querySelector('[data-priceProd]')
    const inputDescProd = document.querySelector('[data-descProd]')
    
    const data = await poductsServices.pullProduct(id)
    inputImgURL.value = data.imgURL
    inputAlt.value = data.alt
    inputCategory.value = data.category
    inputNameProd.value = data.name
    inputPriceProd.value = data.price
    inputDescProd.value = data.description
    
    const form = document.querySelector('[data-form-editProd]')
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        await poductsServices.editProduct(inputImgURL.value,inputAlt.value, inputCategory.value, inputNameProd.value, inputPriceProd.value, inputDescProd.value, id)
        window.location.href = './listProducts.html'
    })

})()

