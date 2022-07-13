export default function postNewsletter() {
  
}

const invalidClass = 'invalido';
const elements = {
  form: document.querySelector('[action="newsletter"]'),
  inputs: document.querySelectorAll('.errorpost'),
  btnSubmit: document.querySelector('.btn-newsletter'),
}

function fetchPostDatas(element) {
  fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(element)
  }).then((response) => {
    if (!response.ok) {
      elements.form.classList.add(invalidClass);
      elements.inputs.forEach(item => item.classList.add(invalidClass))
    } else {
      elements.form.classList.remove(invalidClass);
      elements.inputs.forEach(item => item.classList.remove(invalidClass))
    }
  });
  }
  
  function postForm(event) {
  event.preventDefault();
  const formObj = {
  "email": `${elements.form.email.value}`,
  "name": `${elements.form.name.value}`
  }
  fetchPostDatas(formObj);
}

elements.btnSubmit.addEventListener('click', postForm);