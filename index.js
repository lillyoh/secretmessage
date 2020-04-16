document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('#message-input');
  const encoded = btoa(input.value);

  const link = document.querySelector('#link-input');
  link.value = `${window.location}#${encoded}`
  link.select();
  document.execCommand('copy');

});
