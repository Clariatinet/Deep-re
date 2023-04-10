// 함수 표현식
const add = function (x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7

// 기명 함수 표현식
const sum = function foo(x, y) {
  return x + y;
};

// 함수 객체를 가리키는 식별자를 호출
console.log(sum(2, 5)); // 7

// 함수 이름으로 호출하면 RefercenceErro가 발생한다.
// 함수 이름으로 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5)); // RefercenceError: foo in not defined
