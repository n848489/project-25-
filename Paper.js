class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0.3,
            friction :0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}

	display()
	{
		var PaperPos=this.body.position;	
		push()
		translate(PaperPos.x, PaperPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()
 }
}