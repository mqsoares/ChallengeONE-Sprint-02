const listProducts = async () => {
    const response = await fetch("http://localhost:3000/products")
    return await response.json()
    
}

export const poductsServices = {
    listProducts
}


