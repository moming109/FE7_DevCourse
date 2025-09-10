{
  // TODO: 나중에 타입 교체
  // any: 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
  // 타입 검사를 수행하지 않음.
  // unknown: 알 수 없는 타입 (안전한 any, 유연한 any)
  // 알 수 없지만, 변수를 활용할 때는 any와 다르게 직접적으로 사용 불가능. 따라서 타입 가드를 통해 타입을 좁힐 필요가 있다.
  let x: unknown;
  x = 10;
  x = "a";
  x = null;
  x = undefined;
  x = () => {};
  x = [];

  let y: any;
  y = 10.12;

  if (typeof x === "number") {
    console.log(x.toFixed(1));
  }
  console.log(y.toFixed(1));
}

{
  // 타입 단언
  // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용합니다.
  // 타입을 내가 정의하겠다, 보장하겠다.
  // 장점: 타입을 내가 원하는대로 지정할 수 있음.
  // 단점: 그 책임은 개발자가 가져가야 함. -> 오류는 없으나 타입이 일치하지 않으면 런타임에 에러 남
  // as, <>

  let x: unknown;
  x = 10.12;
  // 시험출제
  (x as number).toFixed(1); // as
  (<number>x).toFixed(1); // 리액트 안 씀, JSX문법과 충돌

  (x as { name: string }).name;

  const el = document.querySelector("#user") as Element;
  el?.addEventListener("click", function () {});
}
