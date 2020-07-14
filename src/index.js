import Lexer from './Lexer';

const lexer = new Lexer(`haha    15.1 1115 e5 12 e-5 0.25e-5 0.25e-51 0.25e-5v  .. = := ':' [ ] = . , ( ) : ; // 
^ @ < <"> += -=
"{0.25e-53ks20`);

console.log(lexer.getTokens());
