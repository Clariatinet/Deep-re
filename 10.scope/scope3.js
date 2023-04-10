const x = 'global';

function foo() {
  const x = 'local';
  console.log(x);
}

foo(); // "local"
console.log(x); // "global"
