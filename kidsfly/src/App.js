import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import UserCard from "./components/UserCard"
import AdminPage from "./components/AdminPage"
import UserRegistration from './components/UserRegistration';
import PrivateRoute from "./components/PrivateRoute"
import WelcomePage from "./components/WelcomePage"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/user_registration" component={UserRegistration} />
      <Route exact path="/admin_page" component={AdminPage}/>
      <Route exact path="/login" component={Login} />
      <Route path="/user_card" component={UserCard} />
      <PrivateRoute exact path="/protected" component={UserCard} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
