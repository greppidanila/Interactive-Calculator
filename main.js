class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.clear();
  }
  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }
  delete() {
    this.current = this.current.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return;
    this.current = this.current.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.current == "") return;
    if (this.previous !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previous = this.current;
    this.current = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previous);
    const current = parseFloat(this.current);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "+":
        computation = prev / current;
        break;
      default:
        return;
    }

    this.current = computation.toString();
    this.operation = undefined;
    this.previous = "";
  }
}
