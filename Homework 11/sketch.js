// x and y for my character
var characterX = 550;
var characterY = 52;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 550;
var shapeY = 550;
var shapeXSpeed;
var shapeYSpeed;

// x and y for second shape
var shapebX = 200;
var shapebY = 500;
var shapebXSpeed;
var shapebYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 600);

    // get a random speed when it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 5);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);

    shapebXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapebYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
}

function draw()
{
    background(94,100,100);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width-350, 10);
    rect(350, height-10,width, 10);
    // right border
    rect(width-10,0,10,height);

    // exit message
    textSize(17);
    fill(255,255,255);
    text("EXIT", width-320,height-20);

    //character
    fill(210,175,174);
    ellipse(characterX,characterY,75,45);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }

    // potential enemy
    fill(165,198,177);
    // draw the shape
    square(shapeX, shapeY, 40);

  // potential second enemy
    fill(244,200,140);
    // draw the shape
    rect(shapebX,shapebY,55,55,20);



    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

  // move the second shape
    shapebX += shapebXSpeed;
    shapebY += shapebYSpeed;

    // check to see if the shape has gone out of bounds
    if(shapebX > width)
    {
        shapebX = 0;
    }
    if(shapebX < 0)
    {
        shapebX = width;
    }
    if(shapebY > height)
    {
        shapebY = 0;
    }
    if(shapebY < 0)
    {
        shapebY = height;
    }

    // check to see if the character has left the exit
    if(characterX > width-350 && characterY > width-10)
    {
        fill(255,255,255);
        stroke(5);
        textSize(46);
        text("You Win!", width/2-85, height/2-50);
    }

    // create the shape based on the mouse click
    fill(204,136,62);
    circle(mouseShapeX, mouseShapeY, 100);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
