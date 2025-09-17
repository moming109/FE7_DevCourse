export default function Profile({
  name,
  age,
  clickHandler,
}: {
  name: string;
  age: number;
  clickHandler: () => void;
}) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
