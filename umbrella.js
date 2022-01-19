class umbrella{
    constructor(x,y){
        var option = {
          isStatic:true 
    }

     this.image = loadImage(walking_5.png)
     this.umbrella = Bodies.circle(x,y,50,option);
     this.radius = 50;
     world.add(world, this.umbrella);
     }

     display(){
         var pos = this.umbrella.position
         imageMode(CENTER)
         image(this.image, pos.x, pos.y+70, 300, 300)
     }
}
