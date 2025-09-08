const fs = require("fs");

// 입력 처리
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const N = input[0];
const K = input[1];

let queue = []; // 배열을 queue로 사용
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let ret = []; // 요세푸스 순열 결과

while (queue.length) {
  for (let i = 1; i < K; i++) {
    // 맨 앞의 원소를 빼서 다시 넣음 (회전)
    queue.push(queue.shift());
  }
  // K번째 원소를 결과에 넣고 제거
  ret.push(queue.shift());
}

/* 복잡도: O(nk)
let front = 0;
let ret = [];

while (front < queue.length) {
    for (let i = 1; i < K; i++) {
        // 앞의 값을 뒤에 push
        queue.push(queue[front++]);
    }
    // K번째 값을 꺼내 result에 넣기
    ret.push(queue[front++]);
}
*/

console.log("<" + ret.join(", ") + ">"); // <2, 4, 6, 3, 1, 5>


