function mergeSort(array) {
  if(array.length > 1) {
    var midIndex = Math.floor(array.length/2);
    var left = mergeSort(array.slice(0, midIndex));
    var right = mergeSort(array.slice(midIndex, array.length));
    return sortArrays(left, right);
  }
  else return array;
}

function sortArrays(arr1, arr2) {
  var c1 = 0,
      c2 = 0,
      c3 = 0,
      sorted = [];
  while(c1 < arr1.length && c2 < arr2.length) {
    if(arr1[c1] < arr2[c2]) {
      sorted[c3] = arr1[c1];
      c1++;
    }
    else {
      sorted[c3] = arr2[c2];
      c2++;
    }
    c3++;
  }
  if(c1 < arr1.length) {
    while(c1 < arr1.length){
      sorted[c3] = arr1[c1];
      c1++;
      c3++;
    }
  }
  if(c2 < arr2.length) {
    while(c2 < arr2.length){
      sorted[c3] = arr2[c2];
      c2++;
      c3++;
    }
  }
  return sorted;
}


console.log(mergeSort([3,8,2,4,1,5,7]));
