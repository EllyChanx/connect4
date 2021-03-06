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
    if (typeof columnNumber !== 'number') throw new Error ('enter number only')
    if (columnNumber < 1 || columnNumber > 6) throw new Error ('column number incorrect')
    if(this.board[0][columnNumber-1] !== ' ') throw new Error ('column is full')
    for(let i = 5; i >= 0; i--) {
      if(this.board[i][columnNumber-1] === ' ') {
        this.board[i][columnNumber-1] = player;
        break;
      }
    }
    this.checkWinHorizontally(player)
  }

  isConnect4(ary, player){
    return ary.join("").includes(`${player}`.repeat(4))
  }

  checkWinHorizontally(player){
    for(let i = 0; i <= 5; i++ ) {
      this.isConnect4(this.board[i], player) ? this.setEndGame(player) : this.checkWinVertically(player);
    }
  }

  checkWinVertically(player){
    let column = [];
    for (let j = 0; j <= 5; j ++) {
      for(let i = 0; i <= 5; i++){
        column.push(this.board[i][j])
      }
      this.isConnect4(column, player) ? this.setEndGame(player) : this.checkWinDiagonallyAsce(player);
    }
  }

  checkWinDiagonallyAsce(player){
    let diagonal = []
    for(let i = 3; i <= 5; i++){
      for(let j = 0; j <= 2; j++) {
        for (let row = j, col = i; row <= i; row++, col--){
          diagonal.push(this.board[row][col])
        }
        this.isConnect4(diagonal, player) ? this.setEndGame(player) : this.checkWinDiagonallyDesc(player);
      }
    }
  }

  checkWinDiagonallyDesc(player){
    let diagonal = []
    for(let h = 0; h <= 2; h++){
      for(let k = 0; k <= 2; k++) {
        for(let row = k, col = h; col <= 5 && row <= 5; row++, col++){
          diagonal.push(this.board[row][col])
        }
        this.isConnect4(diagonal, player) ? this.setEndGame(player) : this.checkDraw();
      }
    }
  }

  checkDraw(){
    return this.board.join("").includes(' ') ? true : this.setDrawGame();
  }

  setDrawGame(){
    if (!this.inProgress) { return }
    this.inProgress = false
    this.winner = "No One! Is Draw."
  }

  setEndGame(player){
    this.inProgress = false
    this.winner = player
  }
}

module.exports = ConnectFour;