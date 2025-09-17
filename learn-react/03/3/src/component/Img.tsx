export default function Img() {
  return (
    <>
      <h1 className="nanum-brush-script-regular">App Component</h1>
      <p className="Aneromecha">hello world</p>
      <img src="images/drinking-cups.jpg"></img>
      <div className="bg"></div>
      <div
        style={{
          width: "100%",
          height: "300px",
          background: `url('/image/drinking-cups.jpg') no-repeat center center`,
        }}
      ></div>
    </>
  );
}
