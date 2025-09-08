// 타입을 지정해주는 방볍 > 변수명:타입
// 재할당은 가능하나 한번 타입을 지정해주면 그 변수의 타입은 불변하다.

// 1. 기본 자료형
// 1.1 문자열 -> string
// 1.2 숫자 -> number
// 1.3 논리 -> boolean
// 1.4 undefined -> undefined
// 1.5 null -> null
// 1.6 symbol -> symbol
// 1.7 Bigint -> bigint

{
  const str: string = "Hello";
  const num: number = 10;
  const bool: boolean = true;
  const undi: undefined = undefined;
  const nul: null = null;
  const sym: symbol = Symbol("a");
  const big: bigint = 100n;

  console.log(typeof str);
  console.log(typeof num);
  console.log(typeof bool);
  console.log(typeof undi);
  console.log(typeof nul); //object
  console.log(typeof sym);
  console.log(typeof big);
}

{
  //str에는 무조건 문자열이 할당되도록 이외의 자료형이 할당되면 ts가 오류 글씨로 알려줌, 할당은 가능 -> ts 컴파일 과정에서 에러
  let str: string = "Hello";
  str = "a";
  console.log(str);
}

// 2. 참조 자료형

// 2.1 배열
// 2.1.1 [] (단축 방법)
// 2.1.2 Array <> (제네릭) 실무에서 사용 x
// 2.2 객체 ->
// 2.3 함수 -> 나중에

{
  const arr1: number[] = [];
  const arr2: Array<number> = [1, 2, 3];
  arr1.push(1);
  //arr1.push("a"); //자료형이 number가 아니기 때문에 오류

  //타입 지정 방법 튜플(tuple)
  const arr1_1: [number, string] = [1, "a"];
  //arr2 방법으로는 여러 타입을 섞어서 지정할 수 없음.

  const matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const matrix1_1: [number[], string[]] = [
    [1, 2, 3],
    ["a", "b", "c"],
  ];

  //실무에서 사용 안함
  const matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const blocks: string[][][] = [
    [["a", "b"], ["c"]],
    [["d", "e"], ["f"]],
  ];

  const blocks2: [[string[], number[]], [string[], number[]]] = [
    [["a", "b"], [1]],
    [["d", "e"], [2]],
  ];
}

// 2.2 객체
{
  const obj: {} = {}; //Record<string, never>
  const user: {
    //객체 속성 순서 상관없음. 컴파일 언어이기 때문
    name: string; //객체처럼 콤마(,)로 구분해서 작성해도 됨.
    age: number;
    fruits: string[];
    address: {
      zipcode: number;
      details: [string, string, number];
    };
  } = {
    name: "kim",
    age: 20,
    fruits: ["apple", "banana"],
    address: {
      zipcode: 111333,
      details: ["서울", "관악", 11],
    },
  };

  const member: { id: number; name: string }[] = [
    { id: 1, name: "kim" },
    { id: 2, name: "kim" },
  ];

  const project: {
    id: string;
    members: { id: number; name: string }[];
  } = {
    id: "p1",
    members,
  };
}
