export default function Button({
  children,
  onClick,
  text,
}: {
  children?: string;
  onClick?: () => void;
  text?: string;
}) {
  return (
    <>
      <button onClick={onClick}>{children || text}</button>
    </>
  );
}
