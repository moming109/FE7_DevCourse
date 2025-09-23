import { useState } from "react";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";

// 상태 끌어올리기(State Lifting)
// 여러 컴포넌트가 같은 상태를 공유해야할 때
// 그 상태를 공통의 부모 컴포넌트로 옮겨서 관리하는 패턴
// 데이터 전달은 부모에서 자녀로 일방통행이다.

// propsDrilling : props가 드릴처럼 위(부모)에서 아래(자식)로 전달되는 것

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <Count
        count={count}
        increment={increment}
        reset={reset}
        decrement={decrement}
      />
      <CountOutside count={count} />
    </>
  );
}
