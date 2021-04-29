var orangeX=290;
var orangeY=170;
var orangeXSpeed;
var orangeYSpeed;

var limeX=130;
var limeY=130;
var limeXSpeed;
var limeYSpeed;

var bananaX=235;
var bananaY=120;
var bananaDirection;

var grapefruitX=150;
var grapefruitY=270;
var grapefruitDirection;




var size=16;
var count=0;
var sizeDirection=1;

var plate=250;
var plateCount=0;
var plateDirection=1;



function setup() {
  createCanvas(400, 400);
orangeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 5);
    orangeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
   limeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    limeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
  bananaDirection = Math.floor(Math.random() * 10);
  grapefruitDirection = Math.floor(Math.random() * 10);

}

function draw() {
  //background
  background(104,51,9);
  strokeWeight(1);

  //plate
  fill(242,241,239);
  rectMode (CENTER);
  rect(200,200,plate);

    plate += plateDirection;
  plateCount++;
  if(plateCount > 150) {
    plateDirection *= -1;
    plateCount = -100;
  }



  //cheese
  fill(243,230,190);
  triangle(280, 285, 308, 230, 340, 285);



  //grapefruit
  fill(253,154,126)
  circle(grapefruitX, grapefruitY, 150);



    //banana
  fill(246,218,115);
  arc(bananaX, bananaY, 110, 80, 0, PI + QUARTER_PI, PIE);



    //lime
  fill(85,118,26);
  ellipse(limeX,limeY,75,50);


    //create random speed for lemon
    limeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    limeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
    // move the second shape
    limeX += limeXSpeed;
    limeY += limeYSpeed;
    // check to see if the shape has gone out of bounds
    if(limeX > width)
    {
        limeX = 0;
    }
    if(limeX < 0)
    {
        limeX = width;
    }
    if(limeY > height)
    {
        limeY = 0;
    }
    if(limeY < 0)
    {
        limeY = height;
    }



  //orange
  fill(220,109,2);
  circle(orangeX,orangeY,90);

      //create random speed for shape
    orangeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 5);
    orangeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
    // move the shape
    orangeX += orangeXSpeed;
    orangeY += orangeYSpeed;
    // check to see if the shape has gone out of bounds
    if(orangeX > width)
    {
        orangeX = 0;
    }
    if(orangeX < 0)
    {
        orangeX = width;
    }
    if(orangeY > height)
    {
        orangeY = 0;
    }
    if(orangeY < 0)
    {
        orangeY = height;
    }



  //title
  fill(246,247,205);
  rectMode(CORNER);
  rect(320,10,75,55);
  fill(0);
  textSize(size);

  text('Fruit', 335, 30);
  text('Platter', 335, 50);

}
