import React, {useState} from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


const UserRegistration =(props) => {
    
    const [user, setUser] = useState({
        // first_name: "",
        // last_name: "",
        // phone: "",
        // address: "",
        // address_2: "",
        // home_airport: "",
        username: "",
        password: ""
       })
      
    const handleChange = e => {
        setUser(
            {...user,
                [e.target.name]: e.target.value
            })
        }
              
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('https://kidsfly1.herokuapp.com/api/auth/register', user)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('user', res.data.payload);
            props.history.push('/login')
        })
        .catch(err => console.log('error', err))
    };
           
       return(
         <div>
             <h1>Registration Page</h1>
             <form onSubmit={handleSubmit}>
                 {/* <div className='form-group'>
                 <label>First Name</label>
                 <input 
                 type = "text"
                 name = "first_name"
                 placeholder = " First Name"
                 value = {user.first_name}
                 onChange = {handleChange}
                 />
                </div>

                <div className='form-group'>
                 <label>Last Name</label>
                 <input
                 type = "text"
                 name ="last_name"
                 placeholder = "Last Name"
                 value = {user.last_name}
                 onChange = {handleChange}
                 />
                </div>

                <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                    type = "number"
                    name = "phone"
                    placeholder = "phone number"
                    value = {user.phone}
                    onChange = {handleChange}
                    />
                </div>

                <div className='form-group'>
                 <label>Address</label>
                 <input
                 type = "text"
                 name = "address"
                 placeholder = "Address"
                 value = {user.address}
                 onChange = {handleChange}
                 />
                </div>

                <div className='form-group'>
                 <label>Address 2</label>
                 <input 
                 type = "text"
                 name = "address_2"
                 placeholder = "Address 2"
                 value = {user.address_2}
                 onChange = {handleChange}
                 />
                </div>

                <div className='form-group'>
                <label>Home Airport</label>
                 <input 
                 type = "text"
                 name = "home_airport"
                 placeholder = "Home Airport"
                 value = {user.home_airport}
                 onChange = {handleChange}
                 />
                </div> */}
               
                <div className='form-group'>
                <label>Username</label>
                 <input 
                 type = "email"
                 name = "username"
                 placeholder = "email"
                 value = {user.username}
                 onChange = {handleChange}
                 />
                </div>

                <div className='form-group'>
                <label>Password</label>
                 <input 
                 type = "text"
                 name = "password"
                 placeholder = "password"
                 value = {user.password}
                 onChange = {handleChange}
                 />
                 </div>
                 <button type='submit' className='btn'>Submit</button>
             </form>
         </div>
     );
    }
  


export default withRouter(UserRegistration);