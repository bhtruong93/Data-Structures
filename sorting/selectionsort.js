function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var lowest = array[i];
    var lowestIndex = i;
    var temp;
    for (var j = i + 1; j < array.length; j++) {
      if(array[j] < lowest) {
        lowest = array[j];
        lowestIndex = j;
      }
    }
    temp = array[lowestIndex];
    array[lowestIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(selectionSort([3,8,2,4,1,5,7]));
