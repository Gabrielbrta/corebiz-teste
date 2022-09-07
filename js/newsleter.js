export default function postNewsletter() {
  const invalidClass = 'invalido';
  const activeClass = 'active';
  const elements = {
    form: document.querySelector('[action="newsletter"]'),
    inputs: document.querySelectorAll('.errorpost'),
    btnSubmit: document.querySelector('.btn-newslette'),
    newsletter: document.querySelector('.newsletter'),
    cadastro: document.querySelector('.cadastro'),
  }

  const emailForm = {
    removeClass() {
      elements.newsletter.classList.remove('false');
      elements.cadastro.classList.remove(activeClass);
    },

    cleanAndFocus() {
      elements.form.email.value = '';
      elements.form.nome.value = '';
      elements.form.nome.focus();
    },

    handleNewEmail() {
      const btnCadastro = document.querySelector('.newEmailButton');
      btnCadastro.addEventListener('click', () => {
        this.removeClass();
        this.cleanAndFocus();
      });
      elements.btnSubmit.addEventListener('click', handleForm);
    },
  }

  const changeClass = {
    addClass (classe) {
      emailForm.handleNewEmail();
      elements.form.classList.add(classe);
      elements.inputs.forEach(item => item.classList.add(classe));
    },

    toggleClass (classe) {
      elements.form.classList.remove(classe);
      elements.newsletter.classList.add('false');
      elements.cadastro.classList.add(activeClass);
      elements.inputs.forEach(item => item.classList.remove(classe));
    },
  }

  function fetchPostDatas(element) {
    fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(element),
    })
    .then(({ ok }) => {
      if ( !ok ) changeClass.addClass(invalidClass);
      else {
        emailForm.handleNewEmail();
        changeClass.toggleClass(invalidClass);
      }
    });
  }

  function handleForm(event) {
    event.preventDefault();
    const formObj = {
      "email": `${elements.form.email.value}`,
      "name": `${elements.form.name.value}`,
    }
    fetchPostDatas(formObj);
  }
  elements.btnSubmit.addEventListener('click', handleForm);  
}
