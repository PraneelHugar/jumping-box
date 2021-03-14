var canvas;
var music;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "green";
    
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "blue";
    
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "pink";
    
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 9;
    ball.velocityY  = 8;
}

function draw() {
    background('black');
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "green"
        music.play();
    } 

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "blue"
        music.play();
        
    } 


    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "pink"
        music.play();
    } 
    

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow"
        music.play();
    } 
    drawSprites();
}
