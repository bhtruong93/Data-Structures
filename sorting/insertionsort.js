function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var sortItem = array[i];
    var pointerIndex = i - 1;

    while(sortItem < array[pointerIndex]) {
      array[pointerIndex + 1] = array[pointerIndex];
      pointerIndex -= 1;
    }
      array[pointerIndex + 1] = sortItem;
  }
  return array;
}

console.log(insertionSort([3,8,2,4,1,5,7]));
