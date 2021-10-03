canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

canvas_background_image = "mars.jpg";
rover_image = "rover.png";
 
function add(){
    canvas_background_imageTag = new Image();//setting a new image to the variable
    canvas_background_imageTag.onload = uploadCanvasImage;
    //setting an onload function with the var and assigning a function to it.
    //so whenever var is called, function will load automatically.
    canvas_background_imageTag.src = canvas_background_image;// load image

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRoverImage;
    rover_imageTag.src = rover_image;

//The above code is done so that the image is loaded in the browser before we draw it on canvas.
//Its compulsary to load the image first before using it on canvas..

}

function uploadCanvasImage(){
    ctx.drawImage(canvas_background_imageTag, 0, 0, canvas.width, canvas.height);
}
//The drawImage() method draws an image onto the canvas

function uploadRoverImage(){
ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){

    key_pressed = e.keyCode;// gets the ASCII value of the key pressed

    console.log(key_pressed);

    if(key_pressed == 38){
        console.log("up key is pressed");
        up();
    }

    if(key_pressed == 40){
        down();
        console.log("down key is pressed");
    }

    if(key_pressed == 37){
        left();
        console.log("left key is pressed");
    }

    if(key_pressed == 39){
        right();
        console.log("right key is pressed");
    }
}