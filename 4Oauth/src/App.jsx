import { useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import reactLogo from "./assets/react.svg";
import "./App.css";

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div id="googleButton"></div>
      <div>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        , document.getElementById('googleButton')
      </div>
    </div>
  );
}

export default App;
