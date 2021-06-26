import animationData from "../.././../assets/lottie/crying.json";
import Lottie from "react-lottie";
import "./style.scss";

const NotFoundPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="sendman-not-found-page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="content">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isPaused={false}
          isStopped={false}
          style={{
            marginBottom: "40px",
          }}
          className="img-fluid"
        />
        <h1>You Seem To Be Lost !</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
