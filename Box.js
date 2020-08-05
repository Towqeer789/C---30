class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic:false
    }
  
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity=255;
    
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<9){
     
    }else{
      World.remove(world,this.body);
      push();
    this.Visiblity - this.Visiblity - 5;
    tint(255,this.Visiblity=255);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
   }
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
