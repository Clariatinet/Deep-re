const person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 "Lee"
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};

const foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo); // {"0": 1, "1": 2, "2": 3}

const circle = {
  radius: 5, // 프로퍼티

  // 원의 지름
  getDiameter: function () {
    // <= 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  },
};

console.log(circle.getDiameter()); // 10
