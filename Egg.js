class whiteEgg {
  constructor(x, y) {
    var options = {
      restitution: 0,
      friction: 5,

      isStatic: false,
    };
    this.r = 40;
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
    this.image = loadImage("white-egg.png");
    
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 60);

    /*strokeWeight(2)
        stroke("blue");
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);*/
    var a =
      this.body.position.x > mouseX - 40 && this.body.position.x < mouseX + 40;
    if (this.body.position.y > 450) {
      if (a) {
        Matter.World.remove(world, this.body);
        Matter.Body.setPosition(this.body, { x: -200, y: 0 });
        score ++
      }
    }

    if(this.body.position.y>530){
      Matter.World.remove(world, this.body);
      Matter.Body.setPosition(this.body, { x: -200, y: 0 });
      if(score>0)  score --
  
     // this.broken.scale = 0.50
    
    }
    //console.log(a);
    pop();
  }                 
}

class goldEgg {
  constructor(x, y) {
    var options = {
      restitution: 0,
      friction: 0,
     // isStatic: true,
    };
    this.r = 50;
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
    this.image = loadImage("golden-egg.png");
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 60);

    var a =
    this.body.position.x > mouseX - 40 && this.body.position.x < mouseX + 40;
  if (this.body.position.y > 440) {
    if (a) {
      Matter.World.remove(world, this.body);
      Matter.Body.setPosition(this.body, { x: -200, y: 0 });
      score +=5;
    }
  }

  if(this.body.position.y>530){
    Matter.World.remove(world, this.body);
    Matter.Body.setPosition(this.body, { x: -200, y: 0 });
    if(score>1)  score +=-5

   // this.broken.scale = 0.50
  
  }
    pop();
  }
}
