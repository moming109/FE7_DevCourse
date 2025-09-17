import { twMerge } from "tailwind-merge";
type CheckboxProps = React.ComponentPropsWithoutRef<"input">;

export default function Checkbox(props: CheckboxProps) {
  const { children, className = "", ...rest } = props;
  return (
    <>
      <div className="flex items-center m-3 ">
        <input
          type="checkbox"
          className={twMerge(
            `align-middle w-5 h-5 mr-2 accent-[#4f4f4f]`,
            className
          )}
          {...rest}
        ></input>
        <label className="text-center text-[14px]">{children}</label>
      </div>
    </>
  );
}
