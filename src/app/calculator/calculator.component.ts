import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "./calculator.service";

enum CalculationMode {
  Addition,
  Subtraction,
  Multiplication,
  Divison,
  Power,
  None
}

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  /**
   * Contains the current display text of the calculator.
   * Set by the setDisplayText() method
   */
  public displayText = "";

  /**
   * The first number of the calculation
   */
  public number1 = 0;

  /**
   * The second number of the calculation
   */
  public number2 = undefined;

  /**
   * The string representation of the current operator used.
   * Set by the setCalculationMode() method
   */
  public currentOperator: string = undefined;

  /**
   * The current calculation mode to be used for calculations.
   * Set by the setCalculationMode method
   */
  public currentMode: CalculationMode = CalculationMode.None;

  /**
   * Reference to the CalculationMode enum for use in the HTML
   */
  public modes = CalculationMode;

  constructor(public calculator: CalculatorService) {}

  /**
   * Call to start the calculation.
   * Will use the current numbers & calculation mode to do the calculation.
   *
   * The result of the calculation will be set to the number1 variable.
   * The rest of the variables will be cleared.
   */
  public handleCalculation(): void {
    this.number1 = this.calculate();
    this.number2 = undefined;
    this.currentMode = CalculationMode.None;
    this.currentOperator = undefined;

    this.buildDisplayText(this.number1, this.number2, this.currentOperator);
  }

  /**
   * Resets the calculator back to the default state
   */
  public handleClear(): void {
    this.number1 = 0;
    this.number2 = undefined;
    this.currentMode = CalculationMode.None;
    this.currentOperator = undefined;

    this.buildDisplayText(this.number1, this.number2, this.currentOperator);
  }

  /**
   * Sets the calculation mode to be used in the calculation. Also changes the displayed operator
   * @param mode The calculation mode to use
   */
  public setCalculationMode(mode: CalculationMode): void {
    this.currentMode = mode;
    this.currentOperator = this.getOperatorFromCalculationMode(mode);
    this.buildDisplayText(this.number1, this.number2, this.currentOperator);
  }

  /**
   * Enters a number into the calculator. Automatically checks whether the number needs to be added
   * to the first or the second operand.
   * @param num The number to add.
   */
  public enterNumber(num: number): void {
    if (this.currentMode === CalculationMode.None) {
      this.number1 = this.concatNumbers(this.number1, num);
    } else {
      this.number2 = this.concatNumbers(this.number2, num);
    }

    this.buildDisplayText(this.number1, this.number2, this.currentOperator);
  }

  /**
   * Builds the display text depending on the current state of the calculator
   * @param number1 The first operand of the calculation
   * @param number2 The second operand of the calculation
   * @param operator The operator of the current calculation mode
   */
  private buildDisplayText(
    number1: number,
    number2: number,
    operator: string
  ): void {
    if (!operator) {
      this.displayText = number1.toString();
      return;
    }

    if (number2 === undefined) {
      this.displayText = `${number1} ${operator}`;
      return;
    }

    this.displayText = `${number1} ${operator} ${number2}`;
  }

  /**
   * Calls the correct calculation implementation to use based on the current calculation mode.
   * @returns The result of the calculation, or number1 if no mode is set
   */
  private calculate(): number {
    switch (this.currentMode) {
      case CalculationMode.Addition:
        return this.calculator.add(this.number1, this.number2);
      case CalculationMode.Subtraction:
        return this.calculator.subtract(this.number1, this.number2);
      case CalculationMode.Multiplication:
        return this.calculator.multiply(this.number1, this.number2);
      case CalculationMode.Divison:
        return this.calculator.divide(this.number1, this.number2);
      case CalculationMode.Power:
        return this.calculator.pow(this.number1, this.number2);
      case CalculationMode.None:
        return this.number1;
    }
  }

  /**
   * Concats two numbers, e.g. 1 and 2 become 12
   *
   * @returns The concatted number or b if a is undefined or 0.
   * @param a The first operand. If undefined or 0, b will be returned
   * @param b The second operand.
   */
  private concatNumbers(a: number, b: number): number {
    if (!a) {
      return b;
    }
    return parseInt("" + a + b);
  }

  /**
   * Returns the displayed operator based on the supplied calculation mode
   * @param mode The calculation mode to retrieve the operator for
   */
  private getOperatorFromCalculationMode(mode: CalculationMode): string {
    switch (mode) {
      case CalculationMode.Addition:
        return "+";
      case CalculationMode.Subtraction:
        return "-";
      case CalculationMode.Multiplication:
        return "x";
      case CalculationMode.Divison:
        return "/";
      case CalculationMode.Power:
        return "^";
      case CalculationMode.None:
        return undefined;
    }
  }

  ngOnInit() {}
}
