noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/0N0n8Cz6/bgbgbchange-removebg-preview.png');

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);

}
function draw(){
    image(video, 0, 0, 350, 350);
    image(clown_nose, noseX-100, noseY-170, 280, 280);
}

function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}
