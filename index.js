const anaDiv = document.querySelector('.newProductCard')

let db

function getAllProducts() {
    axios.get('https://dummyjson.com/products')
    .then(res => {
       let db = res.data.products
        db.forEach(item =>{
            let box = document.createElement('div')
            box.className = 'productCard'
            box.innerHTML = `
            <div class="cardImage">
            <img
              src=${item.thumbnail}
              alt=""
              style="width:100%; height:100px"
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

// function addToCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || []
//     cart.push(db.find(item => item.id == id))
//     localStorage.setItem('cart', JSON.stringify(cart))
// }
window.onload = () => {
    getAllProducts()
}