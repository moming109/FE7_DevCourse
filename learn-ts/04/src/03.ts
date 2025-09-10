// 객체 - interface (type)
// 리터럴 타입 - enum (const enum)
// 타입 별칭 - 유니온 타입, 인터섹션
interface Account {
  in: number;
  role: Role;
}
const enum Role {
  ADMIN = "admin",
  GUEST = "guest",
}

type AuthAccount = Account & { token?: string };

// 언제 뭐를 써야하는지 지정된 것은 아니다. 그러나 알고는 있어야 함.
