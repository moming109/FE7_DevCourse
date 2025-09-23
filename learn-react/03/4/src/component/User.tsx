// 관례상 컴포넌트가 전달받는 데이터는 props라고 함.
// props: { name: string; age: number }

// 매개변수를 비워놓고 App.tsx에 뜨는 오류메세지를 복사하면 타입 간단하게 추론
export default function User(props: { name: string; age: number }) {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </>
  );
}
