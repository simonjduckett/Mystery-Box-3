

var gunimg = new Image();
gunimg.src = "images/gun.png";

var gun = new Gun();

var fireimg = new Image();
fireimg.src = "images/fire.png";

function Gun() {
    this.x = 375;
    this.dir = 10;
    this.sqaure = 60;
    this.img = gunimg;

    this.show = function(){

    // canvasContext.fillStyle = "red";
    // canvasContext.fillRect(this.x,canvas.height-50,50,50);

    canvasContext.drawImage(this.img, this.x, canvas.height-60, this.sqaure, this.sqaure);
    }

    this.move = function(){
        this.x += this.dir;
        if (gun.x < 0)
        {
            gun.x = canvas.width - 10;
        }

        if (gun.x > canvas.width) 
        {
            gun.x = 5;
            
        }
    }
}

function bullet(x, y) {
            
            this.x = x;
            this.y = y;
            this.sqaure = bulletSize;
            this.img = fireimg;

            this.show = function(){

                // canvasContext.fillStyle = "orange";
                // canvasContext.fillRect(this.x,this.y,this.sqaure,this.sqaure);

                canvasContext.drawImage(this.img, this.x, this.y, this.sqaure, this.sqaure);

            }

            this.move = function(){
                this.y -= 10;
            }

            this.hits = function(box){
                // var distx = this.x - box.x; //trying to find out the distance

                    if (this.x > box.x && this.x < box.x + box.sqaure && this.y > box.y && this.y < box.y + box.sqaure || this.x + this.sqaure > box.x && this.x < box.x + box.sqaure && this.y > box.y && this.y < box.y + box.sqaure ) {
        
                        return true;
                    }
            }

}