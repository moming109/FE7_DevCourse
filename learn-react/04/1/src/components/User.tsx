export default function User({
  userObj: { name, age },
  // name,
  // age,
  clickHandler,
}: UserProps) {
  // props는 객체로 전달
  // 구조분해 할당
  //const {name, age} = props;
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
