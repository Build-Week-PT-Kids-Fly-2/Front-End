import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import TripForm from './components/TripForm'
import SubForm from './components/SubForm'

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
      </div>
    );
  }


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

