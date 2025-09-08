console.log("Hello");

//스택 생성
let stack = [];
//스택에 데이터를 넣음
stack.push("월");
stack.push("화");
stack.push("수");
stack.push("목");
stack.push("금");

console.log(stack);

console.log(stack.length);

//제일 위에 있는 요소
console.log(stack[stack.length-1]);
//삭제
console.log(stack.pop());
console.log(stack);

//스택이 비어있는가?
console.log(stack.length === 0);