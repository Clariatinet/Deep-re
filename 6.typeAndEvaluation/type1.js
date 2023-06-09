const x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
const str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

const y = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 y의 값을 바탕으로
// 새로운 문자열을 생성한다.
const string = y + '';
console.log(typeof string, string); // string 10

// y의 값이 변경된 것은 아니다.
console.log(typeof y, y); // number 10
