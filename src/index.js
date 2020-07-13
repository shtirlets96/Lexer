import stateMachinesList from './StateMachines/StateMachinesList';

function getActiveName(machinesList) {
  for (let i = 0; i < machinesList.length; i += 1) {
    if (machinesList[i].prevState && !machinesList[i].prevState.notEnd) {
      return machinesList[i].name;
    }
  }
}

function resetAllRules(machinesList) {
  machinesList.forEach((item) => {
    item.resetState();
  });
}

const allRules = stateMachinesList;

let string = `haha    15.1 1115 e5 12 e-5 0.25e-5 0.25e-51 0.25e-5v 
0.25e-53ks`;
string += ' ';
const tokens = [];
let charsCounter = 0;

for (let i = 0; i <= string.length; i += 1) {
  charsCounter += 1;
  let hasActiveMachine = false;
  allRules.forEach((machine) => {
    machine.inputChar(string[i]);
    if (machine.state) {
      hasActiveMachine = true;
    }
  });

  if (!hasActiveMachine) {
    if (charsCounter > 1) {
      tokens.push({
        token: getActiveName(allRules),
        lexeme: string.substring(i - charsCounter + 1, i),
      });
      i -= 1;
    } else {
      tokens.push({
        token: undefined,
        lexeme: string.substring(i, i + 1),
      });
    }
    charsCounter = 0;
    resetAllRules(allRules);
  }
}

console.log(tokens);
