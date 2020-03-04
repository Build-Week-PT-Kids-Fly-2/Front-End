import React from "react";
import {axiosWithAuth} from "../utilites/axiosWithAuth";
// import { withRouter } from "react-router-dom";


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
      
    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/:id/', this.state.user)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('user', res.data.payload);
            this.props.history.push('/user_card')
        })
        .catch(err => console.log('error', err))
    };
    render() {          
       return(
         <div>
             <h1>Registration Page</h1>
             <form onSubmit={this.handleSubmit}>
                 <div className='form-group'>
                 <label>First Name</label>
                 <input 
                 type = "text"
                 name = "first_name"
                 placeholder = " First Name"
                 value = {this.state.first_name}
                 onChange = {this.handleChange}
                 />
                </div>
                <div className='form-group'>
                 <label>Last Name</label>
                 <input
                 type = "text"
                 name ="last_name"
                 placeholder = "Last Name"
                 value = {this.state.last_name}
                 onChange = {this.handleChange}
                 />
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                    type = "number"
                    name = "phone"
                    placeholder = "phone number"
                    value = {this.state.phone}
                    onChange = {this.handleChange}
                    />
                </div>
                <div className='form-group'>
                 <label>Address</label>
                 <input
                 type = "text"
                 name = "address"
                 placeholder = "Address"
                 value = {this.state.address}
                 onChange = {this.handleChange}
                 />
                </div>
                <div className='form-group'>
                 <label>Address 2</label>
                 <input 
                 type = "text"
                 name = "address_2"
                 placeholder = "Address 2"
                 value = {this.state.address_2}
                 onChange = {this.handleChange}
                 />
                </div>
                <div className='form-group'>
                <label>Home Airport</label>
                 <input 
                 type = "text"
                 name = "home_airport"
                 placeholder = "Home Airport"
                 value = {this.state.home_airport}
                 onChange = {this.handleChange}
                 />
                </div>
               
                <div className='form-group'>
                <label>Username</label>
                 <input 
                 type = "email"
                 name = "username"
                 placeholder = "email"
                 value = {this.state.username}
                 onChange = {this.handleChange}
                 />
                </div>
                <div className='form-group'>
                <label>Password</label>
                 <input 
                 type = "text"
                 name = "password"
                 placeholder = "password"
                 value = {this.state.password}
                 onChange = {this.handleChange}
                 />
                 </div>
                 <button type='submit' className='btn'>Submit</button>
             </form>
         </div>
     );
    }
 }   


export default UserRegistration;