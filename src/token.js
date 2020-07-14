const keywords = ['begin', 'end', 'if', 'then', 'else', 'do', 'for', 'to', 'while', 'repeat', 'until', 'procedure', 'function', 'integer', 'real', 'byte', 'char', 'text', 'array', 'var', 'record', 'set', 'type', 'and', 'case', 'const', 'div', 'downto', 'external', 'file', 'forward', 'goto', 'in', 'inline', 'interrupt', 'label', 'mod', 'nil', 'not', 'of', 'or', 'packed', 'program', 'with', 'boolean', 'input', 'output', 'write', 'writeln'];
const specialSymbols = {
  '[': 'array opened',
  ']': 'array closed',
  '=': 'equal',
  '<>': 'not equal',
  '>': 'more',
  '<': 'less',
  ':=': 'assignment',
  ';': 'divider',
  '(': 'parenthesis opened',
  ')': 'parenthesis closed',
  '.': 'dot',
  '..': 'range',
  ',': 'comma',
  '@': 'adress',
  '^': 'pointer',
  ':': 'colon',
  '>=': 'more equal',
  '<=': 'less equal',
  '+=': 'plus equal',
  '-=': 'minus equal',
  '*=': 'multiply equal',
  '/=': 'divide equal',
  '/': 'divide',
  '+': 'plus',
  '-': 'minus',
  '*': 'multiply',
};

function checkIdentifier(token) {
  if (token.type === 'identifier') {
    if (keywords.includes(token.lexeme)) {
      token.type = 'keyword';
    }
  }
}

function checkSpecialSymbols(token) {
  if (token.type === 'special symbol') {
    if (Object.keys(specialSymbols).includes(token.lexeme)) {
      token.subtype = specialSymbols[token.lexeme];
    }
  }
}

export default function updateTokens(tokens) {
  tokens.forEach((token) => {
    checkIdentifier(token);
    checkSpecialSymbols(token);
  });
}
