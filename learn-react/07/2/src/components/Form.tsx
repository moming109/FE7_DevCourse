import { useReducer } from "react";

type FormState = {
  email: string;
  pw: string;
};

//payload: 액션의 재료로 사용하는 데이터 (관례)
type FormAction = {
  type: "setEmail" | "setPw";
  payload: string;
};

function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPw":
      return { ...state, pw: action.payload };
    default:
      return state;
  }
}

export default function Form() {
  const [formState, formDispatch] = useReducer(formReducer, {
    email: "",
    pw: "",
  });
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이메일"
          value={formState.email}
          onChange={(e) =>
            formDispatch({ type: "setEmail", payload: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={formState.pw}
          onChange={(e) =>
            formDispatch({ type: "setPw", payload: e.target.value })
          }
        />
        <button>로그인</button>
      </form>
    </>
  );
}
