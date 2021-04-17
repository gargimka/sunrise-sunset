const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    //change the data in JSON format
    var responseJSON=await response.json();
    console.log(responseJSON.datetime);
    
    // write code slice the datetime
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
 if(hour>5 && hour<6){
    bg="sunrise1.png";
 }
else  if(hour>6 && hour<7){
    bg="sunrise2.png";
}
else if(hour>7 && hour<8){
    bg="sunrise3.png";
}
else if(hour>8 && hour<9){
    bg="sunrise4.png";
}
else if(hour>9 && hour<11){
    bg="sunrise5.png";
}
else if(hour>11 && hour<14){
    bg="sunrise6.png";
}
else if(hour>14 && hour<15){
    bg="sunset7.png";
}
else if(hour>15 && hour<16){
    bg="sunset8.png";
}
else if(hour>16 && hour<17){
    bg="sunset9.png";
}
else if(hour>17 && hour<18){
    bg="sunset10.png";
}
else if(hour>18 && hour<19){
    bg="sunset11.png";
}
else {hour>19 && hour<20
    bg="sunset12.png";
}

    //load the image in backgroundImg variable here
backgroundImg.loadImage(bg);
}
