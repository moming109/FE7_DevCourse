// JSX
// 기존 이벤트 타입 앞에 on만 붙이면 이벤트 속성.
// 카멜 케이스, 이벤트의 함수를 참조값으로 전달하거나 화살표 함수로 전달하는 것
// 함수에 매개변수를 전달해야하는 경우에는 화살표 함수로, 전달할 필요가 없을 때는 참조 값으로 넘김.

// 이벤트 객체 : 특정 이밴트와 관련있는 데이터들이 담겨져 있는 객체

//import Button from "./components/Button";
export default function App() {
  // const handler = (name: string) => {
  //   alert(name);
  // };

  const handler = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    // 포인터 내부 객체 (PointerEvent)
    console.log(event);
    // 암묵적으로 전달되는 이벤트 객체 (SyntheticBaseEvent)
    console.log(e);
    // event?.target.style.color = "red";
    console.log(name);
    // 어떤 브라우저에서 실행하더라도 동일한 동작을 보장하기 위해 리액트가 오리지널 이벤트 객체를 감싸서 만든 것 -> SyntheticBaseEvent
    // 따라서 리액트의 의도를 어기고 오리지널 이벤트 객체를 바로 사용하면 아키텍처 위반.
    // 무조건 e: unknown를 전달받아서 써야한다.

    // 그럼 암묵적으로 전달되는 이벤트 객체는 매개변수가 있을 때는 어떻게 전달할까?
    // 명시적으로 전달하여 사용. (e) => handler(e, "kim")

    // 명시적으로 전달하는 경우, 타입추론이 된다.
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    //이벤트를 발생한 위치
    // e.target.style.color = "red";
    //이벤트가 발생한 요소
    e.currentTarget.style.color = "red";
  };

  return (
    <>
      {/* 참조값 전달 방식 */}
      {/* <button onClick={handler()}>클릭</button> -> 즉시 실행됨. */}
      {/* <button onClick={handler}>클릭</button> */}

      {/* 화살표 함수 전달 방식 */}
      {/* <button
        onClick={() => {
          handler("min");
        }}
      >
        클릭
      </button> */}

      {/* 컴포넌트 */}
      {/* <Button
        handler={() => {
          handler("min");
        }}
      /> */}
      <form onSubmit={handlerSubmit}>
        <button onClick={(e) => handler(e, "kim")}>클릭</button>
      </form>
    </>
  );
}
