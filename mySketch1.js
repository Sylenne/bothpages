let font1;
let img;
let imgs = [];
let pg;
let slider;
let firstCopyW, firstCopyH;
let angle1 = 0;
let scalar = 20;



function preload() {
  font1 = loadFont('itc-avant-garde-gothic-std-bold-589572c7e9955.otf');

}

function setup() {
	createCanvas(windowWidth, windowHeight)
		pixelDensity(1.0);
  
	
	
	img = createGraphics(windowWidth,windowHeight);
	img.background(255);
	img.fill(0);
	img.textFont(font1);
	img.textSize(500);
	img.translate(width / 2, height / 2);
	img.textAlign(CENTER, CENTER);
}



function draw() {

	background(0);
	
	firstCopyW = windowWidth/5;
	firstCopyH = windowHeight/5;
	
	let ang1 = radians(angle1);
  let x1 = scalar * cos(ang1);
	
	img.background(255);
	push();
	img.translate(x1, 0);
	pop();
	img.text("SHASHAMANI", 0, 0);
	
	for(let i = 10; i > 1; i--){
		imageMode(CENTER);
    push();
    translate(width / 2, height / 2);
		image(img, 0, 0, firstCopyW*i, firstCopyH*i);
		pop();
	}

	angle1 += 1;
}