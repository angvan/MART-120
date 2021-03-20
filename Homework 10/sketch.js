var pupilX=240;
var pupilY=200;
var pupilDirection;

var eyeballX=230;
var eyeballY=200;
var eyeballDirection;

var lipsX=230;
var lipsY=330;
var lipsDirection;

var bighairX=70;
var bighairY=270;
var bighairDirection;

var eyeX=230;
var eyeY=200;
var eyeXDirection=5;
var eyeYDirection=5;

var size=12;
var count=0;
var sizeDirection=1;

var head=350;
var headCount=0;
var headDirection=1;



function setup() {
  createCanvas(400, 400);
  pupilDirection = Math.floor(Math.random() * 10);
  eyeballDirection = Math.floor(Math.random() * 10);
  lipsDirection = Math.floor(Math.random() * 10);
  bighairDirection = Math.floor(Math.random() * 10);
}

function draw() {
  //background
  background(154,213,237);
  fill(72,135,160);
  circle(170,220,450);
  strokeWeight(2);

  //head
  fill(238,199,151);
  circle(170,220,head);

  head += headDirection;
  headCount++;
  if(headCount > 150) {
    headDirection *= -1;
    headCount = -100;
  }

  //nose
  fill(255,225,191);
  triangle(270, 275, 298, 220, 330, 275);
  point(285, 270);
  point(320, 270);

  //hair
  fill(161,127,88)
  rect(225, 90, 85, 55);
  circle(285, 80, 50);
  circle(100, 80, 100);
  circle(220, 70, 100);
  circle(50, 180, 70);
  circle(80, 170, 70);
  circle(60, 110, 70);
  circle(150, 70, 70);
  circle(bighairX, bighairY, 180);
  bighairY += bighairDirection;
  if(bighairY >=315 ||bighairY <=55) {
    bighairDirection *= -1;
  }
  circle(100, 220, 120);
  circle(200, 120, 70);
  circle(40, 200, 120);
  circle(80, 200, 100);
  circle(60, 150, 100);
  circle(130, 150, 100);
  circle(160, 90, 70);
  circle(80, 170, 70);
  line(240, 70, 75, 355);
  line(240, 70, 25, 255);
  line(240, 70, 25, 155);
  line(240, 70, 25, 105);

    //mouth
  fill(249,71,112);
  arc(lipsX, lipsY, 80, 80, 0, PI + QUARTER_PI, PIE);
  lipsX += lipsDirection;
  if(lipsX >= 400 || lipsX <= 0) {
    lipsDirection *= -1;
  }

    //eye
  fill(11111);
  ellipse(eyeX,eyeY,80,50);
  eyeX += eyeXDirection;
  if(eyeX >= 400 || eyeX <= 0) {
    eyeXDirection *= -1;
  }
  eyeY += eyeYDirection;
  if(eyeY <= 0 || eyeY >= 400) {
    eyeYDirection *= -1;
  }
  fill(154,213,237);
  circle(eyeballX,eyeballY,50);
  eyeballY += eyeballDirection;
  if(eyeballY <=0 || eyeballY >=395) {
    eyeballDirection *= -1;
  }
  fill(0);
  circle(pupilX,pupilY,20);
  pupilX += pupilDirection;
  if(pupilX >=395 || pupilX <= 12) {
    pupilDirection *= -1;
  }

  //name
  fill(111111);
  rect(320,340,75,55);
  fill(000)
  textSize(18);
  textStyle(ITALIC);
  text('Angela', 330, 375)

  //title
  fill(111111);
  rect(320,10,75,55);
  fill(249,71,112);
  textSize(size);
  size += sizeDirection;
  count++;
  if(count >5){
    sizeDirection *= -1;
    count = 0;
  }
  text('Living in', 335, 30);
  text('Circles', 335, 50);

}
