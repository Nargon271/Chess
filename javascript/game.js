class Game {
    constructor() {
        //Info
        this.name = "Chess by Gonzalo";
        this.description = 'To be determined';
        this.version = '1.0.0';
        this.author = 'Gonzalo Argüelles Navarro'
        //canvas
        this.ctx = undefined;
        this.canvasId = undefined;
        this.canvasSize = {
            width: undefined,
            height: undefined,
        }
        //background
        this.background = undefined;
        //fps
        this.fps = 60;
        //Board
        this.numberOfRows = 8;
        this.numberOfColumns = 8;
        this.squareSize = 70;
        this.totalSquares = 64;
        this.xValue = undefined;
        this.yValue = undefined;
        this.boardTopx = 50;
        this.boardTopy = 50;
        this.squares = undefined
        
    }

    init(canvas) {
        console.log('Initializing Game in canvas,', canvas);
        this.canvasId = document.querySelector(canvas);
        console.log(this.canvasId)
        this.ctx = this.canvasId.getContext('2d');
        this.drawChessBoard();
        this.setBoard();
    }

    drawChessBoard() {
        this.canvasSize.width = '800px'
        this.canvasSize.height = '660px'
        this.canvasId.setAttribute('width', this.canvasSize.width)
        this.canvasId.setAttribute('height', this.canvasSize.height)

        for(let i=0; i<this.numberOfRows; i++) {
            for(let j=0; j<this.numberOfColumns; j++) {
            this.ctx.fillStyle = ((i+j)%2==0) ? "#EEEED2":"#769656";
            let xOffset = this.boardTopx + j*this.squareSize;
            let yOffset = this.boardTopy + i*this.squareSize;
            this.ctx.fillRect(xOffset, yOffset, this.squareSize, this.squareSize);
            }
        }
        // draw the border around the chessboard
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(this.boardTopx, this.boardTopy, squareSize*8, squareSize*8)
    }

    setBoard() {

    }
}