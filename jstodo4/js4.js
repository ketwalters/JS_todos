//JavaScript Array's support a filter function 
//(starting in JavaScript 1.6). Use the filter functionality to 
//complete the function given.

function getEvenNumbers(numbersArray){
  function getNumbers(element){
      return element % 2 === 0;
  }
  return numbersArray.filter(getNumbers);
}