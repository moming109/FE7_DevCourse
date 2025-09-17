import Profile from "./components/Profile";
import User from "./components/User";

export default function App() {
  const clickHandler = () => {
    console.log("Click!");
  };
  const userObj = {
    name: "lee",
    age: 25,
    clickHandler: () => {
      console.log("Click!");
    },
  };
  return (
    <>
      이 경우 반드시 전달받아 활용해야 함.
      <User userObj={userObj} clickHandler={clickHandler} />
      {/* 전개 연산자 사용 */}
      <Profile {...userObj} />
    </>
  );
}
