//import { twMerge } from "tailwind-merge";
type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;

// export default function Checkbox(props: CheckboxProps) {
//   const { children, className = "", ...rest } = props;
//   return (
//     <>
//       <div className="flex items-center m-3 ">
//         <input
//           type="checkbox"
//           className={twMerge(
//             `align-middle w-5 h-5 mr-2 accent-[#4f4f4f]`,
//             className
//           )}
//           {...rest}
//         ></input>
//         <label className="text-center text-[14px]">{children}</label>
//       </div>
//     </>
//   );
// }

export default function Checkbox(props: CheckboxProps) {
  const { children = "I Agree", ...rest } = props;
  return (
    <>
      <div className="flex item-center gap-2">
        <input
          id="chk"
          type="checkbox"
          className="appearance-none w-5 h-5 rounded-[5px] border border-[#4f4f4f] bg-[#4F4F4F] checked:bg-[url('/check.svg')] checked:bg-no-repeat checked:bg-center"
          {...rest}
        ></input>
        <label htmlFor="chk">{children}</label>
      </div>
    </>
  );
}
