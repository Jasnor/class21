class Ground{
 //PROPERTIES 
 constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
   this.body = Matter.Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
 } 
 
 //FUNCTION
 display(){
  push ();
  fill("yellow")
  rect (this.body.position.x, this.body.position.y, this.width, this.height)
  pop ();
 }
}
