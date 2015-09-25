function setup() {
	// create a place to draw
	createCanvas(640, 460);
	noStroke();
	noLoop();
}

function draw() {
	// change the background color for challenge_2
	background(130,130,170);

	// give a condition to white circle not to have fill but white stroke
	noFill();
	strokeWeight(1);
  stroke(255,255,255);

	//loop condition for 20 white circle
	 for(var white = 0; white < 20; white++) {

	// draw the white ellipse
	ellipse(320, 230, 20+40*white, 20+40*white);
}


// give a condition to black circle not to have fill but black stroke
noFill();
strokeWeight(1);
stroke(0,0,0);

//loop condition for 20 balck circle
 for(var black = 0; black < 20; black++) {

// draw the ellipse
ellipse(320, 230, 40+40*black, 40+40*black);
}








}
