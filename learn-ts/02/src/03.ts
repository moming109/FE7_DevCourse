// 타입 오퍼레이터
// 유니온 타입 -> |(파이프)
//  이거 아님 이거

// 유니온 타입 예시
{
  let x: number | string | boolean = 10;
  x = "바보";
  x = true;
  x = 10;

  //어떤 차이점이 있을까?
  const arr1: (string | number)[] = ["A", 10];
  const arr2: [string, number] = ["A", 10];
  const first = arr1[0];
  //console.log(first.toLowerCase()); > 오류
  const second = arr2[0];
  //console.log(second.toLowerCase()); > 확실히 지정했기 때문에 가능
  //유니온을 사용하면 편리하지만, 만능은 아니다.

  // 타입 가드(type guard)
  // 런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법
  // 특정 변수의 타입을 결정할 수 있도록 if 조건을 짜서 변수의 타입을 좁히는 것.
  if (typeof first === "string") {
    console.log(first.toLowerCase());
  }
  // 배열(참조 자료형)일때는 타입가드가 필요했는데, 기본 자료형일때는 타입가드가 필요없다.
  // 기본 자료형에 유니온 타입을 지정했을 때는 문맥에 흐름에 따라 정확히 판단한다.
  // 참조 자료형의 경우 직접적인 데이터가 메모리에 할당된 것이 아닌, 주소값이 할당되기 때문에 파악할 수 없다.

  // 타입 추론은 실행 컨텍스트 안에서만 이루어진다
  let test: number | string = 10;
  test.toFixed(20);

  function printValue(x: number | string) {
    //console.log(x.toFixed(2));
  }
  printValue(10); //함수 호출을 해도, x의 타입 추론이 불가능. 실행 컨텍스트가 다르기 때문이다.
}

// 인터섹션 타입 -> &(엠퍼센트)
// ||(OR) &&(AND)와 의미는 비슷하지만, 헷갈리지 말기!
// 주로 객체에 사용
// A타입과 B타입. 여러개의 타입을 만족하는...

//인터섹션 타입 예시
{
  const user1: { name: string } & { age: number } = {
    name: "jeong",
    age: 25,
  };

  const user2: { name: string; age: number } = {
    name: "jeong",
    age: 25,
  };
  //왜 인터섹션을 사용하는지는 나중에...
}
