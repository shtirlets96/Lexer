const assert = require('assert');
const { default: Lexer } = require('../dist/Lexer');

describe('Lexer', () => {
  describe('identifiers', () => {
    it('should detect identifiers', () => {
      const text = `a
      _a
      _ahaha_
      2a
      a2
      a_251
      fori
      tratataBegin`;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{ type: 'identifier', lexeme: 'a', position: [1, 1] },
      { type: 'identifier', lexeme: '_a', position: [2, 7] },
      { type: 'identifier', lexeme: '_ahaha_', position: [3, 7] },
      { type: 'integer', lexeme: '2', position: [4, 7] },
      { type: 'identifier', lexeme: 'a', position: [4, 8] },
      { type: 'identifier', lexeme: 'a2', position: [5, 7] },
      { type: 'identifier', lexeme: 'a_251', position: [6, 7] },
      { type: 'identifier', lexeme: 'fori', position: [7, 7] },
      {
        type: 'identifier',
        lexeme: 'tratataBegin',
        position: [8, 7]
      }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });

    it('should check keywords', () => {
      const text = `begin
      end
      if
      then
      else
      do
      for
      to
      while
      repeat
      until
      procedure
      function
      integer
      real
      byte
      char
      text
      array
      var
      record
      set
      type
      and
      case
      const
      div
      downto
      external
      file
      forward
      goto
      in
      inline
      interrupt
      label
      mod
      nil
      not
      of
      or
      packed
      program
      with
      boolean
      input
      output
      write
      writeln`;

      const lexer = new Lexer(text);

      const expected = JSON.stringify([{ type: 'keyword', lexeme: 'begin', position: [1, 1] },
      { type: 'keyword', lexeme: 'end', position: [2, 7] },
      { type: 'keyword', lexeme: 'if', position: [3, 7] },
      { type: 'keyword', lexeme: 'then', position: [4, 7] },
      { type: 'keyword', lexeme: 'else', position: [5, 7] },
      { type: 'keyword', lexeme: 'do', position: [6, 7] },
      { type: 'keyword', lexeme: 'for', position: [7, 7] },
      { type: 'keyword', lexeme: 'to', position: [8, 7] },
      { type: 'keyword', lexeme: 'while', position: [9, 7] },
      { type: 'keyword', lexeme: 'repeat', position: [10, 7] },
      { type: 'keyword', lexeme: 'until', position: [11, 7] },
      { type: 'keyword', lexeme: 'procedure', position: [12, 7] },
      { type: 'keyword', lexeme: 'function', position: [13, 7] },
      { type: 'keyword', lexeme: 'integer', position: [14, 7] },
      { type: 'keyword', lexeme: 'real', position: [15, 7] },
      { type: 'keyword', lexeme: 'byte', position: [16, 7] },
      { type: 'keyword', lexeme: 'char', position: [17, 7] },
      { type: 'keyword', lexeme: 'text', position: [18, 7] },
      { type: 'keyword', lexeme: 'array', position: [19, 7] },
      { type: 'keyword', lexeme: 'var', position: [20, 7] },
      { type: 'keyword', lexeme: 'record', position: [21, 7] },
      { type: 'keyword', lexeme: 'set', position: [22, 7] },
      { type: 'keyword', lexeme: 'type', position: [23, 7] },
      { type: 'keyword', lexeme: 'and', position: [24, 7] },
      { type: 'keyword', lexeme: 'case', position: [25, 7] },
      { type: 'keyword', lexeme: 'const', position: [26, 7] },
      { type: 'keyword', lexeme: 'div', position: [27, 7] },
      { type: 'keyword', lexeme: 'downto', position: [28, 7] },
      { type: 'keyword', lexeme: 'external', position: [29, 7] },
      { type: 'keyword', lexeme: 'file', position: [30, 7] },
      { type: 'keyword', lexeme: 'forward', position: [31, 7] },
      { type: 'keyword', lexeme: 'goto', position: [32, 7] },
      { type: 'keyword', lexeme: 'in', position: [33, 7] },
      { type: 'keyword', lexeme: 'inline', position: [34, 7] },
      { type: 'keyword', lexeme: 'interrupt', position: [35, 7] },
      { type: 'keyword', lexeme: 'label', position: [36, 7] },
      { type: 'keyword', lexeme: 'mod', position: [37, 7] },
      { type: 'keyword', lexeme: 'nil', position: [38, 7] },
      { type: 'keyword', lexeme: 'not', position: [39, 7] },
      { type: 'keyword', lexeme: 'of', position: [40, 7] },
      { type: 'keyword', lexeme: 'or', position: [41, 7] },
      { type: 'keyword', lexeme: 'packed', position: [42, 7] },
      { type: 'keyword', lexeme: 'program', position: [43, 7] },
      { type: 'keyword', lexeme: 'with', position: [44, 7] },
      { type: 'keyword', lexeme: 'boolean', position: [45, 7] },
      { type: 'keyword', lexeme: 'input', position: [46, 7] },
      { type: 'keyword', lexeme: 'output', position: [47, 7] },
      { type: 'keyword', lexeme: 'write', position: [48, 7] },
      { type: 'keyword', lexeme: 'writeln', position: [49, 7] }]);

      assert.equal(JSON.stringify(lexer.getTokens()), expected);
    });
  });
});
