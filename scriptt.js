const scriptURL = 'https://script.google.com/macros/s/AKfycbwSzQ4JzqlMBZLaWKe4BNi_Vt9vGnjj4b1-9Nyl6RLe76vUkzZ2CXt6t5tJMgSKuZ_H/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})