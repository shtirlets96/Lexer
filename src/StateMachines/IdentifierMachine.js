import StateMachine from './StateMachine';

const identifierMachine = new StateMachine('identifier', {
  begin: (char) => {
    if (/[a-z_]/.test(char)) {
      return { name: 'identifier' };
    }
  },
  identifier: (char) => {
    if (/[a-z_0-9]/.test(char)) {
      return { name: 'identifier' };
    }
  },
});

export default identifierMachine;
