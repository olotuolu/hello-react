import logo from './logo.svg';
import './App.css';

function MagicButton() {
  return(
    <>
      <h3>Presenting, the magic button</h3>
      <button>Magic</button>
    </>
  );
}

function HappyButton() {
  return(
    <>
      <h3>Presenting, the happy button</h3>
      <button>Happy</button>
    </>
  );
}

function MoneyButton() {
  return(
    <>
      <h3>Presenting, the money button</h3>
      <button>Money</button>
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
        <HappyButton />
        <MoneyButton />
      </header>
    </div>
  );
}

export default App;
