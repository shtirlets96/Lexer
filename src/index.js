import Lexer from './Lexer';

const lexer = new Lexer(`program  sum ;
var   s, i: integer;
  a: array[1..10] of integer;

begin 
  randomize;

  for i:=1 to 10 do
    a[i]:=random(100);

  for i:=1 to 10 do
    write (a[i],'');

  s:=0;
  for i:=1 to 10 do
    if (a[i]>10) and (a[i]<30) then
      s:=s+a[i];

  write('s=', s)

end.`);

console.log(lexer.getTokens());
