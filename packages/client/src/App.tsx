import React from 'react';
import './App.css';
import Register from './pages/register';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Register/>
    </div>
  );
}

export default App;
