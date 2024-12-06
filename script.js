//for me: things left to do: help button, 2lose screen
//opt: code in predators, party scene (full)


/* VARIABLES */
let screen = 0;
let titleDesign, infoButton, playButton;
let directionTitle, homeButton;
let continueButton, restartButton;
let Corbin, CorbinTort;
let rainA, rainB, rainC;
let fallingBread, fallingRock;
let score = 0;
let walls;
let helpButton, backButton;
let CorbinImg, CorbinTortImg, BreadImg, FoxImg, RockImg, SnakeImg, WolfImg;

/* PRELOAD LOADS FILES */
function preload() {
  CorbinImg = loadImage("assets/birdie.PNG");
  CorbinTortImg = loadImage("assets/birdietort.PNG");
  BreadImg = loadImage("assets/bread.PNG");
  FoxImg = loadImage("assets/foxie.PNG");
  RockImg = loadImage("assets/rock.PNG");
  SnakeImg = loadImage("assets/snakie.PNG");
  WolfImg = loadImage("assets/wolfie.PNG");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(134, 212, 255);
  textAlign(CENTER);
  textSize(20);

  //resize

  //create home screen buttons
  titleDesign = new Sprite(200, 125);
  infoButton = new Sprite(100, 275);
  directionTitle = new Sprite(-400, -450);
  playButton = new Sprite(300, 275);
  homeButton = new Sprite(-50, -50);

  //create backstory buttons
  continueButton = new Sprite(-200, -200);
  continueButton.w = 100;
  continueButton.h = 50;
  continueButton.collider = 'k';
  continueButton.color = 'white';
  continueButton.text = 'Continue';

  //create help
  helpButton = new Sprite(-130, -130);
  backButton = new Sprite(-230, -230);

  //create game 1 (avoid tree) features

  //set up home screen
  background(134, 212, 255);

  //create home screen sprites
  titleDesign.w = 175;
  titleDesign.h = 50;
  titleDesign.collider = 'k';
  titleDesign.color = 'white';
  titleDesign.text = "Corbin's Journey";

  playButton.w = 100;
  playButton.h = 50;
  playButton.collider = 'k';
  playButton.color = 'white';
  playButton.text = 'Play';

  infoButton.w = 100;
  infoButton.h = 50;
  infoButton.collider = 'k';
  infoButton.color = 'white';
  infoButton.text = 'Directions';

  //set up info screen

  //create info screen sprites
  directionTitle.w = 175;
  directionTitle.h = 50;
  directionTitle.collider = 'k';
  directionTitle.color = 'white';
  directionTitle.text = 'Directions';

  homeButton.w = 100;
  homeButton.h = 50;
  homeButton.collider = 'k';
  homeButton.color = 'white';
  homeButton.text = 'Back';

  //set up game 1 (avoider)
  Corbin = new Sprite(CorbinImg,-100,-100, 2500, 1000);
  Corbin.scale = (0.03);
  Corbin.color = 'white';
  Corbin.rotationLock = true;
  //Corbin.text = 'Corbin';

  rainA = new Sprite(-100, -10, 20, 30, "k")
  rainA.color = ('red');
  rainA.vel.y = 3
  rainA.text = "R"

  rainB = new Sprite(-200, -100, 20, 40, "k");
  rainB.color = ('green');
  rainB.vel.y = 7
  rainB.text = "G"

  rainC = new Sprite(-300, -100, 20, 20, "k");
  rainC.color = ('lightblue');
  rainC.vel.y = 5
  rainC.text = "B"
  
  //set up game 2 (collection game)

  fallingBread = new Sprite(BreadImg, -500, -500, 1000);
  fallingBread.scale = (0.01);
  fallingBread.color = 'white';
  fallingBread.vel.y = 2;
  fallingBread.rotationLock = true;

  fallingRock = new Sprite(RockImg, -525, -525, 1000);
  fallingRock.scale = (0.03);
  fallingRock.color = 'black';
  fallingRock.vel.y = 2;
  fallingRock.rotationLock = true;

  //set up game 3 (maze game)
  CorbinTort = new Sprite(CorbinTortImg, -333, -333, 1333, 1333);
  CorbinTort.scale = (0.03);
  CorbinTort.color = 'white';
  CorbinTort.text = 'CT';

  walls = new Group();
  walls.color = color(0);
  walls.collider = "s";

  //restart button (end of game)
  restartButton = new Sprite(-444, -444, 100, 50, "kinetic");
  restartButton.color = 'white';
  restartButton.text = 'Play Again'
}



