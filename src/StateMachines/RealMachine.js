import StateMachine from './StateMachine';

const numberMachine = new StateMachine('real', {
  begin: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'integerPart', notEnd: true };
    }
  },
  integerPart: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'integerPart', notEnd: true };
    } if (char === '.') {
      return { name: 'decimalPart', notEnd: true };
    }
  },
  decimalPart: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'decimalPart' };
    }
  },
});

export default numberMachine;
