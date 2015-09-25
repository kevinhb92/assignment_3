  //assign start position and speed for ball 1
  var BallX1 = 0;
  var BallY1 = 200;
  var BallSpeedX1 = 3;
  var BallSpeedY1 = 3;

  //assign start position and speed for ball 2
  var BallX2 = 0;
  var BallY2 = 100;
  var BallSpeedX2 = 2;
  var BallSpeedY2 = 2;

function setup() {
	// create a canvas to draw
	createCanvas(640, 450);
}

function draw() {

	//assign animation to the Ball 1
	BallX1 = BallX1 + BallSpeedX1;
	BallY1 = BallY1 + BallSpeedY1;

	//assign animation to the Ball 2
	BallX2 = BallX2 + BallSpeedX2;
  BallY2 = BallY2 + BallSpeedY2;

  //set-up the (horizontal) out of bound
	if (BallX1 > 640) {
	BallSpeedX1 = -BallSpeedX1;
	}
	if (BallX2 > 640) {
	BallSpeedX2 = -BallSpeedX2;
  }
	if (BallX1 < 0) {
	BallSpeedX1 = -BallSpeedX1;
	}
	if (BallX2 < 0) {
	BallSpeedX2 = -BallSpeedX2;
  }

	//set-up the (Vertical) out of bound
	if (BallY1 > 450) {
	BallSpeedY1 = -BallSpeedY1;
	}
	if (BallY2 > 450) {
	BallSpeedY2 = -BallSpeedY2;
	}
	if (BallY1 < 0) {
	BallSpeedY1 = -BallSpeedY1;
	}
	if (BallY2 < 0) {
	BallSpeedY2 = -BallSpeedY2;
	}

	// Background color black
	background(0,0,0);

	// draw Ball 1
	ellipse(BallX1,BallY1,50,50);

	// draw ball 2
	ellipse(BallX2,BallY2,50,50);
}
