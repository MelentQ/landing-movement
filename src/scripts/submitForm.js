function onSubmit(e) {
  e.preventDefault();

  const body = document.querySelector('.page');
  const formModal = body.querySelector('#formModal');

  const success = body.querySelector('.form__success')
  console.log(success);

  success.classList.add('form__success_open');
  document.forms.form.classList.add('form__form-element_hidden');

  setTimeout(() => {
    formModal.classList.remove('modal_opened');
    document.forms.form.reset();
    body.classList.remove('page_fixed');
    window.scrollTo(0, 1850)
  }, 2000)
}

document.forms.form.addEventListener('submit', onSubmit);
