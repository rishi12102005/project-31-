class Particle{
    constructor(x,y){
        var options={
            friction:0.8,
            density:10
        }
        
        this.body = Bodies.circle(x,y,12,options);
        this.radius = 12;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,this.radius);
    }
}