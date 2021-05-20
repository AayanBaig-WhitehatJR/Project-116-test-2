
rightEyeX = 0
rightEyeY = 0
function preload(){
    eyepatch = loadImage("unnamed.png")
    }
    
    
    function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
   poseNet = ml5.poseNet(video, modelLoaded)
   poseNet.on("pose", gotPoses)
    }
    function modelLoaded(){
        console.log("Initializing... please wait.")
        console.log("Initiaized succesfully.")
    }
    function gotPoses(result){
        if(result.length > 0){
            console.log(result)
                rightEyeX = result[0].pose.rightEye.x
                rightEyeY = result[0].pose.rightEye.y
                console.log(rightEyeX)
                console.log(rightEyeY)
                
        }
    }
function draw(){
    image(video, 0, 0, 300, 300)
    image(eyepatch, rightEyeX, rightEyeY, 55, 40)
}
    
function takeSnapshot(){
    save("YourSelfie.png")
}