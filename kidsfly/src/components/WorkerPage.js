import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";


const Worker = styled.div`
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


const WorkerPage = props => {
    return (
      <Worker>
        
        <div>
          <h2 className="title">Worker Page</h2>
          <button className= "btn1" onClick={() => props.history.push("/worker_login")} >Login</button>
          <button className="btn2" onClick={() => props.history.push("/worker_registration")}>Registration</button>
        </div>
      </Worker>
      
    );
  };
  export default withRouter(WorkerPage);