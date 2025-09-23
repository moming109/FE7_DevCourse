// 자바스크립트 변수 선언 키워드 -> let, const, var
// 리액트 변수 선언 키워드 -> useState()
// 리액트 DOM이 let으로 정의한 count의 변경사항을 제대로 인식하지 못하기 때문에 바로바로 갱신되지 않음.
// 리액트 변수 선언으로 해야 변경사항을 리액트 DOM이 관찰함.

// 리액트는 오리지널 DOM과 오리지널을 복사한 가상 DOM 2개를 만듬
// 모든 변경사항을 모았다가 한번에 오리지널 DOM에 반영 -> 성능 개선을 위해
import { useState } from "react";

export default function App() {
  // 반드시 const로 선언해야한다. 타입 추론 가능하여 생략 가능(생략 권장)
  // 초기값의 타입과 추후 업데이트 된 타입이 달라지는 경우 타입을 생략하면 문제가 발생.
  // 상태 업데이트 함수는 비동기 함수.
  const [count, setCount] = useState<number>(0); //[상태 변수, 상태 업데이트 함수(set상태변수명)] = useState(초기값)
  const handleIncrement = () => {
    // 두가지 방법이 있다.
    // setCount(값)
    // 최신 값을 보장 못함
    setCount(count + 1);

    // setCount(콜백함수). 콜백함수의 반환값이 상태 값이 된다.
    // 현재 값을 참조하여 값이 변경되면 콜백함수를 사용하는 것이 좋음.
    // 콜백 함수의 매개변수는 항상 최신값을 보장한다. (내부적으로 설계됨)
    // 매개변수는 prev로 지어주는 것이 관례. (최신 상태의 이전 값이라는 뜻) ...지만 그냥 상태변수로 해도 보기좋음
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>count:{count}</h1>
      <button
        onClick={() => {
          // count를 참조하여 setCount를 변경하는 것 < 이해가 안돼...
          // 변경사항이 있을 경우 APP을 다시 렌더링(rerendering)
          // rerendering의 정확한 타이밍이 언제? -> 이벤트가 끝나고 변경사항 발생시 리렌더링되는 걸까?
          // 변경 구문이 다 끝났을 때
          setCount(count + 1);
          //'count++'은 왜 안될까? -> ++는 자체값을 변경함. const이므로 에러
          console.log(count);
        }}
      >
        증가
      </button>
      {/* <button
        onClick={() => {
          setCount("20");
          console.log(count);
        }}
      >
        문자 20 증가
      </button> */}

      {/* 이거 왜 2번 출력되는거지? -> StrictMode 때문 */}
      {console.log(count)}

      <button onClick={handleIncrement}>클릭</button>
      <button onClick={() => setCount(20)}>20으로 변경</button>
    </>
  );
}
