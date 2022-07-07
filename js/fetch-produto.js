export default async function fetchProduto(element) {
  const slideProdutcs = document.querySelector(element)

    const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    const json = await response.json()
    .then((produto) => produto.map(({...props}, index) => {
      let card;
      const prices = produto[index].price;
      const listPrices = produto[index].listPrice;
      const cleanPrice = regexPrice(prices);
      const cleanListPrice = regexPrice(listPrices);

      if (props.listPrice) {
        card = `<div class="product-box swiper-slide">
                <img src="${props.imageUrl}" alt="${props.productName}"/>
                <p class="title-products">${props.productName}<p>
                <img src="./assets/imagens/Rating-${props.productId}.svg" alt="produto com ${props.productId} estrelas"/>
                <p class="lastprice">de R$ ${cleanListPrice}</p>
                <p class="products-price">por R$ ${cleanPrice}</p>
                </div>`;
        slideProdutcs.innerHTML += card;
      } else {
        card = `<div class="product-box swiper-slide">
                <img src="${props.imageUrl}" alt="${props.productName}"/>
                <p class="title-products">${props.productName}<p>
                <img src="./assets/imagens/Rating-${props.productId}.svg" alt="produto com ${props.productId} estrelas"/>
                <p class="products-price">por R$ ${cleanPrice}</p>
                </div>`
                slideProdutcs.innerHTML += card;
      }
    }))

    function regexPrice(price) {
      if (price) {
        const prices = String(price);
        const regexp = /(\d{2}$)|(90$)/g;
        const precoRefatorado = prices.replace(regexp, `,$&`)
        return precoRefatorado;
      } else {
        const priceNull = String(price).replace(null, ' ');
        return priceNull;
      }
    }
}
