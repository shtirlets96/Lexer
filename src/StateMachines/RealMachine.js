import StateMachine from './StateMachine';

const numberMachine = new StateMachine('real', {
  begin: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'integerPart', notEnd: true };
    }
    if (char === 'e') {
      return { name: 'exponentialStart', notEnd: true };
    }
  },
  integerPart: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'integerPart', notEnd: true };
    }
    if (char === '.') {
      return { name: 'decimalPart', notEnd: true };
    }
    if (char === 'e') {
      return { name: 'exponentialStart', notEnd: true };
    }
  },
  decimalPart: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'decimalPart' };
    }
    if (char === 'e') {
      return { name: 'exponentialStart', notEnd: true };
    }
  },
  exponentialStart: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'exponentialContinue' };
    }
    if (/[+-]/.test(char)) {
      return { name: 'exponentialContinue', notEnd: true };
    }
  },
  exponentialContinue: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'exponentialContinue' };
    }
  },
});

export default numberMachine;
