import StateMachine from './StateMachine';

const stringMachine = new StateMachine('string', {
  begin: (char) => {
    if (char === '"') {
      return { name: 'string', notEnd: true };
    }
  },
  string: (char) => {
    if (/[^\n"]/.test(char)) {
      return { name: 'string', notEnd: true };
    }
    if (char === '"') {
      return { name: 'end' };
    }
  },
  end: (char) => undefined,
});

export default stringMachine;
