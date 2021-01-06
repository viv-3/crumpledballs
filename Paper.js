class Paper{

    constructor( y,x,r){
        var options =  {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.5,

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body);

        this.image = loadImage ("paper.png");
        
    }

    display()
    {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        
        pop()

    }



}