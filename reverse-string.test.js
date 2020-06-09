const { 
  reverseStringRecursive, 
  reverseStringUsingArray,
} = require('./reverse-string');

describe('reverse-string', () => {
  test('reverseStringRecursive', () => {
    expect(reverseStringRecursive('yoyo master')).toEqual('retsam oyoy');
  });

  test('reverseStringUsingArray', () => {
    expect(reverseStringUsingArray('yoyo master')).toEqual('retsam oyoy');
  });
});