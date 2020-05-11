import React, { Component } from "react";
import { auth, database } from "../firebase";
import { Redirect} from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.auth = auth;
    this.database = database;
    this.state = {
      redirect: false,
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  switchForm = (id) => {
    this.switchDisplayMode("signup-form", id === "div-signup");
    this.switchDisplayMode("signin-form", id === "div-signin");
  };

  switchDisplayMode = (formName, isShow) => {
    const form = document.getElementById(formName);
    form.style.display = isShow ? "block" : "none";
  };

  handleSignUp = () => {
    var email = document.getElementById("email-signup").value;
    var password = document.getElementById("password-signup").value;
    var name = document.getElementById("user_name").value;
    var clazz = document.getElementById("user_class").value;
    if (email.length === 0) {
      alert("Email is required.");
      return;
    } else if (password.length === 0) {
      alert("Password is required.");
      return;
    } else if (password.length < 6) {
      alert("Password has to be at least 6 characters long.");
      return;
    } else if (name.length === 0) {
      alert("Name is required.");
      return;
    } else if (clazz.length === 0) {
      alert("Class is required.");
      return;
    }

    const db = this.database;
    // Create user with email and pass.
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        var uid = response.user.uid;
        // Create account info in firebase, link by uid
        db.ref("Account/" + uid).set(
          {
            password: password,
            email: email,
            name: name,
            class: clazz,
            uid: uid,
          },
          (error) => {
            if (error) {
              var errorMessage = error.message;
              alert(errorMessage);
              console.log(error);
            } else {
              alert("Account created successfully!");
            }
          }
        );
        console.log(response); // log for debug;
        this.setState({
          redirect: true,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Something wrong happened! Plz contact administrator for more detail."
        );
      });
  };

  toggleSignIn = () => {
    var email = document.getElementById("email-signin").value;
    var password = document.getElementById("password-signin").value;
    if (email.length === 0) {
      alert("Please enter an email address.");
      return;
    }
    if (password.length === 0) {
      alert("Please enter a password.");
      return;
    }

    //Sign in with email and pass.
    this.auth
      .signInWithEmailAndPassword(email, password)
      // .signOut()
      .then(
        (success) => {
          this.setRedirect();
          //checkSignin
        },
        (fail) => {
          console.log(fail); // log for debug
          // Just show this message for security
          alert("Email or password is not correct!");
        }
      )
      .catch((error) => {
        console.log(error); // log for debug
        // Just show this message for security
        alert(
          "Something wrong happened! Plz contact administrator for more detail."
        );
      });
  };

  render() {
    return (
      <div className="bg">
        {this.renderRedirect()}
        <div className="header">
          <h1>DUE Lecturers review</h1>
        </div>
        <div className="container-fluid">
          <div className="justify-content-center">
            <div className="col-md-3 col-sm-6 col-xs-12 row-container">
              <form>
                <div
                  className="signin"
                  id="div-signin"
                  onClick={this.switchForm.bind(this, "div-signin")}
                >
                  Sign in
                </div>
                <div
                  className="signup"
                  id="div-signup"
                  onClick={this.switchForm.bind(this, "div-signup")}
                >
                  Sign up
                </div>
                {/* Sign in form */}
                <div
                  className="signin-form"
                  id="signin-form"
                  style={{ display: "block" }}
                >
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-signin"
                      placeholder="Enter email"
                    />
                    <p className="emailError" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password-signin"
                      placeholder="Password"
                    />
                    <p className="passwordError" />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember
                    </label>
                  </div>
                  <input
                    type="button"
                    className="btn btn-success btn-block my-3"
                    onClick={this.toggleSignIn.bind(this, "toggleSignIn()")}
                    defaultValue="Sign in"
                  />
                  <p>
                    <span>
                      <a href="/">I forgot my Password</a>
                    </span>
                  </p>
                </div>
                {/* Sign up form  */}
                <div
                  className="signup-form"
                  id="signup-form"
                  style={{ display: "none" }}
                >
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-signup"
                      placeholder="Enter email"
                    />
                    <p className="emailError" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password-signup"
                      placeholder="Password"
                    />
                    <p className="passwordError" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Your name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userClass">Your class</label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_class"
                      placeholder="Enter your class"
                    />
                  </div>
                  <input
                    type="button"
                    className="btn btn-success btn-block my-3"
                    onClick={this.handleSignUp.bind(this, "handleSignUp()")}
                    defaultValue="Sign up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;