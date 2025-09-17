import Child from "./components/Child";

const Header = () => <h1>Header</h1>;
const Content = () => <h1>Content</h1>;
const Footer = () => <h1>Footer</h1>;

const onClick = () => {
  console.log("버튼 클릭");
};
export default function App2() {
  return (
    <>
      <Child
        sayHi="Hello, World!"
        num={42}
        fruit={["Apple", "Banana", "Cherry"]}
        user={{ name: "Alice", age: 30 }}
        isLoggedIn={false}
        clickLog={onClick}
        name="아무개"
        style={{ fontSize: "50px", color: "red" }}
        Header={<Header />}
        Content={<Content />}
        Footer={<Footer />}
      />
    </>
  );
}
