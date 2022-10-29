import React from "react";
import ReactDOM from "react-dom/client";
import GoogleLogin from "react-google-login";
import "./index.css";

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleLogin
    clientId="858500589586-kuqu8pk9ojdsu44nbrktm7du8l5islbq.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />
);
