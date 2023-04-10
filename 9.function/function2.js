// 변수에 함수 리터럴을 할당
const f = function add(x, y) {
  return x + y;
};

// 함수 선언문
function sum(x, y) {
  return x + y;
}

// 함수 참조
// console.dir는 console.log와 달리
// 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과를 출력한다.
console.dir(sum); // [Function: sum]

// 함수 호출
console.log(sum(2, 5)); // 7

// 함수 선언문은 함수 이름을 생략할 수 없다.
// function (x, y) {
//   return x + y;
// }

// SyntaxError: Function statements require a function name
