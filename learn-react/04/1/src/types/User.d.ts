// 별도의 export없이 전역적으로 활용할 수 있다.
// src폴더 하위에 있기 때문에, d.ts파일이기 때문에 전역적으로 인식될 수 있는 것.
// 따라서 type을 같은 이름으로 지어주지 않도록 주의 -> 빌드 과정에서 에러
// export를 붙이면 import가 필요함.
// 각잡고 프로젝트를 진행하기 위해서는 타입 분리가 필요하다.
type UserProps = {
  userObj: User;
  clickHandler: () => void;
};

type User = {
  name: string;
  age: number;
};
