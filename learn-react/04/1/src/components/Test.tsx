export default function Test(props: {
  User: {
    bgImg: string;
    profImg: string;
    name: string;
    instarId: string;
  };
  eventHandler: () => void;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>User Card</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <article className="card">
            <div>
              <img
                className="card-img"
                src={props.User.bgImg}
                alt="background-pic"
              />
            </div>
            <div className="profile">
              <img
                className="prof-img"
                src={props.User.profImg}
                alt="profile-pic"
              />
              <h3 className="alias">{props.User.name}</h3>
              <p className="username">{props.User.instarId}</p>
              <button onClick={props.eventHandler}>Follow</button>
            </div>
          </article>
        </body>
      </html>
    </>
  );
}
