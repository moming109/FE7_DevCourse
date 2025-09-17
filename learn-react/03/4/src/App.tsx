import User from "./component/User";
export default function App() {
  return (
    <>
      {/* HTML 속성은 그 태그의 이름이나 기능을 보충해주는 역할
      컴포넌트의 속성은 그 컴포넌트로 데이터를 전달해주는 기능 */}
      {/* 문자열을 제외한 다른 타입을 주고받기 위해서는 표현식을 사용해야 함. */}
      <User name={"김기수"} age={20} />
    </>
  );
}
