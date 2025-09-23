import { createContext } from "react";

type counterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// 컴포넌트처럼 사용할 것이므로 파스칼 케이스로 선언해주어야 함.

// export const CounterContext = createContext<counterContextType>({
//   // 전역적으로 사용할 것들의 초기값을 선언해주어야 함.
//   count: 0,
//   increment: () => {},
//   decrement: () => {},
//   reset: () => {},
// });

// 널로 선언해보자!
export const CounterContext = createContext<counterContextType | null>(null);
