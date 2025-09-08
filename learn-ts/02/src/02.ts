// 함수에 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
// function(n1: 매개변수의 타입):반환값의 타입 {}
// 함수도 타입 추론이 된다. 반환값 생략가능, 그러나 명시하는 것이 정석.

// 특수한 타입
// void: 아무것도 반환하지 않는 함수에 사용. 작성자가 의도적으로 반환하지 않도록 정의함.
// never: 절대 값을 반환하지 않을 때. 작성자 선택의 여지 X

{
  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  sum(10, 20);

  function printValue(value: string): void {
    console.log(value);
  }

  function throwError(msg: string): never {
    throw new Error(msg);
  }
}

// 함수 표현식
// (1) 함수 표현식의 타입을 지정하는 방법
{
  const sumA = function sum(num1: number, num2: number): number {
    return num1 + num2;
  };

  // (2) 변수에다가 함수 타입을 지정하는 방법
  const sumB: (num1: number, num2: number) => number = function sum(
    num1,
    num2
  ) {
    return num1 + num2;
  };

  // (3) 둘 다 사용
  const sumC: (num1: number, num2: number) => number = function sum(
    num1: number,
    num2: number
  ): number {
    return num1 + num2;
  };
}

//중요한 건 일관성이다.

// 화살표 함수
// (1) 함수 표현식의 타입을 지정하는 방법
{
  const sumA = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // (2) 변수에다가 함수 타입을 지정하는 방법
  const sumB: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
  };

  // (3) 둘 다 사용
  const sumC: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
  ): number => num1 + num2;
}

// 옵셔널 파라미터
// ?: 일 수도 있고, 아닐 수도 있고.
// 옵셔널 파라미터를 먼저 사용하는 것은 불가능 예) num1?: number, num2: number
{
  function sum(num1: number, num2?: number): number {
    return num1 + (num2 || 0);
  }
  //num2: number | undefined -> 매개변수가 안 넘겨질 수도 있기 때문.
}

{
  //매개변수가 콜백함수일 때
  // function log(msg: string){
  //   console.log(msg);
  // }
  function printValue(callback: (msg: string) => void): void {
    console.log("Hello");
  }
  printValue((msg: string) => {
    console.log(msg);
  });

  //반환값이 함수일 때도 타입을 지정해준다
  function createM(factor: number): (num: number) => number {
    return (num) => num * factor;
  }
  const multipleTwo = createM(2);
  console.log(multipleTwo(5));

  //화살표 함수로 전환
  const createMultiple: (factor: number) => (num: number) => number =
    (factor) => (num) =>
      num * factor;

  function sum(...numArr: number[]): number {
    return numArr.reduce((acc, cur) => acc + cur, 0);
  }
}

{
  // 함수 오버로딩
  // 오버로드 시그니처를 활용해서 매개변수와 반환 값의 경우의 수를 좁히는 방법
  // 함수의 선언 부분만 따서 적음. 경우의 수를 모두 나열할 필요는 없음. 단, 적지 않은 경우의 수가 나올 시 에러
  // 함수 선언문이 있는 표현식만 지원. 화살표 함수는 지원하지 않음.
  function sum(a: number, b: number): number;
  function sum(a: number, b: string): string;
  function sum(a: string, b: number): string;
  function sum(a: string, b: string): string;
  function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else if (typeof a === "string" && typeof b === "string") return a + b;
    //else return a+b; > 정확히 조건을 제시하지 않아서 에러
    else return `${a}${b}`;
  }

  const num = sum(10, 20);
  console.log(num);
  console.log(typeof num);
  //console.log(num.toFixed(2)); //> 타입 가드를 해도 string일 가능성이 있기 때문에 에러.
  console.log(num.toFixed(2)); //함수 오버로딩을 통해 에러 해결
}
