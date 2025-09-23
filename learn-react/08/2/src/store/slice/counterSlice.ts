import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice", // 파일 이름과 동일하게 하는 것이 관례 (이름 중복되면 안되므로)
  // 초기 상태
  initialState: {
    value: 0,
  },
  //초기 상태를 조작할 수 있는 메소드
  reducers: {
    //항상 최신 값이 넘어옴
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    //dispatch 함수로 호출한 것이 action으로 들어감
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// store 등록에 사용
export default counterSlice.reducer;
