import React, {Component} from 'react';
import '../Home/home.css';
import '../Details/details.css';
import '../Login/signin.css';
import '../Find/find.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "../Home/Home";
import signin from "../Login/signin";
import find from "../Find/find";

class DieuHuongUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={signin}/>
                <Route exact path="/find" component={find}/>
            </div>
        );
    }
}

export default DieuHuongUrl;