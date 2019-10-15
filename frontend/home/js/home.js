var x;
var y;

var canvasPosY;
var canvasPosX;

var canvasDimensions;

var vertLine;
var horiLine;

var mySnake;

function windowResized(){
  setup();
  draw();
}

function setup(){
  frameRate(10);

  x = 0;
  y = 0;

  canvasDimensions = Math.floor(((document.body.clientWidth-(document.body.clientWidth/4))-(document.body.clientWidth/4))/100)*100;

  canvasPosX = document.body.clientWidth/4;

  if((document.body.clientHeight-canvasDimensions)/2 > 0){
    canvasPosY = (document.body.clientHeight-canvasDimensions)/2;
  }else{
    canvasPosY = 0;
  }

  vertLine = new Array(canvasDimensions/20);
  horiLine = new Array(canvasDimensions/20);

  canvas = createCanvas(canvasDimensions,canvasDimensions);

  canvas.position(canvasPosX,canvasPosY);
  canvas.style('z-index','1');

  background(85,85,85);

  mySnake = new snake();

}

function draw(){
  background(85,85,85);
  for (var i = 0; i < vertLine.length; i++) {
    vertLine[i] = new drawVertLine();
  }

  for (var i = 0; i < horiLine.length; i++) {
   horiLine[i] = new drawHoriLine();
  }
  mySnake.update();
  mySnake.show();
}

function drawVertLine(){
  xVLine = (canvasDimensions/canvasDimensions);
  x = x + (xVLine * 20);
  line(x,0,x,canvasDimensions);
}

function drawHoriLine(){
  // console.log("y: "+y);
  yHLine = (canvasDimensions/canvasDimensions);
  y = y + (yHLine * 20);
  line(0,y,canvasDimensions,y);
}

function keyPressed(){
  mySnake.moveSnake(keyCode);
  mySnake.ateItslf();
  mySnake.update();
  mySnake.show();
}
