let mgr;

function setup() {
  
  createCanvas(400, 400);
  
  mgr = new SceneManager();
  
  // Preload scenes
  mgr.addScene( Intro );
  mgr.addScene( Story );
  mgr.addScene( Character );
  mgr.addScene( Environment );
  mgr.addScene( Prop );
  mgr.addScene( Storyboard );
  mgr.addScene( End );
  
  
  mgr.showNextScene();
  
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
      textAlign(CENTER);
      
      
      fill('black');
      text('Wicked Cute\n' +
           'By: The Wicked Cuties\n', width/2, height/2);
      
      text('Usage:\n' +
           'Press RIGHT ARROW to flip scenes\n' +
           'Press DOWN ARROW to move through scene', width/2, 300);
      
    }

}

function Story()
{
    let c = color(165, 135, 143);
    let logline, witch;
    let count = 0;
  
    this.setup = function() {
      
      logline = new Animation(width/2, height/2, 0, 0, "Logline");
      witch = new Animation(width/2, 300, 50, 30, 0);
      
    }
  
    this.draw = function() {
      
      background(c);
      textAlign(CENTER);
      // fill('black');
      
      if (count == 0) {    
          // text('Logline', width/2, height/2);
          logline.display();
          logline.easeIn();
          // witch.display();
          // witch.easeIn();
      } else if (count == 1) {
          text('Bios', width/2, height/2);
      } else if (count == 2) {
          text('Inspiration', width/2, height/2);
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

function Character()
{
    let witch, fairy, alm;
    let expr, pose, turn;
    let c = color(137, 99, 120);
  
    this.setup = function() {
      
      witch = createCheckbox('Witch', false);
      fairy = createCheckbox('Fairy', false);
      alm = createCheckbox('Almiraj', false);
      expr = createCheckbox('Expression', false);
      pose = createCheckbox('Poses', false);
      turn = createCheckbox('Turnaround', false);
      
      witch.position(10, 10);
      fairy.position(10, 30);
      alm.position(10, 50);
      
      expr.position(80, 10);
      pose.position(80, 30);
      turn.position(80, 50);
      
      textAlign(CENTER);
      fill('white');
      
    }
  
    this.draw = function() {
      
      background(c);
      
      if (witch.checked()) {
          text('Witch', width/2, height/2);
      }
      if (fairy.checked()) {
          text('Fairy', width/2, height/2);
      }
      if (alm.checked()) {
          text('Almiraj', width/2, height/2);
      }
      if (expr.checked()) {
          text('Expression', width/2, 250);
      }
      if (pose.checked()) {
          text('Poses', width/2, 250);
      }
      if (turn.checked()) {
          text('Turnaround', width/2, 250);
      }
      
    }

}

function Environment()
{
    let c = color(110, 68, 104);
  
    this.draw = function() {
      
      background(c);
      textAlign(CENTER);
      fill('white');
      
      text('Environment Progression', width/2, height/2);
      
    }

}

function Prop()
{
    let c = color(75, 42, 83);
  
    this.draw = function() {
      
      background(c);
      textAlign(CENTER);
      fill('white');
      
      text('Prop Progression', width/2, height/2);
      
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
      text('Credits:\n' +
           '[insert team names and roles]', width/2, height/2);
      
    }

}