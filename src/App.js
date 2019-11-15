import React from 'react';
import './App.css';
import Student from "./Student/student";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {props.class} van {props.name}.
        </p> 
        <Student studie="Anthropoligie" afgestudeerd="niet"> Een hier een extra zin. </Student>
        <Student studie="Wiskunde" afgestudeerd="wel"> Nog een zin. </Student>
        <Student studie="Geneeskunde" afgestudeerd="niet"> Ook hier een extra zin. </Student>
      </header>
    </div>
  );
}

export default App;
