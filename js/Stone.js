class Stone{
   constructor(x,y,w,h)
   {
       var options = {
           restitution: 0.08
       };

       this.r = 30;
       this.body = Bodies.circle(x, y, this.r, options);
       this.w = w;
       this.h = h;
       World.add(world,this.body);
   }

   show(){
       let pos = this.body.position;
       push();
       ellipseMode(CENTER)
       translate(pos.x,pos.y)
       noStroke();
       fill("White")
       ellipse(0,0,this.w,this.h)
       pop()

   }


}