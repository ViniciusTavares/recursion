const findFactorialIterative = number => {
  let answer = 1;
  
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

const findFactorialRecursive = number => {
  if(number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1)
}

module.exports = { 
  findFactorialIterative,
  findFactorialRecursive
};