const x = 'global x';
const y = 'global y';

function outer() {
  const z = "outer's local z";

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner() {
    const x = "inner's local x";

    console.log(x); // inner's local x
    console.log(y); // local y
    console.log(z); // outer's local z
  }

  inner();
}

outer();

console.log(x);
console.log(z); // ReferenceError: z is not defined
