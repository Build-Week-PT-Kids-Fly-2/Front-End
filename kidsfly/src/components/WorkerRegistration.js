import React, {useState} from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


const WorkerRegistration =(props) => {
    
    const [worker, setWorker] = useState({

        name: "",
        username: "",
        password: ""
       })
      
    const handleChange = e => {
        setWorker(
            {...worker,
                [e.target.name]: e.target.value
            })
        }
              
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('https://kidsfly1.herokuapp.com/api/workers/register', worker)
        .then(res => {
            console.log('success', res);
            localStorage.setItem('worker', res.data.payload);
            props.history.push('/worker_login')
        })
        .catch(err => console.log('error', err))
    };
           
       return(
         <div>
             <h1>Worker Registration</h1>
             <form onSubmit={handleSubmit}>

             <div className='form-group'>
                <label>Name</label>
                 <input 
                 type = "text"
                 name = "name"
                 placeholder = "name"
                 value = {worker.name}
                 onChange = {handleChange}
                 />
                 </div>
                      
                <div className='form-group'>
                <label>Username</label>
                 <input 
                 type = "email"
                 name = "username"
                 placeholder = "email"
                 value = {worker.username}
                 onChange = {handleChange}
                 />
                </div>

                <div className='form-group'>
                <label>Password</label>
                 <input 
                 type = "text"
                 name = "password"
                 placeholder = "password"
                 value = {worker.password}
                 onChange = {handleChange}
                 />
                 </div>

                 <button type='submit' className='btn'>Submit</button>
             </form>
         </div>
     );
    }
  


export default withRouter(WorkerRegistration);