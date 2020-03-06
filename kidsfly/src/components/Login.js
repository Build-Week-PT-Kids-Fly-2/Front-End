import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";
import { withRouter } from "react-router-dom";


class Login extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        credentials: {
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
           credentials: { ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
            
    handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("https://kidsfly1.herokuapp.com/api/auth/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            this.props.history.push('/trip_form')
    })
    .catch(err => console.log(err));
    };

    render(){
    return(
            <div>
                <h1>Login Page</h1>
                <form onSubmit = {this.handleLogin}>
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

export default withRouter(Login);