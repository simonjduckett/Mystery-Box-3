var mysteryimg = new Image();
mysteryimg.src = "images/mysterybox.png";
var killimg = new Image();
killimg.src = "images/killbox.png";
var boximg = new Image();
boximg.src = "images/box.png";



function box() {
    this.x = Math.floor((Math.random() * 750) + 1);
    this.y = 0;
    this.sqaure = 50;
    this.check = false;
    this.poison = false;
    this.img = boximg;

    this.show = function(){

    // canvasContext.fillStyle = "blue";
    // canvasContext.fillRect(this.x,this.y,this.sqaure,this.sqaure);

    canvasContext.drawImage(this.img, this.x, this.y, this.sqaure, this.sqaure);
    }

    this.move = function(){
        this.y += 5;
    }

            this.hits = function(box){

        if (this.x > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 || this.x + this.sqaure > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 ) {
             return true;
        }
    }
}

function poison() {
    this.x = Math.floor((Math.random() * 750) + 1);
    this.y = 0;
    this.sqaure = 60;
    this.check = false;
    this.poison = true;

    this.show = function(){

    canvasContext.fillStyle = "yellow";
    canvasContext.fillRect(this.x,this.y,this.sqaure,this.sqaure);
    }

    this.move = function(){
        this.y += 3;
    }

    this.hits = function(box){

    if (this.x > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 || this.x + this.sqaure > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 ) {
            return true;
    }
}
}

function MysteryBox() {
    this.x = Math.floor((Math.random() * 750) + 1);
    this.y = 0;
    this.sqaure = 40;
    this.check = true;
    this.poison = false;
    this.img = mysteryimg;

    this.show = function(){

    // canvasContext.fillStyle = "purple";
    // canvasContext.fillRect(this.x,this.y,this.sqaure,this.sqaure);

    canvasContext.drawImage(this.img, this.x, this.y, this.sqaure, this.sqaure);
    }

    this.move = function(){
        this.y += 4;
    }

            this.hits = function(box){

        if (this.x > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 || this.x + this.sqaure > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 ) {
             return true;
        }
    }
}

function killBox(){
    this.x = gun.x;
    this.y = 0;
    this.sqaure = 40;
    this.check = false;
    this.img = killimg;

    this.show = function(){

    // canvasContext.fillStyle = "white";
    // canvasContext.fillRect(this.x,this.y,this.sqaure,this.sqaure);
    canvasContext.drawImage(this.img, this.x, this.y, this.sqaure, this.sqaure);
    }

    this.move = function(){
        this.y += 20;
    }

        this.hits = function(box){

        if (this.x > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 || this.x + this.sqaure > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 ) {
             return true;
        }
    }
}

function superghost(y){
    this.x = gun.x;
    this.y = y;
    this.sqaure = 60;
    this.check = false;
    this.img = killimg;

    this.show = function(){

    // canvasContext.fillStyle = "white";
    // canvasContext.fillRect(this.x,this.y,this.sqaure,this.sqaure);
    canvasContext.drawImage(this.img, this.x, this.y, this.sqaure, this.sqaure);
    }

    this.move = function(){
        this.y += 20;
    }

        this.hits = function(box){

        if (this.x > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 || this.x + this.sqaure > gun.x && this.x < gun.x + 50 && this.y > canvas.height-50 && this.y < canvas.height-50 + 50 ) {
             return true;
        }
    }
}

