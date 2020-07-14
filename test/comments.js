const assert = require('assert');
const { default: Lexer } = require('../dist/Lexer');

describe('Lexer', () => {
  describe('comments', () => {
    it('should detect single line and multiline comments', () => {
      const text = `
      //some single line comment
      { and little bit of multiline comments 



are present too}
      `;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{
        type: 'comment',
        lexeme: '//some single line comment',
        position: [2, 7],
      },
      {
        type: 'comment',
        lexeme: '{ and little bit of multiline comments \n\n\n\nare present too}',
        position: [3, 7],
      }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });

    it('should mark unclosed comment as undefined token', () => {
      const text = `{ multiline comments 



without closing`;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{
        type: undefined,
        position: [1, 1],
        lexeme: '{ multiline comments \n\n\n\nwithout closing\n',
      }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });
  });
});
