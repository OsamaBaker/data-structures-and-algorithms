const arr = [1,2,4]
const insertShiftArr = (val) => {
const arrLength = Math.ceil(arr.length/2)
arr.splice(arrLength, 0, val);
return arr;
}