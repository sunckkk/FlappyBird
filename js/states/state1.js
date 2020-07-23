var StateOne = {
  preload: () => {
    game.load.image('background',"img/background.png")
    game.load.image('ground',"img/ground.png")
    game.load.image('start',"img/start.png")
    game.load.image('title', "img/title.png")
  },

  create: () => {
    background = game.add.sprite(0, 0, 'background')
    background.scale.setTo(2,2)
    ground = game.add.sprite(0, 920, 'ground')
    ground.scale.setTo(2,2)
    start = game.add.sprite(game.world.centerX,game.world.centerY, 'start')
    start.anchor = new Phaser.Point(.5, .5)
    title = game.add.sprite(game.world.centerX,game.world.centerY - 100, 'title')
    title.anchor = new Phaser.Point(.5, .5)
  },

  update: () => {

    if (game.input.activePointer.isDown){
      game.state.start("state_two")
      
    }

  }
}