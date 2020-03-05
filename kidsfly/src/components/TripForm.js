import React, { useState} from 'react';
import { withRouter } from "react-router-dom";
import TripFormHeader from './TripFormHeader'

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
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

const handleChanges = event => {
   setForm({...form, [event.target.name]: event.target.value}); 
}//handlechanges

const submitForm = event => {
    event.preventDefault();
    props.addNewForm(form);
    setForm({
        Airport: "",
        Airline: "",
        Flight_Number: "",
        Departure_Time: "",
        Carry_On: "",
        Number_of_Children: "",
        Needs: ""
})
}//submit form


return (
<div>
    <TripFormHeader />
    <h1>New Forms</h1>
    <form className='form' onSubmit={submitForm}>
      <div>  <label htmlFor="Airport">Airport Name  </label>
            <input
                type="text"
                name="Airport"
                id="Airport"
                placeholder="Airport Name"
                value={form.Airport}
                onChange={handleChanges}
            /></div>
        <div><label htmlFor="Airline">Airline Name </label>
            <input
                    type="text"
                    name="Airline"
                    id="Airline"
                    placeholder="Airline Name"
                    value={form.Airline}
                    onChange={handleChanges}
            /></div>
        <label htmlFor="Flight_Number">Flight Number </label>
                <input
                    type="text"
                    name="Flight_Number"
                    id="Flight_Number"
                    placeholder={`${Date.now()}`}
                    value={form.Flight_Number}
                    onChange={handleChanges}
            />
            <br></br>
        <label htmlFor="Departure_Time">Departure Time </label>
                <input
                    type="text"
                    name="Departure_Time"
                    id="Departure_Time"
                    placeholder={dateTime}
                    value={form.Departure_Time}
                    onChange={handleChanges}
            />
            <br></br>
        <label htmlFor="Carry_On">Amount of Carry on Luggage </label>
                <input
                    type="text"
                    name="Carry_On"
                    id="Carry_On"
                    placeholder="Amount of Carry On"
                    value={form.Carry_On}
                    onChange={handleChanges}
            />
            <br></br>
       <div> <label htmlFor="Number_of_Children">Number of Children </label>
                <input
                    type="text"
                    name="Number_of_Children"
                    id="Number_of_Children"
                    placeholder="Number of Children"
                    value={form.Number_of_Children}
                    onChange={handleChanges}
            /></div>
            
        <label htmlFor="Needs">Special Needs or Services </label>
                <input
                    type="text"
                    name="Needs"
                    id="Needs"
                    placeholder="Special Needs"
                    value={form.Needs}
                    onChange={handleChanges}
            />
            <br></br>
            <button type="submit">Add Trip</button>
   </form>
   </div>
)
}
export default withRouter(TripForm);