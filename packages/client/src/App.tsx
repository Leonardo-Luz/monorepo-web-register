import React from 'react';
import logo from './logo.svg';
import './App.css';

// import cors from 'cors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
      <button
          onClick={() => {
            fetch("http://localhost:3001/data", {})
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
        >
          GET SOME DATA
        </button>
    </div>
  );
}

export default App;
