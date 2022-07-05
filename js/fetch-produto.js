export default async function fetchProduto(element) {
  const slideProdutcs = document.querySelector(element)

    const response = await fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    const json = await response.json()
    .then((produto) => produto.map(({...props}) => {
      let card;

      if (props.installments.length) {
        card = `<div class="product-box swiper-slide">
                <img src="${props.imageUrl}" alt="${props.productName}"/>
                <p class="title-products">${props.productName}<p>
                <img src="./assets/imagens/Rating-${props.productId}.svg" alt="produto com ${props.productId} estrelas"/>
                <p>de ${props.installments[0].value}</p>
                </div>`;
        slideProdutcs.innerHTML += card;
      } else {
        card = `<div class="product-box swiper-wrapper">
                <img src="${props.imageUrl}" alt="${props.productName}"/>
                <p class="title-products">${props.productName}<p>
                <img src="./assets/imagens/Rating-${props.productId}.svg" alt="produto com ${props.productId} estrelas"/>
                </div>`
                slideProdutcs.innerHTML += card;
      }
    }))
    
    
}
