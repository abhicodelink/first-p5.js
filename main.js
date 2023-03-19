function preload(){

}

function setup(){
    c = createCanvas(600,400);
    video = createCapture(VIDEO);
video.size(0,0);
video.hide();
}
function draw(){
    image(video , 40,40,520,300);
    noFill()
    stroke(0,255,0)
    strokeWeight(4)
    rect(20,20,560,360)
noStroke();
fill(255,0,0)
   arc(20,20,20,20,0, 2 * Math.PI);
   arc(20,380,20,20,0, 2 * Math.PI);
   arc(580,20,20,20,0, 2 * Math.PI);
   arc(580,380,20,20,0, 2 * Math.PI);

}
function start(){
    saveCanvas(c, 'my_image', 'png');
}