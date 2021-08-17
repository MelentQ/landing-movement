function onSubmit(e) {
  e.preventDefault();

  const body = document.querySelector('.page');
  const formModal = body.querySelector('#formModal');

  formModal.classList.remove('modal_opened');
  document.forms.form.reset();
  body.classList.remove('page_fixed');
  window.scrollTo(0, 1850)
}

document.forms.form.addEventListener('submit', onSubmit);
