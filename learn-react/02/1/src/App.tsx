//import React from "react";
import Article from "./Article";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";

// 함수형 컴포넌트
// 함수 표현식으로도 작성 가능
// function App() {
// export default function App() {
//   return (
//     <>
//       <h1>Hello, world!(with Function Component)</h1>
//     </>
//   );
// }
// export default App;

// // 클래스형 컴포넌트
// // export default class App extends React.Component {
// class App extends React.Component {
//   render(): React.ReactNode {
//     return <h1>Hello, world!(with Class Component)</h1>;
//   }
// }
// // 하나의 파일에는 하나의 컴포넌트만 반환하는 것이 관례
// export default App;

export default function App() {
  // 이제는 사용하지 않음!!!
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h2", null, "Hi"),
  //   React.createElement("h2", null, "Hello")
  // );
  //<React
  //const name = "minkyeong";
  return (
    // <>
    //   {/*주석*/}
    //   <h1>hi</h1>
    //   <h1>
    //     {name}, 바보 x {99 * 99}
    //   </h1>
    //   <h2 style={{ color: "red" }}>반가워용</h2>
    // </>

    <>
      <Header />
      <Nav />
      <Article />
      <Section />
      <Aside />
      <Footer />
    </>
  );
}
