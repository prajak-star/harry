lsx=0;
lsy=0;
rsx=0;
rsy=0;
nakx=0;
naky=0;

function preload(){
   sacarf=loadImage("https://i.postimg.cc/6qyDZbPy/scarfie.png");
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on("pose",bring);
}

function model_loaded(){
    console.log(" PoseNet is chalu , tu ho ja shuru ");
}

function bring(results){
    if (results.length > 0) {
        console.log(results);
        console.log("right shoulder=" + results[0].pose.leftEye.x);
        console.log("right shoulder=" + results[0].pose.leftEye.y);
        lsx=results[0].pose.leftEye.x-270;
        lsy=results[0].pose.leftEye.y-210;
    }
}

function draw(){
    image(video,0,0,600,400);
    image(sacarf,lsx,lsy,400,440);
}
 
function cutesy(){
    save("freshlynosedimage.png");
}



//console.log("left shoulder x=" + results[0].pose.rightShoulder.x);//
//console.log("right shoulder y=" + results[0].pose.rightShoulder.y);//
//console.log("Nose ka x=" + results[0].pose.nose.x);//
//console.log("Nose ka y=" + results[0].pose.nose.y);//
//nakx=results[0].pose.nose.x-220;//
//naky=results[0].pose.nose.y-400;//