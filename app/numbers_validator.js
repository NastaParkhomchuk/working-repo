/**
 * Class NumbersValidator
 * @class NumbersValidator
 */
export default class NumbersValidator {
  constructor() { }

  /**
   * Method to check if a number is even
   * @param {number} number - The number to be checked
   * @return {boolean} - Returns true if the number is even, false otherwise
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  }

  /**
 * Method to extract even numbers from an array
 * @param {Array<Number>} arrayOfNumbers - The array containing numbers to be checked
 * @return {Array<Number>} - An array of even numbers
 */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    }
    throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  }
<<<<<<< HEAD

  // Method to check if all elements in an array are numbers
  // @param {Array<Number>} arrayOfNumbers - The array to be checked
  // @return {Boolean} - Returns true if all elements are numbers, false otherwise
  isAllNumbers(arrayOfNumbers) {
    // Check if the argument is an array
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array`);
    }
    // Return true if every element in the array is of type number
    return arrayOfNumbers.every(n => typeof n === 'number');
  }

  // Method to check if a value is an integer
  // @param {Number} n - The value to be checked
  // @return {Boolean} - Returns true if the value is an integer, false otherwise
  isInteger(n) {
    // If the type of n is not number, throw an error
    if (typeof n !== 'number') {
      throw new Error(`[${n}] is not a number`);
    }
    // Return true if n is an integer
    return Number.isInteger(n);
  }
}
=======
>>>>>>> a3b7416 (add smth)
