// 인터페이스
// 객체의 타입을 지정할 때 사용하는 타입 지정 방법
// interface
// type 식별자 = 할당
// interface 식별자 {}
// 객체이기 때문에 옵셔널 프로퍼티, readonly, 인덱스 시그니처 사용 가능.

// 타입 별칭과의 차이점: 상속, 자동 병합

//국내에서는 대부분 객체는 인터페이스 정의, 그 외에는 타입 별칭

{
  interface Person {
    name: string;
    age: number;
    gender: Gender;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
  type Gender = "male" | "female" | "natural";
}

{
  interface Person {
    name: string;
    age: number;
    greet: (message: string) => void;
    //greet():void;
  }

  const person: Person = {
    name: "jeong",
    age: 25,
    greet(message) {
      console.log(`${message}, ${this.name}`);
    },
  };

  person.greet("Hi");
}

{
  interface Person {
    [key: string]: string | number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}

{
  // 자동 병합
  // 인터페이스는 같은 이름으로 지정 가능. 같은 이름이면 자동 병합
  // 별도의 오류가 없기 때문에 나도 모르게 병합이 된다.

  interface Person {
    name: string;
  }

  interface Person {
    age: number;
  }

  const person: Person = {
    name: "jeong",
    age: 25,
  };
}
{
  // 상속
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    skill: string;
  }

  const developer: Developer = {
    name: "jeong",
    age: 25,
    skill: "javascript",
  };
}

{
  // 다중 인터페이스 상속
  interface Flyer {
    fly(): void;
  }
  interface Swimmer {
    swim?(): void; // ?는 소괄호 앞에
  }
  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  const duck: Bird = {
    fly() {},
    //swim(){},
    sound() {},
  };
}
{
  interface AddFn {
    (a: number, b: number): number;
  }
  const add: AddFn = (a, b) => a + b;
}

// 마우스 오버 시 인터페이스 플러스가 안보이는 이유
// 1. vscode 버전이 5.9보다 낮음
// 2. 익스텐션

//오늘날 헝가리안 표기법(I(인터페이스)변수이름에 붙임)은 거의 사용하지 않는다.
{
  interface IPerson {
    name: string;
    age: number;
    gender: "male" | "female" | "natural";
  }
}
