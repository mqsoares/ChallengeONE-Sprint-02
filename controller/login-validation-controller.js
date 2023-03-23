const btnEnter = document.querySelector('[data-enter]')

btnEnter.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = './listProducts.html'
})
