{
  // 유틸리티 타입 (기존에 존재하는 타입을 변형)
  // 제네릭을 기반으로 만들어짐
}
{
  // 선언 병합
  // interface
  interface User {
    name: string;
  }
  interface User {
    age: number;
    name: string;
  }
  // 타입별칭은 불가능

  // enum
  // -> 선언 병합 가능. 단, 값이 달라야함.
  enum Direction {
    UP,
    DOWN,
  }
  enum Direction {
    RIGHT = 2,
    LEFT,
  }
}

{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U>? X : Y
  type IsString<T> = T extends string ? "yes" : "no";
  type A = IsString<string>;
  type B = IsString<number>;
}

{
  type MyType = "a" | "b" | "c";

  // 예제 1: "b"를 제외한 나머지 타입 반환
  type Result = Exclude<MyType, "b">; // "a" | "c"
  const value: Result = "a"; // 유효
}
{
  // Exclude는 내부적으로 조건부 타입을 통해서 구현되어져 있다

  // type Exclude<"a" | "b" | "c", "b"> = "a" | "b" | "c" extends "b" ? never : T;
  // | "a" extends "b" ? never : T -> T
  // | "b" extends "b" ? never : T -> never
  // | "c" extends "b" ? never : T -> T
  // "a"| "c"
  type Exclude<T, U> = T extends U ? never : T;
  type MyType = "a" | "b" | "c";
  type Result = Exclude<MyType, "b">; // "a" | "c"
}
