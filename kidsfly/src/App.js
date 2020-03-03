import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import UserRegistration from "./components/UserRegistration"
import AdminPage from "./components/AdminPage"

function App() {
  return (
    <div className="App">
      <Route path="/admin_page" component={AdminPage}/>
      <Route path="/user_registration" component={UserRegistration} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
