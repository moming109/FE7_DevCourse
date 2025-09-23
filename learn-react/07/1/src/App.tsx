// 대표적인 상태 관리 훅
// useState() vs useReducer()
// 상태 변수: 값이 변경되면 리액트가 리렌더링을 수행할 수 있게 관리하는 변수

// useState
// 장점: 가장 쉽고 간단하고 직관적임.
// 단점: 상태 업데이트 로직이 컴포넌트 내부에 흩어지기 쉽다.
//  - 같은 컴포넌트: 인라인으로 직접 사용, 이벤트 핸들러 사용 / 다른 컴포넌트: 상태함수 직접적으로 넘기기, 핸들러 넘기기

// useReducer
// 장점: 상태 업데이트 로직이 한 곳에 몰려있음.
// 단점: 문법이 어려움
// 복잡한 상태 관리를 할 때 사용한다

import { useState } from "react";
import Count from "./components/Count.tsx";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(10);
  };
  return (
    <>
      {/* <h1>Count: {count} </h1> */}
      {/* <button onClick={() => setCount(100)}>업데이트</button> */}
      {/* <button onClick={handleIncrement}>업데이트</button> */}
      {/* <Count count={count} setCount={setCount} /> */}
      <Count count={count} handleIncrement={handleIncrement} />
    </>
  );
}
