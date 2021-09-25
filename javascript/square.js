class Square {
    constructor(squareName, squareColumn, squareRow, color, state) {
        this.squareName = squareName;
        this.squareColumn = squareColumn;
        this.squareRow = squareRow;
        this.color = color;
        this.state = state;
        this.lastPiece;
        this.currentPiece;
    }
}