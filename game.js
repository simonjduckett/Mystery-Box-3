if (localStorage.getItem("c") === null){
localStorage.c = 0;
}


document.onkeydown = checkKey;
document.onkeyup = function(e){
    if(e.keyCode == 37 || e.keyCode == 39){
        gun.dir = 0;
    }
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '32') {//spacebar press
        //create a new bullet
        gunsound.play();
        bullets.push(new bullet(gun.x + 20, canvas.height - 60));
    }
    else if (e.keyCode == '37') {//left arrow
        gun.dir = -gunSpeed;
    }
    else if (e.keyCode == '39') {//right arrow
        gun.dir = gunSpeed;
    }

}


var framerate = 60;
var gamespeed = 2;
var score = new Score();
var Lives = new Lives();
var displayPrize = new displayPrize();
var boxes = [];
var bullets = [];
var count = 0;
var mod = 1;
var size = 1;
var gunSpeed = 15;
var points = 0;
var bulletSize = 15;
var clear;
var killBoxes = [];
var lives = 5;
var mysteryboxsnd = new Audio("sounds/box.wav");
var gunsound = new Audio("sounds/smallgun.wav");
var ghostsound = new Audio("sounds/ghost.wav");
var extralife = new Audio("sounds/extralife.wav");
var prizetxt = "";

window.onload = function () {

	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");
    
        for (var i = 0; i < 5; i++) {
        boxes[i] = new box();
    }
    
    draw();

        }

function draw() {

    clear = setInterval(function(){

          
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(0,0,canvas.width, canvas.height);

        gun.show();
        gun.move();
        score.show();
        Lives.show();
        displayPrize.show();

        for (var i = 0; i < boxes.length; i++) {
            boxes[i].show();
            boxes[i].move();
            // console.log(boxes[i - 1].x);
            if (boxes[i].hits(gun)) {
                boxes.splice(i,1);
                lives--;
                if (lives == 0) {
                    GameOver();
                }
            }
         }

         for (var i = 0; i < killBoxes.length; i++){
            killBoxes[i].show();
            killBoxes[i].move();
            if (killBoxes[i].hits(gun)) {
                killBoxes.splice(i, 1);
                lives--;
                if (lives == 0) {
                    GameOver();
                }
            }
         }


        for (var i = 0; i < bullets.length; i++) {
            bullets[i].show();
            bullets[i].move();

        for (var j = 0; j < boxes.length; j++) {
            if (bullets[i].hits(boxes[j])) {



                if (boxes[j].check) {
                    mysteryboxsnd.play();
                    mysteryPrize(boxes[j].y);
                    points += 300;
                }
                else if (boxes[j].poison) {
                    lives--;
                    if (lives == 0) {
                        GameOver();
                    }
                }
                else {points += 100;}

                    boxes.splice(j,1);
                    bullets.splice(i,1);
                }
             }
         }


         count++;
         mod = count % 25;//how often a new box is spawned

        if (mod  == 0) {
            for(i=0;i<1;i++){
                SpawnBox();
            }
            
        }
             }, framerate/gamespeed);
};

function GameOverScreen() {

        canvasContext.fillStyle = "white";
        canvasContext.fillText("GAME OVER", canvas.width/2, 200);

        setTimeout(function(){
            window.location.replace("gameover.html");
        },2000);
}



function GameOver(){

localStorage.playerscore = JSON.stringify(points);


    clearInterval(clear);
    GameOverScreen();
    
}

function Score(){

    this.x = 100;
    this.y = 100;

    this.show = function(){
        canvasContext.fillStyle = "white";
        canvasContext.fillText("Score " + points, this.x, this.y);
    }  
}

function Lives(){

    this.show = function(){
        canvasContext.fillStyle = "white";
        canvasContext.fillText("Lives " + lives, canvas.width - 100, 100);
    }  
}

function SpawnBox(){
    var n = Math.floor((Math.random() * 10) + 1);

switch (n) {

    case 1:
        boxes.push(new MysteryBox());
        break;
    case 2:
        boxes.push(new poison());
        break;
    case 3:
        ghostsound.play();
        killBoxes.push(new killBox());
        break;
    case n > 3:
        boxes.push(new box());
        break;
    default:
        boxes.push(new box());
}

}

function mysteryPrize(boxy){
        var n = Math.floor((Math.random() * 6) + 1);

    switch (n) {

        case 1:
            extralife.play();
            updateText("Extra Life!");
            lives++;
            break;
        case 2:
            console.log("mbox"  + n);
            updateText("Gun Upgrade!");
            //big bullets
            bulletSize = 50;
            gunsound = new Audio("sounds/gun.wav");
                    setTimeout(function(){
            bulletSize = 15;
            gunsound = new Audio("sounds/smallgun.wav");
        }, 8000);//how long bullets stay big for.

            break;
        case 3:
            console.log("mbox"  + n);
            updateText("Double Speed!");
            //increased game speed;
            clearInterval(clear);
            gamespeed = 4;
            draw();
            setTimeout(function(){
                clearInterval(clear);
                gamespeed = 2;
                draw();
            }, 6000);

            break;
        case 4:
            console.log("mbox"  + n);
            updateText("you got a dud!");
            break;
        case 5:
            ghostsound.play();
            updateText("Ghost");
            killBoxes.push(new superghost(boxy));
            break;
        case 6:
            for(i = 0; i < 3; i++){
                boxes.push(new MysteryBox());
            }
            updateText("MysteryBox x 3");
            break;
        default:
            console.log("mbox" + n);
    }

}

function displayPrize(){

        this.x = 400;
        this.y = 200;


        this.show = function(){

            canvasContext.fillStyle = "yellow";
            canvasContext.fillText(prizetxt, this.x, this.y);
        }

}

function updateText(x){
    prizetxt = x;
    setTimeout(function(){
        prizetxt = "";
    },2000);
}