/* DRAW LOOP REPEATS */
function draw() {

  // Check play button
  if (screen == 0 && infoButton.mouse.presses()) {
    screen = 1;
  } else if (screen == 1) {
    showScreen1();
    if (homeButton.mouse.presses()) {
      showScreen0();
    }
  } else if (screen == 2) {
    showScreen2();
  } else if (screen == 3) {
    showScreen3();
  } else if (screen == 4) {
    showScreen4();
  } else if (screen == 5) {
    showScreen5();
    //to be removed later, after game is added
    //if (screen == 5 && mouseIsPressed) {
      //screen = 6;}
  } else if (screen == 6) {
    showScreen6();
  } else if (screen == 7) {
    showScreen7();
  } else if (screen == 8) {
    showScreen8();
  } else if (screen == 9) {
    showScreen9();
  } else if (screen == 10) {
    showScreen10();
  } else if (screen == 11) {
    showScreen11();
  } else if (screen == 12) {
    showScreen12();
  } else if (screen == 13) {
    showScreen13();
  } else if (screen == 14) {
    showScreen14();
  } else if (screen == 15) {
    showScreen15();
  } else if (screen == 16) {
    showScreen16();
      if (restartButton.mouse.presses()) {
        showScreen0();
    }
  }


  // click play button (first)
  if (playButton.mouse.presses()) {
    showScreen2();
    screen = 2;
  }

  // click continue
  if (continueButton.mouse.presses()) {
    screen++;
    if (screen == 5) {
      Corbin.pos = {x: 380, y:100};
      rainA.pos = {x: 100, y: 10};
      rainB.pos = {x: 200, y: -100};
      rainC.pos = {x: 300, y: -100};
      
    } else if (screen == 9) {
      Corbin.x = 200;
      Corbin.y = 350;
      fallingBread.x = 100;
      fallingBread.y = 0;
      fallingRock.x = 300;
      fallingRock.y = 0;
      //allSprites.debug = mouse.pressing();
    } else if (screen == 11) {
      continueButton.pos = { x: -200, y: -200 };

      // It had something to do with the layering of walls and CorbinTort. We just have to make sure that the walls are on top of CorbinTort. And put them in position in a function that isn't being called on draw() throughout the game!
      CorbinTort.pos = { x: 350, y: 50 };
      //drawMaze();
    }
  }

}




/* FUNCTIONS */

function showScreen0() {
  //this is the home screen
  background(134, 212, 255)
  titleDesign.pos = { x: 200, y: 125 };
  infoButton.pos = { x: 100, y: 275 };
  directionTitle.pos = { x: -400, y: -450 };
  playButton.pos = { x: 300, y: 275 };
  homeButton.pos = { x: -50, y: -50 };
  restartButton.pos = {x: -444, y: -444};
  screen = 0;
}

function showScreen1() {
  //this is the directions screen
  background(134, 212, 255);
  titleDesign.pos = { x: -400, y: -400 };
  playButton.pos = { x: -125, y: -125 };
  infoButton.pos = { x: -500, y: -500 };
  directionTitle.pos = { x: 200, y: 65 };
  homeButton.pos = { x: 200, y: 300 };
  textSize(20);
  text("Complete the levels to help\nCorbin find acceptance on his    \njourney. If you’re having trouble,\nclick the “help” button (not yet added) for\nsome words of encouragement.\nPLEASE click slowly!!!", 200, 130);
  screen = 1;
}

function showScreen2() {
  //this is backstory screen 1
  background(13, 56, 211);
  titleDesign.pos = { x: -400, y: -400 };
  playButton.pos = { x: -125, y: -125 };
  infoButton.pos = { x: -500, y: -500 };
  directionTitle.pos = { x: -400, y: -450 };
  homeButton.pos = { x: -50, y: -50 };
  continueButton.pos = { x: 200, y: 300 };
  textSize(15);
  fill('white');
  text("Once upon a time, there was a birdie named Corbin.\nCorbin grew up with lots of love from his parents,\nbut he was always teased by his community for\nbeing different, as he had a scar over one of his\neyes from an accident he had when he was a baby.\nEventually, Corbin decided he couldn’t take the\nteasing anymore. He felt that he would never be\naccepted for who he was because he looked different.\nOne day, without so much as a note for his\nparents, Corbin decided to leave the nest in search of a\ncommunity where he could fit in.", 200, 65);
  screen = 2;
}

function showScreen3() {
  //this is backstory screen 2
  background(13, 56, 211);
  textSize(15);
  fill('white');
  text("Alas, the real world is too dangerous for Corbin\nto navigate his journey alone! Why don’t\nyou help Corbin on his travels?\n\nWho knows? He might just find enough\nencouragement along the way and return home.\n\nYou’ll just have to wait and see.", 200, 100);
  screen = 3;
}

