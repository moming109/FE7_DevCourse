export default function TextArea({ children }: { children: string }) {
  return (
    <>
      <input
        className="width-60 height-11 px-4 py-3.5 m-3 rounded-[8px]"
        type="textarea"
        placeholder={children}
      ></input>
    </>
  );
}
