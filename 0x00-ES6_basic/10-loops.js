export default function appendToEacharrValue(arr, appendString) {
  for (const value of arr) {
    arr[arr.indexOf(value)] = appendString + value;
  }

  return arr;
}
