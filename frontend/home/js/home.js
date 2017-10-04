var x = 0;
var y = 0;
var canvasPosY;

var canvasDimensions = Math.floor(((document.body.clientWidth-(document.body.clientWidth/4))-(document.body.clientWidth/4))/100)*100;
var canvasPosX = document.body.clientWidth/4;
if((document.body.clientHeight-canvasDimensions)/2 > 0){
  canvasPosY = (document.body.clientHeight-canvasDimensions)/2;
}else{
  canvasPosY = 0;
}

var vertLine = new Array(canvasDimensions/20);
var horiLine = new Array(canvasDimensions/20);

function setup(){
  canvas = createCanvas(canvasDimensions,canvasDimensions);
  console.log("height: "+document.body.clientHeight+" canvas start: "+document.body.clientHeight/4);

  canvas.position(canvasPosX,canvasPosY);
  canvas.style('z-index','1');
  console.log(canvasDimensions);
  background(85,85,85);
}

function draw(){
  for (var i = 0; i < vertLine.length; i++) {
    vertLine[i] = new drawVertLine();
  }

  for (var i = 0; i < horiLine.length; i++) {
   horiLine[i] = new drawHoriLine();
  }
}

function drawVertLine(){
  xVLine = (canvasDimensions/canvasDimensions);
  x = x + (xVLine * 20);
  line(x,0,x,canvasDimensions);
}

function drawHoriLine(){
  yHLine = (canvasDimensions/canvasDimensions);
  y = y + (yHLine * 20);
  line(0,y,canvasDimensions,y);
}
