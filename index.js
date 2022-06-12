const canvas = document.getElementById("snakeGame");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;

const snakeParts = [];
let tailLength = 2;

let xVelocity = 0;
let yVelocity = 0;

let foodX = 5;
let foodY = 5;

let cabezaImage = new Image();
cabezaImage.src = "images/New Head abajo.png";
let foodImage = new Image();
foodImage.src = "images/manzana roja.png";
let cuerpoImage = new Image();
cuerpoImage.src = "images/cuerpo .png";

//game loop

function drawGame() {
  clearScreen();
  //   console.log("draw game");
  changeSnakePosition();
  checkFoodCollision();
  drawFood();
  drawSnake();
  setTimeout(drawGame, 100); /*setTimeOut give the opportunity to change 
  how often are our screen get updated*/
}

function clearScreen() {
  ctx.fillStyle = "#00642C";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawSnake() {
  if (headX < 0) {
    headX = tileCount - 1;
  }
  if (headX > tileCount - 1) {
    headX = 0;
  }
  if (headY < 0) {
    headY = tileCount - 1;
  }
  if (headY > tileCount - 1) {
    headY = 0;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.drawImage(
      cuerpoImage,
      part.x * tileCount,
      part.y * tileCount,
      tileSize,
      tileSize
    );
  }
  snakeParts.push(new SnakePart(headX, headY)); // ponemos el item al final del array al lado de la cabeza
  if (snakeParts.length > tailLength) {
    snakeParts.shift(); // se remueven los demas items de la snake si tenemos mas de el tailsize
  }

  ctx.drawImage(
    cabezaImage,
    headX * tileCount,
    headY * tileCount,
    tileSize,
    tileSize
  );
}
function changeSnakePosition() {
  headX += xVelocity;
  headY += yVelocity;
}

function drawFood() {
  ctx.drawImage(
    foodImage,
    foodX * tileCount,
    foodY * tileCount,
    tileSize,
    tileSize
  );
}
function checkFoodCollision() {
  if (foodX === headX && foodY === headY) {
    foodX = Math.floor(Math.random() * tileCount);
    foodY = Math.floor(Math.random() * tileCount);
    tailLength++;
  }
}

document.body.addEventListener("keydown", Keys);

function Keys(e) {
  //Source https://css-tricks.com/snippets/javascript/javascript-keycodes/
  // going up
  if (e.keyCode === 38 || e.keyCode === 87) {
    if (yVelocity === 1) {
      return;
    }
    cabezaImage.src = "images/New Head arriba copia.png";
    xVelocity = 0;
    yVelocity = -1;
  }
  //going down
  if (e.keyCode === 40 || e.keyCode === 83) {
    if (yVelocity === -1) {
      return;
    }
    cabezaImage.src = "images/New Head abajo.png";
    xVelocity = 0;
    yVelocity = 1;
  }
  //going right
  if (e.keyCode === 39 || e.keyCode === 68) {
    if (xVelocity === -1) {
      return;
    }
    cabezaImage.src = "images/New Head derecha.png";
    xVelocity = 1;
    yVelocity = 0;
  }
  //going left
  if (e.keyCode === 37 || e.keyCode === 65) {
    if (xVelocity === 1) {
      return;
    }
    cabezaImage.src = "images/New Head izq copia.png";
    xVelocity = -1;
    yVelocity = 0;
  }
}

drawGame();
