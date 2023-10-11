import './App.css';
import Register from './pages/register';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='fixed-pos-padding'/>
      <Register/>
    </div>
  );
}

export default App;
