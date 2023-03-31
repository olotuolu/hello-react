import logo from './logo.svg';
import './App.css';

function MagicButton() {
  return(
    <>
      <h2>Presenting, the magic button</h2>
      <button>Magic</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React with Oluwanifemi and MSU!
        </a>
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
