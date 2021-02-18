class Nest{
    constructor(x,y,w,h){
        var options = {
            isStatic : true

        }
        this.nest = Bodies.rectangle(x,y,w-0,h-60,options);
        World.add(world,this.nest);
        this.width = w;
        this.height = h;
        this.image = loadImage("nest.png");
}

    display(){
 //       push()
        translate(this.nest.position.x,this.nest.position.y)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
//pop()
    }
}