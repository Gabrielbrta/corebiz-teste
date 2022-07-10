export default function fetchProduto(element) {
  
  
}
const slideProdutcs = document.querySelector('[data-products="js-produtcs"]');

async function fetchProducts() {
  const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products');
  const json = await response.json()
  return json;
}

function regexPrice(precos) {
  const precoLimpo = precos.map((preco) => {
    const regexp = /(\d{2}$)|(90$)/g;
    const price = String(preco)
    const precoBrl = price.replace(regexp, `,$&`)
    return precoBrl;
    })
  return precoLimpo;
}

const produtos = fetchProducts().then(produto => {
  const arrayDePrecos = Array.from(produto).map(({price}) => price);
  const lastPriceLimpo = regexPrice(Array.from(produto).map(({listPrice}) => listPrice));
  const precoLimpo = regexPrice(arrayDePrecos);
  const precoParceladoLimpo = regexPrice(Array.from(produto)
  .map((props) => props.installments[0])
  .filter((value) => value)
  .map(({value}) => value));
  let card;
  produto.map((props, index) => {
    if(props.listPrice || props.installments.length) {
      card = `<div class="product-box swiper-slide">
                <div></div>
                <img src="${props.imageUrl}" alt="${props.productName}"/>
                <p class="title-products">${props.productName}<p>
                <img src="./assets/imagens/Rating-${props.stars}.svg" alt="produto com ${props.stars} estrelas"/>
                <p class="lastprice">de R$ ${lastPriceLimpo[index]}</p>
                <p class="products-price">por R$ ${precoLimpo[index]}</p>
                <p class="havePrice">ou em ${props.installments[0].quantity}x de ${precoParceladoLimpo[index]}</p>
              </div>`
      slideProdutcs.innerHTML += card;
    } else {
      card = `<div class="product-box swiper-slide">
              <img src="${props.imageUrl}" alt="${props.productName}"/>
              <p class="title-products">${props.productName}<p>
              <img src="./assets/imagens/Rating-${props.stars}.svg" alt="produto com ${props.stars} estrelas"/>
              <p class="lastprice">de R$ ${lastPriceLimpo[index]}</p>
              <p class="products-price">por R$ ${precoLimpo[index]}</p>
            </div>`
      slideProdutcs.innerHTML += card;
    }
  });
}).finally(() => {
  const lastprice = document.querySelectorAll('.lastprice');
    lastprice.forEach((item) => {
      const precoVazio = String(item.innerText).includes('null');
      if (precoVazio) {
        item.style.opacity = 0;
      } else {
        item.parentNode.children.item(0).classList.add('off');
      }
    });
});
