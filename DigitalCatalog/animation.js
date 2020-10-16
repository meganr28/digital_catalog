class Animation {
  
  constructor(x, y, w, h, text, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    this.img = img;
    
    this.alpha = 0;
    this.none = true;
    this.in = false;
    this.out = false;
    this.typewriter = false;
    this.n = 0;
  }

  easeIn() {
    this.none = false;
    this.in = true;
  }
  
  easeOut() {
    this.none = false;
    this.out = true;
  }
  
  type() {
    this.none = false;
    this.typewriter = true;
  }

  display() {
    
    if (this.typewriter) {
      text(this.text.substring(0, this.n+1), this.x, this.y);
      if (frameCount % 7 == 0) {
        if (this.n < (this.text.length)) {
          this.n++;
        }
      }
    } else {
         if (this.text) {
           fill('black');
           text(this.text, this.x, this.y);
         } else {
           tint(255, this.alpha);
           this.img.resize(this.w, this.h);
           image(this.img, this.x, this.y);
         }
    } 
    
    if (this.in && this.alpha < 255) {
      this.alpha += 3;
    } else if (this.out && this.alpha > 0) {
      this.alpha -= 3;
    }
    
  }
  
}
