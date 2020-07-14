const assert = require('assert');
const { default: Lexer } = require('../dist/Lexer');

describe('Lexer', () => {
  describe('numbers', () => {
    it('should detect real and integer numbers', () => {
      const text = `
      1337
      42
      618
      123.12
      0.12
      1e1
      1E1
      1e-1
      1E-1
      1.e1
      1.e-1
      1.E1
      1.E-1
      1.12e1
      1.12e-1
      1.12E1
      1.12E-1
      `;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{ type: 'integer', lexeme: '1337', position: [2, 7] },
      { type: 'integer', lexeme: '42', position: [3, 7] },
      { type: 'integer', lexeme: '618', position: [4, 7] },
      { type: 'real', lexeme: '123.12', position: [5, 7] },
      { type: 'real', lexeme: '0.12', position: [6, 7] },
      { type: 'real', lexeme: '1e1', position: [7, 7] },
      { type: 'real', lexeme: '1E1', position: [8, 7] },
      { type: 'real', lexeme: '1e-1', position: [9, 7] },
      { type: 'real', lexeme: '1E-1', position: [10, 7] },
      { type: 'real', lexeme: '1.e1', position: [11, 7] },
      { type: 'real', lexeme: '1.e-1', position: [12, 7] },
      { type: 'real', lexeme: '1.E1', position: [13, 7] },
      { type: 'real', lexeme: '1.E-1', position: [14, 7] },
      { type: 'real', lexeme: '1.12e1', position: [15, 7] },
      { type: 'real', lexeme: '1.12e-1', position: [16, 7] },
      { type: 'real', lexeme: '1.12E1', position: [17, 7] },
      { type: 'real', lexeme: '1.12E-1', position: [18, 7] }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });

  });
});
