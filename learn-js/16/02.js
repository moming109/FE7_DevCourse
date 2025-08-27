//1. 자바스크립트
//1.1 자바스크립트 자체적으로 내장되어있는 API
//1.2.1 Object (객체) : 자바스크립트가 제공하는 API의 정점 | 예) String, Function, Number

//1.2 브라우저에서 제공헤주는 API
//1.2.1 window (객체) : 브라우저가 제공하는 API의 정점 |
// 예) BOM (navigator, screen, location, history, document -> DOM(document object model)

//(리액트), (뷰), (Next.JS) document 제어 따로 있음.

//1.3 BOM
//1.3.1 window
//1.3.1.1 alert(message)
//window.alert("경고")
//1.3.1.2 confirm(message)
//1.3.1.3 prompt(message, default)
//1.3.1.4 setTimeout <-> clearTimeout
//1.3.1.5 setInterval <-> clearInterval

const confirms = window.confirm("강사님은 잘생겼다");
console.log(confirms);

//prompt 사용 잘 안함 : 실무에서 쓸모가 없다!
const name = window.prompt("강사님은 잘생겼다");
console.log(name);

//setTimeout: 회성으로 동작하는 코드
const timeout = window.setTimeout(() => {
  console.log("setTimeout");
}, 2000);

//setInterval: 시간 마다 반복 수행하고 싶을 때 사용하는 코드
let count = 0;
const interval = window.setInterval(() => {
  console.log(count++);
  if (count === 5) clearInterval(interval);
}, 1000);

//모든 윈도우 객체는 .을 생략 가능.

//1.3.2 navigator : 알려주는 객체
console, log(window.navigator);

//1.3.3 screen : 화면의 정보를 알려줌
//1.3.3.1 width, height, availWidth, availHeight //사용가능한 화면의 넓이
// availWidth, availHeight: 주소 표시줄, 상단바, 독...
console.log(window.screen.width);
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);
console.log(window.screen.availheight);

//1.3.4 location
console.log(window.location);
window.location.href = "주소"; //링크 이동
window.location.assign("주소"); //링크 이동
window.location.reload(); //새로 고침
