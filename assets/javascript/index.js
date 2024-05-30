const anaDiv = document.querySelector('.newProductsCards')

let zd

function getAllProducts() {
    axios.get('https://dummyjson.com/products')
    .then(res => {
       let zd = res.data.products
        zd.forEach(item =>{
            let box = document.createElement('div')
            box.className = 'newProductCard'
            box.innerHTML = `
            <div class="cardImage">
            <img
              src=${item.thumbnail}
              alt="" 
            />
            </div>
            <div class="cardText">
            <p>${item.category}</p>
            <h4>${item.title}</h4>
            <span>${item.price}</span>
            <div class="cardIcons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                <i class="fa-regular fa-eye"></i>
            </div>
              </div>`
            anaDiv.appendChild(box)
        })
    })   
}

window.onload = () => {
    getAllProducts()
}