import { useContext } from "react";
import { CounterContext } from "../contexts/counter/counterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!; //널 아님 보장 연산자
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
