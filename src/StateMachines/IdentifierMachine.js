import StateMachine from './StateMachine';

const identifierMachine = new StateMachine('word', {
  begin: (char) => {
    if (/[a-z]/i.test(char)) {
      return { name: 'begin' };
    }
  },
});

export default identifierMachine;
