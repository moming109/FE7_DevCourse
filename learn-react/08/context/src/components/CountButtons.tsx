import { useContext } from "react";
import { CounterActionContext } from "../contexts/counter/counterContext";
import { ConfigContext } from "../contexts/configure/configureContext";

export default function CountButtons() {
  const { increment, decrement, reset } = useContext(CounterActionContext);
  const { setDarkMode, setLightMode } = useContext(ConfigContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>

      <button onClick={setDarkMode}>다크모드</button>
      <button onClick={setLightMode}>라이트 모드</button>
    </>
  );
}
