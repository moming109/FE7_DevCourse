export default function Button({ handler }: { handler: () => void }) {
  return (
    <>
      <button onClick={() => handler()}>클릭</button>
    </>
  );
}
