import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <span><img className="logo" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/20840901_114066525904130_5520067981533078559_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=qlHUDfVOQAgAX8kLHso&_nc_ht=scontent.fdad3-2.fna&oh=336eb91ad3f1ca518ea79bf1bd89973e&oe=5EB25DA2" alt="logo" height={30} width={30} /></span>
                            <span>DUE LECTURERS REVIEW</span>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/find">Find</a></li>
                            <li id="nav-login"><a href="/login">Log in</a></li>
                            <li id="nav-logout" className="hide"><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;