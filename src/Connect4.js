class ConnectFour {
    constructor() {
        this.inProgress = true;
        this.board = [
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ']
        ];
    }

    selectColumn(columnNumber, player) {
        for(let i = 5; i > 0; i--) {
            if(this.board[i][columnNumber-1] === ' ') {
                this.board[i][columnNumber-1] = player;
                return this.board
            }
        }
        return this.board
    }
}

module.exports = ConnectFour;