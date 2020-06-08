// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...


// return value at the position of given index
const findFibonacciIterative = index => {
  let array = [0, 1];

  for (let i = 2; i < index + 1; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }

  return array[index];
};

const findFibonacciRecursive = index => {
  if (index < 2) {
    return index;
  }
  
  return findFibonacciRecursive(index - 1) + findFibonacciRecursive(index - 2)
};

module.exports = {
  findFibonacciIterative,
  findFibonacciRecursive,
}