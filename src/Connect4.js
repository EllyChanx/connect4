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
    this.winner = "no winner";
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
      row.includes(`${player}`.repeat(4))? this.setEndGame(player):false;
    }
    return this.winner 
  }

  checkWinnerVertically(player){
    let column = [];
    for (let j = 0; j <= 5; j ++) {
      for(let i = 0; i <= 5; i++){
        column.push(this.board[i][j])
      }
      column.join("").includes(`${player}`.repeat(4))? this.setEndGame(player):false;
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
        diagonal.join("").includes(`${player}`.repeat(4))? this.setEndGame(player):false;
      }
    }
    return this.winner
  }

  checkWinnerDiagonally2(player){
    let diagonal = []
    for(let h = 0; h <= 2; h++){
      for(let k = 0; k <= 2; k++) {
        for(let row = k, col = h; col <= 5 && row <= 5; row++, col++){
          diagonal.push(this.board[row][col])
        }
        diagonal.join("").includes(`${player}`.repeat(4))? this.setEndGame(player):false;
      }
    }
    return this.winner
  }

  setEndGame(player){
    this.inProgress = false
    this.winner = player
  }
}

module.exports = ConnectFour;