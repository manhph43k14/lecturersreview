import React, {Component} from 'react';
import '../Home/home.css';
import '../details/details.css';
import '../Login/signin.css';
import '../Find/find.css';
import '../comment/comment.css';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Home from "../Home/Home";
import signin from "../Login/signin";
import find from "../Find/find";
import comment from '../comment/comment';
import Details from '../details/details';
import Nham from '../details/nham';
import Gioi from '../details/gioi';
import Thuy from '../details/Thuy';

class DieuHuongUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={signin}/>
                <Route exact path="/find" component={find}/>
                <Route exact path="/comment/:id/:sub" component={comment}/>
                <Route exact path="/profile" component={Details}/>
                <Route exact path="/nham" component={Nham}/>
                <Route exact path="/chuc" component={Gioi}/>
                <Route exact path="/thuy" component={Thuy}/>
            </div>
        );
    }
}

export default DieuHuongUrl;