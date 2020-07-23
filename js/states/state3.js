var StateThree = {
  preload: () => {
    game.load.image('background',"img/background.png")
    game.load.image('gameover',"img/gameover.png")
    game.load.image('ground',"img/ground.png")
  },

  create: () => {
    background = game.add.sprite(0, 0, 'background')
    background.scale.setTo(2,2)
    ground = game.add.sprite(0, 920, 'ground')
    ground.scale.setTo(2,2)
    gameover = game.add.sprite(game.world.centerX,game.world.centerY, 'gameover')
    gameover.anchor = new Phaser.Point(.5, .5)
  },

  update: () => {
    if (game.input.activePointer.isDown){
      game.state.start("state_one")
    }
  }
}