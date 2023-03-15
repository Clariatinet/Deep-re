function foo() {
  const x = 'local';
  console.log(x); // local
  return x;
}

foo();
// console.log(x); // x is not defined

const x = 'global';

function boo() {
  console.log(x);
  const x = 'local';
}

boo();
console.log(x);
