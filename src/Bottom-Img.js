import React from "react";
import "./Bottom-Img.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import TwitterContainer from "./TwitterContainer";
const Bottomdiv = () => {
  
  return (
    <div className="backgroundDiv">
      <table style={{ textAlign: "center" }}>
        <tr>
          <tr>
            <td><p className="Bottom-heading"><strong>JSPL Rake Movement System</strong></p></td>
          </tr>
          <tr>
            <TwitterContainer />
            <img className="Hexagon-Left"
              src={require('./Screenshot_2023-06-03_100738-removebg-preview.png')}
              alt="Hexagon-img"
            />
            <p className="Hexagon-Left-Text">
            Actual  Placement  time  in  <h4 className="l1">TH/WT</h4>
          </p>
          <img className="Hexagon-Right"
            src={require('./Screenshot_2023-06-03_100738-removebg-preview.png')}
            alt="Hexagon-img"
          />
          <p className="Hexagon-Right-Text">
            JSPK Dep <h4 className="l2">Time Date/ To Station</h4>
          </p>
        </tr>
        <td>
          <div className="Login-form-div">
            <form>
              <p className="Form-heading">Enter your credential here</p>
              <div className="user-name-enter-div">
                <input type="text" className="user-name-enter" placeholder="Username" required />
                <ion-icon name="person" className="icon1"></ion-icon>
              </div>
              <div className="pass-enter-div">
                <input type="password" placeholder="Password " className="pass-enter" required />
                <ion-icon name="lock-closed" className="icon2"></ion-icon>
              </div>
              <button className="Submit-button" id = "Sign_In" onSubmit={"#"}>Sign In</button>
              <a href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Faccounts.google.com%2Fo%2Fsaml2%2Finitsso%3Fidpid%3DC013ejz1e%26spid%3D814583949516%26forceauthn%3Dfalse%26from_login%3D1%26as%3DdYGlW47MkzVINUilTQ_5niCNjbPIpl_eZm-FuWcVE5A&ltmpl=popup&btmpl=authsub&scc=1&oauth=1&flowName=GlifWebSignIn&flowEntry=AccountChooser">
                <img className="Googlelogin_btn"
                src={require('./11.png')}
                alt="Google-login"
              />
              </a>
            </form>

          </div>
        </td>
      </tr>
    </table>
    </div >
  );
}

export default Bottomdiv;