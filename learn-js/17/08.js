console.log("start"); //첫번째 출력

//네번째 출력
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//세번째 출력
Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end"); //두번째 출력
