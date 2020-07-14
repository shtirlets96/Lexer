import Lexer from './Lexer';

const lexer = new Lexer(`
      [
      ]
      =
      <>
      >
      <
      :=
      ;
      (
      )
      .
      ..
      ,
      @
      ^
      :
      >=
      <=
      +=
      -=
      *=
      /=
      /
      +
      -
      *
`)

console.log(lexer.getTokens());
