const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');

// CANVAS 1

canvas1.width = 300;
canvas1.height = 200;
const ctx1 = canvas1.getContext('2d');

// Définir la position de départ du serpent et de la pomme
let snake = [
  {x: 200, y: 100},
  {x: 190, y: 100},
  {x: 180, y: 90},
  {x: 170, y: 90},
  {x: 160, y: 100},
  {x: 150, y: 100},
  {x: 140, y: 90},
  {x: 130, y: 90},
  {x: 120, y: 100}
];
let apple = {x: 100, y: 100};

// Dessiner le serpent
ctx1.strokeStyle = 'black';
ctx1.lineWidth = 10;
ctx1.lineCap = 'round';

ctx1.beginPath();
ctx1.moveTo(snake[0].x, snake[0].y);

for (let i = 1; i < snake.length; i++) {
  ctx1.lineTo(snake[i].x, snake[i].y);
}

ctx1.stroke();

ctx1.fillStyle = 'black';
ctx1.fillRect(apple.x, apple.y, 10, 10);

// CANVAS 2

canvas2.width = 300;
canvas2.height = 200;
const ctx2 = canvas2.getContext('2d');

// Dessiner la balle
ctx2.beginPath();
ctx2.arc(150, 100, 10, 0, 2 * Math.PI);
ctx2.fillStyle = 'black';
ctx2.fill();

// Dessiner la raquette
ctx2.beginPath();
ctx2.rect(100, 180, 100, 10);
ctx2.fillStyle = 'black';
ctx2.fill();

// Dessiner les briques
ctx2.fillStyle = 'black';
ctx2.fillRect(20, 20, 50, 20);
ctx2.fillRect(90, 20, 50, 20);
ctx2.fillRect(160, 20, 50, 20);
ctx2.fillRect(230, 20, 50, 20);
