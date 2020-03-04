import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import Registration from "./components/Registration"

function App() {

  const [forms, setForms] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
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
