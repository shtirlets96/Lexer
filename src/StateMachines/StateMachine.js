export default class StateMachine {
  constructor(name, rules) {
    this.prevState = { name: 'begin' };
    this.state = { name: 'begin' };
    this.rules = rules;
    this.name = name;
  }

  inputChar(char, nextChar) {
    this.prevState = this.state;
    if (this.state) {
      this.state = this.rules[this.state.name](char, nextChar);
    }
  }

  resetState() {
    this.prevState = { name: 'begin' };
    this.state = { name: 'begin' };
  }
}
