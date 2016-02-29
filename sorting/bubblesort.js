function bubbleSort(array) {
  for (var i = 1; i < array.length; i++) {
    for (var k = 0; k < array.length; k++) {
      if(array[k] < array[k - 1]) {
        var temp = array[k];
        array[k] = array[k -1];
        array[k - 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([3,8,2,4,1,5,7]));
