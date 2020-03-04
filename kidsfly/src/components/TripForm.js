import React, { useState} from 'react';
import { withRouter } from "react-router-dom";


const TripForm = props => {
    const [form, setForm] = useState({
        Airport: "",
        Airline: "",
        Flight_Number: "",
        Departure_Time: "",
        Carry_On: "",
        Number_of_Children: "",
        Needs: ""
    });


const handleChanges = (event, setForm, form) => {
   setForm({...form, [event.target.name]: event.target.value}); 
}

const submitForm = (event, setForm, form, props) => {
    event.preventDefault();
    props.addNewForm(form);
    setForm({
        Airport: "",
        Airline: "",
        Flight_Number: "",
        Departure_Time: "",
        Carry_On: "",
        Number_Of_Children: "",
        Needs: ""
})
}

return (
    <form className='form' onSubmit={submitForm}>

        <label htmlFor="Airport">Airport Name</label>
            <input
                type="text"
                name="Airport"
                id="Airport"
                placeholder="Airport Name"
                value={form.Airport}
                onChange={handleChanges}
            />
        <label htmlFor="Airline">Airline Name</label>
            <input
                    type="text"
                    name="Airline"
                    id="Airline"
                    placeholder="Airline Name"
                    value={form.Airline}
                    onChange={handleChanges}
            />
        <label htmlFor="Flight_Number">Flight Number</label>
                <input
                    type="text"
                    name="Flight_Number"
                    id="Flight_Number"
                    placeholder= "Flight Number"
                    value={form.Flight_Number}
                    onChange={handleChanges}
            />
        <label htmlFor="Departure_Time">Departure Time</label>
                <input
                    type="text"
                    name="Departure_Time"
                    id="Departure_Time"
                    placeholder="Departure Time"
                    value={form.Departure_Time}
                    onChange={handleChanges}
            />
        <label htmlFor="Carry_On">Amount of Carry on Luggage</label>
                <input
                    type="text"
                    name="Carry_On"
                    id="Carry_On"
                    placeholder="Amount of Carry On"
                    value={form.Carry_On}
                    onChange={handleChanges}
            />
        <label htmlFor="Number_of_Children">Number of Children</label>
                <input
                    type="text"
                    name="Number_of_Children"
                    id="Number_of_Children"
                    placeholder="Number of Children"
                    value={form.Number_of_Children}
                    onChange={handleChanges}
            />
        <label htmlFor="Needs">Special Needs or Services</label>
                <input
                    type="text"
                    name="Needs"
                    id="Needs"
                    placeholder="Special Needs"
                    value={form.Needs}
                    onChange={handleChanges}
            />
            <button type="submit">Add Trip</button>
   </form>
)
}

export default withRouter(TripForm);