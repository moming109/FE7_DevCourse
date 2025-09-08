//생성자 함수
//함수로 객체를 정의하는 방법
//new 키워드 + 함수

//[[Prototype]] -> 인스턴스 객체
//내부 슬롯을 가지고 있으면 누군가의 인스턴스 객체.
// 자신을 생성한 생성자 함수의 프로토 타입 객체를 참조.
// 프로토타입 객체를 따라 올라가보면 인스턴스 객체가 누구에 의해 생성되었는지 추측할 수 있다.

//일반 함수의 this
// 자신을 호출한 객체. 함수를 어떻게 누가 호출하느냐에 따라서 this
//화살표 함수의 this
// 자신의 상위 스코프의 this를 참조함
//  Person 함수 실행 컨텍스트 내부에 정의가 된 것.

//상속
//사람 > 개발자. 여러번 함수를 정의하지 않도록
//고전적 의미의 클래스 기반 상속(classical inheritance)
//C++, java 같은 언어는 클래스를 정의하고, 그 클래스를 extends해서 서브 클래스를 만드는 방식
// 이런걸 보통 클래스 상속이라고 하고, 일반적으로 상속하면 떠오르는 대표적인 상속 문법
//  2000 ~ 2010, 프로그래밍 언어 = 클래스 기반 언어

// 그래서 js는 프로토타입 기반의 상속 모델을 만들었다.
//  자바스크립트의 모든 인스턴스 객체는[[prototype]]을 통해 다른 프로토타입 객체를 참조 가능
//  이 연결고리를 따라가면, 프로퍼티/메서드를 찾는 구조 -> 프로토타입 체인, 프로토타입 체이닝
//  결국 자바스크립트에서 상속이란, 어떤 객체가 다른 객체를 참조하는 것.
//  자신의 프로퍼티에 없으면 프로토타입을 통해 부모객체의 속성을 참조할 수 있는 것을 말함.
//  즉, 자바스크립트는 클래스가 아니라 객체가 다른 객체로부터 상속하는 언어이다.

//class -> Sugar Syntax(설탕 문법, 문법이 마치 설탕을 뿌린 것처럼 달콤하다(쉽다))

function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.getInfo = function () {
  //   return `${this.name}, ${this.age}`;
  // };
  console.log(this);
}

//함수 내부에서 정의했을 때와 동일하게 사용 가능.
//인스턴스가 가지고 있는 자신 prototype 객체
Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

const p1 = new Person("kim", 30);
const p2 = new Person("park", 40);

//호출방식에 따라 this가 가리키는 객체가 달라짐. 따라서 p1, p2가 다른값을 가짐
console.dir(p1.__proto__.getInfo()); //__proto__ -> [[prototype]]
console.dir(p1.getInfo()); //프로토타입 체이닝
console.dir(p1.hasOwnProperty()); //프로토타입 체이닝, Object까지 올라간다.
console.dir(p2.getInfo());
console.dir(p1.freeze()); //freeze는 constructor 객체에 있는 속성. 프로토타입 체이닝은 prototype 객체에 없으면 참조 불가능.

//dir 메소드: 객체의 정보를 계층적으로 보여준다.
//객체만이 아닌 배열, 함수도 일급 객체로 취급된다.

//모든 함수는 prototype 객체를 가지고 있다.
//prototype 객체는 constructor 객체를 가진다.
//상호 참조 관계

//자바스크립트의 모든 종착지 Object. Object는 Prototype이 없다.
//자바스크립트의 모든 자료형은 Object로 부터 파생된다.

function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.name = name;
  this.age = age;
  this.skill = skill;
}

const newObject = Object.create(null); //빈 객체 생성
console.dir(newObject); //property가 없음. 내부 슬롯 없음.
// Object라는 생성자 함수에 있는 create 함수로 만들었으므로
// Object보다 높은 것은 없기 때문에 누군가의 인스턴스가 될 수 없음.
const obj = {}; //내부 슬롯 가지고 있음.

const newObject1 = Object.create(Person.prototype);
//Person.prototype을 매개변수로 내부 슬롯이 Person.prototyp를 참조
Developer.prototype = newObject1;
//원래의 연결 관계를 없애고 Person.prototype을 연결
Developer.prototype.constructor = Developer;
//constructor까지 연결하면 상속 완성

console.dir(newObject1);

Developer.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

const dev1 = new Developer("Kim", 20, "javascript");
console.log(dev1);
