import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class AdminLogin extends React.Component{
  constructor(props){
      super(props)
  this.state = {
      admin: {
          username: "",
          password: ""
      }
  };
}
  // const handleChange = e => {
  //     setCredentials({value: e.target.value});
  //   }

  handleChange = e =>{
      this.setState({
         admin: { ...this.state.admin,
              [e.target.name]: e.target.value
          }
      })
  }
          
  handleLogin = e => {
      e.preventDefault();
      axios
      .post("https://kidsfly1.herokuapp.com/api/admins/login", this.state.admin)
      .then(res => {
          localStorage.setItem("token", res.data.token)
          this.props.history.push('/admin_page')
  })
  .catch(err => console.log(err));
  };

  render(){
  return(
          <div>
             
              <h1>Admin Login Page</h1>
              <form onSubmit = {this.handleLogin}>
                  <label>Username</label>
                  <input
                  type = "text"
                  name = "username"
                  value = {this.state.admin.username}
                  onChange = {this.handleChange}
                  />

                  <label>Password</label>
                  <input
                  type = "text"
                  name = "password"
                  value = {this.state.admin.password}
                  onChange = {this.handleChange}
                  />
                  
                  <button>Login</button>
              
              </form>

          </div>
      )
  }
  }

export default withRouter(AdminLogin);