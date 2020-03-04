import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth"

class AdminPage extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        admin: {
    username: "",
    password: ""
    }
   }
}
handleChange = e => {
    this.setState({
        admin: {
            ...this.state.admin,
            [e.target.name]: e.target.value
        }
    })
};   
  
handleSubmit = e => {
    e.preventDafault();
      axiosWithAuth()
      .post("https://kidsfly1.herokuapp.com//api/admin/login", this.state.user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log("error registering: ", err);
      });
    }  
    render() {          
        return(
          <div>
              <h1>Admin Page</h1>
              <form onSubmit={this.handleSubmit}>
                  <label>Username</label>
                  <input 
                  type = "text"
                  name = "username"
                  placeholder = "username"
                  value = {this.state.username}
                  onChange = {this.handleChange}
                  />
 
                  <label>Password</label>
                  <input
                  type = "text"
                  name ="password"
                  placeholder = "password"
                  value = {this.state.password}
                  onChange = {this.handleChange}
                  />
                </form>
                </div>
        )
    }
 
}
export default AdminPage;