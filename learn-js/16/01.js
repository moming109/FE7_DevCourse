//비동기 흐름을 제어하기 위해서
// 1. 콜백 함수
// 1. Promise | pending -> (fulfiled(resolve 시). rejected(reject 시))
// 1. Async, Await

//자바스크립트는 동기, 코드를 한 번에 한 줄씩 순차적으로.
//10초, 모든 코드가 10초 동안 멈춤
//비동기를 처리할 수 있는 방법을 제공함 (비공기 -> 코드의 실행을 기다리지 않는다는 것)

const promise = new Promise((resolve, reject) => {
  resolve("성공");
});

//위 구문과 한번에 써도 상관 없음.
promise //
  .then(console.log)
  .catch(console.log);

console.log(promise);

//promise 직접 접근
Promise.resolve("성공!").then(console.log);
console.log("성공 후");

//async 사용
//await
//병렬 처리 -> 함수를 먼저 호출 await, 호출된 Promise 객체를 await | Promise.allset,,,?
async function delay(ms) {
  //return new Promise((resolve) => resolve(ms));
  return ms;
}

delay(2000) //
  .then(console.log);
