// 동등 비교
5 == 5; // true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == '5'; // true

// 동등 비교. 결과를 예측하기 어렵다.
'0' == ''; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false

// 일치 비교
5 === 5; // ture

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === '5'; // false

// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false

// 대소 관계 비교
5 > 0; // true
5 > 5; // false
5 >= 5; // true
5 <= 5; // true
