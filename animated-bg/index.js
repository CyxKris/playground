
// import './css/styles.css'

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector(".interactive");

  function move() {
    currentX += (targetX - currentX) / 20;
    currentY += (targetY - currentY) / 20;

    interBubble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;

    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  move();
});