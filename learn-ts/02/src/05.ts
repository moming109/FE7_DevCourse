//함수 타입 연습 문제+
{
  // 함수 정의
  const sumAllNumbers = (...numArr: number[][]): number[] => {
    let result;
    result = numArr.map((num) => {
      return num.reduce((sum, num) => sum + num, 0);
    });
    return result;
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 함수 정의
  const doubleValue = function (value: number | string): number {
    //왜 undefined가 들어가야하지?? -> 문제 잘못 읽음
    if (typeof value === "number") return value * 2;
    else return value.length * 2;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 함수 정의
  const multiplyArrays: (arr1: number[], arr2: number[]) => number[] =
    function (arr1, arr2) {
      const length = arr1.length > arr2.length ? arr1.length : arr2.length;
      // let result: number[] = [];

      // for (let i = 0; i < length; i++) {
      //   const num1 = arr1[i];
      //   const num2 = arr2[i];
      //   if (typeof num1 === "number" && typeof num2 === "number") {
      //     result.push(num1 * num2);
      //   }
      // }
      // return result;

      //강사님 풀이
      return Array.from({ length: length }, (_, index) => {
        const a = arr1[index];
        const b = arr2[index];
        if (a !== undefined && b !== undefined) {
          return a * b;
        }
        return 0;
      });
    };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

{
  // 함수 정의
  const intersection = function (arr1: number[], arr2: number[]): number[] {
    // let result: number[] = [];
    // for (let i = 0; i < arr1.length; i++) {
    //   const num1 = arr1[i];
    //   for (let j = 0; j < arr2.length; j++) {
    //     const num2 = arr2[j];
    //     if (typeof num1 === "number" && typeof num2 === "number") {
    //       if (num1 === num2) {
    //         result.push(num1);
    //       }
    //     }
    //   }
    // }
    // return result;
    // 강사님 풀이
    return arr1.filter((num) => arr2.includes(num));
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  // 함수 정의
  const formatInfo = (person: { name?: string; age?: number }): string => {
    let result = "";
    if (typeof person.name === "string") {
      result += `Name: ${person.name}`;
    }
    if (typeof person.age === "number") {
      result += `Age: ${person.age}`;
    }
    return result;
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}

{
  // 함수 정의
  const combineStrings: (str1: string, str2: string) => string = function (
    str1,
    str2
  ) {
    //return str1 + str2;
    return `${str1}${str2}`;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  // 함수 정의
  const squareArray = (arr: number[]): number[] => {
    return arr.map((num) => num * num);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  // 함수 정의
  const addStringAndNumber = function (str: string, num: number): string {
    //return str + num;
    return `${str}${num}`;
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  // 함수 정의
  const compareValues = (num: number, str: string): string => {
    if (num > str.length) return "Number is larger";
    else return "String is larger";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}

{
  // 함수 정의
  const checkValue = function (value: number | string | boolean): string {
    if (typeof value === "number") return "It's a number";
    else if (typeof value === "string") return "It's a string";
    else return "It's a boolean";
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
