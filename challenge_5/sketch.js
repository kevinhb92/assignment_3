  //assign start position and speed for ball 1
  var BallX1 = 320;
  var BallY1 = 200;
  var BallSpeedX1 = 3;
  var BallSpeedY1 = 3;


  function setup() {
  // create a canvas to draw
  createCanvas(640, 450);
  }

  function draw() {

  //make the ball to follow x-cordinate of mouse cursur
  if (BallX1 < mouseX) BallSpeedX1 = 3;
  if (BallX1 > mouseX) BallSpeedX1 = -3;

  //make the ball to follow y-cordinate of mouse cursur
	if (BallY1 < mouseY) BallSpeedY1 = 3;
  if (BallY1 > mouseY) BallSpeedY1 = -3;

  // give animation to the ball
  BallX1 = BallX1 + BallSpeedX1;
  BallY1 = BallY1 + BallSpeedY1;

  // Background color black
  background(0,0,0);

  // draw Ball 1
  ellipse(BallX1,BallY1,50,50);
}
