class hexa{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        this.player = Bodies.rectangle(x, y, width, height, options);
        this.player.width = width;
        this.player.height = height;
        this.player.image = loadImage("polygon.png");
        World.add(world,this.player);
    }

    display(){
        push();
        var angle = this.player.angle;
        translate(this.player.position.x, this.player.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.player.image ,this.player.position.x,this.player.position.y,40,40);
        pop();
    }
}