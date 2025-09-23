import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function Count({
  count,
  increment,
  reset,
  decrement,
}: {
  count: number;
  increment: () => void;
  reset: () => void;
  decrement: () => void;
}) {
  return (
    <>
      <CountDisplay count={count} />
      <CountButton increment={increment} reset={reset} decrement={decrement} />
    </>
  );
}
