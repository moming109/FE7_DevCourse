{
  // 인덱스 접근 타입
  // 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것

  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person["name"]; // string
  type AgeType = Person["age"]; // number

  type NameAndAge = Person["name" | "age"]; // string | number
}
{
  enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Fail = "FAIL",
  }

  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));

  console.log(options);
}

{
  // const 단언
  // 값을 -> 리터럴
  // 객체의 속성 값을 -> readonly
  let x = "Hello" as const; // const 단언하면 값을 리터럴로 바꿔주고 객체의 속성값을 readonly

  const numArr = [1, 2, 3] as const;
  //numArr.push(4); // readonly

  const obj = {
    name: "kim",
    age: 20,
  } as const;
}

// const enum: 파일 크기가 비교적 작음, 후속적 코드 연계가 불가능.
// enum: 후속적 코드 연계가 가능, 파일 크기가 큼.
// 그래서 나온 것이...

{
  //최신 트렌드
  //as const enum

  //객체로 생성
  const Status = {
    Pending: "PENDING",
    Success: "SUCCESS",
    Fail: "FAIL",
  } as const;

  type Status = (typeof Status)[keyof typeof Status];
  console.log(Status.Success); //자동완성
  const option = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));
  console.log(option);
  // enum처럼 후속적 코드 연계가 가능하지만, 컴파일 시 코드의 양은 달라지지 않음.
  // 그러나 as const enum은 번들링이 될 때 트리 셰이킹이 가능. 줄어들지 않아도 장점을 가져갔다고 할 수 있음
}

// 번들러(도구): SASS, SCSS, TS -> HTML, CSS, JS
// 웹브라우저가 읽을 수 있는 언어로 변환하면서 압축
// 트리 셰이킹: 불필요한 코드(코드는 작성되어 있으나 안 쓰이는 구문)를 제거해주는 기능
// enum은 트리 셰이킹이 불가능. 때문에 번들링해도 파일 크기가 줄어들지 않음.

// as const enum을 사용해라. enum은 이놈~ 한다
