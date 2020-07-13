import StateMachine from './StateMachine';

const wordMachine = new StateMachine('word', {
  begin: (char) => {
    if (/[a-z]/i.test(char)) {
      return { name: 'begin' };
    }
  },
});

export default wordMachine;
