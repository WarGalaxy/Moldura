function preload(){

}

function setup(){
canvas = createCanvas(650,480);
canvas.position(635,250);
video = createCapture(VIDEO);
video.hide();
circle(50, 50, 80);
circle(600, 50, 80);
circle(50, 425, 80);
circle(600, 425, 80);
rect(48, 90, 5, 295);
rect(597, 90, 5, 295);
rect(90, 47, 470, 5);
rect(90, 425, 470, 5);


}

function draw(){
image(video, 100, 100, 450, 280);


}

function takeSnapshot(){
    save('Photo com moldura.png');
}
