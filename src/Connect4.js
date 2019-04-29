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
    this.checkWinnerHorizontally(player)
    this.checkWinnerVertically(player)
    this.checkWinnerDiagonally(player)
    return this.board
  }

  checkWinnerHorizontally(player){
    for(let i = 0; i <= 5; i++ ) {
      let row = this.board[i].join("")
      if (row.includes(`${player}`.repeat(4))) {
        this.inProgress = false
        this.winner = player
      } else {
        this.winner = "no winner"
      }
    }
    return this.winner 
  }

  checkWinnerVertically(player){
    let column = [];
    for (let j = 0; j <= 5; j ++) {
      for(let i = 0; i <= 5; i++){
        column.push(this.board[i][j])
      }
      if (column.join("").includes(`${player}`.repeat(4))){
        this.inProgress = false
        this.winner = player
      } else {
        this.winner = "no winner"
      }
    }
    return this.winner
  }

  checkWinnerDiagonally(player){
    let diagonal = []
    for(let i = 3; i <= 5; i++){
      for(let j = 0; j <= 2; j++) {
        for (let row = j, col = i; row <= i; row++, col--){
          diagonal.push(this.board[row][col])
          }
        if (diagonal.join("").includes(`${player}`.repeat(4))){
          this.inProgress = false
          this.winner = player
        }
      }
    }
    return this.winner
  }
}

module.exports = ConnectFour;