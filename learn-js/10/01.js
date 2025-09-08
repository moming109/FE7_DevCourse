//ES5
//프로토타입 기반의 생성자 함수
//프로토타입 기반으로 상속

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person();
// console.log(p1);

// Person.prototype.greet = function(){
//     return `Hi`;
// };

//ES6
//class 문법
//객체지향 프로그래밍(OPP)를 더 직관적이고 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax.
//Sugar Syntax, 기존의 문법을 사용하기 쉽게 만든 문법을 말함. 예) 화살표 함수, async...await
//내부 동작은 여전히 프로토타입 기반 상속이지만, class문법을 사용하면 전통적인 클래스 기반 언어(java, C++) 처럼 코드를 작성할 수 있습니다.

class Person {
  //생략 가능
  //name = "Kim"; //this 속성이 불필요
  //age = 120;
  //new를 사용하여 처음 생성할 때 인자값을 전달받음. 인자값이 없으면 undefined.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //구식:
  //   greet1 = function () {
  //     return "Hi";
  //   };

  //단축 함수(shorthard method) 문법 (function을 생략했다)
  //구식과 다르게 함수가 자동으로 Person의 프로토타입 객체에 등록된다.
  greet2() {
    return "Hi";
  }

  getInfo() {
    return `${this.name}, ${this.age}`;
  }
}

//프로토타입에 속성을 추가하는 것은 단축이 없다. 경우가 많지 않기 때문.
Person.prototype.sucoding = "잘생김";

const p2 = new Person("kim", 20);
console.log(p2); // 위 아래 결과가 동일하다
console.log(p2.greet2());
console.log(p2.sucoding);
console.log(p2.getInfo());

let arr = ["10", "식물"]
console.log(String(parseInt(arr[0])+10));
console.log(`${arr[0]}:${arr[1]}`);