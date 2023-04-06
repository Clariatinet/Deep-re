// ES5
const obj = {
  name: 'Lee',
  sayHi: function () {
    console.log(`Hi! ${this.name}`);
  },
};

obj.sayHi();

// ES6
const object = {
  name: 'Lee',
  sayHi() {
    console.log(`Hi! ${this.name}`);
  },
};

object.sayHi();
