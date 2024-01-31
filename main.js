noseX=0;
noseY=0;

function preload() {          
clown_nose = loadImage('https://i.postimg.cc/Lsv79YFV/Pngtree-moustache-handlebar-mustache-vector-7495943.png');
}                                                    
function setup() {                                                    
  canvas = createCanvas(300, 300);                                                    
  canvas.center();                                                    
  video = createCapture(VIDEO);                                                    
  video.size(300, 300);                                                    
  video.hide();                                                    
  posenet = ml5.poseNet(video, modelLoaded);                                                                  
  posenet.on('pose', gotPoses);                                                                  
}                                                                  
function modelLoaded() {                                                                  
   console.log('PoseNet Is Initialized');                                                                  
}                                                    
function draw() {                                                    
translate(video.width, 0);
scale(-1,1)
image(video, 0, 0, 300, 300);       
image(clown_nose, noseX, noseY, 30, 30);                                   
}                                                    
function take_snapshot(){                                                        
  save('myFilterImage.png');                                                    
}                                                    
function gotPoses(results)                                                    
{                                                    
    if (results.length > 0) {                                                    
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y =" + noseY);                                            
    }                                                    
}                                                    