let queue = [];

queue.push("월");
queue.push("화");
queue.push("수");
queue.push("목");
queue.push("금");

console.log(queue);

console.log(queue[0]);
console.log(queue.length === 0);

//가장 앞의 것부터 삭제됨.
console.log(queue.shift());
console.log(queue);

const fruits = ['사과', '바나나', '오렌지'];
fruits.splice(1, 1); // 인덱스 1에서 1개 요소를 '포도'로 대체
console.log(fruits); // ['사과', '포도', '오렌지']

const str = "Hello, World!";
console.log(str.slice(7)); // 'World!'
console.log(str.slice(8, -1)); // 'World!'
console.log(str.slice(0, 0)); // 'World!'