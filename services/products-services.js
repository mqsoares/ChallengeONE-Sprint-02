const listProducts = async () => {
    const response = await fetch("http://localhost:3000/products")
    return await response.json()
}

const createProduct = async (imgURL, alt, category, name, price, description, id) => {
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imgURL: imgURL, 
            alt: alt,
            category: category, 
            name: name, 
            price: price,
            description: description
        })
    })
    .then( res => {
        return res.body
    })
}
const createMessage = async (name, message, id) => {
    const response = await fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            message: message,
        })
    })
    .then( res => {
        return res.body
    })
}


export const poductsServices = {
    listProducts,
    createProduct,

    createMessage
}


