//import type { Dispatch, SetStateAction } from "react";

type InputProps = Omit<React.ComponentPropsWithRef<"input">, "value"> & {
  value: string;
  //setValue: Dispatch<SetStateAction<string>>;
  setValue: (value: string) => void;
};
export default function Input(props: InputProps) {
  const { value, setValue, ...rest } = props;
  return (
    <>
      <input
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
