const person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: [Function: sayHello]}

const empty = {};
console.log(typeof empty);
