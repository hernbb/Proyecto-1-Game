const canvas = document.getElementById("snakeGame");
const ctx = canvas.getContext("2d");

let tileCount = 30;
let tileSize = canvas.width / tileCount - 2;

let xVelocity = 0;
let yVelocity = 0;

let cabezaImage = new Image();
cabezaImage.src = "images/—Pngtree—cartoon green snake head free_4721641.png";

class Head {
  constructor(x, y, ancho, alto, imagen) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen = imagen;
  }
  //   dibujar() {
  //     ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
  //   }
}
let head = new Head(10, 10, 20, 20, cabezaImage);

function drawGame() {
  clearScreen();
  drawSnake();
}

function clearScreen() {
  ctx.fillStyle = "#A0E089";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.drawImage(
    head.imagen,
    head.x * tileCount,
    head.y * tileCount,
    head.ancho,
    head.alto
  );
}

drawGame();

//   ctx.fillStyle = "#344B47";
//   ctx.fillRect(headX, headY, tileSize, tileSize);
//   ctx.beginPath();
//   ctx.arc(
//     headX * tileCount,
//     headY * tileCount,
//     tileSize,
//     0 * Math.PI,
//     2 * Math.PI
//   );
//   ctx.fillStyle = "#001900";
//   ctx.fill();
