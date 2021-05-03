import logo from './logo.svg';
import './App.css';
import FlowCode from './examples/FlowFile';
import TSCode from './examples/TSFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={ FlowCode.bind(this) }>Test Flow Code</button>
        <button onClick={ TSCode.bind(this) }>Test TS Code</button>
      </header>
    </div>
  );
}

export default App;
