export default function initCart() {
  const buttons = document.querySelectorAll('.button-buy');
  const cart = document.querySelector('[data-contador]');
  let contador = 0;
  
  function setCart() {
    const localCartValue = window.localStorage.getItem('cart');
    if (localCartValue) {
      cart.innerHTML = localCartValue;
      contador = localCartValue;
    } else {
      contador = 0;
      cart.innerHTML = contador;
    }
  }
  setCart();

  function addCart(contador) {
    window.localStorage.setItem('cart', contador);
    const localCart = cart.innerHTML = contador;
    return localCart;
  }

  function handleCart(event) {
    event.preventDefault();
    cart.innerHTML = addCart(++contador);
  }
  
  buttons.forEach((botao) => botao.addEventListener('click', handleCart))
}