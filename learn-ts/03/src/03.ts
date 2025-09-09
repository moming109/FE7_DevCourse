//타입 별칭
{
  // 객체를 생성할때마다 타입을 지정해주는 것은 너무 번거로움
  // -> 타입 별칭: 나만의 커스텀 타입을 만들 수 있는 방법 제공
  // 타입스크립트는 컴파일 언어로 선언 위치 상관없음.
  // 관례: 타입 별칭, 인터페이스는 첫글자를 대문자로.
  // 같은 이름의 식별자 불가
  const user1: {
    name: string;
    age: number;
    gender: string;
  } = {
    name: "kim",
    age: 20,
    gender: "male",
  };

  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  const user2: Person = {
    name: "jeong",
    age: 20,
    gender: "female",
  };
}
{
  // 1. 기본 타입 별칭
  // 가독성, 유지보수 측면에서 좋음.
  type ID = string | number;
  const userId: ID = "teacher-kim";
  const produckId: ID = 1;

  // 2. 객체 타입 별칭
  // 옵셔널 프로퍼티, readonly, 인덱스 시그니처 사용 가능. 객체 타입이기 때문!
  type User = {
    readonly name: string;
    age?: number;
  };

  const per1: User = {
    name: "kim",
    age: 20,
  };

  // 3. 함수 타입 별칭
  type AddFun = (a: number, b: number) => number;
  type AddFun2 = {
    (a: number, b: number): number;
  };
  const add: AddFun2 = (a, b) => a + b;

  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}
{
  // 5. 타입 확장
  // 5.1 유니온
  // 5.2 인터섹션
  type StringId = string;
  type NumberId = number;
  type ID = StringId | NumberId;

  type Nameable = {
    name: string;
  };
  type Ageable = {
    name: number;
  };
  type Person = Nameable & Ageable;
}
{
  // 6. 리터럴 타입 별칭
  type Direction = "UP" | "RIGHT" | "LEFT" | "DOWN";
  const direct: Direction = "LEFT";
}
