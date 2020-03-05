import React from "react";
// import styled from "styled-components";
import {axiosWithAuth} from "../utilites/axiosWithAuth";
import UserRegistration from "../components/UserRegistration";
import User from "../components/User";


class UserCard extends React.Component {
    state = {
        users: []
      };

      componentDidMount() {
        this.getData();
      }
    
      getData = () => {
        axiosWithAuth()
          .get("api/users/:id")
          .then(res => {
            console.log(res.data);
            this.setState({
              users: res.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      };

    addUser = user => {
        axiosWithAuth()
          .get("api/users", user)
    
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
        {this.state.users.map(user => {
          
          return <User key={user.id} data={user} />;
        })}
     </div>
 )
}
}
export default UserCard;