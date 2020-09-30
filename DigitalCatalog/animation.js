class Animation {
  
  constructor(x, y, w, h, text) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    
    this.alpha = 0;
    this.in = false;
    this.out = false;
  }

  easeIn() {
    this.in = true;
  }
  
  easeOut() {
    this.out = true;
  }

  display() {
    
    if (this.text) {
      fill(0, 0, 0, this.alpha);
      text(this.text, this.x, this.y);
    } else {
      fill(0, 255, 0, this.alpha);
      rect(this.x, this.y, this.w, this.h);
    }
    
    if (this.in && this.alpha < 255) {
      this.alpha += 3;
    } else if (this.out && this.alpha > 0) {
      this.alpha -= 3;
    }
    
  }
  
}