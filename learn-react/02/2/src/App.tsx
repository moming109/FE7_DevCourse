import styles from "./App.module.css";
import classNames from "classnames/bind"; // css 모듈과 접목할 때
import className from "classnames"; //글로벌 스타일과 접목할 때
// import First from "./component/First";
export default function App() {
  const isCancel = false;
  const isItalic = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <h1 className={`${styles.title} ${isCancel ? styles.line_through : ""}`}>
        App Component
      </h1>
      {/* 위 경우 &&연산자를 사용하면 false일 때, 그 문자열이 표현식에 의해 출력이 되는 문제가 생긴다. 따라서 삼항연산자로 작성*/}
      {/* <First /> */}
      <h1 className={cx("title", "line_through")}>App Component</h1>
      <h1 className={cx("title", { line_through: isCancel })}>App Component</h1>
      <h1 className={`primary ${isItalic ? "italic" : ""}`}>globals</h1>
      <h1 className={className("primary", { italic: isItalic })}>globals</h1>
    </>
  );
}
