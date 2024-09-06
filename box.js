class Box
  {
  
    constructor(x,y,w,h,vx,vy)
    {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;

    }
    show()
    {
      rect(this.x,this.y,this.w,this.h,this.vx,this.vy);
    }
    move()
    {
      this.x = this.x+this.vx;
      
    }
    up(){
      this.y = this.y+this.vy
    }
  }

  
