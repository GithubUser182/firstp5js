function preload(){
}

function setup(){
    canvas=createCanvas(640, 480)
    background(153);
    canvas.position(110, 250)
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 190,120,250,250)
    fill('red');
    circle(576, 416, 125);
    circle(65, 416, 125);
    circle(65, 64, 125);
    circle(576, 64, 125);
    fill('green');
    rect(35, 94, 55, 300);
    rect(95, 386, 441, 55);
    rect(95, 36, 441, 55);
    rect(549, 94, 55, 300);
}

function take_snapshot(){
    save("student_png.png")
    }