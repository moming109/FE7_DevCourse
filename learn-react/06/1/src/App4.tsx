import { useState } from "react";
export default function App4() {
  const [value, setValue] = useState("남자");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <pre>{value}</pre>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          defaultChecked
          onChange={handleChange}
        />{" "}
        남자
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />{" "}
        여자
      </div>
    </>
  );
}
