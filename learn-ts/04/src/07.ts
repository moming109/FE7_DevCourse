{
  // class, 제네릭, 유틸리티, 조건부 타입
  // class
  // 1.  타입 시스템이 추가
  class User {
    //type 생략 불가능
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hello, ${this.name}`;
    }
  }
  const person = new User("kisu", 20);
  console.log(person.greet());
}
{
  // 2. 접근 제어자 (public, private, protected, readonly)
  // 2.1. public - 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스 등등), 생략 시 public
  // 2.2. private - 클래스 내부에서만 접근 가능 (외부x 상속x)
  // 2.3. protected - 클래스 외부에서만 접근 불가능 (클래스 내부 o, 상속 o)
  class Car {
    private speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class BensZ extends Car {
    constructor(speed: number, name: string) {
      super(speed);
    }
    printSpeed(): void {
      //console.log(`${this.speed}`); // private라 speed에 접근할 수 없음.
    }
  }
}
