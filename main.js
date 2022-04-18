leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,560);
    video.position(50,150);
    canvas=createCanvas(550,550);
    canvas.position(660,160);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("Left wrist X = " + leftWristX + "   | Right wrist X = " + rightWristX);
        console.log("Difference = " + difference);
    }
}

function draw(){
    background('#F7D1CD');
    textSize(difference);
    fill('#FF8A5B');
    stroke('#EA526F');
    text('Hasika', 50, 400 );
    document.getElementById("text_length").innerHTML="Text Size = " + difference + "px";
}

function modelLoaded(){
    console.log("Model loaded!")
}