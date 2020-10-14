let mgr;
let imgmgr;
let font;
let menu;
let menuShow = 0;


function setup() {
  
  createCanvas(1700, 800);
  
  mgr = new SceneManager();
  imgmgr = new ImageManager();
  
  // Preload scenes
  mgr.addScene( Intro );
  mgr.addScene( Story );
  mgr.addScene( Character );
  mgr.addScene( Environment );
  mgr.addScene( Prop );
  mgr.addScene( Storyboard );
  mgr.addScene( End );
  
  
  mgr.showNextScene();
  
  // Set up images
  imgmgr.loadTitle();
  imgmgr.loadStory();
  imgmgr.loadMB();
  imgmgr.loadChar();
  imgmgr.loadEnv();
  imgmgr.loadProps();
  
}

function draw() {
  
  mgr.draw();
  
}

// text - fill, image - tint

function mousePressed() {
  
  mgr.handleEvent("mousePressed")
  
}

function keyPressed() {
  
  if (keyCode == RIGHT_ARROW) {
    mgr.showNextScene();
  } else if (keyCode == LEFT_ARROW) {
    mgr.showPrevScene(menuShow);
  }
  
  mgr.handleEvent("keyPressed");
  
}

// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================


function Intro()
{
    let c = color(192, 178, 178);
  
    this.enter = function() {
      
      background(c);
      textFont("Courier Prime");
      textAlign(CENTER);
      
//       textSize(36);
//       fill('black');
//       text('Wicked Cute\n' +
//            'By: The Wicked Cuties\n', width/2, height/2);
      
      fill('white');
      textSize(24);
      text('Usage:\n' +
           'RIGHT ARROW to go to next scene\n' +
           'LEFT ARROW to go to previous scene\n' +
           'DOWN ARROW to move through scene', width/2, (height/2) + 300);
      
    }
  
    this.draw = function() {
      
      imageMode(CENTER);
      imgmgr.title[0].resize(width, height);
      image(imgmgr.title[0], width/2, height/2);
      
    }

}

function Story()
{
    let c = color(165, 135, 143);
    let logline, mood, bios;
    let witch, fairy, alm;
    let story_text, titles, characters = [];
    let count = 0;
    let imgCount = 0;
  
    this.enter = function() {
      
      if (menuShow) {
        menuShow = menu.hide();
      }
      
      story_text = ['In a magical forest,\n' + 
                    'two neighbors fight over a package.'];
      titles = ['MOOD BOARD', 'CHARACTERS']
      characters = ['20’s, gothic, dramatic, beautiful. Her favorite color is black, like her soul.\n' + 
              'She’s extremely charming, bold, and not afraid to get what she wants -\n' +
              'especially her new pet! She commands a room. Her days are spent\n' + 
              'summoning spirits, casting spells, and breaking hearts.', 
              '20’s, short and spritely. He’s very energetic, emotional, and tries to see\n' + 
              'the good in everyone. He loves all living creatures, sunny days, and rainbows.\n' +
              'He also enjoys tending to his garden and playing pranks on others!\n' +
              'Just don’t get on his bad side, he can become quite hot-headed...',
              'An Almiraj, or a rabbit with a unicorn horn. Small, sweet, and curious.\n' + 
              'Incredibly fast, and becomes distressed quite easily. The final formarmation\n' +
              'this creature takes has black fur with a sparkly pink unicorn horn!']
      
      logline = new Animation(width/2, height/2, 0, 0, story_text[0]);
      mood = new Animation(width/2, 50, 0, 0, titles[0]);
      bios = new Animation(width/2, 50, 0, 0, titles[1]);
      witch = new Animation(50, 150, 0, 0, characters[0]);
      fairy = new Animation(50, 350, 0, 0, characters[1]);
      alm = new Animation(50, 550, 0, 0, characters[2]);
      
    }
  
    this.draw = function() {
      
      background(c);
      textAlign(CENTER);
      
      if (count == 0) {
          fill('white');
          rect(550, 350, 600, 100);
          fill('black');
          logline.type();
          logline.display();
          image(imgmgr.story[0], width/2 + 300, 50, 400, 700);
      } else if (count == 1) {
          fill('white');
          rect(width/2 - 145, 0, 300, 80);
          fill('black');
          mood.type();
          mood.display();
          fill('black');
          text('Image Credit: Pinterest', 175, height-10);
        
          // color strips
          let from = color(192, 178, 178);
          let to = color(12, 11, 28);
          colorMode(RGB); 
          let interA = lerpColor(from, to, 0.33);
          let interB = lerpColor(from, to, 0.66);
          fill(from);
          rect(390, 100, 80, 100);
          fill(interA);
          rect(470, 100, 80, 100);
          fill(interB);
          rect(550, 100, 80, 100);
          fill(to);
          rect(630, 100, 80, 100);
        
          from = color(212, 209, 255);
          to = color(252, 234, 215);
          colorMode(RGB); 
          interA = lerpColor(from, to, 0.33);
          interB = lerpColor(from, to, 0.66);
          fill(from);
          rect(710, 100, 80, 100);
          fill(interA);
          rect(790, 100, 80, 100);
          fill(interB);
          rect(870, 100, 80, 100);
          fill(to);
          rect(950, 100, 80, 100);
        
          from = color(191, 241, 242);
          to = color(247, 230, 245);
          colorMode(RGB); 
          interA = lerpColor(from, to, 0.33);
          interB = lerpColor(from, to, 0.66);
          fill(from);
          rect(1030, 100, 80, 100);
          fill(interA);
          rect(1110, 100, 80, 100);
          fill(interB);
          rect(1190, 100, 80, 100);
          fill(to);
          rect(1270, 100, 80, 100);
        
          // images
          image(imgmgr.mb[0], 390, 200, 320, 280);
          image(imgmgr.mb[1], 710, 200, 320, 280);
          image(imgmgr.mb[2], 1030, 200, 320, 280);
          image(imgmgr.mb[3], 390, 480, 320, 280);
          image(imgmgr.mb[4], 710, 480, 320, 280);
          image(imgmgr.mb[5], 1030, 480, 320, 280);
        
      } else if (count == 2) {
          // animation sequence 
        
      } else if (count == 3) {
          fill('white');
          rect(width/2 - 145, 0, 300, 80);
          fill('black');
          bios.type();
          bios.display();
          textAlign(LEFT);
          witch.display();
          fairy.display();
          alm.display();
        
          // images
          fill('white');
          rect(1400, 100, 200, 200);
          rect(1400, 300, 200, 200);
          rect(1400, 500, 200, 200);
          
      }
      
    }
  
    this.keyPressed = function() {
          
        if (keyCode == DOWN_ARROW) {
          if (count < 3) {
            count += 1;
          }
        } else if (keyCode == UP_ARROW) {
          if (count > 0) {
            count -= 1;
          }
        }
    }

}

