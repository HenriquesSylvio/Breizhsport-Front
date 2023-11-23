import logo from './logo.svg';
import './App.css';

function App() {

  function chiffrer(message, clef) {
    let newMessage = "";
    for(let nbCaractere = 1; nbCaractere <= message.length; nbCaractere++){
      let codeCaractereRemplacant = message.charCodeAt(nbCaractere) + clef;
      let caractereRemplacant = String.fromCharCode(codeCaractereRemplacant)
      newMessage.concat(caractereRemplacant);
    }

    return newMessage;
  }


  let monMessageAChiffrer = "Hello";
  let maClefDeChiffrage = 4;

  console.log("bla", chiffrer(monMessageAChiffrer, maClefDeChiffrage));



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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
