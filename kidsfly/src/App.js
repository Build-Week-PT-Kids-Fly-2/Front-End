import React from 'react';
import './App.css';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import TripForm from './components/TripForm'
import AdminLogin from "./components/AdminLogin"
import UserRegistration from './components/UserRegistration';
import PrivateRoute from "./components/PrivateRoute"
import WelcomePage from "./components/WelcomePage"
import TripProfile from './components/TripProfile';
import AdminPage from "./components/AdminPage"
import Header from "../src/components/Header"
import WorkerLogin from "./components/WorkerLogin";
import WorkerRegistration from "../src/components/WorkerRegistration";
import WorkerPage from "./components/WorkerPage";


function App() {

  
    return (
    <Router>
    <div className="App">
    <Header />
    <Footer />
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/user_registration" component={UserRegistration} />
      <Route path="/login" component={Login} />
      <Route path='/trip_form' component={TripForm} />
      <Route path="/trip_profile" component={TripProfile} />
      <Route path="/admin_login" component={AdminLogin}/>
      <Route path ="/admin_page" component={AdminPage} />
      <Route path= "/worker_registration" component={WorkerRegistration} />
      <Route path="/worker_login" component={WorkerLogin} />
      <Route path = "/worker_page" component={WorkerPage} />
    </Switch>

   </div>
    </Router>
  );
}

export default App;