function Character()
{
  
    let c = color(137, 99, 120);
  
    this.enter = function() {
      
        menu = new Menu(menuShow, imgmgr);
        
    }
  
    this.draw = function() {
      
        background(c);

        menuShow = menu.display();
      
    }

}

function Environment()
{
    let c = color(110, 68, 104);
    let title;
    let count = 0;
  
    this.enter = function() {
      
      menuShow = menu.hide();
      title = new Animation(width/2, 50, 0, 0, 'ENVIRONMENT');
      
    }
  
  
    this.draw = function() {
      
      background(c);
      
      fill('white');
      rect(width/2, 40, 300, 80);
      
      textAlign(CENTER);
      fill('black');
      title.type();
      title.display();
      
      imageMode(CENTER);
      imgmgr.environment[0].resize(0, 650);
      imgmgr.environment[1].resize(0, 650);
      imgmgr.environment[2].resize(0, 650);
      
      if (count == 1) {   
          image(imgmgr.environment[0], width/2, height/2 + 20);
//           image(imgmgr.environment[0], width/2, height/2, 1200, 650);
      }  else if (count == 2) {
          image(imgmgr.environment[1], width/2, height/2 + 20);
//           image(imgmgr.environment[1], width/2, height/2, 1300, 650);
      }  else if (count == 3) {
          image(imgmgr.environment[2], width/2, height/2 + 20);
//           image(imgmgr.environment[2], width/2, height/2, 1300, 650);
      } 
      
    }
  
    this.keyPressed = function() {
          
        if (keyCode == DOWN_ARROW) {
          if (count < 3) {
            count += 1;
          }
        } else if (keyCode == UP_ARROW) {
          if (count > 0) {
            count -= 1;
          }
        }
    }

}

function Prop()
{
    let c = color(75, 42, 83);
    let title;
    let count = 0;
  
    this.enter = function() {
      
      title = new Animation(width/2, 50, 0, 0, 'PROPS');
      
    }
  
  
    this.draw = function() {
      
      background(c);
      
      fill('white');
      rect(width/2, 40, 300, 80);
      
      textAlign(CENTER);
      fill('black');
      title.type();
      title.display();
      
      if (count == 1) {
          image(imgmgr.props[0], 500, 400, 700, 500);
      } else if (count == 2) {
          image(imgmgr.props[0], 500, 400, 700, 500);
          image(imgmgr.props[1], 1200, 400, 700, 500);
      } 
      
    }
  
    this.keyPressed = function() {
          
        if (keyCode == DOWN_ARROW) {
          if (count < 2) {
            count += 1;
          }
        } else if (keyCode == UP_ARROW) {
          if (count > 0) {
            count -= 1;
          }
        }
    }

}

function Storyboard()
{
    let c = color(39, 22, 55);
  
    this.draw = function() {
      
      background(c);
      
    }

}

function End()
{
    let c = color(12, 8, 28);
  
    this.draw = function() {
      
      background(c);
      textAlign(CENTER);
      
      
      fill('white');
      text('Credits:', width/2, 50);
      textAlign(LEFT);
      text('Christy Nguyen - Character Design and Storyboarding\n' +
           'Emily Claus - Storyboarding\n' +
           'Katie Conway - Script and Storyboarding\n' +
           'Haley Lambert - Background, Prop, and Character Design\n' +
           'Jocelyn Montoya - Character and Prop Design\n' +
           'Megan Reddy - Technical Direction\n' +
           'Maansi Sunkara - Production Management', width/2 - 400, 100);
      
    }

}
