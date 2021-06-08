var box,canvas;
var ob1,ob2;

function setup()
{
    createCanvas(400,400);

    box = createSprite(200,350,20,20);
    box.shapeColor="red";   

    ob1 = createSprite(150,200,300,5);
    ob1.shapeColor="yellow";
    ob1.velocityX = 3;

    ob2 = createSprite(250,250,300,5);
    ob2.shapeColor="yellow";
    ob2.velocityX = -3;

    edges = createEdgeSprites();

}

function draw()
{
    background("black");

    ob1.bounceOff(edges);
    ob2.bounceOff(edges);

    if(keyDown(DOWN_ARROW)){
        box.velocityX = 0;
        box.velocityY = 3;
    }
    if(keyDown(RIGHT_ARROW)){
        box.velocityX = 3;
        box.velocityY = 0;
    }
    if(keyDown(UP_ARROW)){
        box.velocityX = 0;
        box.velocityY = -3;
    }
    if(keyDown(LEFT_ARROW)){
        box.velocityX = -3;
        box.velocityY = 0;
    }
    if(box.isTouching(ob1) ||box.isTouching(ob2)){
        box.velocityX = 0;
        box.velocityY = 0;
        ob1.velocityX = 0;
        ob2.velocityX = 0;
        fill("yellow");
        textSize(25);
        text("HEY U LOST!!!",150,150);
    }
    drawSprites();
}



