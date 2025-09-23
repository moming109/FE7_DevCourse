// export default function TextArea({ children }: { children: string }) {
//   return (
//     <>
//       <input
//         className="text-[14px] border border-[#4f4f4f] width-60 height-11 px-4 py-3.5 m-3 rounded-[8px]"
//         type="textarea"
//         placeholder={children}
//       ></input>
//     </>
//   );
// }

//type:checkbox 속성은 못오게 막고 싶음
//Omit<React.ComponentPropsWithoutRef<"input">, "type"> &{type: "text" | "password" | "email" | "number"|"date";};

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};

export default function TextArea(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter w-60 h-11 text-sm rounded-lg placeholder:
      text-|#acacac] bg-white border Oborder-[#4f4f4f] px-4"
        {...rest}
      />
    </>
  );
}
