export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
