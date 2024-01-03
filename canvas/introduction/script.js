const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

const canvas1 = document.getElementById("canvas-1");
const canvas1Context = canvas1.getContext("2d");

const sizeCanvas = () => {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
};

sizeCanvas();

window.addEventListener("resize", () => {
  sizeCanvas();
});

const drawCircle = () => {
  // drawing a circle
  canvas1Context.fillStyle = "indianred";
  canvas1Context.strokeStyle = "#F1F1F1";
  canvas1Context.lineWidth = 5;
  canvas1Context.beginPath();

  canvas1Context.arc(deviceWidth / 2, deviceHeight / 2, 150, 0, Math.PI * 2);
  canvas1Context.fill();
  canvas1Context.stroke();
};

const draw = (x, y, radius, angle) => {
  canvas1Context.fillStyle = "indianred";
  // canvas1Context.strokeStyle = "#F1F1F1";
  // canvas1Context.lineWidth = 3.5;
  canvas1Context.beginPath();

  canvas1Context.arc(x, y, radius, angle, Math.PI * 2);
  canvas1Context.fill();
  // canvas1Context.stroke();
};

const drawRectangle = (x, y, width, height) => {
  // drawing a rectangle
  canvas1Context.fillStyle = "#F1F1F1";
  canvas1Context.fillRect(x, y, width, height);
};

const mouse = {
  x: undefined,
  y: undefined,
};

canvas1.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  // drawRectangle(mouse.x, mouse.y, 30, 60);
  // draw(mouse.x, mouse.y, 20, 0);
});

canvas1.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  // draw(mouse.x, mouse.y, 20, 0);
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.ceil(Math.random() * 6);
  }
}

const animate = () => {
  canvas1Context.clearRect(0, 0, canvas1.width, canvas1.height);
  draw(mouse.x, mouse.y, 20, 0);
  requestAnimationFrame(animate);
};

drawRectangle(200, 50, 100, 250);
drawCircle();
animate();
