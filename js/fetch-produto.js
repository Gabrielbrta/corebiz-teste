export default function fetchProduto(element) {
  
  
}
const slideProdutcs = document.querySelector('[data-products="js-produtcs"]');

async function fetchProducts() {
  const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products');
  const json = await response.json()
  return json;
}

const produtos = fetchProducts().then(produto => {
  const arrayDeParcelados = Array.from(produto).map(({installments}) => installments[0]).filter((value) => value)
  console.log(arrayDeParcelados)
  const arrayDePrecos = Array.from(produto).map(({price}) => price)
  const precoLimpo = regexPrice(arrayDePrecos);
  let card;
  produto.map((props, index) => {

    if(props.listPrice || props.installments.length) {
      card = `<div class="product-box swiper-slide">
                <img src="${props.imageUrl}" alt="${props.productName}"/>
                <p class="title-products">${props.productName}<p>
                <img src="./assets/imagens/Rating-${props.productId}.svg" alt="produto com ${props.productId} estrelas"/>
                <p class="lastprice">de R$ </p>
                <p class="products-price">por R$ ${precoLimpo[index]}</p>
                <p>ou em ${props.installments[0].quantity}x de</p>
              </div>`
      slideProdutcs.innerHTML += card;
    } else {
      card = `<div class="product-box swiper-slide">
              <img src="${props.imageUrl}" alt="${props.productName}"/>
              <p class="title-products">${props.productName}<p>
              <img src="./assets/imagens/Rating-${props.productId}.svg" alt="produto com ${props.productId} estrelas"/>
              <p class="products-price">por R$ ${precoLimpo[index]}</p>
            </div>`
      slideProdutcs.innerHTML += card;
    }
  })
})

function regexPrice(precos) {
  const precoLimpo = precos.map((preco) => {
    const regexp = /(\d{2}$)|(90$)/g;
    const price = String(preco)
    const precoBrl = price.replace(regexp, `,$&`)
    return precoBrl;
    })
  return precoLimpo;
}
