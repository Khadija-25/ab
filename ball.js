class Ball {
    constructor(x,y,r){
        var options={
            density:1,
            frictionAir:0.05,
           // restitution:0.5
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("grey");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();

    }
}