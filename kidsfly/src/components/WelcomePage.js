import React from "react";
import { withRouter } from "react-router-dom";

const WelcomePage = props => {
    return (
      <div>
        <div>
          <h2>Welcome to KidsFly</h2>
          <button onClick={() => props.history.push("/")} >Welcome</button>
          <button onClick={() => props.history.push("/trip_form")} >Trip Form</button>
          <button onClick={() => props.history.push("/profile")} >Profile</button>
          <button onClick={() => props.history.push("/login")} >Login</button>
          <button onClick={() => props.history.push("/user_registration")}>Registration</button>
        </div>
      </div>
      
    );
  };
  
  export default withRouter(WelcomePage);