// const 키워드를 사용해 선언한 변수는 재할당이 금지된다.
// 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)는 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

// 문자열은 0개 이상의 문자로 이뤄진 집합이다.
const str1 = ''; // 0개의 문자로 이뤄진 문자열(빈 문자열)
const str2 = 'Hello'; // 5개의 문자로 이뤄진 문자열

str2[0] = 'S';
console.log(str2);
