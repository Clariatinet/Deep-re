const x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환을 한다.
const result = x % 2 ? '홀수' : '짝수';
console.log(result);

// const y = 10;

// // if ... else 문은 표현식이 아닌 문이다. 따라서 값처럼
// // 사용 할 수 없다.
// const value = if (x % 2) {
//   result = "홀수";
// } else {
//   result = "짝수";
// }

const z = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다.
// 따라서, 값처럼 사용 할 수 있다.
const key = x % 2 ? '홀수' : '짝수';
console.log(key); // 짝수
