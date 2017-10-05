function snake(){
  console.log(canvasDimensions);
  this.x = Math.round(random(canvasDimensions-20)/20)*20;
  this.y = Math.round(random(canvasDimensions-20)/20)*20;
  this.directionX = 20;
  this.directionY = 0;
  this.timesEatin = 0;
  this.tail = [];
  this.snakePiece = (canvasDimensions/canvasDimensions)*20;
  fill(63,139,221);

  this.aSnake = new Array(1);
  this.foodCount = 0;
  this.timesEatin = 0;

  this.foodLoc = function(){
    var foodX = Math.round(random(canvasDimensions-20)/20)*20;
    var foodY = Math.round(random(canvasDimensions-20)/20)*20;

    foodLoc = [foodX, foodY];

    return foodLoc;
  }

  this.snakeAte = function(){
    if(this.timesEatin == 0){
      for (var i = 0; i < 4; i++) {
        this.tail[this.timesEatin-1] = {
          x:this.x,
          y:this.y
        }

        this.tail[i] = this.tail[i+1];

        this.timesEatin ++;

        console.log(this.tail[i]);
      }
    }else if(this.timesEatin > 0){
      this.timesEatin++;
    }

    console.log(this.tail[0]);
    console.log(this.tail[1]);
    console.log(this.tail[2]);
  }

  this.moveSnake = function(keycode){
    if(keycode === UP_ARROW){
      this.directionX = 0;
      this.directionY = -20;
      if(this.y + this.directionY >= this.y){
        this.directionX = 0;
        this.directionY = 0;
      }else{
        this.directionX = 0;
        this.directionY = -20;
      }
    }

    if(keycode === DOWN_ARROW){
      this.directionX = 0;
      this.directionY = 20;
      if(this.y + this.directionY <= this.y){
        this.directionX = 0;
        this.directionY = 0;
      }else{
        this.directionX = 0;
        this.directionY = 20;
      }
    }

    if(keycode === LEFT_ARROW){
      this.directionX = -20;
      this.directionY = 0;
      if(this.x + this.directionX >= this.x){
        this.directionX = 0;
        this.directionY = 0;
      }else{
        this.directionX = -20;
        this.directionY = 0;
      }
    }

    if(keycode === RIGHT_ARROW){
      this.directionX = 20;
      this.directionY = 0;
      if(this.x + this.directionX <= this.x){
        this.directionX = 0;
        this.directionY = 0;
      }else{
        this.directionX = 20;
        this.directionY = 0;
      }
    }
  }

  this.update = function(){;
    this.tail[this.timesEatin-1] = {
      x:this.x,
      y:this.y
    }
    for (var i = 0; i < this.timesEatin-1; i++) {
      this.tail[i] = this.tail[i+1];
    }


    if(this.x + this.directionX >= canvasDimensions|| this.y + this.directionY >= canvasDimensions||this.x + this.directionX<0||this.y + this.directionY<0){
      this.x = this.x;
      this.y = this.y;
    }else{
      this.x += this.directionX;
      this.y += this.directionY;
    }
  }

  this.show = function(){
    background(85,85,85);
    this.foodXY = this.foodLoc();

    for (var i = 0; i < this.timesEatin; i++) {
      rect(this.tail[i].x, this.tail[i].y,this.snakePiece,this.snakePiece);
    }

    this.aSnake[0] =  rect(this.x, this.y, this.snakePiece, this.snakePiece);

    fill(237,34,93);
    if (this.foodCount == 0) {
      this.food = {
        x:this.foodXY[0],
        y:this.foodXY[1],
        width:this.snakePiece,
        height:this.snakePiece
      }
      rect(this.food.x,this.food.y,this.food.height,this.food.width);
      this.foodCount++;
    }else{
      rect(this.food.x,this.food.y,this.food.height,this.food.width);
    }
    fill(63,139,221);

    if(this.x == this.food.x && this.y == this.food.y){
      this.foodCount = 0;
      this.foodXY = this.foodLoc();
      this.snakeAte();
    }
  }
}
