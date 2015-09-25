function setup() {
	// create a place to draw
	createCanvas(640, 450);
	noStroke();

}

function draw() {
	// give a condition to background to change the color if mouse-clicked
	if (mouseIsPressed) {
	background(50,50,100);
} else {
	background(150,0,0);
}

}
