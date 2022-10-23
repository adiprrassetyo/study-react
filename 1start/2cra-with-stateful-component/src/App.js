import { useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <h4>Total Click</h4>
          <h1>{count}</h1>
          <button className="App-button" onClick={() => setCount(count + 1)}>Click</button>
        </div>
      </header>
    </div>
  );
}

export default App;
