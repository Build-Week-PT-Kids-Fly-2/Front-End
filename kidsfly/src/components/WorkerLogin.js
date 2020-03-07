import React from "react";
import axiosWithAuth from '../utilites/axiosWithAuth';
import {withRouter} from "react-router-dom";

class WorkerLogin extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        worker: {
            username: "",
            password: ""
        }
    };
}
   
    handleChange = e =>{
        this.setState({
           worker: { ...this.state.worker,
                [e.target.name]: e.target.value
            }
        })
    }
            
    handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("https://kidsfly1.herokuapp.com/api/workers/login", this.state.worker)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            this.props.history.push('/admin_page')
    })
    .catch(err => console.log(err));
    };

    render(){
    return(
            <div>
               
                <h1>Worker Login Page</h1>
                <form onSubmit = {this.handleLogin}>
                    <label>Username</label>
                    <input
                    type = "text"
                    name = "username"
                    value = {this.state.worker.username}
                    onChange = {this.handleChange}
                    />

                    <label>Password</label>
                    <input
                    type = "text"
                    name = "password"
                    value = {this.state.worker.password}
                    onChange = {this.handleChange}
                    />
                    
                    <button>Login</button>
                
                </form>

            </div>
        )
    }
    }

export default withRouter(WorkerLogin);