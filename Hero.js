class Hero {
    constructor(x,y,radius){
        var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        this.image = loadImage("superhero.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(RADIUS);
        image(this.image, this.body.position.x, this.body.position.y, this.radius,this.radius);
    }
}