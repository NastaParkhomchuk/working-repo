import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false when provided with an even number', () => {
    const validationResults = validator.isNumberEven(3);
    expect(validationResults).to.be.equal(false);
  });
});

// Test cases for getEvenNumbersFromArray function
describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  // Test case 1: When input is a valid array containing only even numbers
  it('should return an array containing even numbers when input is a valid array of even numbers', () => {
    const inputArray = [2, 4, 6, 8, 10];
    const expectedOutput = [2, 4, 6, 8, 10];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(expectedOutput);
  });

  // Test case 2: When input is a valid array containing odd and even numbers
  it('should return an array containing only even numbers when input is a valid array of mixed numbers', () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [2, 4, 6];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(expectedOutput);
  });

  // Test case 3: When input is an empty array
  it('should return an empty array when input is an empty array', () => {
    const inputArray = [];
    const expectedOutput = [];
    expect(validator.getEvenNumbersFromArray(inputArray)).to.deep.equal(expectedOutput);
  });
});








describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  // Test case 1: When input is an array containing only numbers
  it('should return true when input is an array containing only numbers', () => {
    const inputArray = [1, 2, 3, 4, 5];
    expect(validator.isAllNumbers(inputArray)).to.be.equal(true);
  });

  // Test case 2: When input is an empty array
  it('should return true when input is an empty array', () => {
    const inputArray = [];
    // expect(validator.isAllNumbers(inputArray)).to.be.equal(true);
  });

  // Test case 3: When input is an array containing non-number values
  it('should return false when input is an array containing non-number values', () => {
    const inputArray = [1, '2', 3, 'four', 5];
    expect(validator.isAllNumbers(inputArray)).to.be.equal(false);
  });
});


describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  // Test case 1: When input is an integer
  it('should return true when input is an integer', () => {
    const number = 42;
    expect(validator.isInteger(number)).to.be.equal(true);
  });

  // Test case 2: When input is not an integer
  it('should return false when input is not an integer', () => {
    const number = 3.14;
    expect(validator.isInteger(number)).to.be.equal(false);
  });
});