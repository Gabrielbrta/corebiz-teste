export default function fetchProduto() {
  const slideProdutcs = document.querySelector('[data-products="js-produtcs"]')

  async function fetchProducts () {
    const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    const json = await response.json();



    const elementProduct = () => json.map((product) => {
      return `<div class="box swiper-slide">
              <div class="product-box">
              <img src="${product.imageUrl}" alt="${product.productName}">
              <p class="title-products">${product.productName}</p>
              <img src="./assets/imagens/Rating-${product.productId}.svg" alt="estrelas">
              <p class="products-price">por R$ ${product.price}</p>
              <p class="products-price-options">
              ou em 
              ${product.installments.map(({quantity}) => quantity)}x de
              ${product.installments.map(({value}) => value)}
              </p>
              <a href="#" class="button-buy">COMPRAR</a>
              </div>
              </div>`
    })
    slideProdutcs.innerHTML += elementProduct()
  }
  fetchProducts()
}


