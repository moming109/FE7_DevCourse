// useEffect 훅
// 컴포넌트의 사이드 이펙트(side effect)를 처리하기 위한 훅
// 사이드 이펙트 ?
// 데이터 가져오기, DOM 조작, 이벤트 등록/ 해제, 타이머 설정/해제 ..
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드들을 사이드 이펙트,

import { useEffect, useState } from "react";
//import Interval from "./components/Interval";

// 생명주기
// 컴포넌트의 생성, 수정, 삭제 기준으로 동작하기 때문
export default function App() {
  const [count, setCount] = useState(0);

  // 의존성 배열이 빈 배열일 경우 컴포넌트가 생성될 때 단 한번만 사이드 이펙트를 실행
  // 즉, 리렌더링 되어도 실행하지 않음

  // 특정 변수가 수정될 때 사이드 이펙트를 실행하고 싶으면 의존성 배열에 해당 변수를 넣어준다.

  // 컴포넌트가 삭제될 때 실행할 코드를 지정할 수 있음.

  console.log("App 컴포넌트 렌더링"); //2번 실행됨
  // StricMode: 리액트 컴포넌트의 안정성을 체크하는 코드
  // 컴포넌트를 생성 -> 오류가 없는지 확인 -> 삭제 -> 다시 생성 과정을 거쳐서 검증

  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드를 작성
    return () => {
      //컴포넌트가 삭제될 때 호출되는 함수
    };
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>

      {/* <Interval /> */}
    </>
  );
}
