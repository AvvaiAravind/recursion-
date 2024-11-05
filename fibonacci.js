function fibonacciLoop(n) {
  let array = [];
  let a = 0;
  let b = 1;
  let c;
  if (n < 0) return array;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      c = a + b;
      array.push(c);
      a = b;
      b = c;
    }
  }
  return array;
}

console.log(fibonacciLoop(8));
console.log(fibonacciLoop(3));
console.log(fibonacciLoop(7));
console.log(fibonacciLoop(77));
console.log(fibonacciLoop(0));
console.log(fibonacciLoop(1));
console.log(fibonacciLoop(-7));
 
function fibsRec(n) {
  let array = [];

  if (n <= 0) {
    return array;
  } else if (n === 1) {
    array.push(0);
  } else if (n === 2) {
    array.push(0, 1);
  } else {
    array = fibsRec(n - 1); // which is a array so finding lenght to calculat
    let length = array.length;
    const newValue = array[length - 1] + array[length - 2];
    array.push(newValue);
  }
  return array;
}

console.log(fibonacciLoop(8));
console.log(fibonacciLoop(3));
console.log(fibonacciLoop(7));
console.log(fibonacciLoop(77));
console.log(fibonacciLoop(0));
console.log(fibonacciLoop(1));
console.log(fibonacciLoop(-7));
