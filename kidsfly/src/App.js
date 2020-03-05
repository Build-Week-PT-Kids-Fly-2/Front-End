import React, { useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import TripForm from './components/TripForm'
// import SubForm from './components/SubForm'

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./components/Login";
import TripForm from './components/TripForm'

import UserCard from "./components/UserCard"
import AdminPage from "./components/AdminPage"
import UserRegistration from './components/UserRegistration';
import PrivateRoute from "./components/PrivateRoute"
import WelcomePage from "./components/WelcomePage"
import ProfilePage from "./components/Profile"

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
    <Router>
    <div className="App">

        {/* <h1>New Forms</h1> */}
        {/* <TripForm addNewForm={addNewForm} /> */}
        {/* <SubForm forms={forms} /> */}

      
      
      <Route path="/trip_form" component={TripForm} />
      <Route exact path ="/" component={WelcomePage} />
      <Route path="/admin_page" component={AdminPage}/>
      <Route exact path="/user_registration" component={UserRegistration} />
      <Route exact path="/admin_page" component={AdminPage}/>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={UserCard} />

       
      <Route exact path='/trip_form' component={TripForm} addNewForm={addNewForm} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/user_registration" component={UserRegistration} />
      <Route exact path="/admin_page" component={AdminPage}/>
      <PrivateRoute exact path="/protected" component={UserCard} />
      <Route exact path="/login" component={Login} />
<<<<<<< HEAD
      <Route exact path="/profile" component={ProfilePage} />

=======

      
>>>>>>> 8c7c9c28b7ea3fde6b69185302b50ef2c64d1430
    </div>
    </Router>
  );
}

export default App;
