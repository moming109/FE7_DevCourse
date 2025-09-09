//인터페이스 연습 문제
//1
{
  interface Person {
    name: string;
    age: number;
  }
  const p1: Person = {
    name: "jeong",
    age: 25,
  };
  console.log(p1);
}

//2
{
  interface Car {
    brand: string;
    model: string;
    start: () => void;
  }
  const c: Car = {
    brand: "hyundai",
    model: "genesis",
    start: () => {
      console.log(`brand: ${c.brand} model: ${c.model} 운행 시작`);
    },
  };
  c.start();
}

//3
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const steff: Employee = {
    name: "kim",
    position: "developer",
  };

  console.log(steff);
}

//4
{
  interface Team {
    name: string;
    members: string[];
  }
  const develop: Team = {
    name: "develop",
    members: ["kim", "lee", "jeong"],
  };
  console.log(develop);
}

//5
{
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
  const MyDog: Dog = {
    name: "choco",
    age: 2,
    breed: "poodle",
  };
  console.log(MyDog);
}

//6
{
  interface Person {
    name: string;
    age: number;
    greet: () => string;
  }
  const p1: Person = {
    name: "kim",
    age: 20,
    greet: function () {
      return `Hello, my name is ${p1.name}`;
    },
  };
  console.log(p1.greet());
}

//7
{
  interface Shape {
    area: () => {};
  }
  interface Circle extends Shape {
    radius: number;
    area: () => number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
    area: () => number;
  }
  const c: Circle = {
    radius: 5,
    area: () => c.radius * c.radius * Math.PI,
  };
  const r: Rectangle = {
    width: 10,
    height: 5,
    area: () => r.width * r.height,
  };
  console.log(c.area(), r.area());
}

//8
{
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }
  interface Contact extends Person, Address {}
  const p1: Contact = {
    name: "kim",
    age: 20,
    street: "남영동",
    city: "서울",
    zipcode: "2322",
  };
  console.log(p1);
}

//9
{
  interface Dictionary {
    [key: string]: string;
  }
  const d1: Dictionary = {
    password: "2299",
  };
  console.log(d1);
}

//10
{
  interface Operation {
    (num1: number, num2: number): number;
  }
  const add: Operation = (num1, num2) => {
    return num1 + num2;
  };
  const subtract: Operation = (num1, num2) => {
    return num1 - num2;
  };
  console.log(add(10, 20));
  console.log(subtract(10, 20));
}
