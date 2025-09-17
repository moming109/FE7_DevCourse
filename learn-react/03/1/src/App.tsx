// CSS Modules -> classnames
// Tailwind CSS -> tailwind-merge
// - 하나의 문자열로 합쳐준다.
// - 클래스 네임스와 차별점: 중복된 속성 깔끔하게 정리해준다. (뒤에 있는 속성 우선)
import { twMerge } from "tailwind-merge";
export default function App() {
  const isBlue = false;
  return (
    <>
      <h1 className="text-3xl font-bold underline">App Component</h1>
      <button className="btn-primary">버튼</button>
      {/* <button className="bg-amber-500 bg-blue-500">버튼</button> */}
      {/* 중복 시 마지막으로 사용한 속성 적용. 뒤에 있는 것이 앞에 있는 것을 덮음 */}
      <button className={twMerge("bg-amber-500", isBlue && "bg-blue-500")}>
        버튼
      </button>
    </>
  );
}
