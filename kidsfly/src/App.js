import React, { useState, useEffect} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import Registration from "./components/Registration"
import TripForm from './components/TripForm'
import SubForm from './components/SubForm'


function App() {

  const [forms, setForms] = useState([
  ]);

  const addNewForm = form => {
    const newForm = {
      id: Date.now(),
      title: form.title,
      body: form.body
    };

    setForms([...forms, newForm]);
  };


  return (
    <div className="App">
        <h1>New Forms</h1>
        <TripForm addNewForm={addNewForm} />
        <SubForm forms={forms} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
