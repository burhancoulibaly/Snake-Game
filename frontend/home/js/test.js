var x = 0;
var y = 0;

function setup(){
  canvas = createCanvas(document.body.clientWidth,document.body.clientHeight);
  canvas.position(0,0);
  canvas.style('z-index','1');
  background(85,85,85);
}

function draw(){
  drawVertLine();
  drawHoritLine();
}

function drawVertLine(){
  xVLine = x + document.body.clientWidth/32
  line(xVLine,0,xVLine,document.body.clientHeight);
}

function drawHoritLine(){
  yHLine = y + document.body.clientHeight/16
  line(0,yHLine,document.body.clientHeight,yHLine);
}
