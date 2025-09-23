export default function CountButton({
  increment,
  reset,
  decrement,
}: {
  increment: () => void;
  reset: () => void;
  decrement: () => void;
}) {
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
