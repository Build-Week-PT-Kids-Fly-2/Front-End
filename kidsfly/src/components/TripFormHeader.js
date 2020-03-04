import React from 'react'
import { withRouter } from 'react-router-dom';
// import styled from "styled-components"


const TripFormHeader = props => {
    return (
      <nav>
        <h2 onClick={() => props.history.push("/")}>welcome</h2>
        <h2 onClick={() => props.history.push("/User_Registration")}>registration</h2>
      </nav>
    )
  }
  export default withRouter(TripFormHeader);