import "./App.css";
import "./fonts/BlackMango-Medium.ttf";
import logo from "./logo.png";
import tg from "./tg-icon.png";
import github from "./github-icon.png";
import netlify from "./netlify-icon.png";
import react from "./react-icon.png";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://dictionarybytrisha.netlify.app">
            <img
              src={logo}
              className="App-logo img-fluid mx-auto d-block mt-4"
              alt="logo"
              width={100}
            />
          </a>
        </header>
        <Dictionary defaultKeyword="dictionary" />

        <footer className="text-center mt-2 mb-4">
          <div className="row">
            <div className="col-3 mb-2">
              <img
                src={react}
                className="react-logo img-fluid"
                alt="react icon"
                width={30}
              />
            </div>
            <div className="col-3 mb-2">
              <a
                href="https://trisha-govind.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tg}
                  className="tg-logo img-fluid mx-auto"
                  alt="website"
                  width={30}
                />
              </a>
            </div>
            <div className="col-3 mb-2">
              <a
                href="https://github.com/TrishaGovind/dictionary-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  className="github-logo img-fluid"
                  alt="github icon"
                  width={30}
                />
              </a>
            </div>
            <div className="col-3 mb-2">
              <img
                src={netlify}
                className="netlify-logo img-fluid"
                alt="netlify icon"
                width={30}
              />
            </div>
            <div className="col-3">Built with React</div>
            <div className="col-3">Coded by Trisha Govind</div>
            <div className="col-3">Open-sourced on GitHub</div>
            <div className="col-3">Hosted on Netlify</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
