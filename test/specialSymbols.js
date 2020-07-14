const assert = require('assert');
const { default: Lexer } = require('../dist/Lexer');

describe('Lexer', () => {
  describe('special symbols', () => {
    it('should detect real and integer numbers', () => {
      const text = `
      [
      ]
      =
      <>
      >
      <
      :=
      ;
      (
      )
      .
      ..
      ,
      @
      ^
      :
      >=
      <=
      +=
      -=
      *=
      /=
      /
      +
      -
      *
      `;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{
        type: 'special symbol',
        lexeme: '[',
        position: [2, 7],
        subtype: 'array opened'
      },
      {
        type: 'special symbol',
        lexeme: ']',
        position: [3, 7],
        subtype: 'array closed'
      },
      {
        type: 'special symbol',
        lexeme: '=',
        position: [4, 7],
        subtype: 'equal'
      },
      {
        type: 'special symbol',
        lexeme: '<>',
        position: [5, 7],
        subtype: 'not equal'
      },
      {
        type: 'special symbol',
        lexeme: '>',
        position: [6, 7],
        subtype: 'more'
      },
      {
        type: 'special symbol',
        lexeme: '<',
        position: [7, 7],
        subtype: 'less'
      },
      {
        type: 'special symbol',
        lexeme: ':',
        position: [8, 7],
        subtype: 'colon'
      },
      {
        type: 'special symbol',
        lexeme: '=',
        position: [8, 8],
        subtype: 'equal'
      },
      {
        type: 'special symbol',
        lexeme: ';',
        position: [9, 7],
        subtype: 'divider'
      },
      {
        type: 'special symbol',
        lexeme: '(',
        position: [10, 7],
        subtype: 'parenthesis opened'
      },
      {
        type: 'special symbol',
        lexeme: ')',
        position: [11, 7],
        subtype: 'parenthesis closed'
      },
      {
        type: 'special symbol',
        lexeme: '.',
        position: [12, 7],
        subtype: 'dot'
      },
      {
        type: 'special symbol',
        lexeme: '..',
        position: [13, 7],
        subtype: 'range'
      },
      {
        type: 'special symbol',
        lexeme: ',',
        position: [14, 7],
        subtype: 'comma'
      },
      {
        type: 'special symbol',
        lexeme: '@',
        position: [15, 7],
        subtype: 'adress'
      },
      {
        type: 'special symbol',
        lexeme: '^',
        position: [16, 7],
        subtype: 'pointer'
      },
      {
        type: 'special symbol',
        lexeme: ':',
        position: [17, 7],
        subtype: 'colon'
      },
      {
        type: 'special symbol',
        lexeme: '>=',
        position: [18, 7],
        subtype: 'more equal'
      },
      {
        type: 'special symbol',
        lexeme: '<=',
        position: [19, 7],
        subtype: 'less equal'
      },
      {
        type: 'special symbol',
        lexeme: '+=',
        position: [20, 7],
        subtype: 'plus equal'
      },
      {
        type: 'special symbol',
        lexeme: '-=',
        position: [21, 7],
        subtype: 'minus equal'
      },
      {
        type: 'special symbol',
        lexeme: '*=',
        position: [22, 7],
        subtype: 'multiply equal'
      },
      {
        type: 'special symbol',
        lexeme: '/=',
        position: [23, 7],
        subtype: 'divide equal'
      },
      {
        type: 'special symbol',
        lexeme: '/',
        position: [24, 7],
        subtype: 'divide'
      },
      {
        type: 'special symbol',
        lexeme: '+',
        position: [25, 7],
        subtype: 'plus'
      },
      {
        type: 'special symbol',
        lexeme: '-',
        position: [26, 7],
        subtype: 'minus'
      },
      {
        type: 'special symbol',
        lexeme: '*',
        position: [27, 7],
        subtype: 'multiply'
      }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });

  });
});
