//level 변수가 보호되지 않는다. 변수가 은닉되지 않는다.
let level = 1;
function levelUp() {
  level++;
}
levelUp();
console.log(level);

//함수 컨텍스트 메모리 정리가 되어 레벨이 오르지 않음.
function levelUp() {
  let level = 1;
  level++;
  return level;
}
let level1 = levelUp();
levelUp();
console.log(level1);

//은닉도 되고, 레벨도 올리고 싶음
function levelUp() {
  let level = 0;
  function inner() {
    level++;
    return level;
  }
  return inner; //컨텍스트가 생성되지 않음. return이므로 전역 실행 컨텍스트에서 참조? 가져감.
}
//levelUp이 다 끝나고 메모리 정리하려고 보니, 전역 실행 컨텍스트에서 콜스택에서 제거된 lever, inner를 참조중?!?!
//가비지 컬렉션이 lever, inner를 제거하지 못함.
//이러한 현상을 closer라고 부른다.
const wariorLevel = levelUp();
const archerLevel = levelUp();
let warior = wariorLevel();
warior = wariorLevel();
warior = wariorLevel();
warior = wariorLevel();

let archer = archerLevel();
archer = archerLevel();

console.log(warior); //4
console.log(archer);

//클로저
//함수가 선언될 때의 렉시컬 스코프(환경)를 기억하고, 그 스코프(환경)에 있는 변수에 접근할 수 있는 함수.
//inner = 클로저 함수다.

// 1. 데이터 은닉 - 외부에서 데이터에 직접 접근할 수 없다.
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억

//클로저 함수끼리는 상태를 공유하지 않음.
function outer() {
  let count = 0;
  return () => ++count;
}
let counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2
counter1 = null;

//이미 죽어있는 counter1의 outer를 불러오는 것이 아닌, 새로운 outer를 만들기 때문에 독립적으로 유지된다.
let counter2 = outer();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
console.log(counter2()); // 4
counter2 = null;

//클로저 함수를 사용할 때는 메모리 누수 주의가 필요하다
//따라서, 그 함수를 사용하고 나면 null 값을 할당해줄 필요가 있다.
