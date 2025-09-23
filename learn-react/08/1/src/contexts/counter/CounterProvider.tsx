import { useState } from "react";
import { CounterContext } from "./counterContext";

// ***Provider()
export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(20);
  const increment = () => setCount(() => count + 1);
  const decrement = () => setCount(() => count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <CounterContext
        value={{
          count: count,
          increment: increment,
          decrement: decrement,
          reset: reset,
        }}
      >
        {children}
      </CounterContext>
    </>
  );
}
