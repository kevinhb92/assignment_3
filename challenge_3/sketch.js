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

  //give a characteristics to drawing
  noFill();
	strokeWeight(1);
  stroke(255,255,255);

   //draw a horizontal line
	  line(mouseX,0,mouseX,450)

   //draw a vertical line
  	line(0,mouseY,640,mouseY)

  //draw a circle that changes color when mouse-clicked
  if (mouseIsPressed) {
	fill(50,50,100)
  ellipse(mouseX,mouseY,40,40);

	} else {
	fill(150,0,0)
	ellipse(mouseX,mouseY,40,40);
  }
}
