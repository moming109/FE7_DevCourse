// 구조적 타이핑
// 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
// 완전히 구조가 같을 필요는 없고, 할당하려고 하는 것의 요소를 가지고 있으면 가능! 단, 함수는 안된다.
// 큰 것을 작은 것에 집어넣을 때, 호환은 되지만 타입 추론이 안될 수 있다.
// 객체는 속성 이름과 타입이 일치하면, 함수는 매개변수와 타입과 순서 반환값의 타입이 일치해야 한다.
const point: { x: number; y: number } = { x: 10, y: 20 };
const position: { x: number; y: number } = point;

const fn1: (x: number, y: number) => number = (x, y) => x + y;
const fn2: (x: number, y: number) => number = fn1;

//readonly
//freeze로 얼릴 필요 없이 readonly를 사용하면 수정 불가능
//객체, 배열, 튜플에서 사용 가능
const user: {
  readonly name: string;
  readonly age: number;
} = {
  name: "kim",
  age: 20,
};

const numArr: readonly number[] = [1, 2, 3];
const mixArr: readonly [number, string] = [1, "A"];
// numArr.push(4); > 에러
// numArr[0] = 6; > 에러

//옵셔널 파라미터와 함께 사용할 수 있다.
{
  const user: {
    readonly name: string;
    readonly age?: number; // age가 있다면 수정이 불가능하다.
  } = {
    name: "kim",
    age: 20,
  };
}

// 인덱스 시그니처
// 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
// 있을 수도 없을 수도 있는 속성 때문에 코드의 가독성이 떨어질 수도 있다.
// 위 문제를 해결하기 위해 포괄적인 인덱스 시크니처라는 타입 지정 방법을 사용

// 단점: 타입 추론이 안됨. 정확히 무슨 속성이 있는지 알 수 없음. 존재하지 않는 속성에 접근해도 에러가 안 남.
// 자바스크립트 구조상 객체의 키는 100% 문자열이다. 정확히는 문자열로 치환된다.
{
  const user: {
    [key: string]:
      | string
      | number
      | ({ address: string } & { zipcode: string })
      | ((a: number, b: number) => number); // 인덱스 시그니처. 어떤 객체라도 키와 값이 지정 타입이면 가능!
  } = {
    name: "kim",
    0: 20,
    obj: {
      address: "dd",
      zipcode: "ddd",
    },
    sum: (a: number, b: number) => a + b,
  };

  user.gender = "female";
  user.age = 20;
  //user. > 속성이 자동완성으로 뜨지 않음.

  const person: {
    name: string;
    gender: string;
  } = {
    name: "kim",
    gender: "male",
  };
}

// 자바스크립트 코드를 먼저 작성하고 이후 타입을 지정하는 것이 더 편리.
// 함수는 일급 객체로 타입을 객체 형식으로 지정할 수 있다.
const add: {
  (a: number, b: number): number;
} = (a, b) => a + b;

const adds: (a: number, b: number) => number = (a, b) => a + b;
