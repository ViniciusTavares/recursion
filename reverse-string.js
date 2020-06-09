const reverseStringUsingArray = str => {
  let arrayStr = str.split("");
  let reversedArray = [];
 
  const addToArray = array => {    
    if(array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }

    return;
  }
  addToArray(arrayStr);
  
  return reversedArray.join("");
}

const reverseStringRecursive = str => {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

module.exports = {
  reverseStringUsingArray,
  reverseStringRecursive,
}