class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(x, y,(this.radius-20/2), options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      strokeWeight(4);
      stroke("green");
      fill("red");
      rectMode(CENTER);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
  