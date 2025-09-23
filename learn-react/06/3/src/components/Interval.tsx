import { useEffect } from "react";

export default function Interval() {
  useEffect(() => {
    // 클린 업(clean-up) 함수: 컴포넌트가 제거될 때 실행되는 코드를 작성할 수 있다.

    // setInterval(()=>{
    //   console.log("interval")
    // }, 1000)
    const interval = setInterval(() => {
      console.log("Interval 컴포넌트 실행");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval 컴포넌트 제거");
    };
  }, []);
  return (
    <>
      <h1>Interval Component</h1>
    </>
  );
}
