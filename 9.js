function preload(){
    img= loadImage('9.png');
}

function setup(){
    canvas=createCanvas(700,500);
    canvas.position(380,280);    
    video=createCapture(VIDEO);
    video.size(850,500);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 500);
    image(img);
    image(img,400,150,300,400);
}

function take_snapshot(){
    save('MKGandhiFilterPic.jpg');
}

function  go_10(){
    window.location='10.html';
}