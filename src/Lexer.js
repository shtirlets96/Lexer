import stateMachinesList from './StateMachines/StateMachinesList';

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

  checkUnclosed(charsCounter) {
    if ((stateMachinesList[0].state && stateMachinesList[0].state.name === 'multilineComment')
      || (stateMachinesList[1].state && stateMachinesList[1].state.name === 'string')) {
      this.tokens.push({
        token: undefined,
        lexeme: this.string.substring(this.string.length - charsCounter + 1, this.string.length),
      });
    }
  }

  getTokens() {
    let charsCounter = 0;

    for (let i = 0; i <= this.string.length; i += 1) {
      charsCounter += 1;
      let hasActiveMachine = false;
      allRules.forEach((machine) => {
        machine.inputChar(this.string[i]);
        if (machine.state) {
          hasActiveMachine = true;
        }
      });

      if (!hasActiveMachine) {
        if (charsCounter > 1) {
          this.tokens.push({
            token: this.getActiveName(allRules),
            lexeme: this.string.substring(i - charsCounter + 1, i),
          });
          i -= 1;
        } else {
          this.tokens.push({
            token: undefined,
            lexeme: this.string.substring(i, i + 1),
          });
        }
        charsCounter = 0;
        this.resetAllRules(allRules);
      }
    }

    this.checkUnclosed(charsCounter);

    return this.tokens;
  }
}
