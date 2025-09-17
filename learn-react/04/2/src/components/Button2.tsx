import { twMerge } from "tailwind-merge";

// 제네릭 타입. <> 태그에서 사용할 수 있는 모든 속성들이 옵셔널 정의된다
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button2(props: ButtonProps) {
  const { children, className = "", ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          `text-sm w-[77px] h-[44px] m-3 rounded-[8px] text-white bg-[#4F4F4F]`,
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
