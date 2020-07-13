import StateMachine from './StateMachine';

const spaceMachine = new StateMachine('spaces', {
  begin: (char) => {
    if (/\s/.test(char)) {
      return { name: 'begin' };
    }
  },
});

export default spaceMachine;
