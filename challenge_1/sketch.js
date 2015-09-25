function setup() {
	// create a place to draw (resclaed the background)
	createCanvas(640, 450);
	noStroke();
	noLoop();
}

function draw() {
	// set a background color for challenge 1 color
	background(50, 50, 50);

  // give a loop condition for 10 times for 10 square
	for(var i = 0; i < 10; i++){

  //give a white stroke attribute to the square
	strokeWeight(1);
  stroke(255,255,255);

	//give a fill color [ black to red spectrum - (255 / 10 = 25.5  )]
	fill(25.5*i,0,0)

	//draw 10 squares using loop
	rect(10.5+63*i,200,52,52)
}













	}
