// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
const add = function add(x, y) {
  return x + y;
};

// 함수 호출
console.log(add(2, 5));

// 기명 함수 리터럴은 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서 함수 이름을 생략할 수 없다.
function foo() {
  console.log('foo');
}

foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라
// 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {
  console.log('bar');
});

bar(); //RefercenceError: bar is not defined
