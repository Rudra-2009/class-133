objectDetector="";
img="";
objects=[];
Status="";

function preload() {
  img=loadImage('dog_cat.jpg');
}
function setup() {
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('CocoSSD',modelLoaded);
  document.getElementById("status").innerHTML="status: detecting objects";
}
function modelLoaded() {
  console.log("modelLoaded");
  Status=true;
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects=results;
} 
function draw() {
  image(img,0,0,640,420);
  if (Status != "" ) {
    for(var i=0; i<objects.length; i++) {
      document.getElementById("status").innerHTML="Status: Object Deteted";
      fill("#eb4034");
      percent =floor(objects[i].confidence*100);
      text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
      noFill();
      stroke("#eb4034");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  }
}