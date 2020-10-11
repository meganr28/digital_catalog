class Menu {
  
  constructor(show, imgmgr) {
    
      this.character = createSelect();
      this.character.size(100, 30);
      this.character.position((width/2) - 150, 60);
      this.character.option("Witch");
      this.character.option("Fairy");
      this.character.option("Almiraj");
    
      this.type = createSelect();
      this.type.size(100, 30);
      this.type.position((width/2) + 20, 60);
      this.type.option("Expressions");
      this.type.option("Poses");
      this.type.option("Turnaround");
      
      this.show = show;
      this.imgmgr = imgmgr;
    
  }


  display() {
    
      if (!this.show) {
        this.show = 1;
      }
      
      textAlign(CENTER);
      fill('white');
      
      this.selection();

      return this.show;
    
  }
  
  
  selection() {
    
      let charVal = this.character.value();
      let typeVal = this.type.value();
    
      rectMode(CENTER);
      fill('black');
      rect(width/2, height/2, 1300, 700);
      noFill();
      rect(width/2, height/2, 1350, 750);
    
      imageMode(CENTER);
    
      if (charVal == "Witch") {
        
        if (typeVal == "Expressions") {
          
//             fill(207, 49, 43);
//             rect(width/2, height/2, 1200, 600);
            
            image(imgmgr.characters[0], width/2, height/2, 1200, 600);
          
        } else if (typeVal == "Poses") {
          
            fill(194, 39, 129);
            rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[1], width/2, height/2, 1200, 600);
          
        } else if (typeVal == "Turnaround") {
          
            fill(237, 157, 203);
            rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[2], width/2, height/2, 1200, 600);
          
        }
        
      } else if (charVal == "Fairy") {
        
        if (typeVal == "Expressions") {
          
            fill(122, 189, 23);
            rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[3], width/2, height/2, 1200, 600);
          
        } else if (typeVal == "Poses") {
          
            fill(14, 230, 86);
            rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[4], width/2, height/2, 1200, 600);
          
        } else if (typeVal == "Turnaround") {
          
            fill(29, 207, 189);
            rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[5], width/2, height/2, 1200, 600);
       
        }
        
      } else if (charVal == "Almiraj") {
        
        fill('white');
        
        if (typeVal == "Expressions") {
          
//             fill(50, 144, 217);
//             rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[6], width/2, height/2, 1200, 600);
          
        } else if (typeVal == "Poses") {
          
//             fill(17, 14, 173);
//             rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[7], width/2, height/2, 1200, 600);
          
        } else if (typeVal == "Turnaround") {
          
//             fill(149, 32, 227);
//             rect(width/2, height/2, 1200, 600);
            image(imgmgr.characters[8], width/2, height/2, 1200, 600);
          
        }  
        
      }
    
  }
  
  
  hide() {
    
      if (this.show) {
        this.character.hide();
        this.type.hide();
      }
    
      this.show = 0;
    
      return this.show;
    
  }
  
}
