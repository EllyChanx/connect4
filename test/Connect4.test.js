const Connect4 = require('../src/Connect4.js');

describe('Connect4', () => {

  let connect4;

  beforeEach(function() {
    connect4 = new Connect4();
  });

  test('starts with an empty board', () => {
    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ']
    ]);
  });

  test('#selectColumn take params and display on board', () => {
    expect(connect4.selectColumn(1, 1)).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' ']
    ]);

    expect(connect4.selectColumn(1, 2)).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [2, ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' ']
    ]);

    expect(connect4.selectColumn(1, 1)).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' '],
      [2, ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' ']
    ]);

    expect(connect4.selectColumn(3, 2)).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' '],
      [2, ' ', ' ', ' ', ' ', ' '],
      [1, ' ', 2, ' ', ' ', ' ']
    ]);
  });

  test('#checkWinnerHorizontally check the board and find winner', () => {
    connect4.selectColumn(1,1);
    connect4.selectColumn(2,1);
    connect4.selectColumn(3,1);
    connect4.selectColumn(4,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.checkWinnerHorizontally(1)).toEqual(1);
  });

  test('#checkWinnerHorizontally return no winner if dot not connected', () => {
    connect4.selectColumn(1,1);
    connect4.selectColumn(2,1);
    connect4.selectColumn(4,1);
    connect4.selectColumn(5,1);
    expect(connect4.inProgress).toEqual(true);
    expect(connect4.checkWinnerHorizontally(1)).toEqual("no winner");
  });

  test('#checkWinnerHorizontally return the winner', () => {
    connect4.selectColumn(1,2);
    connect4.selectColumn(2,2);
    connect4.selectColumn(3,2);
    connect4.selectColumn(4,2);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.checkWinnerHorizontally(2)).toEqual(2);
  });

  test('#checkWinnerVertically win at col 1 return the winner', () => {
    connect4.selectColumn(1,1);
    connect4.selectColumn(1,1);
    connect4.selectColumn(1,1);
    connect4.selectColumn(1,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.checkWinnerVertically(1)).toEqual(1);
  });

  test('#checkWinnerVertically win at col 2 return the winner', () => {
    connect4.selectColumn(3,1);
    connect4.selectColumn(3,1);
    connect4.selectColumn(3,1);
    connect4.selectColumn(3,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.checkWinnerVertically(1)).toEqual(1); 
  });

  test('#checkWinDiagonallyAsce on row-0 col-3 line', () => {
    connect4.board = [
      [' ', ' ', ' ', 1, ' ', ' '],
      [' ', ' ', 1, ' ', ' ', ' '],
      [' ', 1, ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' ']
    ];
    connect4.selectColumn(1,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.winner).toEqual(1);
  });

  test('#checkWinDiagonallyAsce on row-0 col-5 line', () => {
    connect4.board = [
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 1, ' ', ' '],
      [' ', ' ', 1, ' ', ' ', ' '],
      [' ', 1, ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ']
    ];
    connect4.selectColumn(1,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.winner).toEqual(1);
  });

  test('#checkWinDiagonallyAsce on row-2 col-5 line', () => {
    connect4.board = [
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', 1],
      [' ', ' ', ' ', ' ', 1, ' '],
      [' ', ' ', ' ', 1, ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ']
    ];
    connect4.selectColumn(3,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.winner).toEqual(1);
  });

  test('#checkWinDiagonallyDesc on row-0 col-0 line ', () => {
    connect4.board = [
      [1, ' ', ' ', ' ', ' ', ' '],
      [' ', 1, ' ', ' ', ' ', ' '],
      [' ', ' ', 1, ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 1, ' ', ' '],
      [' ', ' ', ' ', 1, ' ', ' ']
    ];
    connect4.selectColumn(4,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.winner).toEqual(1);
  });

  test('#checkWinDiagonallyDesc on row-2 col-0 line ', () => {
    connect4.board = [
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [1, ' ', ' ', ' ', ' ', ' '],
      [' ', 1, ' ', ' ', ' ', ' '],
      [' ', ' ', 1, ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ']
    ];
    connect4.selectColumn(4,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.winner).toEqual(1);
  });

  test('#checkWinDiagonallyDesc on row-0 col-1 line ', () => {
    connect4.board = [
      [' ', ' ', 1, ' ', ' ', ' '],
      [' ', ' ', ' ', 1, ' ', ' '],
      [' ', ' ', ' ', ' ', 1, ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', 1],
      [' ', ' ', ' ', ' ', ' ', 1]
    ];
    connect4.selectColumn(6,1);
    expect(connect4.inProgress).toEqual(false);
    expect(connect4.winner).toEqual(1);
  });

});