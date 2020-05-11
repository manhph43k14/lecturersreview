import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Result extends Component {
 
  render() {
    
    return (
      <li scope="row">
        <span id="gv">{this.props.name}</span>
        <span id="sub">{this.props.subject}</span> 
        <NavLink id = "btnReview"
          to={`comment/${this.props.name}/${this.props.subject}`}
        > Review
        </NavLink>
      </li>
      
    );
  }
}

export default Result;