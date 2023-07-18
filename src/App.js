import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to </h2><h1  style={{color:'yellow', marginTop:'-2%', marginBottom:'0%'}}>Trish the Teacher !
        </h1>
        <div style={{ height: '200px',}}className="teach"></div>
        
        <p>Website currently under construction </p><p style={{color:'yellow'}}>Sorry! </p>
        <img src={logo} className="App-logo" alt="logo" /><p style={{color:'yellow'}}>Come back soon! </p><div style={{ height: '200px',}}className="apple"></div>
        
        
      </header>
    </div>
  );
}

export default App;
