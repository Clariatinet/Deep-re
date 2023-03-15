function boo() {
  const a = 1;
  return a;
}

(function () {
  const foo = 10; // 즉시 실행 함수의 지역 변수
  console.log(foo);
})();

console.log(boo());

const MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name = 'Lee';
console.log(MYAPP.name);

const YOURAPP = {};
YOURAPP.person = {
  name: 'Lee',
  address: 'Seoul',
};
console.log(YOURAPP);
