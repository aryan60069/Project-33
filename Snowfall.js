class Snowfall{
    constructor(x,y,r){
        /*options ={
            isStatic: false
        }*/
        this.body = Bodies.circle(x,y,r,{ density:10, frictionAir:0});
        this.r = r;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
        }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        image(this.image,pos.x, pos.y, this.r, this.r);
        pop();
    }
}