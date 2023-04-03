import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBook, setMyBooks] = useState([]);
  async function getBooks(){
    let { data: Books, error } = await supabase
    .from('Books')
    .select('*')
    setMyBooks(Books);
  }
  getBooks();
  return (
    <table>
      {
        myBook.map(b => (
          <tr>
            <td>{b.Title}</td>
            <td>{b.Author}</td>
            <td>{b.ISBN}</td>
            <td>{b.Description}</td>
          </tr>
        ))
      }
    </table>
  );
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return(
    <>
      <h3>Presenting, the magic button</h3>
    <button onClick={doMagic}>Magic {count}</button>
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
        <Library />
        <MagicButton />
        <HappyButton />
        <MoneyButton />
      </header>
    </div>
  );
}

export default App;
