export default function fetchProduto() {
  const slideProdutcs = document.querySelector('[data-products="js-produtcs"]');
  if(slideProdutcs) {

    async function fetchProducts() {
      const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products');
      const json = await response.json()
      return json;
    }
    
    function regexPrice(precos) {
      const precoLimpo = precos.map((preco) => {
        const regexp = /(\d{2}$)|(90$)/g;
        const price = String(preco);
        const precoBrl = price.replace(regexp, `,$&`)
        return precoBrl;
      });
      return precoLimpo;
    }
    
    function verificaPreco(precos) {
      precos.forEach((preco) => {
        const precoVazio = String(preco.innerText).includes('null') || String(preco.innerText).includes('undefined')
        if (precoVazio) preco.style.opacity = 0;
      });
    }
    
    const produtos = fetchProducts().then(produto => {
      const precos = Array.from(produto).map(({price, listPrice, installments}) => {
        const installmentsFiltro = Array.from(installments).map(({value}) => value)
      return {
        price,
        listPrice,
        installmentsFiltro,
      }
      });
      const lastCleanPrice = regexPrice(precos.map((precos) => precos.listPrice));
      const cleanPrice = regexPrice(precos.map((precos) => precos.price));
      const precoParceladoLimpo = regexPrice(precos.map((precos) => precos.installmentsFiltro));
    
      let card;
      produto.map((props, index) => {
        if(props.listPrice || props.installments.length) {
          card = `<div class="product-box swiper-slide">
                    <div class="off"><p>OFF</p></div>
                    <img src="${props.imageUrl}" alt="${props.productName}"/>
                    <p class="title-products">${props.productName}<p>
                    <img src="./assets/imagens/Rating-${props.stars}.svg" alt="produto com ${props.stars} estrelas"/>
                    <p class="lastprice">de R$ ${lastCleanPrice[index]}</p>
                    <p class="products-price">por R$ ${cleanPrice[index]}</p>
                    <p class="havePrice">ou em ${props.installments[0].quantity}x de ${precoParceladoLimpo[index]}</p>
                    <a href="#" class="button-buy">COMPRAR</a>
                  </div>`
          slideProdutcs.innerHTML += card;
        } else {
          card = `<div class="product-box swiper-slide">
                  <img src="${props.imageUrl}" alt="${props.productName}"/>
                  <p class="title-products">${props.productName}<p>
                  <img src="./assets/imagens/Rating-${props.stars}.svg" alt="produto com ${props.stars} estrelas"/>
                  <p class="lastprice">de R$ ${lastCleanPrice[index]}</p>
                  <p class="products-price">por R$ ${cleanPrice[index]}</p>
                  <p class="havePrice">ou em ${props.installments[0]}x de</p>
                  <a href="#" class="button-buy">COMPRAR</a>
                </div>`
          slideProdutcs.innerHTML += card;
        }
      });
    }).finally(() => {
      const lastprice = document.querySelectorAll('.lastprice');
      const havePrice = document.querySelectorAll('.havePrice');
      const offer = document.querySelectorAll('.off')[0].style.opacity = 0;
      verificaPreco(havePrice);
      verificaPreco(lastprice);
    });
  }
}
