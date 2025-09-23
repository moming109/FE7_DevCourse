import { useRef, useState } from "react";
import Input from "./components/Input";

export default function App6() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("이메일을 입력해주세요");
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    if (pw.trim() === "") {
      alert("비밀번호를 입력해주세요");
      if (pwRef.current) pwRef.current.focus();
      return;
    }
  };

  const handleEmailUpdate = (value: string) => {
    setEmail(value);
  };

  const handlePwUpdate = (value: string) => {
    setPw(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="이메일 입력"
          value={email}
          setValue={handleEmailUpdate}
        />
        <Input
          placeholder="비밀번호 입력"
          value={pw}
          setValue={handlePwUpdate}
        />
        <button>로그인</button>
      </form>
    </>
  );
}
