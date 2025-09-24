// Crear burbujas flotantes
const numBubbles = 30;

for (let i = 0; i < numBubbles; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Tamaño aleatorio
  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Posición horizontal aleatoria
  bubble.style.left = `${Math.random() * 100}vw`;

  // Velocidad de animación aleatoria
  bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;

  // Color aleatorio
  const colors = ['#FF69B4', '#FF1493', '#D8BFD8', '#FFDAB9', '#FF00AA'];
  bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(bubble);
}