function showScreen4() {
  //this is directions for game 1
  background(0, 116, 193);
  textSize(15);
  fill('white');
  text("The first place Corbin encounters on his journey\nis the deep dark forest, known for its scary rain\nand tough inhabitants--bears!\n\nUsing your arrow keys, keep Corbin safe as he\nnavigates the raining objects. Avoid the\nobstacles and make it to the other side,\nbut be careful! Hitting an obstacle will send you\nback to the beginning.\nGood luck!", 200, 80);
  screen = 4;
}

function showScreen5() {
  //this is game 1 (avoid object rain)
  screen = 5;
  continueButton.x = -500;
  background(134, 212, 255);

  //move Corbin
  if (kb.pressing("left")) {
    Corbin.vel.x = -3;
  } else if (kb.pressing("right")) {
    Corbin.vel.x = 3;
  } else if (kb.pressing("down")){
    Corbin.vel.y = 3;
  } else if (kb.pressing("up")){
    Corbin.vel.y = -3;
  } else {
    Corbin.vel.x = 0;
    Corbin.vel.y = 0;
  }

  //limit Corbin movement
  if (Corbin.x > 380) {
    Corbin.x = 380;
  }
  if (Corbin.y < 20) {
    Corbin.y = 20;
  } else if (Corbin.y > 380) {
    Corbin.y = 380;
  }

  //respawn falling rainy objects
  if (rainA.y > height) {
    rainA.x = 100;
    rainA.y = -50;
    rainA.vel.y = 3;
  } 

  if (rainB.y > height) {
    rainB.x = 200;
    rainB.y = -50;
    rainB.vel.y = 7;
  } 

  if (rainC.y > height) {
    rainC.x = 300;
    rainC.y = -50;
    rainC.vel.y = 5;
  } 

  //make raining objects dangerous C:<
  if (Corbin.collides(rainA)) {
    Corbin.pos = {x: 380, y: 100};
  } else if (Corbin.collides(rainB)) {
    Corbin.pos = {x: 380, y: 100};
  } else if (Corbin.collides(rainC)) {
    Corbin.pos = {x: 380, y: 100};
  }

  //win & progress
  if (Corbin.x < 0) {
    //win
      Corbin.vel.x = 0;
      Corbin.vel.y = 0;
      Corbin.x = -1100;
      rainA.x = -200;
      rainA.vel.x = 0;
      rainB.x = -500;
      rainB.vel.x = 0;
      rainC.x = -1000;
      rainC.vel.x = 0;
    //screen
      background(0);
      textSize(20);
      fill(255);
      text("Yay! You made it!", 200, 190);
      textSize(10);
      text("Click anywhere to continue", 200, 210);
    //progress
      if(mouseIsPressed) {
        showScreen6();
        screen = 6;
      }
  }
}

function showScreen6() {
  //this is directions for game 2 (screen 1)
  background(0, 116, 193);
  continueButton.pos = { x: 200, y: 300 };
  textSize(15);
  fill('white');
  text("Hooray! Corbin has successfully made it through\nthe rainy forest. But on the other side, it is strangely\nquiet. Nervous, Corbin looks around… and sees a\ngiant bear in the middle of the clearing!\n\nAfraid, Corbin almost flies away. But he notices that\nthe bear seems to be shaking. And when he flies\na bit closer, he can hear sniffles. The bear is crying!\n\n“What’s wrong?” asks Corbin cautiously.\n“My foot, it’s stuck!” exclaims the bear, pointing to\na mouse trap. “Can you help me get it out?”", 200, 55);
  screen = 6;
}

function showScreen7() {
  //this is directions for game 2 (screen 2)
  background(0, 116, 193);
  textSize(15);
  fill('white');
  text("“Sure!” Corbin uses his beak to free the bear’s leg.\nRelieved, the bear thanks him, surprisingly peaceful.\n Curious, Corbin asks, “Where are the other bears?”\n The bear rolls his eyes. “They kicked me out.\nApparently there is no such thing as a peaceful bear.”\n“And you’re okay with that?” Corbin asks, puzzled.\n“Duh! If they can’t accept me for who I am,\nthen they don’t deserve me anyway.”\n“But you’re all alone. How is that okay?”\n“I’m happy with myself. I don’t need anyone else.”\nCorbin ponders this for a moment before he is\ninterrupted by a loud rumbling noise.", 200, 55);
  screen = 7;
}

