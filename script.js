const texts = ["Designer" , "Developer"];
let index = 0;
let isDeleting = false;
const textElement = document.getElementById('text');

function type() {
  let currentText = texts[index];
  if (isDeleting) {
    textElement.textContent = currentText.substring(0, textElement.textContent.length - 1);
    textElement.classList.add('deleting');
    textElement.classList.remove('typing');
  } else {
    textElement.textContent = currentText.substring(0, textElement.textContent.length + 1);
    textElement.classList.add('typing');
    textElement.classList.remove('deleting');
  }

  let typingSpeed = 150;
  if (!isDeleting && textElement.textContent === currentText) {
    typingSpeed = 1000;
    isDeleting = true;
  } else if (isDeleting && textElement.textContent === '') {
    isDeleting = false;
    index = (index + 1) % texts.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', (event) => {
  type();
});