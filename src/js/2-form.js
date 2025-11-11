const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (saveData) {
  email.value = saveData.email;
  formData.email = saveData.email;

  message.value = saveData.message;
  formData.message = saveData.message;
}

form.addEventListener('input', () => {
  formData.email = email.value.trim();
  formData.message = message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: '',
    message: '',
  };
  form.reset();
});
