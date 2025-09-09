// 함수 타입 연습 문제
{
  // 함수 정의
  const add = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

{
  // 함수 정의
  const greet = (str: string): string => {
    return `Hello, ${str}!`;
  };

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}

{
  // 함수 정의
  const sumAll = (...numArr: number[]): number => {
    let result: number = 0;
    for (const i of numArr) {
      result += i;
    }
    return result;
  };

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // 함수 정의
  // const sum = (a: number, b?: number): number => {
  //   if (b === undefined) b = 0;
  //   return a + b;
  // };

  //강사님 풀이
  // 매개변수가 기본값이 지정된 경우 자동적으로 타입 추론된다.
  // 변수에서 타입 지정할 경우 기본값은 에러가 남. 기본값은 함수나 생성자(구현부)에서 타입 지정해주어야 함
  const sum = (a: number, b = 0): number => {
    if (b === undefined) b = 0;
    return a + b;
  };

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

{
  // 함수 정의
  const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
  };

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  // 함수 정의
  const concatStringAndNumber = (str: string, num: number): string => {
    return str + num;
  };

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}

{
  // 함수 정의
  // 옵셔널과 기본값은 함께 사용할 수 없음.
  // const greet = (name: string, g?: string): string => {
  //   if (g === undefined) g = "Welcome";
  //   return `${g}, ${name}!`;
  // };

  //강사님 풀이
  const greet = (name: string, g = "Welcome"): string => {
    return `${g}, ${name}!`;
  };

  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

{
  // 함수 정의
  // const findMax = (arr: number[]): number => {
  //   let result = 0;
  //   for (const i of arr) {
  //     if (result < i) result = i;
  //   }
  //   return result;
  // };

  //강사님 풀이
  const findMax = (arr: number[]) => {
    return Math.max(...arr);
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

{
  // 함수 정의
  const double = (num: number) => {
    return num * 2;
  };

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}

{
  // 함수 정의
  function getInfo(param: number | string) {
    return `Name: ${param}`;
  }

  // 함수 호출
  const info1 = getInfo("Alice");
  const info2 = getInfo(30);
  console.log(info1);
  console.log(info2);
}
