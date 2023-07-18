// 모두 숫자 타입이다.
const integer = 10; // 정수
const double = 10.12; // 실수
const negative = -20; // 음의 정수

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN (Not a Number)
