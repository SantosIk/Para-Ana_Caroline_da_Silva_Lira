const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.textContent = 'Eu te amo, vida! Assinado Paulo Augusto Taveira dos Santos, também conhecido, seu eterno namorado.';
  response.classList.remove('hidden');
  yesButton.disabled = true;
  noButton.disabled = true;
});

noButton.addEventListener('mouseenter', () => {
  const card = document.querySelector('.card');
  const cardRect = card.getBoundingClientRect();
  const noRect = noButton.getBoundingClientRect();
  const maxX = cardRect.width - noRect.width - 24;
  const maxY = cardRect.height - noRect.height - 24;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  noButton.style.transform = `translate(${newX}px, ${newY}px)`;
});

noButton.addEventListener('click', (event) => {
  event.preventDefault();
});
