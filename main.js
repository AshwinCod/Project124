nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_y = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(600, 150); 
    video = createCapture(VIDEO);
    video.size(600, 380);
    video.position(0, 200);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        difference = floor(left_wrist_x - right_wrist_y);
        document.getElementById("font_size").innerHTML = "The font size will be: "+difference+"px";
    }
}
function draw(){
    background(150);
    document.getElementById("font_size").innerHTML = "Font Size Will be: "+difference+" px";
    textSize(difference);
    text('Hello', nose_x, nose_y);
}