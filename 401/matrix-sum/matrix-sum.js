const input = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]

const summation = (arr) => {
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    let sum = arr[i].reduce((prevVal,currVal) => {
      return prevVal+currVal
  
    },0)
    result.push(sum)
  }
  return result;
}

console.log(summation(input))