function setup() {
	// create a place to draw (resclaed the background)
	createCanvas(610, 460);
	noStroke();
}

function draw() {
  // set a background color for bonus
	background(50, 50, 50);

  // give a loop condition for 10 horizontal square 8 vertical square
	for(var x = 0; x < 10; x++)
	for(var y = 0; y < 8; y++){
  var z = random(0,120)
	//give a fill color [ each R,G,B should be same but random at the same time )]
	fill(z,z,z);

	//draw 10 squares using loop
	rect(60 * x, 60 * y, 70, 70);
  }
}
