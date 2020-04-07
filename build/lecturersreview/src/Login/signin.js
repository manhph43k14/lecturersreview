import React, {Component} from 'react';

class Signin extends Component {
    render() {
        return (
            <div className="bg">
                <div className="header">
                    <h1>DUE Lecturers review</h1>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-6 col-xs-12 row-container">
                            <form>
                                <div className="signin" id="div-signin" onClick="switchForm(id)">Sign in</div>
                                <div className="signup" id="div-signup" onClick="switchForm(id)">Sign up</div>
                                {/* Sign in form */}
                                <div className="signin-form" id="signin-form" style={{display: 'block'}}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email-signin"
                                               placeholder="Enter email"/>
                                        <p className="emailError"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="label">Password</label>
                                        <input type="password" className="form-control" id="password-signin"
                                               placeholder="Password"/>
                                        <p className="passwordError"/>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                        <label className="form-check-label" htmlFor="rememberMe">Remember</label>
                                    </div>
                                    <input type="button" className="btn btn-success btn-block my-3"
                                           onClick="toggleSignIn()" defaultValue="Sign in"/>
                                    <p><span><a href="#">I forgot my Password</a></span></p>
                                </div>
                                {/* Sign up form  */}
                                <div className="signup-form" id="signup-form" style={{display: 'none'}}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email-signup"
                                               placeholder="Enter email"/>
                                        <p className="emailError"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="label">Password</label>
                                        <input type="password" className="form-control" id="password-signup"
                                               placeholder="Password"/>
                                        <p className="passwordError"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userName">Your name</label>
                                        <input type="text" className="form-control" id="user_name"
                                               placeholder="Enter your name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userClass">Your class</label>
                                        <input type="text" className="form-control" id="user_class"
                                               placeholder="Enter your class"/>
                                    </div>
                                    <input type="button" className="btn btn-success btn-block my-3"
                                           onClick="handleSignUp()" defaultValue="Sign up"/>
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