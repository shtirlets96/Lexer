import StateMachine from './StateMachine';

const spaceMachine = new StateMachine('spaces', {
  begin: (char) => {
    if (char === ' ') {
      return { name: 'begin' };
    }
  },
});

export default spaceMachine;
