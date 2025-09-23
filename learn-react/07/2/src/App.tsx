// const [상태변수, 액션(리듀서)발생함수] = useReducer(리듀서 함수, 초기값)

//import { useReducer } from "react";
//import Count from "./components/Count";
import Count from "./components/Count";
import Form from "./components/Form";

// 리듀서 함수 -> 상태 업데이트 로직이 담겨있는 함수
// countDispatch는 reducer를 호출하는 것뿐 로직이 포함되지 않음.
// 매개변수(이름 강제성 없음): state(상태 값), action(개체 타입)
// reducer는 1개의 리턴 값이 반드시 있어야 함. -> 이게 상태 값이 된다.
// 액션 발생 함수의 매개변수가 action에 들어옴

// 상태 변수를 변경할 수 있는 로직은 reducer함수 안에서만 작성할 수 있음.
// 따라서 복잡한 상태 관리에 적합. 자동 캡슐화

// type State = number;
// type Action = {
//   type: "INCREMENT" | "DECREMENT" | "RESET";
// };

// 매개변수(이름 강제성 없음): state(상태 값), action(액션 발생 함수에서 넘어오는 개체 타입)
// function reducer(state: State, action: Action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "RESET":
//       return 0;
//     default:
//       return state;
//   }
//   //if (action.type === "increment") return state + 1;
// }
export default function App() {
  // const [상태변수, 액션(리듀서)발생함수] = useReducer(리듀서 함수, 초기값)
  // const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      <Count />
      <Form />
      {/* <Count count={count} dispatch={countDispatch} /> */}
      {/* <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>0</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button> */}
    </>
  );
}
