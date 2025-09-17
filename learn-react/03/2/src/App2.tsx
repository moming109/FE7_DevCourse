// emotion 예제
// styled component의 단점 보안(마크업 파악). 또한, styled component방식도 가능
// 단, 클래스 네임 부분이 길어지는 면은 tailwind와 다를바 없음.
// 유지보수가 가능한 정도만 배워두자.

import { css } from "@emotion/css";
import styled from "@emotion/styled";
const color = "white";

const Button = styled.button`
  color: turquoise;
`;

export default function App2() {
  return (
    <>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>버튼</Button>
    </>
  );
}
