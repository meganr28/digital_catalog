class ImageManager {
  
  constructor() {
    this.story = [];
    this.characters = [];
    this.environment = [];
    this.props = [];
  }
  
  loadStory() {
    let tree;
    tree = loadImage('images/environment/tree_transparent.png');
    this.story = [tree];
  }
  
  loadChar() {
    let w_expr, w_poses, w_turn;
    w_expr = loadImage('images/character/witch_expressions.png');
    w_poses = loadImage('images/character/witch_poses_3.png');
    w_turn = loadImage('images/character/witch_turnaround.png');
    this.characters = [w_expr, w_poses, w_turn];
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
    potions_box = loadImage('images/props/potion_box.png');
    spellbook = loadImage('images/props/spellbook.png');
    this.props = [potions_box, spellbook];
  }
  
}
