import React from "react";
import axios from "axios";
import WorkerInfo from "../components/WorkerInfo";


class AdminPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     trip: [],
     worker: [],
     isLoaded: false
    };
  }
    componentDidMount(){
        axios
          .get('api/:id/trips')
          .then(response => {
             this.setState({
               isLoaded: true,
              trip: response.data.data
            })
          })
          .catch(error => {
            console.log("ERROR:", error)
          });
      };

    // addTrip = () => {
    //     axios
    //       .get("/api/:id/trips ")
    
    //       .then(res => {
            
    //         console.log(res.data);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   };

    deleteTrip = e => {
        e.preventDefault();
        axios
          .delete("/api/trips/:id ")
          .then(() => {
            this.addTrip();
          })
          .catch(err => {
            console.log("Error deleting: ", err);
          });
      }
      render(){
        const {isLoaded, trip} = this.state;
        if(!isLoaded){
          return <div>Loading...</div>;
        }
    return(
        <div>
         
            <h1>Admin Page</h1>
                   
         <ul>
          {trip.map(trips =>(
          <li key = {trips.id}>
          NAME:{this.props.name}
          <button onClick={this.getWorker}>Get Worker</button>
          <button onClick={this.deleteWorker}>Delete</button>
          </li>
          ))} 
          </ul>
            
        </div>
    )
  }
}
export default AdminPage;