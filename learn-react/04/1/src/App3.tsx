import Test from "./components/Test";

const User = {
  bgImg:
    "https://cdn.pixabay.com/photo/2025/09/10/14/35/mushroom-9826526_1280.jpg",
  profImg:
    "https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg",
  name: "정민경",
  instarId: "moming22",
};

const eventHandler = () => {
  alert("fallowing");
};

export default function App3() {
  return (
    <>
      <Test User={User} eventHandler={eventHandler} />
    </>
  );
}
