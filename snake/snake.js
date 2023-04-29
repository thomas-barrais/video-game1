// var canvas;
// var canvasContext;
// var snake = [{ x: 300, y: 200 }];
// var apple = { x: 100, y: 100 };
// var direction = "right";
// var score = 0;
// var isPlaying = false;
// var gameLoopId;

// window.onload = function () {
//   canvas = document.getElementById("gameCanvas");
//   canvasContext = canvas.getContext("2d");
//   window.addEventListener("keydown", handleKeyPress);
//   draw();
// };

// function gameLoop() {
//   moveSnake();
//   draw();
//   checkCollisions();
// }

// function moveSnake() {
//   var head = { x: snake[0].x, y: snake[0].y };
//   switch (direction) {
//     case "up":
//       head.y -= 10;
//       break;
//     case "down":
//       head.y += 10;
//       break;
//     case "left":
//       head.x -= 10;
//       break;
//     case "right":
//       head.x += 10;
//       break;
//   }
//   snake.unshift(head);
//   if (head.x === apple.x && head.y === apple.y) {
//     generateApple();
//     score++;
//   } else {
//     snake.pop();
//   }
// }

// function generateApple() {
//   apple.x = Math.floor(Math.random() * ((canvas.width-10) / 10)) * 10;
//   apple.y = Math.floor(Math.random() * ((canvas.height-10) / 10)) * 10;
// }

// function draw() {
//   canvasContext.clearRect(0, 0, canvas.width, canvas.height);
//   canvasContext.fillStyle = "green";
//   snake.forEach(function (part) {
//     canvasContext.fillRect(part.x, part.y, 10, 10);
//   });
//   canvasContext.fillStyle = "red";
//   canvasContext.fillRect(apple.x, apple.y, 10, 10);
//   canvasContext.fillStyle = "black";
//   canvasContext.fillText("Score: " + score, 10, 20);
// }

// function checkCollisions() {
//   var head = snake[0];
//   if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
//     gameOver();
//   }
//   for (var i = 1; i < snake.length; i++) {
//     if (head.x === snake[i].x && head.y === snake[i].y) {
//       gameOver();
//     }
//   }
// }

// function gameOver() {
//   clearInterval(gameLoopId);
//   isPlaying = false;
//   alert("Game over! Your score was " + score);
//   location.reload();
// }

// function handleKeyPress(event) {
//   switch (event.keyCode) {
//     case 38:
//       direction = "up";
//       break;
//     case 40:
//       direction = "down";
//       break;
//     case 37:
//       direction = "left";
//       break;
//     case 39:
//       direction = "right";
//       break;
//   }
// }

// function togglePlay() {
//   if (isPlaying) {
//     clearInterval(gameLoopId);
//     isPlaying = false;
//     document.getElementById("playButton").innerHTML = "Play";
//   } else {
//     gameLoopId = setInterval(gameLoop, 80);
// isPlaying = true;
// document.getElementById("playButton").innerHTML = "Pause";
// }
// }

var canvas;
var canvasContext;
var snake = [{ x: 300, y: 200 }];
var apple = { x: 100, y: 100 };
var direction = "right";
var score = 0;
var isPlaying = false;
var gameLoopId;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  window.addEventListener("keydown", handleKeyPress);
  canvas.addEventListener("touchstart", handleTouchStart);
  canvas.addEventListener("touchmove", handleTouchMove);
  draw();
};

function gameLoop() {
  moveSnake();
  draw();
  checkCollisions();
}

function moveSnake() {
  var head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case "up":
      head.y -= 10;
      break;
    case "down":
      head.y += 10;
      break;
    case "left":
      head.x -= 10;
      break;
    case "right":
      head.x += 10;
      break;
  }
  snake.unshift(head);
  if (head.x === apple.x && head.y === apple.y) {
    generateApple();
    score++;
  } else {
    snake.pop();
  }
}

function generateApple() {
  apple.x = Math.floor(Math.random() * ((canvas.width-10) / 10)) * 10;
  apple.y = Math.floor(Math.random() * ((canvas.height-10) / 10)) * 10;
}

function draw() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "green";
  snake.forEach(function (part) {
    canvasContext.fillRect(part.x, part.y, 10, 10);
  });
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(apple.x, apple.y, 10, 10);
  canvasContext.fillStyle = "black";
  canvasContext.font = "20px Arial";
  canvasContext.fillText("Score: " + score, 10, 20);
}

function checkCollisions() {
  var head = snake[0];
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    gameOver();
  }
  for (var i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver();
    }
  }
}

function gameOver() {
  clearInterval(gameLoopId);
  isPlaying = false;
  alert("Game over! Your score was " + score);
  location.reload();
  document.body.style.overflow = "hidden";
}

function handleKeyPress(event) {
  switch (event.keyCode) {
    case 38:
      direction = "up";
      break;
    case 40:
      direction = "down";
      break;
    case 37:
      direction = "left";
      break;
    case 39:
      direction = "right";
      break;
  }
}

function handleTouchStart(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  this.touchStart = { x: x, y: y };
}

function handleTouchMove(event) {
  if (this.touchStart) {
  var x = event.touches[0].clientX - canvas.offsetLeft;
  var y = event.touches[0].clientY - canvas.offsetTop;
  var dx = x - this.touchX;
  var dy = y - this.touchY;
  // Détermine la direction de déplacement du toucher
  if (Math.abs(dx) > Math.abs(dy)) {
  // Déplacement horizontal
  if (dx > 0) {
    direction = "right";
  } else {
    direction = "left";
  }
} else {
// Déplacement vertical
  if (dy > 0) {
    direction = "down";
  } else {
    direction = "up";
  }
}
this.touchX = null;
this.touchY = null;
this.touchStart = false;
}
}

function handleTouchStart(event) {
this.touchStart = true;
this.touchX = event.touches[0].clientX - canvas.offsetLeft;
this.touchY = event.touches[0].clientY - canvas.offsetTop;
}

function handleTouchEnd(event) {
this.touchStart = false;
}

window.onload = function () {
canvas = document.getElementById("gameCanvas");
canvasContext = canvas.getContext("2d");
window.addEventListener("keydown", handleKeyPress);
canvas.addEventListener("touchstart", handleTouchStart);
canvas.addEventListener("touchmove", handleTouchMove);
canvas.addEventListener("touchend", handleTouchEnd);
draw();
};

function togglePlay() {
  if (isPlaying) {
    clearInterval(gameLoopId);
    isPlaying = false;
    document.getElementById("playButton").innerHTML = "Play";
  } else {
    gameLoopId = setInterval(gameLoop, 80);
    isPlaying = true;
    document.getElementById("playButton").innerHTML = "Pause";
  }
}