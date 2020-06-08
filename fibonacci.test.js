const { 
  findFibonacciIterative, 
  findFibonacciRecursive,
} = require('./fibonnacci');

describe('fibonnacci', () => {
  test('recursive', () => {
    expect(findFibonacciRecursive(6)).toEqual(8);
  });

  test('iterative', () => {
    expect(findFibonacciIterative(3)).toEqual(2);
  });
});