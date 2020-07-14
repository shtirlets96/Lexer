import StateMachine from './StateMachine';

const charMachine = new StateMachine('char', {
  begin: (char) => {
    if (char === "'") {
      return { name: 'char', notEnd: true };
    }
  },
  char: (char) => {
    if (/[^\n"]/.test(char)) {
      return { name: 'needSingleQuote', notEnd: true };
    }
  },
  needSingleQuote: (char) => {
    if (char === "'") {
      return { name: 'end' };
    }
  },
  end: (char) => undefined,
});

export default charMachine;
