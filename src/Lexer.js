import stateMachinesList from './StateMachines/StateMachinesList';
import updateTokens from './token';

const allRules = stateMachinesList;

export default class Lexer {
  constructor(string) {
    this.string = string;
    this.tokens = [];
  }

  getActiveName(machinesList) {
    for (let i = 0; i < machinesList.length; i += 1) {
      if (machinesList[i].prevState && !machinesList[i].prevState.notEnd) {
        return machinesList[i].name;
      }
    }
  }

  resetAllRules(machinesList) {
    machinesList.forEach((item) => {
      item.resetState();
    });
  }

  checkUnclosed(charsCounter, position) {
    if ((stateMachinesList[0].state && stateMachinesList[0].state.name === 'multilineComment')
      || (stateMachinesList[1].state && stateMachinesList[1].state.name === 'string')) {
      this.tokens.push({
        type: undefined,
        position,
        lexeme: this.string.substring(this.string.length - charsCounter + 1, this.string.length),
      });
    }
  }

  getTokens() {
    let charsCounter = 0;
    let startPosition = [1, 1];
    let charOnLineNumber = 0;
    let lineNumber = 1;
    let carretShift = false;

    for (let i = 0; i <= this.string.length; i += 1) {
      charsCounter += 1;
      charOnLineNumber += 1;

      let hasActiveMachine = false;
      allRules.forEach((machine) => {
        machine.inputChar(this.string[i], this.string[i + 1]);
        if (machine.state) {
          hasActiveMachine = true;
        }
      });

      if (!hasActiveMachine) {
        if (charsCounter > 1) {
          this.tokens.push({
            type: this.getActiveName(allRules),
            lexeme: this.string.substring(i - charsCounter + 1, i),
            position: startPosition,
          });
          i -= 1;
          carretShift = true;
        } else {
          this.tokens.push({
            type: undefined,
            position: startPosition,
            lexeme: this.string.substring(i, i + 1),
          });
        }
        charOnLineNumber -= 1;
        startPosition = [lineNumber, charOnLineNumber];
        charsCounter = 0;
        this.resetAllRules(allRules);
      }

      if (this.string[i] === ('\n') && !carretShift) {
        lineNumber += 1;
        charOnLineNumber = 1;
      }
      carretShift = false;
    }

    this.checkUnclosed(charsCounter, startPosition);
    updateTokens(this.tokens);

    return this.tokens;
  }
}
