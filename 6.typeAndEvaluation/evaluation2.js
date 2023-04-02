const elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
const value = elem?.value;
console.log(value);

// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고
// 그렇지 않으면 좌항의 피연산자를 반환한다.
const foo = null ?? 'default string';
console.log(foo); // "default string"
