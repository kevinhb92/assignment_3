  //assign start position and speed for ball 1
  var BallX1 = 320;
  var BallY1 = 200;
  var BallSpeedX1 = 1;
  var BallSpeedY1 = 1;

  function setup() {
  // create a canvas to draw
  createCanvas(640, 450);
  }

  function draw() {

  //assign animation to the Ball
  BallX1 = BallX1 + BallSpeedX1;
  BallY1 = BallY1 + BallSpeedY1;


  //make it stop when it arrives to cursor
  if (BallX1 === 0) {
  BallSpeedX1 = 0;
  }

  if (BallY1 === 0) {
  BallSpeedY1 = 0;
  }


  //set-up the (horizontal) out of bound

  if (BallX1 > 640) {
  BallSpeedX1 = -BallSpeedX1;
  }

	   // make ball to come closer to cursur
	   if (BallX1 < mouseX) {
     BallSpeedX1 = -BallSpeedX1;
     }

     if (BallX1 > mouseX) {
     BallSpeedX1 = BallSpeedX1;
     }

  if (BallX1 < 0) {
  BallSpeedX1 = -BallSpeedX1;
  }



//set-up the (Vertical) out of bound
if (BallY1 > 450) {
BallSpeedY1 = -BallSpeedY1
}

  // make ball to come closer to cursur
  if (BallY1 > mouseY) {
  BallSpeedY1 = BallSpeedY1;
  }

  if (BallY1 < mouseY) {
  BallSpeedY1 = -BallSpeedY1;
  }

if (BallY1 < 0) {
BallSpeedY1 = -BallSpeedY1
}



// Background color black
background(0,0,0);

// draw Ball 1
ellipse(BallX1+random(-5,5),BallY1+random(-5,5),50,50)

}
