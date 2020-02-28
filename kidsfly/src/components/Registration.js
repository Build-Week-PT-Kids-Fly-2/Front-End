import React from "react";
import axiosWithAuth from "../utilites/axiosWithAuth";

class Registration extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitRegistration = this.submitRegistration = this.submitRegistration.bind(this)
    }
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value
        this.setState({fields});
    }

    submitRegistration(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["first_name"] = "";
            fields["last_name"] = "";
            fields["address"] = "";
            fields["address_2"] = "";
            fields["home_airport"] = "";
            fields["phone_number"] = "";
            fields["username"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }

      handleSubmit(values, { props }) {
        console.log("values", values);
    
        axiosWithAuth()
          .post("/api/auth/register", values)
          .then(() => {
            props.history.push("/login");
          })
          .catch(err => {
            console.log("error registering: ", err);
          });
      }

 
 render() {
     return(
         <div>
             <form method= "post" name = "Registration" onSubmit = {this.submitRegistration.Registration}>
                 <label>First Name</label>
                 <input 
                 type = "text"
                 name = "first_name"
                 placeholder = " First Name"
                 value = {this.state.fields.first_name}
                 onChange = {this.handleChange}
                 />

                 <label>Last Name</label>
                 <input
                 type = "text"
                 name ="last_name"
                 placeholder = "Last Name"
                 value = {this.state.fields.last_name}
                 onChange = {this.handleChange}
                 />

                 <label>Address</label>
                 <input
                 type = "text"
                 name = "address"
                 placeholder = "Address"
                 value = {this.state.fields.address}
                 onChange = {this.handleChange}
                 />

                 <label>Address 2</label>
                 <input 
                 type = "text"
                 name = "address_2"
                 placeholder = "Address 2"
                 value = {this.state.fields.address_2}
                 onChange = {this.handleChange}
                 />

                <label>Home Airport</label>
                 <input 
                 type = "text"
                 name = "home_airport"
                 placeholder = "Home Airport"
                 value = {this.state.fields.home_airport}
                 onChange = {this.handleChange}
                 />

                <label>Phone Number</label>
                 <input 
                 type = "number"
                 name = "phone_number"
                 placeholder = "Phone Number"
                 value = {this.state.fields.phone_number}
                 onChange = {this.handleChange}
                 />

                <label>Username</label>
                 <input 
                 type = "email"
                 name = "username"
                 placeholder = "email"
                 value = {this.state.fields.username}
                 onChange = {this.handleChange}
                 />

                <label>Password</label>
                 <input 
                 type = "text"
                 name = "password"
                 placeholder = "password"
                 value = {this.state.fields.password}
                 onChange = {this.handleChange}
                 />
             </form>
         </div>
     )
 }   
}
export default Registration;