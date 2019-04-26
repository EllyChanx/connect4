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
        this.winner;
    }

    selectColumn(columnNumber, player) {
        for(let i = 5; i > 0; i--) {
            if(this.board[i][columnNumber-1] === ' ') {
                this.board[i][columnNumber-1] = player;
                break;
            }
        }
        this.checkWinner()
        return this.board
    }

    checkWinner(){
        for(let i = 0; i <= 5; i++ ) {
            let row = this.board[i].join("")
            console.log(row)
            if (row.includes('1111')) {
                this.inProgress = false
                this.winner = 1
            } else if (row.includes('2222')) {
                this.inProgress = false
                this.winner = 2
            } else {
                this.winner = "no winner"
            }
        }
        return this.winner 
    }
}

module.exports = ConnectFour;