
//snowman feature variables
	//sky+shadow colours
var cR=231;
var cG=234;
var cB=241;
	//arm stroke thickness
var ARM=5;
	//blueberry buttons
var button=20;
	//snowman body
var bodyWidth = 170;
var bodyHeight = 150;
	//snowman face
var faceWidth = 100;
var faceHeight = 100;
var eyeSize=10;
var eyeBROW=20;
	//carrot colours
var carrotR= 255;
var carrotG= 143;
var carrotB= 28;


//setting landscape
function setup() {
    createCanvas(480, 640);
}


//setting base snowman
function draw() {
    noStroke();
    //skyRandom+Ground
    background(cR, cG, cB);
    fill(255);
    ellipse(240,640,800,600);
    //snowmanSHADOW
    fill(240, 246, 247,95);
    ellipse(width/2,(height/2)+bodyHeight/2,bodyHeight,bodyWidth);
    //snowmanARMS
    stroke(146, 109, 57);
    strokeWeight(ARM);
    line(width/2, height/2, width/3, height/2-bodyHeight/1.75);
    line(width/2, height/2, width/2+width/6, height/2-bodyHeight/1.75);
    //snowmanBody
    noStroke();
    fill(255);
    ellipse(width/2, height/2, bodyWidth, bodyHeight);
    //buttons
    fill (43, 62, 133);
    var buttonTOP = (height/2) - bodyHeight*0.25;
    var buttonMIDDLE = (height/2);
    var buttonBOTTOM = (height/2) + bodyHeight * 0.25;
	ellipse(width/2, buttonTOP, button, button);
    ellipse(width/2, buttonMIDDLE, button, button);
    ellipse(width/2, buttonBOTTOM, button, button);
    //snowmanHEAD SHADOW
    fill(cR,cG,cB,85);
    ellipse(width/2, height/2-bodyHeight/1.9, faceWidth, faceHeight);
    //snowmanHEAD
    fill(255);
    ellipse(width/2, height/2-bodyHeight/1.75, faceWidth, faceHeight);
    //snowmanFACE
    	//eyes
    fill(0);
    var eyeLX = width / 2 - faceWidth * 0.25;
    var eyeRX = width / 2 + faceWidth * 0.25;
    ellipse(eyeLX, height / 2-bodyHeight/1.75, eyeSize, eyeSize);
    ellipse(eyeRX, height / 2-bodyHeight/1.75, eyeSize, eyeSize);
    	//eyebrow
    var eyebrowL = width / 2 - faceWidth * 0.25;
    var eyebrowR = width / 2 + faceWidth * 0.25;
    rect (eyebrowL-10, height / 2-bodyHeight/1.5, eyeBROW, eyeBROW/3);
    rect (eyebrowR-10, height / 2-bodyHeight/1.5, eyeBROW, eyeBROW/3);
    	//nose
    fill(carrotR, carrotG, carrotB);
    triangle (width/2, height/2-bodyHeight/1.75, width/2-10, height/2-bodyHeight/2, width/2+30, height/2-bodyHeight/2);


    //happy sevinold day
    textSize(32);
    fill (43, 62, 133);
    text('Happy Sevinold Day', mouseX, mouseY);
}

function mousePressed(){
	cR=random(220,240);
	cG=random(230,240);
	cB=random(230, 245);
	ARM=random(5,10);
    bodyWidth = random(75,150);
    bodyHeight=random(100,200);
    button=random(10,30);
    faceWidth = random (75,150);
    faceHeight = random(75, 150);
    carrotR=random(200,255);
    carrotG=random(140,200);
    carrotB=random(25,60);

}