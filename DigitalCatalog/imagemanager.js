class ImageManager {
  
  constructor() {
    this.environment = [];
    this.props = [];
  }

  loadEnv() {
    let bg_rough, bg_color_1, bg_color_2;
    bg_rough = loadImage('images/environment/bg_rough.png');
    bg_color_1 = loadImage('images/environment/bg_color_1.png');
    bg_color_2 = loadImage('images/environment/bg_color_2.png');
    this.environment = [bg_rough, bg_color_1, bg_color_2];
  }
  
  loadProps() {
    let potions_box, spellbook;
  }
  
}