function showScreen8() {
  //this is directions for game 2 (screen 3)
  background(0, 116, 193);
  textSize(15);
  fill('white');
  text("“Oops,” says the bear, a sheepish expression on\nhis face. “Guess I’m hungry. You wouldn’t happen to\nhave any food, would you?”\n“No, but I can get some!” exclaims Corbin.\n\nHelp Corbin gather food. Move Corbin using your\narrow keys and collect 10 falling bread. But be\ncareful! Avoid the falling rocks! Remember, every\ntime you miss a bread or you collect a rock, you\nlose a point.\n\nGood luck!", 200, 55);
  screen = 8;
  //Negative points will make you start over!
}

function showScreen9() {
  //this is game 2 (collecting bread)
  screen = 9;
  continueButton.x = -500;
  background(134, 212, 255);
  fallingBread.vel.y = 2;
  fallingBread.direction = "down";
  fallingRock.vel.y = 2;
  fallingRock.direction = "down";

  //If fallingBread reaches bottom, move back to random position at top.
  if (fallingBread.y >= 400) {
    fallingBread.y = 0;
    fallingBread.x = random(10, 390);
    fallingBread.vel.y = random(1, 5);
    fallingBread.direction = "down";
    score = score - 1;
  }

  //If fallingRock reaches bottom, move back to random position at top.
  if (fallingRock.y >= 400) {
    fallingRock.y = 0;
    fallingRock.x = random(10, 390);
    fallingRock.vel.y = random(1, 5);
    fallingRock.direction = "down";
  }

  //move Corbin
  if (kb.pressing("left")) {
    Corbin.vel.x = -3;
  } else if (kb.pressing("right")) {
    Corbin.vel.x = 3;
  } else {
    Corbin.vel.x = 0;
  }

  //Stop Corbin catcher at edges of screen
  if (Corbin.x < 20) {
    Corbin.x = 20;
  } else if (Corbin.x > 380) {
    Corbin.x = 380;
  }
  if (Corbin.y < 340) {
    Corbin.y = 340;
  } else if (Corbin.y > 340) {
    Corbin.y = 340;
  }

  //If fallingBread collides with Corbin catcher, move back to random position at top
  if (fallingBread.collides(Corbin)) {
    fallingBread.y = 0;
    fallingBread.x = random(10, 390);
    fallingBread.vel.y = (1, 5);
    fallingBread.direction = "down";
    score = score + 1;
  }

  //if fallingRock collides with Corbin catcher, move back to random position at top
  if (fallingRock.collides(Corbin)) {
    fallingRock.y = 0;
    fallingRock.x = random(10, 390);
    fallingRock.vel.y = (1, 5);
    fallingRock.direction = "down";
    score = score - 1;
  }

  //Draw the score to screen
  fill(0);
  textSize(20);
  text("Score = " + score, 70, 30);

  //win
  if (score >= 10) {
    Corbin.pos = { x: -100, y: -100 };
    fallingBread.pos = { x: -500, y: -500 };
    fallingBread.vel.x = 0;
    fallingRock.pos = { x: -525, y: -525 };
    fallingRock.vel.x = 0;
    background(0);
    fill(255);
    textSize(20);
    text("Hooray! You've collected enough food!\nLet's return to the bear.", 200, 150)
    textSize(13);
    text("Click anywhere to continue", 200, 225);
    if (mouseIsPressed) {
      showScreen10();
    }
  }
}

function showScreen10() {
  //this is directions for game 3 (maze)
  background(0, 116, 193);
  continueButton.pos = { x: 200, y: 320 };
  textSize(14);
  fill('white');
  text("After devouring the bread, it is time for goodbyes.\nThe bear says solemnly, “I hope you find whatever\nyou are looking for. Just remember to trust in yourself.”\n\nLater in his journey, Corbin encounters a maze, where\nhe sees a crying baby tortoise at the entrance.\nWorried, he flies over and lands next to her.\n\n“What’s wrong?” he asks.\n“I can’t find my parents,” she sniffles.\n“I can help you!” he offers.\n\nHelp Corbin through the maze to find her parents.\nGood luck!", 200, 40);
  screen = 10;
  //Be careful! Avoid the hidden predators.
}

