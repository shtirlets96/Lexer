import StateMachine from './StateMachine';

const identifierMachine = new StateMachine('identifier', {
  begin: (char) => {
    if (/[a-z_]/i.test(char)) {
      return { name: 'begin' };
    }
  },
});

export default identifierMachine;
