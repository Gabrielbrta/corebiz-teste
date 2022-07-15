export default function postNewsletter() {
  
}

const invalidClass = 'invalido';
const elements = {
  form: document.querySelector('[action="newsletter"]'),
  inputs: document.querySelectorAll('.errorpost'),
  btnSubmit: document.querySelector('.btn-newsletter'),
  lastNewsletter: document.querySelector('.newsletter').innerHTML,
  newsletter: document.querySelector('.newsletter'),
  cadastro: document.querySelector('.cadastro'),
}

const emailForm = {
  newEmail() {
    elements.newsletter.innerHTML = elements.cadastro.innerHTML;
  },

  defaultEmail() {
   const newsletterDefault = elements.lastNewsletter;
   return newsletterDefault;
  },

  handleNewEmail() {
    const btnCadastro = document.querySelector('.newEmailButton');
    btnCadastro.addEventListener('click', () => elements.newsletter.innerHTML = this.defaultEmail());
    elements.btnSubmit.addEventListener('click', postForm);
  },
}

const  changeClass = {
  addClass(classe) {
    emailForm.handleNewEmail();
    elements.form.classList.add(classe);
    elements.inputs.forEach(item => item.classList.add(classe))
  },

  removeClass(classe) {
    elements.form.classList.remove(classe);
    elements.inputs.forEach(item => item.classList.remove(classe))
  },
}

function fetchPostDatas(element) {
  fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(element)
  })
  .then((response) => {
    if (!response.ok) {
      changeClass.addClass(invalidClass);
    } else {
      emailForm.newEmail();
      emailForm.handleNewEmail();
      changeClass.removeClass(invalidClass);
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