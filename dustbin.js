class dustbin{
    constructor(x,y){
        var options={
                  isStatic:true

        }
    
        this.width=220;
        this.height=120;
        this.thickness=15;
       
this.bottom=Bodies.rectangle(x,y,this.width,this.thickness,options);
this.lb=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
this.rb=Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);

World.add(world,this.bottom)
World.add(world,this.lb)
World.add(world,this.rb)
    }
display(){
var posB=this.bottom.position
var posl=this.lb.position
var posr=this.rb.position

rectMode(CENTER)
fill("lime");

rect(posB.x,posB.y,this.width,this.thickness);

rect(posl.x,posl.y,this.thickness,this.height);

rect(posr.x,posr.y,this.thickness,this.height);

}}