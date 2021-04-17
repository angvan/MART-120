class Square{
  //constructor

  // x = x coordinate, y = y coordinate, s = square size, r = red, g = green, b = blue
  constructor(x,y,s,r,g,b)
  {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.g = g;
    this.b = b;

  }
  display()
  {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.s);
  }
}
