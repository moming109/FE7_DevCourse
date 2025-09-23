// useState + Form
// onChange (React) -> onInput + onChange (DOM)
// input type은 여러가지. 대부분 onChange로 가능(단 타입 주의)

import { useState } from "react";
export default function App2() {
  const [text, setText] = useState("banana");
  // 타입 주의
  const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>{text}</h1>

      {/* <textarea
        onChange={handlerChange}
        placeholder="이메일을 입력해주세요."
      ></textarea> */}

      {/* value={text}로 기본 값을 text로 지정 */}
      <select onChange={handlerChange} value={text}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
    </>
  );
}
