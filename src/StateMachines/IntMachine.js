import StateMachine from './StateMachine';

const numberMachine = new StateMachine('integer', {
  begin: (char) => {
    if (/[0-9]/.test(char)) {
      return { name: 'begin' };
    }
  },
});

export default numberMachine;
