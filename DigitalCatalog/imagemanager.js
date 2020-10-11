class ImageManager {
  
  constructor() {
    this.story = [];
    this.mb = [];
    this.characters = [];
    this.environment = [];
    this.props = [];
  }
  
  loadStory() {
    let tree;
    let witch_rough, witch_final, fairy_rough, fairy_final, alm_rough, alm_final;
    tree = loadImage('images/environment/tree_transparent.png');
    witch_rough = loadImage('images/story/witch_rough.jpg');
    witch_final = loadImage('images/story/witch_final.png');
    fairy_rough = loadImage('images/story/fairy_rough.png');
    fairy_final = loadImage('images/story/fairy_final.png');
    alm_rough = loadImage('images/story/alm_rough.png');
    alm_final = loadImage('images/story/alm_final.png');
    this.story = [tree, witch_rough, witch_final, fairy_rough, fairy_final, alm_rough, alm_final];
  }
  
  loadMB() {
    let mb1, mb2, mb3, mb4, mb5, mb6;
    mb1 = loadImage('images/moodBoard/mb1.jpg');
    mb2 = loadImage('images/moodBoard/mb2.jpg');
    mb3 = loadImage('images/moodBoard/mb3.jpg');
    mb4 = loadImage('images/moodBoard/mb4.jpg');
    mb5 = loadImage('images/moodBoard/mb5.jpg');
    mb6 = loadImage('images/moodBoard/mb6.jpg');
    this.mb = [mb1, mb2, mb3, mb4, mb5, mb6];
  }
  
  loadChar() {
    let w_expr, w_poses, w_turn;
    let f_expr, f_poses, f_turn;
    let a_expr, a_poses, a_turn;
    w_expr = loadImage('images/character/witch_expressions.png');
    w_poses = loadImage('images/character/witch_poses_3.png');
    w_turn = loadImage('images/character/witch_turnaround.png');
    f_expr = loadImage('images/character/fairy_expressions.jpg');
    f_poses = loadImage('images/character/fairy_poses_2.jpg');
    f_turn = loadImage('images/character/fairy_turnaround.jpg');
    a_expr = loadImage('images/character/alm_expressions.png');
    a_poses = loadImage('images/character/alm_poses.png');
    a_turn = loadImage('images/character/alm_turnaround.png');
    this.characters = [w_expr, w_poses, w_turn, f_expr, f_poses, f_turn, a_expr, a_poses, a_turn];
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
