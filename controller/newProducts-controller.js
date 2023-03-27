import { poductsServices } from '../services/products-services.js';

const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const formNewProd = document.querySelector('[data-form-newProd]')

function setError(index) {
    inputs[index].style.border = '1px solid #ff0000'
    spans[index].style.display = 'block'
}

function delError(index) {
    inputs[index].style.border = ''
    spans[index].style.display = 'none'
}

function validURlProd() {
    if(inputs[0].value.length < 2){
        setError(0)
        return false
    } else {
        delError(0)
        return true
    }
}

function validTxtAltProd() {
    if(inputs[1].value.length < 2){
        setError(1)
        return false
    } else {
        delError(1)
        return true
    }
}

function validCategoryProd() {
    if(inputs[2].value.length < 2){
        setError(2)
        return false
    } else {
        delError(2)
        return true
    }
}

function validNameProd() {
    if(inputs[3].value.length < 2){
        setError(3)
        return false
    } else {
        delError(3)
        return true
    }
}

function validPriceProd() {
    if(inputs[4].value.length < 2){
        setError(4)
        return false
    } else {
        delError(4)
        return true
    }
}

function validDescProd() {
    if(inputs[5].value.length < 2){
        setError(5)
        return false
    } else {
        delError(5)
        return true
    }
}

inputs[0].addEventListener('blur', validURlProd)
inputs[1].addEventListener('blur', validTxtAltProd)
inputs[2].addEventListener('blur', validCategoryProd)
inputs[3].addEventListener('blur', validNameProd)
inputs[4].addEventListener('blur', validPriceProd)
inputs[5].addEventListener('blur', validDescProd)

formNewProd.addEventListener('submit', (e) => {
    e.preventDefault()

    validURlProd()
    validTxtAltProd()
    validCategoryProd()
    validNameProd()
    validPriceProd()
    validDescProd()

    const inputImgURL = e.target.querySelector('[data-imgURL]').value
    const inputAlt = e.target.querySelector('[data-alt]').value
    const inputCategory = e.target.querySelector('[data-category]').value
    const inputNameProd = e.target.querySelector('[data-nameProd]').value
    const inputPriceProd = e.target.querySelector('[data-priceProd]').value
    const inputDescProd = e.target.querySelector('[data-descProd]').value

    if(validURlProd() && validTxtAltProd() && validCategoryProd() && validNameProd() && validPriceProd() && validDescProd()){
        // console.log(inputImgURL, inputAlt, inputCategory.toLowerCase(), inputNameProd, inputPriceProd, inputDescProd)

        poductsServices.createProduct(inputImgURL, inputAlt, inputCategory.toLowerCase(), inputNameProd, inputPriceProd, inputDescProd)
        .then(() => {
            window.location.href = './listProducts.html'
        })
    }

    // console.log(inputImgURL, inputAlt, inputCategory.toLowerCase(), inputNameProd, inputPriceProd, inputDescProd)        
})