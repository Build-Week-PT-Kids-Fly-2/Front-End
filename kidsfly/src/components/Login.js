import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
// import { withRouter } from "react-router-dom";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };
    handleChange = e =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    
    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("https://kidsfly1.herokuapp.com/api/auth/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
        this.props.history.push('/protected')
    })
    .catch(err => console.log(err));
    };
    
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <form onSubmit = {this.logn}>
                    <label>Username</label>
                    <input
                    type = "text"
                    name = "username"
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange}
                    />

                    <label>Password</label>
                    <input
                    type = "text"
                    name = "password"
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    />
                    <button>Login</button>
                
                </form>

            </div>
        )
    }
}
export default Login;