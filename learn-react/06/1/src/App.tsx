// 리액트에서 상태(state)
// 컴포넌트 내부에서 변경 가능한 데이터를 의미
// 사용자 입력, 서버 응답, UI 상호작용 등으로 인해 값이 변경될 수 있다.
// 만약 값이 변경되면 컴포넌트가 자동으로 다시 렌더링되어 화면에 새로운 값이 반영됨.

// 리액트 훅(16.8)
// 함수형 컴포넌트에서도 상태(state)나 생명주기(lifecycle) 같은 리액트 기능을 사용할 수 있게 해주는 특별한 함수
// useState(), useRef(), useReducer(), useEffect()...

import { useState } from "react";
export default function App() {
  const [user, setUser] = useState({ name: "kim", age: 20 }); // 사용 중 타입이 바뀌지 않는 이상, 타입 추론이 되므로 생략.
  const handleUpdate = () => {
    // user.age = 30;
    // -> useState의 user는 객체의 참조 값을 담고 있다.
    // 따라서 객체 속성의 값을 변경해도 참조 값의 변화는 없음. -> 리액트 DOM이 감지하지 못함.

    // // 참조 값의 변화를 만들어 줌.
    // const newUser = structuredClone(user);
    // setUser(newUser);
    // console.log(user);

    // 통으로 바꿀 시 객체를 다시 정의하면 자동 렌더링 가능
    // setUser({ name: "lee", age: 30 });

    // 일부분만 바꿀거면 콜백함수로 새로운 함수를 만들어 넘겨주어야 자동 렌더링된다.
    setUser((user) => ({ ...user, age: 40 }));
    // 화살표 함수의 중괄호가 아닌 객체의 중괄호라는 것을 명시하기 위해 ()를 적어주어야 한다.
  };

  // 상태 업데이트 함수(값) -> 변경해야하는 상태 값이 이전 상태와 상관이 없다면
  // setCount({ name: "park", age: 30 });
  // 상태 업데이트 함수(콜백) -> 변경해야하는 상태 값이 이전 상태와 상관이 있다면!
  // setCount((count) => count + 1);

  // user의 참조값은 변경되지 않았기 때문에 값이 바로 변경되지 않음.
  // 참조 자료형의 일부분을 바꿀 때에는 새로운 껍데기를 만들어주어야 함.

  return (
    <>
      <h1>name: {user.name}</h1>
      <h1>age: {user.age}</h1>
      <button onClick={handleUpdate}>클릭</button>
    </>
  );
}
