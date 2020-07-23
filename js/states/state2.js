var StateTwo = {
  preload: () => {
    game.load.image('bird', "img/bird.png")
    game.load.image('pipe', "img/pipe.png")
    game.load.audio("music", "music/bgmusic.mp3")
  },

  create: () => {
    background = game.add.sprite(0, 0, 'background')
    background.scale.setTo(2,2)
    bird = game.add.sprite(game.world.centerX, game.world.centerY, 'bird')
    bird.anchor = new Phaser.Point(.5, .5)
    ground = game.add.tileSprite(0, 920, game.world.width, 122, 'ground')
  
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(bird)

    bird.body.gravity.y = 1000

    game.time.events.loop(2000 ,genPipeRow ,this)

    pipes = game.add.group();

    sound = game.add.audio('music',0.1);
    sound.play();

  },

  update: () => {
    ground.tilePosition.x -= 2;
    if (bird.angle < 90 ){
      bird.angle += 2
    }

    if (game.input.activePointer.justPressed()){
      bird.body.velocity.y = -250
      bird.angle = -15
    }

    ground.bringToTop();

    if (bird.y > 920){
      game.state.start("state_three")
      sound.stop();
    }

    game.physics.arcade.collide(bird, pipes, birdCollide, null, this)


  }
}


function genPipeRow(){
  height = Math.floor(Math.random() * 300)
  this.genPipe(game.world.width ,height ,true )
  this.genPipe(game.world.width ,height + 130 ,false )
} 


function genPipe(x, y ,isInverted){

  pipe = game.add.sprite(x, y, "pipe")
  game.physics.arcade.enable(pipe)
  pipe.body.velocity.x = -150;

  pipe.anchor = new Phaser.Point(0.5, 0)

  if (isInverted){
    pipe.scale.y = -1
  }

  pipes.add(pipe);
  pipe.checkWorldBounds = true;
  pipe.outOfBoundsKill = true;
  
}

function birdCollide(obj1, obj2){
  sound.stop();
  game.state.start("state_three")
}