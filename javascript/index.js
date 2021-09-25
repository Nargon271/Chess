window.addEventListener('load', (event) => {
    console.log('Page Fully loaded..')
    document.querySelector('#start-button').onclick = () => {
        console.log('Start Game')
        startGame();
    }
    document.querySelector('.youWin').onclick = () => {
        winAgain();
    }
    document.querySelector('.tryAgain').onclick = () => {
        tryAgain();
    }
});

startGame = () => {
    const startDisplay = document.querySelector('.start-game')
    startDisplay.style.display = 'none'
    const game = new Game()
    game.init('#canvas')
}