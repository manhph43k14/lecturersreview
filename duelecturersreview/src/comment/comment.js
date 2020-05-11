import React, { Component, useCallback } from "react";
import { auth, database } from "../firebase";
import { Button } from "react-bootstrap";
import CommentList from "./commentList";

const Lecturers = "Lecturers";
const Subject = "Subject";

const COMMENT_AREA_ID = "commentArea"
const POST_ID = "post_"
const COMMENT_ID = "cmt_"
const COMMENT_TEXTBOX_ID = "cmtTxt_"
const FUNCBAR_ID = "funcBar_"
const commentTxt = "commentTxt"
class Comment extends Component {
  constructor(props) {
    super(props);
    this.database = database;
    this.auth = auth;
    this.state = {
      subjectId : "",
      lectureId : "",
      lectureName : this.props.match.params.id,
      subjectName :this.props.match.params.sub,
      data: "",
      commentRef :  this.database.ref("Comment")

    }
  }
  componentWillMount(){
    this.setLecturersID(this.state.lectureName,this.state.subjectName); 
    this.loadComment()
  }
  componentDidMount(){
    this.setLecturersID(this.state.lectureName,this.state.subjectName); 
    this.loadComment()
  }

  setLecturersID = (lecturer,subject) =>{
    this.database.ref("Lecturers").orderByChild('name')
		.equalTo(lecturer)
		.on('value', (data) => {
      var array = data.val();
      for(let elm in array){
        if(elm!=null){
          this.setState({
            lectureId : array[elm].id
          })
          this.loadComment();
        }
      }
      // if(array!=null){
      //   for(let i = 1;i<array.length;i++){
      //     this.setState({
      //       lectureId : array[i].id
      //     })
      //     this.loadComment();
          
      //   }
      // }
      
    })
    this.database.ref("Subject").orderByChild('name')
		.equalTo(subject)
		.on('value', (data) => {
			var array = data.val();
      for(let elm in array){
        if(elm!=null){
          this.setState({
            subjectId : array[elm].id
          })
          this.loadComment();
        }
      }
      
    })
  }

  loadComment = () => {
    var {lectureId}= this.state;
    if(lectureId!=""){
      this.state.commentRef.orderByChild('lecId')
      .equalTo(lectureId)
      .on('value', (data) => {
        this.setState({
          data : data.val()
        })
      })
    }
  };

  showResult = (data) =>{
    var list=[];
    if(data!=""){
      for(let elm in data){
        list.push(data[elm])
      }
    }
    return <CommentList
          data = {list}
          subjectId ={ this.state.subjectId}
        >
      </CommentList>
    
    
  }
  postComment =()=>{
    var user = this.auth.currentUser;
    const commentContent = document.getElementById(commentTxt).value;

    if (commentContent.trim() == "") {
      alert("Viết gì đi chứ!")
      document.getElementById(commentTxt).focus()
      return
    }

    const currentTime = new Date().getTime()
    const currentCmt = this.state.commentRef.push()
    var lecId = this.state.lectureId;
    var subjectId = this.state.subjectId;
    currentCmt.set({
      cmtId: currentCmt.key,
      lecId: lecId,
      subjectId: subjectId,
      userId: user.email,
      content: commentContent,
      createTime: currentTime,
      updateTime: currentTime,
      voteNum: 0
    }, function(error) {
      if (error) {
        alert("Error")
      } else {
        document.getElementById(commentTxt).value = ""
      }
  	})

  }

  render() {
    return (
      <div id="show">
        <input
          type="text"
          placeholder={this.state.lectureName}
          autoComplete="off"
          id="lecturers"
        />
        <input
          type="text"
          placeholder={this.state.subjectName}
          autoComplete="off"
          id="subject"
        />
        <hr />
        <div className="head" style={{ width: "auto" }}>
          Bình luận
        </div>
        <div>
          <textarea
            rows={5}
            id="commentTxt"
            name="comment"
            form="usrform"
            placeholder="Viết bình luận..."
            style={{ width: "95%" }}
            defaultValue={""}
          />
          <span>
            <input
              type="button"
              defaultValue="Post"
              id="post-btn"
              onClick={this.postComment.bind(this, "postComment()")}
              style={{ float: "right", width: "50px" }}
            />
          </span>
        </div>
        <div id="commentArea">
          {this.showResult(this.state.data)}
        </div>
      </div>
    );
  }
}

export default Comment;
