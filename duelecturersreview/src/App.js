import React, {Component} from 'react';
import './App.css';
import '../src/Footer/footer.css';
import '../src/Nav/nav.css';
import NavB from "../src/Nav/nav";
import Footer from "../src/Footer/footer";
import DieuHuongURL from "../src/Router/DieuHuongURL";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">
                  <NavB/>
                  <DieuHuongURL/>
                  <Footer/>
              </div>
          </Router>
      );
  }
}

export default App;
