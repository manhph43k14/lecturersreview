import React, {Component} from 'react';
import './App.css';
import '../src/Footer/footer.css';
import '../src/Nav/nav.css';
import {firebaseConnect} from "./firebaseConnect";
import Nav from "../src/Nav/nav";
import Footer from "../src/Footer/footer";
import DieuHuongURL from "../src/Router/DieuHuongURL";
class App extends Component {
  render() {
      return (
          <div className="App">
              <Nav/>
              <DieuHuongURL/>
              <Footer/>
          </div>
      );
  }
}

export default App;
