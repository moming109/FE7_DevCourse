{
  // enum(이넘)
  type Move = "left" | "right";

  function moveX(direction: Move): void {
    if (direction === "left") {
      console.log("왼쪽 이동");
    }
    if (direction === "right") {
      console.log("오른쪽 이동");
    }
  }

  moveX("left");
  moveX("right");
  // 동작하지 않음. 미래지향적으로 봤을 때 에러를 일으킬 수 있는...
  // moveX("up");
  // moveX("down");

  // 리터럴 타입을 유니온으로 묶어주는 방법
  type MoveDirection = "left" | "right" | "up" | "down"; //매개변수의 값의 의미가 불분명하다

  function moveXY(direction: MoveDirection): void {
    if (direction === "left") {
      console.log("왼쪽 이동");
    }
    if (direction === "right") {
      console.log("오른쪽 이동");
    }
    if (direction === "up") {
      console.log("위 회전");
    }
    if (direction === "down") {
      console.log("아래 회전");
    }
  }

  moveXY("left");
  moveXY("right");
  // 동작하지 않음. 미래지향적으로 봤을 때 에러를 일으킬 수 있는...
  moveXY("up");
  moveXY("down");
}
{
  // 이넘(enum)
  // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입.
  // 의미와 코드 가독성을 챙길 수 있음.
  // 고정된 값을 의미있게 타입으로 묶어서 다룰 수 있다.
  enum CharacterMoveX {
    LEFT,
    RIGHT,
  }
  enum RotationMove {
    UP,
    DOWN,
  }
  function enumMoveX(direction: CharacterMoveX | RotationMove): void {
    if (direction === CharacterMoveX.LEFT) {
      console.log("왼쪽 이동");
    }
    if (direction === CharacterMoveX.RIGHT) {
      console.log("오른쪽 이동");
    }
    if (direction === RotationMove.UP) {
      console.log("위 회전");
    }
    if (direction === RotationMove.DOWN) {
      console.log("아래 회전");
    }
  }
}
{
  // 숫자형 enum
  // 기본값 0부터 시작. 이전에 할당된 숫자 있으면 그 숫자에 1씩 더해서 할당.
  enum Direcion {
    UP,
    DOWN = 100,
    LEFT,
    RIGHT,
  }
  // 숫자 값이 매칭
  console.log(Direcion.UP); // 출력: 0
  console.log(Direcion.DOWN); // 출력: 100
  console.log(Direcion.LEFT); // 출력: 101
  console.log(Direcion.RIGHT); // 출력: 102
}
{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return "성공";
      case StatusCode.BadRequest:
        return "실패";
      case StatusCode.Unauthorized:
        return "인증에러";
      case StatusCode.NotFound:
        return "찾을 수 없음";
    }
  }
  console.log(handleResponse(StatusCode.BadRequest));
}
{
  // 문자 enum(열거형)
  enum Direcion {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
  }
  console.log(Direcion.DOWN);
}
{
  // 혼합 enum(열거형)
  // 모든 값을 할당해야 함
  enum Mix {
    YES = 1,
    NO = "NO",
  }
  enum Direcion {
    UP = 200,
    DOWN, // 201
    LEFT, // 202
    RIGHT = "RIGHT",
  }
  console.log(Direcion.UP); // 출력: 0
  console.log(Direcion.DOWN); // 출력: 100
  console.log(Direcion.LEFT); // 출력: 101
  console.log(Direcion.RIGHT); // 출력: 102
}
{
  // 리버스 매핑 (역방향 매핑)
  // 숫자형 이넘에만 지원한 개념
  enum Direcion {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
  console.log(Direcion.UP); // 출력: 0
  console.log(Direcion[0]); // 역방향 매핑, 출력: UP
}
{
  enum Key {
    ArrowUp,
    ArrowDown,
  }
  function onKeyPressed(code: Key) {
    console.log("pressed:" + Key[code]);
  }
  onKeyPressed(Key.ArrowUp);
  onKeyPressed(1);
}
{
  // const enum
  // enum이 자바스크립트로 컴파일 될 때, 즉시 실행 함수 형태로 컴파일 된다. -> 코드가 길어짐
  // 그러나 const enum으로 정의해주면, 컴파일 과정에서 구현부를 없애고, 참조값으로 치환해준다. => 인라인화
  // enum을 사용한 소스코드의 컴파일 된 최종 파일의 크기를 줄이기 위해서 등장한 정의 방법
  // 단, 역방향 매핑이 안된다.
  const enum DirectionConst {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
  //console.log(DirectionConst[0]); //구현부가 남아있지 않아서 접근 불가능.
}
{
  (function () {})(); // 즉시 실행 함수 형태
}
