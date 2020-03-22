import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from "./firebaseConnect";
class App extends Component {
  render() {
      console.log(firebaseConnect);
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
              </header>
          </div>
      );
  }
}

export default App;
