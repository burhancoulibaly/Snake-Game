function snake(){
  console.log(canvasDimensions);
  this.x = Math.round(random(canvasDimensions-20)/20)*20;
  this.y = Math.round(random(canvasDimensions-20)/20)*20;
  this.directionX = 20;
  this.directionY = 0;
  this.timesEatin = 0;
  this.tail = [{x:this.x,y:this.y}];
  this.snakePiece = (canvasDimensions/canvasDimensions)*20;
  fill(63,139,221);

  this.aSnake = new Array(1);
  this.foodCount = 0;

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

        this.timesEatin ++;

        this.tail[i] = this.tail[i+1];
      }
    }else if(this.timesEatin > 0){
      this.timesEatin++;
    }
  }

  this.moveSnake = function(keycode){
    if(keycode === UP_ARROW){
      if(this.tail.length > 1 && this.timesEatin == this.tail.length){
        console.log("h");
        var pos = this.tail[this.timesEatin-1];
        var pos2 = this.tail[this.timesEatin-2];
        if(pos.y + this.directionY > pos2.y){
          console.log("o");
          this.directionX = this.directionX;
          this.directionY = this.directionY;
        }else{
          this.directionX = 0;
          this.directionY = -20;
        }
      }else{
        this.directionX = 0;
        this.directionY = -20;
      }
    }


    if(keycode === DOWN_ARROW){
      if(this.tail.length > 1 && this.timesEatin == this.tail.length){
        console.log("h");
        var pos = this.tail[this.timesEatin-1];
        var pos2 = this.tail[this.timesEatin-2];
        if(pos.y + this.directionY < pos2.y){
          console.log("o");
          this.directionX = this.directionX;
          this.directionY = this.directionY;
        }else{
          this.directionX = 0;
          this.directionY = 20;
        }
      }else {
        this.directionX = 0;
        this.directionY = 20;
      }
    }

    if(keycode === LEFT_ARROW){
      if(this.tail.length > 1 && this.timesEatin == this.tail.length){
        console.log("h");
        var pos = this.tail[this.timesEatin-1];
        var pos2 = this.tail[this.timesEatin-2];


        console.log(pos.x == pos2.x);
        console.log(pos.y == pos2.y);
        console.log(pos);
        console.log(pos2);
        if(pos.x + this.directionX > pos2.x){
          console.log("o");
          this.directionX = this.directionX;
          this.directionY = this.directionY;
        }else{
          this.directionX = -20;
          this.directionY = 0;
        }
      }else {
        this.directionX = -20;
        this.directionY = 0;
      }
    }

    if(keycode === RIGHT_ARROW){
      if(this.tail.length > 1 && this.timesEatin == this.tail.length){
        console.log("h");
        var pos = this.tail[this.timesEatin-1];
        var pos2 = this.tail[this.timesEatin-2];
        if(pos.x + this.directionX < pos2.x){
          console.log("o");
          this.directionX = this.directionX;
          this.directionY = this.directionY;
        }else{
          this.directionX = 20;
          this.directionY = 0;
        }
      }else {
        this.directionX = 20;
        this.directionY = 0;
      }
    }
  }

  this.ateItslf = function(){
    console.log(this.tail.length);
    if(this.tail.length > 4 && this.timesEatin == this.tail.length){
      console.log("shit");
      for(var i = 0; i < this.tail.length; i++){
        var pos = this.tail[i];
        var d = dist(this.x,this.y,pos.x,pos.y);
        if(d == 0){
          this.timesEatin = 0;
          this.tail = [];
        }
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
      if(this.tail.length >= 4 && this.timesEatin == this.tail.length){
        console.log("h");
        var pos = this.tail[this.timesEatin-1];
        if(pos.x + this.directionX >= canvasDimensions|| pos.y + this.directionY >= canvasDimensions||pos.x + this.directionX<0||pos.y + this.directionY<0){
          console.log("o");
          this.timesEatin = 0;
          this.tail = [];
        }
      }
    }else{
      this.x += this.directionX;
      this.y += this.directionY;
    }
  }

  this.show = function(){
    background(85,85,85);
    this.foodXY = this.foodLoc();

    for (var i = 0; i < this.timesEatin-1; i++) {
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
