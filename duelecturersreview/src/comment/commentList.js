import React, { Component, useCallback } from "react";
import { auth, database } from "../firebase";
import CommentItem from "./commentItem";

class CommentList extends Component {
  render() {
    var {data,subjectId} = this.props;
    let element = data.map((elm,index)=>{
      var result = "";
      if(elm!=null && elm.subjectId == subjectId ){
        result =  <CommentItem
            key = {index}
            data={elm}
            >
        </CommentItem>
      }
      return result;
    })
    return (
      <div id="show">
       {element}
      </div>
    );
  }
}

export default CommentList;
