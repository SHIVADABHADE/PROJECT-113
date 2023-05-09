function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
    tint_color=""
}
function draw(){
    image(video,0,0,640,480)
    tint(tint_color)
    fill(255,0,0)
    stroke(255,0,0)
    ellipse(56, 46, 100, 55);
    ellipse(575, 46, 100, 55);
    ellipse(50, 450,100,55);
    ellipse(575, 450,100,55);
    fill(0,255,255)
    stroke(0,255,255)
    rect(5, 75, 80, 350);
    rect(75, 20, 475, 55);
    rect(525, 75, 80, 350);
    rect(750, 20, 475, 55);
    
}
function take_snapshot(){
    save('Shiva.png')
}