import React from "react";
// import styled from "styled-components";
import axiosWithAuth from "../utilites/axiosWithAuth";
import UserRegistration from "../components/UserRegistration";
import User from "../components/User";


class UserCard extends React.Component {

    addUser = user => {
        axiosWithAuth()
          .post("api/user", user)
    
          .then(res => {
            
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      };

    render(){
 return (
     <div>
         <UserRegistration addUser={this.addUser} />
        {this.state.user.map(users => {
          
          return <User key={users.id} data={users} />;
        })}
     </div>
 )
}
}
export default UserCard;