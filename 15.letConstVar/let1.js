let bar = 123;
// let이나 const 키워드로 선언한 변수는 같은 스코프 내에서
// 중복 선언을 허용하지 않는다.
// let bar = 456;
// SyntaxError: Identifier "bar" has already been declared

let foo = 1; // 전역 변수
{
  let foo = 2; // 지역변수
  let pee = 3; // 지역변수
}
console.log(foo);
// console.log(pee);
