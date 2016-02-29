var arr = [5,3,7,1,8,9,2,8,3,4,6,5];

function quickSort(arr) {
  if(arr.length > 1) {
    sort(arr, 0, arr.length - 1);
  }
  return arr;
}

function sort(arr, left, right) {
    var index = partition(arr, left, right);
    if(left < index - 1) {
      sort(arr, left, index - 1);
    }
    if(index < right) {
      sort(arr, index, right);
    }
}

function partition(arr, left, right) {
  var pivot = arr[Math.floor((left + right)/2)],
      i = left,
      j = right;

  while(i <= j) {
    while(arr[i] < pivot) {
      i++;
    }
    while(arr[j] > pivot) {
      j--;
    }
    if(i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

console.log(quickSort(arr));
