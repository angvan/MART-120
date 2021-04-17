// x and y for my character
var characterX = 100;
var characterY = 50;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for first shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// x and y for second shape
var Xshape = 130;
var Yshape = 150;

var Xshapes = [];
var Yshapes = [];
var diametersB = [];

var XshapeSpeeds = [];
var YshapeSpeeds = [];

// x and y for third shape
var XAshape = 130;
var YAshape = 250;

var XAshapes = [];
var YAshapes = [];
var diametersA = [];

var XAshapeSpeeds = [];
var YAshapeSpeeds = [];


// x and y for fourth shape
var XCshape = 130;
var YCshape = 50;

var XCshapes = [];
var YCshapes = [];
var diametersC = [];

var XCshapeSpeeds = [];
var YCshapeSpeeds = [];

// x and y for fifth shape
var XDshape = 30;
var YDshape = 50;

var XDshapes = [];
var YDshapes = [];
var diametersD = [];

var XDshapeSpeeds = [];
var YDshapeSpeeds = [];


// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;


// new objects
var rectangleObject;
var squareObject;
var circleObject;

function setup() {
    createCanvas(600, 600);

    // create the objects
    rectangleObject = new Rectangle(100, 200, 50, 70, 111, 0, 0);
    squareObject = new Square(400, 250, 55, 0, 111, 0);
    circleObject = new Circle(220, 475, 100, 0, 0, 111);

    // get a random speed when the it first starts first shape
    for (var i = 0; i < 10; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

      // get a random speed when the it first starts second shape
    for (var i = 0; i < 10; i++) {
        XshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        Xshapes[i] = getRandomNumber(500);
        Yshapes[i] = getRandomNumber(600);
        diametersB[i] = getRandomNumber(30);
    }

      // get a random speed when the it first starts third shape
    for (var i = 0; i < 10; i++) {
        XAshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YAshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        XAshapes[i] = getRandomNumber(500);
        YAshapes[i] = getRandomNumber(600);
        diametersA[i] = getRandomNumber(30);
    }

    // get a random speed when the it first starts fourth shape
    for (var i = 0; i < 10; i++) {
        XCshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YCshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        XCshapes[i] = getRandomNumber(500);
        YCshapes[i] = getRandomNumber(600);
        diametersC[i] = getRandomNumber(30);
    }

   // get a random speed when the it first starts fifth shape
    for (var i = 0; i < 10; i++) {
        XDshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YDshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        XDshapes[i] = getRandomNumber(500);
        YDshapes[i] = getRandomNumber(600);
        diametersD[i] = getRandomNumber(30);
    }


    createCharacter(characterX, characterY);
}

function draw() {
    background(94,100,100);
    stroke(0);

    //create and display objects
    rectangleObject.display();
    squareObject.display();
    circleObject.display();

    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(17);
    fill(255,255,255);
    text("EXIT", width-320,height-20);

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // first potential enemy
    fill(165,198,177);

    // draw the first shape
    for (var i = 0; i < shapeXs.length; i++) {
        rect(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the first shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];


        // check to see if the first shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }

    }

    // second potential enemy
    fill(122, 141, 109);

    // draw the second shape
    for (var i = 0; i < Xshapes.length; i++) {
        circle(Xshapes[i], Yshapes[i], diametersB[i]);
        XshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the second shape
        Xshapes[i] += XshapeSpeeds[i];
        Yshapes[i] += YshapeSpeeds[i];


        // check to see if the second shape has gone out of bounds
        if (Xshapes[i] > width) {
            Xshapes[i] = 0;
        }
        if (Xshapes[i] < 0) {
            Xshapes[i] = width;
        }
        if (Yshapes[i] > height) {
            Yshapes[i] = 0;
        }
        if (Yshapes[i] < 0) {
            Yshapes[i] = height;
        }

    }

    // third potential enemy
    fill(200, 111, 95);

    // draw the third shape
    for (var i = 0; i < XAshapes.length; i++) {
        circle(XAshapes[i], YAshapes[i], diametersA[i]);
        XAshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YAshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the third shape
        XAshapes[i] += XAshapeSpeeds[i];
        YAshapes[i] += YAshapeSpeeds[i];

        // check to see if the third shape has gone out of bounds
        if (XAshapes[i] > width) {
            XAshapes[i] = 0;
        }
        if (XAshapes[i] < 0) {
            XAshapes[i] = width;
        }
        if (YAshapes[i] > height) {
            YAshapes[i] = 0;
        }
        if (YAshapes[i] < 0) {
            YAshapes[i] = height;
        }

    }

    // fourth potential enemy
    fill(185, 100, 200);

    // draw the fourth shape
    for (var i = 0; i < XCshapes.length; i++) {
        rect(XCshapes[i], YCshapes[i], diametersC[i]);
        XCshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YCshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the fourth shape
        XCshapes[i] += XCshapeSpeeds[i];
        YCshapes[i] += YCshapeSpeeds[i];

        // check to see if the fourth shape has gone out of bounds
        if (XCshapes[i] > width) {
            XCshapes[i] = 0;
        }
        if (XCshapes[i] < 0) {
            XCshapes[i] = width;
        }
        if (YCshapes[i] > height) {
            YCshapes[i] = 0;
        }
        if (YCshapes[i] < 0) {
            YCshapes[i] = height;
        }

    }

    // fifth potential enemy
    fill(85, 150, 200);

    // draw the fifth shape
    for (var i = 0; i < XDshapes.length; i++) {
        circle(XDshapes[i], YDshapes[i], diametersD[i]);
        XDshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        YDshapeSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the fifth shape
        XDshapes[i] += XDshapeSpeeds[i];
        YDshapes[i] += YDshapeSpeeds[i];

        // check to see if the fifth shape has gone out of bounds
        if (XDshapes[i] > width) {
            XDshapes[i] = 0;
        }
        if (XDshapes[i] < 0) {
            XDshapes[i] = width;
        }
        if (YDshapes[i] > height) {
            YDshapes[i] = 0;
        }
        if (YDshapes[i] < 0) {
            YDshapes[i] = height;
        }

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
    fill(200,148,125);
    circle(mouseShapeX, mouseShapeY, 70);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(210,175,174);
    ellipse(characterX,characterY,75,45);
}

function createBorders(thickness) {
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom borders
    rect(0, height-10,width-350, 10);
    rect(350, height-10,width, 10);
    // right border
    rect(width-10,0,10,height);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
