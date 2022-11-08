img="";
status="";
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
od=ml5.objectDetector('cocossd',modelLoaded);
}
function draw(){
image(img,0,0,640,420);
fill('blue');
noFill();
text("Dog",45,75);
stroke('red');
rect(30,60,450,350);

fill('orange');
noFill();
stroke('blue');
text("cat",320,120);
rect(300,90,270,320);
}
function modelLoaded(){
    console.log('modelLoaded');
    status=true;
    od.detect(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error);
}
console.log(results);
}