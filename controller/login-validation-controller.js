const btnEnter = document.querySelector('[data-enter]')

btnEnter.addEventListener('click', (e) => {
    e.preventDefault()

    const user = 'alurageek@alura.com'
    const pass = '1234'

    const inputNameLog = document.querySelector('[data-lgname]').value
    const inputPasswordLog = document.querySelector('[data-lgpassword]').value
    
    
    // console.log(inputNameLog, inputPasswordLog)
    if (inputNameLog === user && inputPasswordLog === pass){
        window.location.href = './listProducts.html'
    } else {
        alert('OPS! "Usuário" ou "Senha" inválidos')               
    } 
    
})
