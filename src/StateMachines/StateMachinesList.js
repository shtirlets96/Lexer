import intMachine from './IntMachine';
import realMachine from './RealMachine';
import spaceMachine from './SpaceMachine';
import identifierMachine from './IdentifierMachine';
import specialSymbolMachine from './SpecialSymbolMachine';
import stringMachine from './StringMachine';
import charMachine from './CharMachine';
import commentMachine from './CommentMachine';

const stateMachinesList = [
  commentMachine,
  stringMachine,
  specialSymbolMachine,
  realMachine,
  intMachine,
  spaceMachine,
  identifierMachine,
  charMachine];
export default stateMachinesList;
