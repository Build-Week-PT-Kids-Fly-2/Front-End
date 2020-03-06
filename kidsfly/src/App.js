import React, { useState } from 'react';
import './App.css';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import TripForm from './components/TripForm'
// import SubForm from './components/SubForm'

import UserCard from "./components/UserCard"
import AdminPage from "./components/AdminPage"
import UserRegistration from './components/UserRegistration';
import PrivateRoute from "./components/PrivateRoute"
import WelcomePage from "./components/WelcomePage"
import ProfilePage from "./components/Profile"
import TripProfile from './components/TripProfile';

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
    <Footer />
    <Switch>
      <Route exact path='/trip_form' component={TripForm} />
      <Route path="/trip_profile" component={TripProfile} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/user_registration" component={UserRegistration} />
      <Route exact path="/admin_page" component={AdminPage}/>
      <PrivateRoute exact path="/protected" component={UserCard} />
      <Route exact path="/login" component={Login} />
    </Switch>

      <Route exact path="/profile" component={ProfilePage} />

      

    </div>
    </Router>
  );
}

export default App;
