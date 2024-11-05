function mergeSort(arr) {
  let sortedArr;
  const length = arr.length;
  let left = arr.slice(0, Math.floor(length / 2));
  let right = arr.slice(Math.floor(length / 2));
  if (length > 1) {
    left = mergeSort(left);
    right = mergeSort(right);
    sortedArr = merge(left, right);
  } else if (length === 1) {
    return arr;
  }
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        result.push(right[j]);
        j++;
      } else {
        result.push(left[i]);
        i++;
      }
    }
    if (i < left.length) {
      result.push(...left.slice(i));
    }
    if (j < right.length) {
      result.push(...right.slice(j));
    }

    return result;
  }
  return sortedArr;
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 9]));
console.log(mergeSort([105, 79, 100, 110]));
