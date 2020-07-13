import StateMachine from './StateMachine';

const numberMachine = new StateMachine('number', {
  begin: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'num' };
    }
  },
  num: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'num' };
    } if (char === '.') {
      return { name: 'dot', notEnd: true };
    }
  },
  dot: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'dot' };
    }
  },
});

export default numberMachine;
