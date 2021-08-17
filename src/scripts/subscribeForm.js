function onSubmit(e) {
  e.preventDefault();

  const socials = document.querySelector('.socials__label-container');

  document.forms.subscribe.reset();
  document.forms.subscribe.classList.add('form_hidden');
  socials.classList.add('socials__label-container_without-form');
}

document.forms.subscribe.addEventListener('submit', onSubmit);
