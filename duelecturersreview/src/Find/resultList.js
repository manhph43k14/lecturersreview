import React, { Component } from 'react';
import Result from './result';

class ResultList extends Component {
 
  render() {
    var {name,data,option} = this.props;
    var list = [];
    let element;
    for(let elm in data){
      if(data[elm]!=""){
        list.push(data[elm])
      }
    }
    if(list!=null){
      if(option=="Lecturers") {
        element = list.map((elm,index)=>{
          var result = "";
          if(elm!=null){
            result =  <Result
                key = {index}
                name={name}
                subject={elm.name}
                >
            </Result>
          }
          return result;
        })
      }else{
        element = list.map((elm,index)=>{
          var result = "";
          if(elm!=null){
            result =  <Result
                key = {index}
                name={elm.name}
                subject={name}
                >
            </Result>
          }
          return result;
        })
      }
    }

    return (
      <ul> 
        {element}
      </ul>
    );
  }
}

export default ResultList;