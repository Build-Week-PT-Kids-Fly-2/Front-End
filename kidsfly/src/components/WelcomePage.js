import React from "react";
import { withRouter } from "react-router-dom";
import WelcomeHeader from "../components/WelcomeHeader";
import styled from "styled-components";

const Welcome = styled.div`
.title{
  font-size: 4rem;
}
.btn1{
  position: fixed;
  top: 300px;
  left: 400px;
  padding: 15px 50px;
  font-size: 1rem;
  font-weight: bold;
  background: #AD85F8;
  border-radius: 10px;
  border: 2px solid black;
}
.btn2{
  position:fixed;
  top: 300px;
  left: 700px;
  padding: 15px 50px;
  font-size: 1rem;
  font-weight: bold;
  background: #AD85F8;
  border-radius: 10px;
  border: 2px solid black;
}
`



const WelcomePage = props => {
    return (
      <div>
        <WelcomeHeader />
        <Welcome>
          <h2 className="title">Welcome to KidsFly</h2>
          <button className= "btn1" onClick={() => props.history.push("/login")} >Login</button>
          <button className="btn2" onClick={() => props.history.push("/user_registration")}>Registration</button>
        </Welcome>
      </div>
      
    );
  };
  
  export default withRouter(WelcomePage);