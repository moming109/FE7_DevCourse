//import Button from "./components/Button";
import Button2 from "./components/Button2";
import Checkbox from "./components/Checkbox";
import TextArea from "./components/TextArea";

export default function App() {
  return (
    <>
      {/* <h1>App Component</h1>
      <Button onClick={() => console.log("결제")}>결제하기</Button>
      <Button text="결제하기2"></Button> */}

      <TextArea type="text" placeholder="기본값을 정해보세요."></TextArea>
      <br></br>
      <Button2 className="bg-[#ed4848] text-blue-800 text-[20px]">Add</Button2>
      <br></br>
      <Checkbox>
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>.
        </span>
      </Checkbox>
    </>
  );
}
