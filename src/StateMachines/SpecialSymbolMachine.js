import StateMachine from './StateMachine';

const specialSymbolMachine = new StateMachine('special symbol', {
  begin: (char) => {
    if ('[],():;^@'.includes(char)) {
      return { name: 'end' };
    }
    if (/[-=>:+*]/.test(char)) {
      return { name: 'pairWithEqualty' };
    }
    if (char === '<') {
      return { name: 'lessSign' };
    }
    if (char === '.') {
      return { name: 'dot' };
    }
  },
  lessSign: (char) => {
    if (/[=>]/.test(char)) {
      return { name: 'end' };
    }
  },
  pairWithEqualty: (char) => {
    if (char === '=') {
      return { name: 'end' };
    }
  },
  dot: (char) => {
    if (char === '.') {
      return { name: 'end' };
    }
  },
  end: () => undefined,
});

export default specialSymbolMachine;
