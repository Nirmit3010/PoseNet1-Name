noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size=(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(650, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet Initialised");
}
function draw()
{
    background("#00d4ff");
    document.getElementById("sqSide").innerHTML=("width and height of square is="+difference+"px");
    fill("#020024");
    //circle(noseX, noseY, difference); the circle
    //square(noseX, noseY, difference); the square
    textSize(difference);
    text("Nirmit", noseX, noseY);

}
function gotPoses(results)
{
if (results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX);
    console.log("noseY="+noseY);
    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    console.log("rightWristX="+rightWristX);
    console.log("leftWristX="+leftWristX);
    difference=floor(leftWristX-rightWristX);
    console.log("LH-RH diff="+difference);    
}
}