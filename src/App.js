import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo img-fluid mx-auto d-block mt-4"
            alt="logo"
            width={80}
          />
        </header>
        <Dictionary />

        <footer className="text-center mt-4">
          This project was coded by{" "}
          <a
            href="https://trisha-govind.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trisha Govind
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TrishaGovind/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
