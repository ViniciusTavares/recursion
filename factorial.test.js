const { 
  findFactorialIterative, 
  findFactorialRecursive,
} = require('./factorial');

describe('factorial', () => {
  test('recursive', () => {
    expect(findFactorialRecursive(5)).toEqual(120);
  });

  test('iterative', () => {
    expect(findFactorialIterative(5)).toEqual(120);
  });
});