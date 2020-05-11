import React, { Component } from 'react';
import { auth, database } from "../firebase";

const COMMENT_AREA_ID = "commentArea"
const POST_ID = "post_"
const COMMENT_ID = "cmt_"
const COMMENT_TEXTBOX_ID = "cmtTxt_"
const FUNCBAR_ID = "funcBar_"
const commentTxt = "commentTxt"
class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.database = database;
    this.auth = auth;
    this.state = {
      commentRef :  this.database.ref("Comment"),
      isEditMode : false

    }
  }
  switchToEditMode = (cmtId) => {
    const commentContent = document.getElementById("commentId").innerHTML;
    var old = document.getElementById(FUNCBAR_ID + cmtId).innerHTML;
    let templateCmtTxt = `<textarea id="commentTxtId" name="comment" form="usrform" placeholder="Viết bình luận..." style=" width: 100%;"></textarea>`
    let templatefuncBar = 
      `<div>
        <input type="button" value="Cancel" class="post-btn" id="cancelComment" style="float: right; width: 70px;">
        <input type="button" value="Comment" class="post-btn" id="editComment"  style=" float: right; width: 100px;">
      </div>`

    templateCmtTxt = templateCmtTxt.replace(/commentTxtId/gi, COMMENT_TEXTBOX_ID + cmtId)
    templatefuncBar = templatefuncBar.replace(/commentId/gi, cmtId)

    document.getElementById("commentId").innerHTML = templateCmtTxt
    document.getElementById(COMMENT_TEXTBOX_ID + cmtId).value = commentContent
    document.getElementById(FUNCBAR_ID + cmtId).innerHTML = templatefuncBar

    var btnCancelComment = document.getElementById("cancelComment");
    var btnEditComment = document.getElementById("editComment");

    btnEditComment.addEventListener("click", function(){
      const commentContent = document.getElementById(COMMENT_TEXTBOX_ID + cmtId).value 

      if (commentContent.trim() == "") {
        alert("Viết gì đi chứ!")
        document.getElementById(COMMENT_AREA_ID+cmtId).focus();
        return
      }

      const currentTime = new Date().getTime()
      const updates = {
        content: commentContent,
        updateTime: currentTime
      }
      alert("Wait update later")

    });

    btnCancelComment.addEventListener("click", function(){
      document.getElementById(COMMENT_TEXTBOX_ID + cmtId).value = "";
      document.getElementById(FUNCBAR_ID + cmtId).innerHTML = old;
    });
  }
  


  deleteComment= (cmtId) => {
    const confirmDel = window.confirm("Bạn có chắc chắn muốn xóa bình luận này không?")

    if (confirmDel) {
      this.state.commentRef.child(cmtId)
        .remove()
        .catch((error) => {
          alert("Error")
        })
    }
  }

  replyComment =(userId) =>{
    document.getElementById(commentTxt).value = "@[" + userId + "] "
    document.getElementById(commentTxt).focus();

    document.documentElement.scrollTop = 0
  }

  updateVote=(cmtId, isVoteUp)=> {
    this.state.commentRef.child(cmtId)
      .once('value', (data) => {
        let voteNum = data.val().voteNum
        voteNum = isVoteUp ? ++voteNum : --voteNum

        const updates = {
          voteNum: voteNum
        }
      
        this.state.commentRef.child(cmtId).update(
          updates, 
          function(error) {
            if (error) {
              alert("Error")
            }
          }
        )
      })
  }
  render() {
    var {data} = this.props;
    return (
      <div id="postId">
        <table style={{width: '94%'}}>
          <tbody><tr>
              <td rowSpan={3} style={{width: '70px', padding: '5px'}}><img style={{width: 'inherit', boxShadow: '0px 3px 5px #888888'}} src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/c379.0.1290.1290a/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=HcNy9F6tYsYAX85WuL2&_nc_ht=scontent.fdad1-1.fna&oh=828dcf732b115f88e36f85e2ab34373b&oe=5EDF5E38" /></td>
              <td style={{color: '#5C1EFB'}}>{data.userId}</td>
            </tr>
            <tr>
              <td id="commentId">{data.content}</td>
            </tr>
            <tr>
              <td id={`${FUNCBAR_ID}${data.cmtId}`} style={{color: '#8A95A7'}}>
                <img src="https://img.icons8.com/cotton/2x/facebook-like--v1.png" style={{cursor: 'pointer', width: '20px'}} onClick={this.updateVote.bind(this, data.cmtId, true)} />
                <img src="https://cdn3.iconfinder.com/data/icons/best-hand/500/Dislike_down_hand_thumbs_down-512.png" style={{cursor: 'pointer', width: '20px'}} onClick={this.updateVote.bind(this, data.cmtId, false)} />
    &nbsp;<span id="voteNum" style={{color: 'voteColor'}}>{data.voteNum}</span>&nbsp;
                <a style={{cursor: 'pointer'}} onClick={this.replyComment.bind(this,data.userId)}>Reply</a>
                &nbsp;&nbsp;&nbsp;<a style={{cursor: 'pointer'}} onClick={this.switchToEditMode.bind(this, data.cmtId)}>Edit</a>
                &nbsp;&nbsp;&nbsp;<a style={{cursor: 'pointer'}}  onClick={this.deleteComment.bind(this,data.cmtId)}>Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CommentItem;