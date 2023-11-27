export default function appendToEachArrayValue(array, appendString) {
  const newArray = array.map((value) => appendString + value);
  return newArray;
}
