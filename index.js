const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', getUrl);

function getUrl(e) {
  e.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encoded = btoa(input.value);

  const link = document.querySelector('#link-input');
  link.value = `${window.location}#${encoded}`
  link.select();

  document.querySelector('#message-preview').href=link.value;
}

