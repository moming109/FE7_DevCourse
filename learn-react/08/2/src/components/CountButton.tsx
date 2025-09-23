import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";
import { setIsDark, setIsLight } from "../store/slice/configureSlice";

export default function CountButton() {
  console.log("CB 렌더링");
  //slice의 reducer에 접근하기 위해서는 useDispatch를 사용
  const dispatch = useDispatch<AppDispatch>();
  return (
    // 슬라이스의 name 속성(유니크) / 사용할 reducers 요소
    <>
      {/* <button onClick={() => dispatch({ type: "counterSlice/decrement" })}>
        감소
      </button>
      <button onClick={() => dispatch({ type: "counterSlice/reset" })}>
        리셋
      </button>
      <button onClick={() => dispatch({ type: "counterSlice/increment" })}>
        증가
      </button> */}

      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>증가</button>

      <br />
      <button onClick={() => dispatch(setIsLight())}>라이트모드</button>
      <button onClick={() => dispatch(setIsDark())}>다크모드</button>
    </>
  );
}
