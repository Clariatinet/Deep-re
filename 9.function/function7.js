function add(x, y) {
  console.log(x, y); // 2, 5
  return x + y;
}

add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(2, 5); // ReferenceError: x is not defined

function sum(x, y) {
  return x + y;
}

console.log(sum(2)); // NaN

function value(x, y) {
  return x + y;
}

console.log(value(2, 5, 7)); // 7
