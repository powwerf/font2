nosex = 0;
nosey = 0;
difference = 0;
rightWristx = 0;
leftWristx = 0;
function setup(){
    video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(560, 150);
poseNet =  ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function draw(){
    background("purple")
}




