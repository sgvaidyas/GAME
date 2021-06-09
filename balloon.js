var canvas,blueballoon;
var blueballoonImg;

function preload()
{
    blueballoonImg = loadImage('balloon.png')
}
function setup()
{
    canvas=createCanvas(800,700);

}

function draw()
{
    background(0);


    moveBalloon()
    drawSprites();
}

function moveBalloon()
{
    if(frameCount%60==0){
        blueballoon = createSprite(800,150,60,40);
        var y =  Math.round(random(100,400))
        console.log(y)
        blueballoon.y =y
        blueballoon.velocityX = -3;
        blueballoon.addImage('blueBalloon',blueballoonImg);
        blueballoon.scale=0.2;
        blueballoon.lifetime = 267;
       
        blueballoon.debug=true;
    }
    
}