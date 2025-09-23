// useRef()
// 리액트에서 값을 기억하거나 DOM 요소에 직접 접근할 때 사용하는 훅.
// current 속성을 가지는 객체를 반환
// current 속성으로 우리가 원하는 값을 저장할 수도 있고
// DOM 요소에 접근할 수도 있다.

// 하나의 요소 당 하나의 Ref객체

// <폼 요소를 제어하는 방법>
// 제어 컨트롤러(controlled) : 실시간 입력값 체크 가능
// -> 입력값이 리액트의 상태에 의해 제어되는 컴포넌트
// useRef + onChange

// 비제어 컨트롤러(uncontrolled) : 실시간 입력값 체크 불가능
// -> 입력값이 DOM 자체에서 관리되는 컴포넌트
// useRef + current
// 실시간 값은 체크할 수 없음.

import { useRef } from "react";
export default function App5() {
  // const ref = useRef<HTMLHeadingElement>(null); // current 속성이 포함된 객체를 반환
  const ref = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);

  const textRef = useRef<HTMLTextAreaElement>(null);

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectRef.current?.value);

    if (maleRef?.current?.checked) {
      console.log("남성");
    } else if (femaleRef?.current?.checked) {
      console.log("여성");
    } else {
      console.log("값없음");
    }

    console.log(textRef.current?.value);

    console.log(ref.current?.value);
    console.log(checkboxRef.current?.checked);
  };

  // const handleClick = () => {
  //   console.log(ref);
  //   if (ref.current) {
  //     ref.current.style.color = "red";
  //   }
  // };

  return (
    <>
      {/* <h1 ref={ref}> App 5</h1>
      <button onClick={handleClick}>클릭</button> */}

      <form onSubmit={handleSubmit}>
        <select ref={selectRef}>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="orange">orange</option>
        </select>
        <br></br>

        <div>
          <input
            type="radio"
            ref={maleRef}
            name="gender"
            value="male"
            defaultChecked
          />{" "}
          남자
        </div>
        <div>
          <input type="radio" ref={femaleRef} name="gender" value="female" />{" "}
          여자
        </div>
        <br></br>

        <textarea ref={textRef}></textarea>
        <br></br>

        <input type="color" ref={ref} />
        <br></br>

        <input type="checkbox" ref={checkboxRef} />
        <br></br>

        <button type="submit">전송</button>
      </form>
    </>
  );
}
