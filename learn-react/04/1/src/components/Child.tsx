export default function Child(props: {
  sayHi: string;
  num: number;
  fruit: string[];
  user: {
    name: string;
    age: number;
  };
  isLoggedIn: boolean;
  clickLog: () => void;
  name: string;
  style: {
    fontSize: string;
    color: string;
    // 일일이 추가?
    // - 인덱스 시그니처: {[key:string]:string}
    // - React.CSSProperties : 모든 CSS 속성이 정의되어있는 프로퍼티
  };
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}) {
  return (
    <>
      <h1>{props.sayHi}</h1>
      <h1>{props.num}</h1>
      <p>{props.fruit}</p>
      <h2>
        {props.user.name}, {props.user.age}
      </h2>
      <h2>{props.isLoggedIn ? "로그인 됨" : "로그인 안됨"}</h2>
      <button onClick={props.clickLog}>버튼</button>
      <h2>{props.name ? props.name : "홍길동"}</h2>
      <h2 style={props.style}>왜안됨</h2>
      {props.Header}
      {props.Content}
      {props.Footer}
    </>
  );
}
