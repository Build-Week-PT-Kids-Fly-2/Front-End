import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from "styled-components"

const Nav = styled.div`
    background: #AD85F8;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    display: flex;
    // align-items: center;
    // justify-content: space-between;
    // position: fixed;
    // top: 0;
    // width: 100%;
    // height: 65px;
  }
   .welcome {
     margin-right: 65%;
   }
   .btn1, .btn2{
     margin-right: 5%;
     border-radius: 10px;
   }
  `

const TripFormHeader = props => {
    return (
        
      <Nav>
          <h1 className="welcome" onClick={() => props.history.push("/")} >Welcome</h1>
          <h2 className="btn1" onClick={() => props.history.push("/login")} >Login</h2>
          <h2 className="btn2" onClick={() => props.history.push("/user_registration")}>Registration</h2>
      </Nav>
      
    )
  }
  export default withRouter(TripFormHeader);