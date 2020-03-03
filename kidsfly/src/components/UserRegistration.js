import React from "react";
import {axiosWithAuth} from "../utilites/axiosWithAuth";

class UserRegistration extends React.Component {
    constructor() {
        super();
          this.state = {
            user: {
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        address_2: "",
        home_airport: "",
        username: "",
        password: ""
        }
       }
    }  
    
    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    };   
      
    handleSubmit = e => {
        e.preventDafault();
          axiosWithAuth()
          .post("https://kidsfly1.herokuapp.com/api/auth/register", this.state.user)
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
             <form onSubmit={this.handleSubmit}>
                 <label>First Name</label>
                 <input 
                 type = "text"
                 name = "first_name"
                 placeholder = " First Name"
                 value = {this.state.first_name}
                 onChange = {this.handleChange}
                 />

                 <label>Last Name</label>
                 <input
                 type = "text"
                 name ="last_name"
                 placeholder = "Last Name"
                 value = {this.state.last_name}
                 onChange = {this.handleChange}
                 />

                 <label>Address</label>
                 <input
                 type = "text"
                 name = "address"
                 placeholder = "Address"
                 value = {this.state.address}
                 onChange = {this.handleChange}
                 />

                 <label>Address 2</label>
                 <input 
                 type = "text"
                 name = "address_2"
                 placeholder = "Address 2"
                 value = {this.state.address_2}
                 onChange = {this.handleChange}
                 />

                <label>Home Airport</label>
                 <input 
                 type = "text"
                 name = "home_airport"
                 placeholder = "Home Airport"
                 value = {this.state.home_airport}
                 onChange = {this.handleChange}
                 />

                <label>Phone Number</label>
                 <input 
                 type = "number"
                 name = "phone"
                 placeholder = "Phone Number"
                 value = {this.state.phone}
                 onChange = {this.handleChange}
                 />

                <label>Username</label>
                 <input 
                 type = "email"
                 name = "username"
                 placeholder = "email"
                 value = {this.state.username}
                 onChange = {this.handleChange}
                 />

                <label>Password</label>
                 <input 
                 type = "text"
                 name = "password"
                 placeholder = "password"
                 value = {this.state.password}
                 onChange = {this.handleChange}
                 />
                 <button>Submit</button>
             </form>
         </div>
     );
    }
 }   


export default UserRegistration;