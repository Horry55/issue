class pc{
    constructor(x,y,radius,angle){
        var option={
            density:5,
            restitution:0.8,
            friction:2,
            
            
        }
        this.body=Bodies.circle(x,y,radius,option)
      //  this.width=width;
       // this.height=height;
       this.radius=radius;
        World.add(world,this.body)
        
        
    }
    display(){
       var pos=this.body.position; 
       ellipseMode(RADIUS)
       ellipse(pos.x,pos.y,this.radius);
       camera.y=pos.y
       camera.x=pos.x
    }
}
