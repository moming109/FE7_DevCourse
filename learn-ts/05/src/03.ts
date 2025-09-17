// 제네릭
// 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.
// 치환, 어떤 변수가 값으로 변경되는 것

// 함수의 선언부분 앞에 꺽쇠.
// T = Type (가장 일반적인 타입 변수)
// K = Key (객체의 키)
// V = value (객체의 값)
// E = Element (배열의 요소나 이벤트)
// U = Another Type (T 이외의 만만하면 U)

// 유니온이 필요 없이 한방에...!
// 제네릭을 사용하면, 함수 호출 시 치환될 타입 추론 가능
{
  function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }

  console.log(getFirstElement<number>([1, 2, 3]));
  // function getFirstElement<number>(arr: number[]): number {}
  console.log(getFirstElement<string>(["A", "B", "C"]));
  // 함수를 따로 만들거나 유니온을 사용한다.
  // 그러나 함수를 만들어내는 것은 유지보수 측면에서 굉장히 좋지 않다.
  // 유니온도 너무 길어짐
}

// 널 아님 보장 연산자
{
  function getFirstElement<T>(arr: T[]): T {
    return arr[0]!;
  }
  // 그래도 불안하면 타입가드
  function getFirstElement2<T>(arr: T[]): T | undefined {
    if (arr[0]) {
      return arr[0];
    }
  }
}

//제네릭을 쓸 때 오버로드 사용할 수는 있지만... 충돌? 오류가 날 수도 있어서 권장하지 않음.

{
  //제네릭도 타입 추론이 된다.
  // 타입 명시가 필요하지 않으면, 타입 추론을 활용하는 것을 권장.
  function identity<T>(value: T): T {
    return value;
  }
  // 굳이 꺽쇠를 쓰지 않아도 타입추론이 된다!
  const num = identity<number>(42);
  const str = identity("A");
  const bool = identity(true);
}
{
  function logArray<T>(arr: T[]): void {
    arr.forEach((value) => console.log(value));
  }
  logArray<number>([1, 2, 3]);
  logArray<string>(["a", "b", "c"]);
}

{
  // 객체의 경우 타입 추론을 이용하지 않으면 코드 가독성이 너무 안 좋아짐
  // 이거 만약 다른 요소가 n개면 어떻게 될까?
  function mergeObj<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  const mer1 = mergeObj({ name: "kim" }, { age: 20 });
  const mer2 = mergeObj({ name: "kim", age: 20 }, { gender: "male" });
}
{
  function makeTuple<T, K, V>(a: T, b: K, c: V): [T, K, V] {
    return [a, b, c];
  }
  const numTuple = makeTuple(1, 2, 3);
  const strTuple = makeTuple("1", "2", "3");
  const mixTuple = makeTuple(1, "2", 3);
}
{
  // 타입 제약
  // 제네릭의 타입을 제한하는 문법
  // T extends U
  function sumArray<T extends number>(arr: T[]): number {
    // 반환값 명시해야 함
    //타입이 너무 포괄적이라서 사용할 수 없음 -> 타입제약 사용!
    return arr.reduce((acc, cur) => acc + cur, 0);
  }

  sumArray([1, 2, 3]);
  // 타입제약 때문에 오류 sumArray(["1", "2", "3"]);
}
{
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  returnLength(["a", "b", "c"]);
}
{
  function logKey<T extends { name: string; age: number }>(obj: T): void {
    console.log(`${obj.name}, ${obj.age}`);
  }
  logKey({ name: "kim", gender: "male", age: 20 });
}

{
  // 인터페이스의 제네릭
  // interface Box {
  //  value: string| number;
  //  getValue(): string | number;
  // }

  type Box<T> = {
    value: T;
    getValue(): T;
  };

  interface Box2<T> {
    value: T;
    getValue(): T;
  }
  const stringBox: Box<string> = {
    value: "kim",
    getValue() {
      return this.value;
    },
  };

  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}

{
  class Box<T extends { id: number }> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  const stringBox = new Box<{ id: number; name: string }>();
  stringBox.add({ id: 1, name: "kim" });
  console.log(stringBox.getAll());
}

{
  class Pair<T, U> {
    //프라이베이트도 되는구나
    constructor(private first: T, private second: U) {}
    getFirst(): T {
      return this.first;
    }
    getSecond(): U {
      return this.second;
    }
  }
  const pairs1 = new Pair(10, "A");
  const pairs2 = new Pair(10, 20);
  const pairs3 = new Pair("A", "B");
}
{
  interface Repository<T> {
    add(item: T): void;
    get(id: number): T | undefined;
  }
  //implements 도 필수 구현이구나
  class InMemoeryRepository<T> implements Repository<T> {
    private item: T[] = [];
    add(item: T): void {
      this.item.push(item);
    }
    get(id: number): T | undefined {
      return this.item[id];
    }
  }

  interface User {
    id: number;
    name: string;
  }
  const userRepository = new InMemoeryRepository<User>();
  userRepository.add({ id: 1, name: "kim" });
  console.log(userRepository.get(0));
}
