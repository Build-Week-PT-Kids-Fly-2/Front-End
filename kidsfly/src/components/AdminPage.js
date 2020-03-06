import React, {useState, useEffect} from "react";
import axios from "axios";



const AdminPage = () => {
    const [admin, setAdmin] = useState();

    useEffect(() => {
        axios
          .get("https://kidsfly1.herokuapp.com/api/workers/:id")
          .then(response => {
            console.log(response.data);
            
            console.log(admin);
            setAdmin(response.data)
          })
          .catch(error => {
            console.log("ERROR:", error)
          });
      },[admin]);

    return(
        <div>
            <h1>Admin Page</h1>
        </div>
    )
}
export default AdminPage;