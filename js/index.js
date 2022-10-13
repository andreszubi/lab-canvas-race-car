const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext("2d");
const startButton = document.querySelector('#start-button');

const background = new Image()
background.src = '../images/road.png';
const background2 = new Image()
background.src = '../images/road.png';


const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const car = new Image()
car.src = '../images/car.png';

const carWidth = 60;
const carLength = 110;
let playerCarPositionX = 320;
let playerCarPositionY = 580;
let carMovement = 0;
let carSpeed = 5;


const drawCar = () =>
ctx.drawImage(car,playerCarPositionX, playerCarPositionY, carWidth, carLength );

const moveCar = () => {
if (playerCarPositionX + carMovement <= canvas.width - 100 && playerCarPositionX + carMovement >= 0) {
  playerCarPositionX += carMovement;
}
}



let obstacleX1 = 80;
let obstacleY1 = 100;

let obstacleX2 = 200;
let obstacleY2 = 250;

let obstacleX3 = 80;
let obstacleY3 = 380;

let obstacleX4 = 400;
let obstacleY4 = 100;

let obstacleX5 = 300;
let obstacleY5 = 350;

const obstacles = () => {
  ctx.drawImage(car,obstacleX1 , obstacleY1 , carWidth
    , carLength );
   ctx.drawImage(car,obstacleX2 , obstacleY2 , carWidth
      , carLength );
      ctx.drawImage(car,obstacleX3 , obstacleY3 , carWidth
        , carLength );
        ctx.drawImage(car,obstacleX4 , obstacleY4, carWidth
          , carLength );
          ctx.drawImage(car,obstacleX5, obstacleY5, carWidth
            , carLength );

    obstacleY1 += 7;
    obstacleY2 += 7;
    obstacleY3 += 7;
    obstacleY4 += 7;
    obstacleY5 += 7;
}

let bgx = 0;
let bgy = 0;
let bgy2 = -canvasHeight;


let movingRoad = () => {
  

  ctx.clearRect(0,0,canvasWidth, canvasHeight);
  ctx.drawImage(background,bgx,bgy,canvasWidth, canvasHeight);
  ctx.drawImage(background2,bgx,bgy2, canvasWidth, canvasHeight);
   
  bgy += 5;
  bgy2 += 5;

 if (bgy >= canvas.height) {
  ctx.drawImage(background,bgx,bgy,canvasWidth, canvasHeight);
  }  else if (bgy2 >= canvas.height)  {
    ctx.drawImage(background2,bgx,bgy2, canvasWidth, canvasHeight);
  }

}


let isGameOver = false;
let gameId = 0;


let score = 0;

let drawScore = () => {
  ctx.beginPath();
  ctx.font = "60px sans-serif";
  ctx.fillText(score, 50, 70);
}


const animate = () => {
  movingRoad();
    drawCar();
    moveCar();
  obstacles();
  drawScore();

  
 if (isGameOver) {
 cancelAnimationFrame(gameId);
  } else {
 gameId = requestAnimationFrame(animate);
  }
  
    if (gameId === 10000) {
      isGameOver = true;
    }
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    startButton.style.display = 'none';
    animate()
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        carMovement = -carSpeed;
      }
      if (event.key === 'ArrowRight') {
        carMovement = carSpeed;
      }
    })
    document.addEventListener('keyup', () => {
      carMovement = 0;
    })
  }
};
