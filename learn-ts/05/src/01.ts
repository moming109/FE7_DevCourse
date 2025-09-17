// 클래스
// 1. 타입 시스템이 제공된다는 것
// 2. 접근 제한자가 지원된다는 것
// 2.1 public, protected, private, readonly
// 2.2 #private가 추가되었지만, 이거랑 다른 것
// 3. 추상 클래스, 인터페이스와 결합이 가능한 것
// 4. 메소드 오버라이딩 시, 오버라이딩 반환 값이 같아야 한다는 것

{
  // 클래스
  class Car {
    readonly speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    strat(name: string): string {
      return `${name} start`;
    }
  }
  const benz = new Car(100);
  console.log(benz.speed);
  //benz.speed = 1000; > readonly라서 수정 불가능
  console.log(benz.strat("benz"));

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    interduce(): string {
      return `Heloo, ${this.name}, ${this.age}`;
    }
  }
  const person = new Person("kim", 20);
  console.log(person.interduce());
}
{
  // public: 기본값으로 생략 가능, 클래스 내/외부/상속에서 접근 가능함
  // private: 클래스 내부에서만 접근 가능
  // protected: 클래스 내부와 상속에서만 접근 가능
  class Car {
    public speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    private secret() {
      return "차  사고 크게 난 적 있음";
    }
    search(): string {
      return this.secret();
    }
  }
  const car = new Car(100);
  console.log(car.speed);
  //console.log(car.secret());
}

{
  class Car {
    private engineOn: boolean = false;

    start() {
      if (this.engineOn) {
        console.log("Engine is already started");
        return;
      }
      this.engineOn = true;
      console.log("Engine started");
    }
    stop() {
      if (!this.engineOn) {
        console.log("Engine is already stoped");
        return;
      }
      this.engineOn = false;
      console.log("Engine stopped");
    }
    isEngineOn(): boolean {
      return this.engineOn;
    }
  }
  const benz = new Car();
  benz.start();
  benz.start();
  benz.stop();
  benz.stop();
  console.log(benz.isEngineOn());
}
{
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz extends Car {
    showSpeed() {
      console.log(this.speed);
    }
  }
  const benz = new Benz(100);
  benz.showSpeed();
}
{
  class Character {
    protected hp: number = 100;
  }
  class Warrior extends Character {
    atack() {
      this.hp -= 10;
      console.log(`HP after acctac: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
    }
  }
  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.atack();
}
{
  // readonly: 한번 값이 할당되면 변하지 않음.
  class Config {
    readonly apiUrl;
    // readonly라도 초기값 할당이 되지 않으면 1번은 할당 가능
    readonly appVersion = "v1.0";

    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
    displauConfig() {
      console.log(`API_URL: ${this.apiUrl}, APP_VERSION: ${this.appVersion}`);
    }
  }
  const config = new Config("초기값 할당이 될까?");
  console.log(config.apiUrl);
  console.log(config.appVersion);
  config.displauConfig();
}
{
  // 메소드 오버라이딩
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }

  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    //메소드 오버라이딩 시 타입은 불변해야 함.
    getSpeed(): string {
      return `Benz: ${this.name},  ${this.speed}`;
    }
  }
}
{
  // 추상클래스
  // 직접 인스턴스를 생성할 수 없는 클래스로,
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)
  abstract class Animal {
    abstract makeSound(): void;
  }
  // 추상 메소드는 구현 의무가 있음.
  class Dog extends Animal {
    makeSound(): void {
      console.log("멍멍");
    }
  }
  //const animal = new Animal(); //생성 불가능
  const dog = new Dog();
  dog.makeSound();
}
{
  abstract class CarAbsttract {
    code: string = "sdfasdf";
    abstract name: string;
    abstract speed: number;
    abstract color: string;
    abstract maxSpeed(): number;
    // 구현도 가능
    start() {
      console.log("start");
    }
    stop() {
      console.log("stop");
    }
  }
  // extends는 하나의 클래스만 가능
  class Benz extends CarAbsttract {
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super(); //추상클래스여도 상속이기 때문에 슈퍼 호출 의무가 있음.
      this.name = name;
      this.speed = speed;
      this.color = color;
    }
    maxSpeed(): number {
      return this.speed;
    }
  }

  const benz = new Benz("S", 200, "black");
  console.log(benz.maxSpeed());
}
{
  // 추상클래스
  // 장점: 연관된 클래스에 공통의 속성과 메서드를 구현하도록 강제할 수 있다
  // 단점: 다른 클래스를 추가 상속하지 못하게 한다.

  // inplements + interface
  // 추상 클래스는 직접 구현이 가능한데
  // 이 유형은 직접 구현이 불가능. 여러개 implements 가능

  interface Runner {
    name: string;
    run(): void;
  }
  //타입별칭도 인터페이스와 동일한 방식으로 사용 가능
  type Swimmer = {
    swim(): void;
  };

  abstract class PersonAbstract {
    abstract stop(): void;
  }

  class Person extends PersonAbstract implements Runner, Swimmer {
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    run(): void {
      console.log("Person is Run!");
    }
    swim(): void {
      console.log("Person is Swim!");
    }
    stop(): void {}
  }
  const person = new Person("kim");
}
{
  interface A {
    a(): void;
  }
  interface B extends A {
    b(): void;
  }
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
{
  interface A {
    a(): void;
  }
  type B = A & {
    b(): void;
  };
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
{
  // abstract
  // -> 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 포함)
  // implements
  // -> 상속과 별개로 공통의 속성아니 메서드를 구현하고 싶을 때 (직접 구현 불가능)
  // interface를 이용하여 implements를 하는 관례
}
