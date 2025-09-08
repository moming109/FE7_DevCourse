// 타입 정의가 없어도 에러 없이 동작한다.
// 타입 추론
// :타입을 명시하지 않아도 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본자료형 -> 타입 추론 / 참조자료형 -> 타입 명시
// null은 나중에 다른 타입이 지정될 수 있기 때문에 타입을 명시하는 편.
{
  const test = "Hello";
}
{
  const test = 42;
}
{
  const test = true;
}
{
  const test = [1, 2, 3];
}
{
  const test = null;
}
{
  const test = undefined;
}
{
  const test = {
    name: "민경",
    age: 25,
  };
}

// any: 어떤 것도 할당 가능한 상태(타입), 나중에 타입 지정 가능.
{
  let a: any;
  a = "A";
  a = 10;
}

// 리터럴 타입(literal type)
// 값으로 타입을 지정하는 방식. 정확히 그 값 하나만 가질 수 있는 타입
{
  let str: string = "Hello";
  const str2: "Hello" = "Hello";
}

{
  const test = [1, 2, 3];

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(
      (
        json: {
          userId: number;
          id: number;
          title: string;
          body: string;
        }[]
      ) => {
        console.log(json[0]);
      }
    );
}
