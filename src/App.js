import logo from './logo.svg';
import './App.css';
import { Router } from './route'
import { Login } from './component/login/login'
function App() {
  return (
    <div className="App">
      <Router />
      {/* <Login /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
