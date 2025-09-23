import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.count.value);
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Theme: {theme}</h1>
    </>
  );
}
