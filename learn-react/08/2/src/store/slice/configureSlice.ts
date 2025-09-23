import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
  name: "configureSlice",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setIsDark: (theme) => {
      theme.theme = "Dark";
    },
    setIsLight: (theme) => {
      theme.theme = "Light";
    },
  },
});

export const { setIsDark, setIsLight } = configureSlice.actions;
export default configureSlice.reducer;
