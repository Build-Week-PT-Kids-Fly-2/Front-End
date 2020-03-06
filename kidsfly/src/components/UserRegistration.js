import React, {useState} from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


const UserRegistration =(props) => {
    
    const [user, setUser] = useState({
      
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
             <h1>Traveler Registration</h1>
             <form onSubmit={handleSubmit}>
                      
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