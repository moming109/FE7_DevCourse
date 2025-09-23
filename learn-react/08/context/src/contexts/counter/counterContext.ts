import { createContext } from "react";

// 값을 고정하면 안되는 것.
type CounterContextType = {
  count: number;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
});

// 값을 고정해도 되는 것
type CounterActionContextType = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterActionContext = createContext<CounterActionContextType>({
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});