function showScreen11() {
  //this is game 3 (maze)
  background(134, 212, 255);
  drawMaze();
  
  //move CorbinTort
  if (kb.pressing("left")) {
    CorbinTort.vel.x = -3;
  } else if (kb.pressing("right")) {
    CorbinTort.vel.x = 3;
  } else if (kb.pressing("up")) {
    CorbinTort.vel.y = -3;
  } else if (kb.pressing("down")) {
    CorbinTort.vel.y = 3;
  } else {
    CorbinTort.vel.x = 0;
    CorbinTort.vel.y = 0;
  }

  // Draw start and end text
  fill(0);
  textSize(20);
  text('Start', 340, 20);
  text('End', 30, 395);

  //CorbinTort cannot go above maze
  if (CorbinTort.y < 20) {
    CorbinTort.y = 20;
  }

  // CorbinTort wins
  if (CorbinTort.y > 380) {
    background(0);
    CorbinTort.color = "black"
    fill(255);
    textSize(20);
    text('Yay, you made it!', 200, 190);
    textSize(13);
    text('Click anywhere to continue\n(it may take a few seconds)', 200, 210)
    CorbinTort.vel.x = 0;
    CorbinTort.vel.y = 0;
    if (mouseIsPressed) {
      CorbinTort.pos = {x: -333, y: -333};
      walls.x = -1000
      showScreen12();
    }
  }
}

function drawMaze() {
  new walls.Sprite(160, 10, 300, 5);
  new walls.Sprite(10, 200, 5, 385);
  new walls.Sprite(150, 60, 5, 100);
  new walls.Sprite(235, 390, 325, 5);
  new walls.Sprite(50, 300, 75, 5);
  new walls.Sprite(340, 146, 110, 5);
  new walls.Sprite(340, 250, 110, 5);
  new walls.Sprite(285, 198, 5, 109);
  new walls.Sprite(185, 332, 5, 109);
  new walls.Sprite(190, 197, 185, 5);
  new walls.Sprite(395, 200, 5, 380);
}

function showScreen12() {
  //this is end story screen 1
    background(13, 56, 211);
    continueButton.pos = {x: 200, y: 325};
    textSize(15);
    text('Yay! The baby tortoise is successfully reunited\nwith her parents!\n\n“I’m sorry for wandering so far,” she tells them.\n“It’s alright. We are just glad to have you back.\nWe love you no matter what,” they respond.\n\nCorbin, hearing this exchange, is reminded of\nhis own parents. He knows they are probably worried\nabout where he went. He feels a pang of loneliness;\nhe just wants to go home and see his parents again.\n\nBut could he?',200,55);
  screen = 12;
}

function showScreen13() {
  //this is end story screen 1
    background(13, 56, 211);
    continueButton.pos = {x: 200, y: 330};
    textSize(15);
    text('After all, he had left without a word. Because he is\nan outcast… because he is different.\n\nBut is that difference such a terrible thing?\n\nHe thinks of the peaceful bear he met near the\n forest. The peaceful bear that was cast out for the\nsame reason – being different. The peaceful bear who\nis fine regardless... because he is at peace with himself.\n\nHe looks at the happy family of tortoises,\nrejoicing together because they are together.\n\nThen he flaps his wings, taking to the air once more.',200,50);
  screen = 13;
}

function showScreen14() {
  //this is end story screen 1
    background(13, 56, 211);
    continueButton.pos = {x: 200, y: 330};
    textSize(15);
    text('Night has fallen by the time Corbin finally\nlands on the branch outside his home. Taking\na deep breath for courage, he walks inside and sees\nhis parents in the kitchen. The second they see\nhim, they run over and envelop him in a big hug.\n\n“We were so worried,” cries his mom. \nCorbin apologizes. “I didn’t want to feel like an\noutsider anymore. But now I realize that it doesn’t\nmatter anymore. It wasn’t right to leave like that.”\n“No matter what anyone says, we always love you,”\nsays his dad. “And you don’t have to fit in; you’re\nspecial and perfect the way you are.”',200,50);
  screen = 14;
}

function showScreen15() {
  //this is end story screen 1
    background(13, 56, 211);
    continueButton.pos = {x: 200, y: 330};
    textSize(15);
    text('With the help of the peaceful bear, the tortoises, and\nhis own parents, Corbin realizes that there is\nnothing to worry about in the first place. What\ndid it matter if he isn’t accepted by others? His\nparents right here would always have his back.\n\nFrom then on, Corbin takes pride in his scar, as it\ndemonstrates his discovery of what truly matters:\nHome, Love, and Hope.\n\nAs Corbin learned, hope is his trust in himself, his\ntrust that whatever the future may bring, he is\nready to face it. After all, all he really needs is\nto believe in himself.',200,50);
  screen = 15;
}

function showScreen16() {
  //this is end story screen 1
    background(134, 212, 255);
    continueButton.pos = {x: -200, y: -200};
    restartButton.pos = {x: 200, y: 300};
    fill(0);
    textSize(25);
    text('THE END',200,175);
  screen = 16;
}