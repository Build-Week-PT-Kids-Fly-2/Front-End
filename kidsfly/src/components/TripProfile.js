import React, { useState } from "react";
import axios from "axios";

const TripProfile = (props) => {
    const [trip, setTrip] = useState({
        airport_name: "",
        airline: "",
        flight_number: "",
        departure_time: " ",
        number_of_carryon: "",
        number_of_kids: ""

    })

    const getTrip = () => {
        axios
            .get("api/:id/")
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log('error', err))
    }

    return (
        <div>
            <h1>Trip Profile</h1>
            <div className='trip_profile'>
                <p>Airport Name:{props.airport_name}</p>
                <p>Airline:{props.airline}</p>
                <p>Flight Number: {props.flight_number}</p>
                <p>Departure Time: {props.departure_time}</p>
                <p>Number of Carry on: {props.number_of_carryon}</p>
                <p>Number of Kids: {props.number_of_kids}</p>

            </div>
        </div>
    )
}
export default TripProfile;