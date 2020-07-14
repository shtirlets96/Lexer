import StateMachine from './StateMachine';

const commentMachine = new StateMachine('comment', {
  begin: (char) => {
    if (char === '/') {
      return { name: 'maybeComment', notEnd: true };
    }
    if (char === '{') {
      return { name: 'multilineComment', notEnd: true };
    }
  },
  maybeComment: (char) => {
    if (char === '/') {
      return { name: 'comment' };
    }
  },
  comment: (char) => {
    if (/[^\n"]/.test(char)) {
      return { name: 'comment' };
    }
  },
  multilineComment: (char) => {
    if (char === '}') {
      return { name: 'end' };
    }
    return { name: 'multilineComment' };
  },
  end: (char) => undefined,
});

export default commentMachine;
