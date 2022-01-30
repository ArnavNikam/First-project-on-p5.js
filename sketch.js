function setup() {
  canvas = createCanvas(400,400);
  canvas.position(100,150);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  fill("")
  stroke("green")
  rect(30, 30, 340, 340);  
  fill("red");
  circle(40,40,60);
  circle(360,40,60);
  circle(360,360,60);
  circle(40,360,60);
  
  image(video,100,100,200,200);
}

function take_snapshot() {
  save('image from p5.js.png');
}
