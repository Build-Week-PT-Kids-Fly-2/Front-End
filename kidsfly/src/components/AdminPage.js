import React from "react";
import axios from "axios";
import WorkerInfo from "../components/WorkerInfo";


class AdminPage extends React.Component {
    state ={
     trip: [],
     worker: []
    };

    getWorker = () => {
        axios
          .get('api/workers/:id')
          .then(response => {
            console.log(response.data);
            this.setState({
              worker: response.data.data
            })
          })
          .catch(error => {
            console.log("ERROR:", error)
          });
      };

    addTrip = () => {
        axios
          .get("/api/:id/trips ")
    
          .then(res => {
            
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      };

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
    return(
        <div>
         
            <h1>Admin Page</h1>
            {this.state.worker.map(workers => {
          
          return <WorkerInfo key={workers.id} data={workers} />;
        })}
        <div>
          <p>NAME:{this.props.name}</p>
          <p>USERNAME:{this.props.username}</p>
          <p>PASSWORD:{this.props.password}</p>
        </div>
           
            <button onClick={this.getWorker}>Get Worker</button>
            <button onClick={this.deleteWorker}>Delete</button>
        </div>
    )
  }
}
export default AdminPage;