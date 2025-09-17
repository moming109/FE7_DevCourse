// styled-components 예제
import styled from "styled-components";

// styled.태그명``
// 대문자 지정 관례
// 단점: 네이밍이 직관적이지 않음. 마크업 파악 어려움
const HelloWorld = styled.h1`
  color: red;
  text-decoration: underline;
  &:hover {
    color: blue;
  }
`;
export default function App() {
  return (
    <>
      <HelloWorld>styled-components</HelloWorld>
    </>
  );
}
