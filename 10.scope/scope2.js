const num1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
  const num2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    const num3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  const num4 = 4; // 함수 내에서 선언한 변수

  function bar() {
    const num5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3
console.log(num4); // RefercenceError: num4 is not defined
console.log(num5); // RefercenceError: num5 is not defined
