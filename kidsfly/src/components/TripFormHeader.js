import React from 'react'
import { withRouter } from 'react-router-dom';
// import styled from "styled-components"


const TripFormHeader = props => {
    return (
      <nav>
          <button onClick={() => props.history.push("/")} >Welcome</button>
          <button onClick={() => props.history.push("/trip_form")} >Trip Form</button>
          <button onClick={() => props.history.push("/profile")} >Profile</button>
          <button onClick={() => props.history.push("/login")} >Login</button>
          <button onClick={() => props.history.push("/user_registration")}>Registration</button>
      </nav>
    )
  }
  export default withRouter(TripFormHeader);