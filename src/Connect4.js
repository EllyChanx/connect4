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
        this.checkWinnerHorizontally()
        this.checkWinnerVertically()
        return this.board
    }

    checkWinnerHorizontally(){
        for(let i = 0; i <= 5; i++ ) {
            let row = this.board[i].join("")
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

    checkWinnerVertically(){
        let column = [];
        let self = this;

        for (let j = 0; j <= 5; j ++) {
            for(let i = 0; i <= 5; i++){
                column.push(self.board[i][j])
            }

            let columnString = column.join("")
            if (columnString.includes('1111')){
                self.inProgress = false
                self.winner = 1
            } else if (columnString.includes('2222')) {
                self.inProgress = false
                self.winner = 2
            } else {
                self.winner = "no winner"
            }
        }
        return this.winner
    }
}

module.exports = ConnectFour;