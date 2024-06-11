let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const submitButton = form.querySelector('button[type="submit"]');

document.addEventListener('DOMContentLoaded', function () {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('input', function (e) {
  formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  if (emailInput.value.trim() !== '' || messageInput.value.trim() !== '') {
    submitButton.disabled = false;
    
  } else {
    submitButton.disabled = true;
    alert('Fill please all fields');
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

    formData = {
      email: '',
      message: '',
    };
  } else {
    alert('Fill please all fields');
  }
});
