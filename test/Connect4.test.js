const Connect4 = require('../src/Connect4.js');

describe('Connect4', () => {
    test('starts with an empty board', () => {
        const connect4 = new Connect4();

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
        const connect4 = new Connect4();
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
});