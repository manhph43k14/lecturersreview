import React, { Component } from "react";
import { auth } from "../firebase";
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.auth = auth;
    }
    componentDidUpdate(){
        this.checkSignin();
    }
    componentDidMount(){
        this.checkSignin();
    }
    logOut = () =>{
        const confirmDel = window.confirm("Are you sure log out??")

        if (confirmDel) {
            auth.signOut().then(function() {
                alert("Logouted")
            }).catch(function(error) {
              // An error happened.
            });
	    }
    }

    checkSignin = () =>{
        var login =  document.getElementById('nav-login');
        var logout =  document.getElementById('nav-logout');

        auth.onAuthStateChanged(user =>{
            if(user){
                logout.classList.remove('hide');
                login.classList.add('hide');
            }else{
                logout.classList.add('hide');
                login.classList.remove('hide');
            }
        })
    }
    render() {
        
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container col-md-10" >
                    <div className="navbar-header ">
                        <NavLink className="navbar-brand" to="/">
                            <span><img className="logo" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/305161_228819400508433_809369959_n.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=VhtM4uGky5QAX_EsF-z&_nc_ht=scontent.fdad2-1.fna&oh=32577063fd6104c22502cefc12691421&oe=5ED99679" alt="logo" height={40} width={40} /></span>    
                        </NavLink>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/find">Find</NavLink></li>
                            <li id="nav-login"><NavLink to="/login">Log in</NavLink></li>
                            <li id="nav-logout" className="hide"><NavLink to="/" onClick={this.logOut.bind(this, "logOut()")}>Logout</NavLink></li>
                        </ul>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse navbar-right">
                        <NavLink className="navbar-brand" to="/">
                            <span>DUE LECTURERS REVIEW</span>
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        );
        

    }
  };

export default Nav;
