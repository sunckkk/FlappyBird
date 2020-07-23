var game = new Phaser.Game(576, 1024, Phaser.AUTO, 'game');




game.state.add('state_one', StateOne);
game.state.add('state_two', StateTwo);
game.state.add('state_three', StateThree);


game.state.start('state_one');


window.focus();
resize();
window.addEventListener('resize', resize, false);


function resize() {
    window.focus();
    window.onload = function (){
        setInterval(() => {
            console.log(1)
            var canvas = document.querySelector('canvas');
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var windowRatio = windowWidth / windowHeight;
            var gameRatio = 288 / 512;
            if (windowRatio < gameRatio) {
                canvas.style.width = windowWidth + 'px';
                canvas.style.height = (windowWidth / gameRatio) + 'px';
            } else {
                canvas.style.width = (windowHeight * gameRatio) + 'px';
                canvas.style.height = windowHeight + 'px';
            }
        }, 20);
    }
}



