// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
const person = {
  name: 'Lee',
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person); // {name: "Lee"}

const ungmo = {
  name: 'Lee',
};

// 프로퍼티 값 갱신
ungmo.name = 'Kim';

// 프로퍼티 동적 생성
ungmo.address = 'Seoul';

console.log(ungmo); // {name: "Kim", address: "Seoul"}
