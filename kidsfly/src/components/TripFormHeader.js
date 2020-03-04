import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from "styled-components"

const Nav = styled.div`
    background: #311D3F;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 65px;
    h2 {
        margin-left: 10px;
        font-size: 3.5rem;
    }
  
  `

const TripFormHeader = props => {
    return (
      <Nav>
        <h2 onClick={() => props.history.push("/")}>welcome</h2>
        <h2 onClick={() => props.history.push("/user_registration")}>registration</h2>
      </Nav>
    )
  }
  export default withRouter(TripFormHeader);