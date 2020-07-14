const assert = require('assert');
const { default: Lexer } = require('../dist/Lexer');

describe('Lexer', () => {
  describe('strings', () => {
    it('should detect stings', () => {
      const text = `
      'some string'
      { and little bit of multiline comments 



are present too}
      `;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([
        { type: 'string', lexeme: '\'some string\'', position: [2, 7] },
        {
          type: 'comment',
          lexeme:
            '{ and little bit of multiline comments \n\n\n\nare present too}',
          position: [3, 7]
        }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });

    it('should mark unclosed strings as undefined token', () => {
      const text = `'multiline
        string`;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{ type: undefined, lexeme: '\'multiline', position: [1, 1] },
      { type: 'identifier', lexeme: 'string', position: [2, 9] }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });
  });
});
