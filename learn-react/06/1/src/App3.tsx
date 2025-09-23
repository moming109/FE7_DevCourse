import { useState } from "react";
// useState + Form
// onChange (React) -> onInput + onChange (DOM)
export default function App() {
  const [value, setValue] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.checked);
  return (
    <>
      <pre> {value ? "동의함" : "동의하지않음"}</pre>
      <div>
        <label htmlFor="chk">
          <input type="checkbox" checked={value} onChange={handleChange} />
          이용약관에 동의합니다.
        </label>
      </div>
    </>
  );
}
