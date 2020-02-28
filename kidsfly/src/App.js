import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import Registration from "./components/Registration"

function App() {
  return (
    <div className="App">
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
