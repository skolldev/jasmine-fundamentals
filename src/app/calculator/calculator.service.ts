import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  constructor() {}

  /**
   * Adds two numbers together
   * @returns The sum of the two numbers
   * @param a The first operand
   * @param b The second operand
   */
  public add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Calculates the difference between the subtrahend a and the minuend
   * @returns The difference between a and b
   * @param a The subtrahend
   * @param b The minuend
   */
  public subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies the factors a and b and returns the result.
   * @returns The result of the multiplication of a and b
   * @note Recursive
   * @param a The multiplicand
   * @param b The multiplier
   */
  public multiply(a: number, b: number): number {
    if (b === 0) {
      return 0;
    }

    return a + this.multiply(a, b - 1);
  }

  /**
   * Divides a by b and returns the result.
   * @note Returns Infinity if trying to divide by zero
   * @param a The dividend
   * @param b The divisor
   */
  public divide(a: number, b: number): number {
    return a / b;
  }

  /**
   * Calculates an Exponentiation.
   * @param base The base of the exponentiation
   * @param ex The exponent of the exponentiation
   */
  public pow(base: number, ex: number): number {
    if (ex === 0) {
      return 1;
    }
    return this.multiply(base, this.pow(base, ex - 1));
  }
}
