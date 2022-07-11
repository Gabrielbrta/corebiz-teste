export default function postNewsletter() {
  
}
const form = document.querySelector('[action="newsletter"] #email').value;
const submit = document.querySelector('.btn-newsletter');
console.log(form)


function fetchPostDatas() {
  fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
    method: 'POST',})
  }
  
  
  function postForm(event) {
    event.preventDefault();
    fetch(form).then(r => r.json()).then(json => console.log(json))
}

submit.addEventListener('click', postForm);

// 'https://corebiz-test.herokuapp.com/api/v1/newsletter'