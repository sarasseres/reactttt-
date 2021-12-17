import "./style.css";
import logo2 from "../../pic/logo.svg";
import blockaccount from "../../pic/blocking-account.svg";
import terakhirmasuk from "../../pic/terakhirmasuk.svg";

function Main() {
  return (
    <div className="main">
      <img src={terakhirmasuk} />

      <div className="center">
        <div>
          <h1>Selamat Datang di</h1>
          <h1>Web Portal Internet Dan Mobile Banking</h1>
          <img src={logo2} />
        </div>
       
        <div className="image">
          <img src={blockaccount} />
        </div>
      </div>
    </div>
  );
}

export default Main;
