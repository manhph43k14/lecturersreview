let lectureId, commentRef
let isEditMode = false
let commentData

const COMMENT_AREA_ID = "commentArea"
const POST_ID = "post_"
const COMMENT_ID = "cmt_"
const COMMENT_TEXTBOX_ID = "cmtTxt_"
const FUNCBAR_ID = "funcBar_"

function init() {
	// dummy data, replace by lectureId who want to comment
	lectureId = 'abc'
	commentRef = firebase.database().ref('Comment')
	loadComment()
}

function loadComment() {
	commentRef.orderByChild('lecId')
		.equalTo(lectureId)
		.on('value', (data) => {
			commentData = data.val()
			if (!isEditMode) {
				showComment()
			}
		})
}

function showComment() {
	const listCmt = []
	
	for (let cmtId in commentData) {
		if (!commentData.hasOwnProperty(cmtId)) 
			continue;

		listCmt.push(commentData[cmtId])
	}

	listCmt.sort((a,b) => a-b)
	$('#' + COMMENT_AREA_ID).html("")
	// document.getElementById(COMMENT_AREA_ID).innerHTML("")
	listCmt.forEach((cmt) => {
		renderComment(cmt)
	})
}

function renderComment(comment) {
	let templateCmt =
		`<div id="postId">
			<table style="width:94%">
				<tr>
					<td rowspan="3" style="width: 70px; padding: 5px;"><img style="width: inherit; box-shadow: 0px 3px 5px #888888;" src="img/user.jpg"></td>
					<td style="color: #5C1EFB;">userId</td>
				</tr>
				<tr>
					<td id="commentId">commentContent</td>
				</tr>
				<tr>
					<td id="funcBarId" style="color: #8A95A7;">
						<img src="img/up-arrow-caret.png" style="cursor: pointer;" onclick="updateVote('commentId', true)">
						<img src="img/down-arrow-caret.png" style="cursor: pointer;" onclick="updateVote('commentId', false)">
						&nbsp;<span id="voteNum" style="color:voteColor">voteNum</span>&nbsp;
						<a style="cursor: pointer;" onclick="replyComment('userId')">Reply</a>
						&nbsp;&nbsp;&nbsp;<a style="cursor: pointer;" onclick="switchToEditMode('commentId')">Edit</a>
						&nbsp;&nbsp;&nbsp;<a style="cursor: pointer;" onclick="deleteComment('commentId')">Delete</a>
					</td>
				</tr>
			</table>
		</div>`
		
	const voteColor = comment.voteNum > 0 ? "#39e600" : comment.voteNum < 0 ? "red" : "#8A95A7"
	templateCmt = templateCmt.replace(/postId/gi, POST_ID + comment.cmtId)
	templateCmt = templateCmt.replace(/userId/gi, comment.userId)
	templateCmt = templateCmt.replace(/commentId/gi, comment.cmtId)
	templateCmt = templateCmt.replace(/commentContent/gi, comment.content)
	templateCmt = templateCmt.replace(/funcBarId/gi, FUNCBAR_ID + comment.cmtId)
	templateCmt = templateCmt.replace(/voteNum/gi, comment.voteNum)
	templateCmt = templateCmt.replace(/voteColor/gi, voteColor)
	$('#' + COMMENT_AREA_ID).append(templateCmt)
	// document.getElementById(COMMENT_AREA_ID).insertAdjacentHTML('beforeend',templateCmt)
}

function postComment() {
	const commentContent = $("#commentTxt").val()
	// const commentContent = document.getElementByIdcommentTxt.value;

	if (commentContent.trim() == "") {
		alert("Viết gì đi chứ!")
		$("#commentTxt").focus()
		// document.getElementById(commentTxt).focus()
		return
	}

	const currentTime = new Date().getTime()
	const currentCmt = commentRef.push()

	currentCmt.set({
		cmtId: currentCmt.key,
		lecId: lectureId,
		userId: window.user.email,
		content: commentContent,
		createTime: currentTime,
		updateTime: currentTime,
		voteNum: 0
	}, function(error) {
		if (error) {
			showError(error)
		} else {
			$("#commentTxt").val("")
			// document.getElementById(commentTxt).value("")
		}
	})
}

function switchToEditMode(cmtId) {
	isEditMode = true
	const commentContent = $('#' + cmtId).html()
	// const commentContent = document.getElementById(cmtId).innerHTML;
	
	let templateCmtTxt = `<textarea id="commentTxtId" name="comment" form="usrform" placeholder="Viết bình luận..." style=" width: 100%;"></textarea>`
	let templatefuncBar = 
		`<div>
			<input type="button" value="Cancel" id="post-btn" onclick="cancelComment()" style="float: right; width: 70px;">
			<input type="button" value="Comment" id="post-btn" onclick="editComment('commentId')" style=" float: right; width: 100px;">
		</div>`

	templateCmtTxt = templateCmtTxt.replace(/commentTxtId/gi, COMMENT_TEXTBOX_ID + cmtId)
	templatefuncBar = templatefuncBar.replace(/commentId/gi, cmtId)

	$('#' + cmtId).html(templateCmtTxt)
	// document.getElementById(cmtId).innerHTML = templateCmtTxt
	$('#' + COMMENT_TEXTBOX_ID + cmtId).val(commentContent)
	// document.getElementById(COMMENT_TEXTBOX_ID + cmtId).value = commentContent
	$('#' + FUNCBAR_ID + cmtId).html(templatefuncBar)
	// document.getElementById(FUNCBAR_ID + cmtId).innerHTML = templatefuncBar
}

function editComment(cmtId) {
	const commentContent = $('#' + COMMENT_TEXTBOX_ID + cmtId).val()
	// const commentContent = document.getElementById(COMMENT_AREA_ID+cmtId).value;

	if (commentContent.trim() == "") {
		alert("Viết gì đi chứ!")
		$('#' + COMMENT_TEXTBOX_ID + cmtId).focus()
		// document.getElementById(COMMENT_AREA_ID+cmtId).focus();
		return
	}

	const currentTime = new Date().getTime()
	const updates = {
		content: commentContent,
		updateTime: currentTime
	}

	commentRef.child(cmtId).update(
		updates, 
		function(error) {
			if (error) {
				showError(error)
			} else {
				isEditMode = false
				showComment()
			}
		}
	)
}

function cancelComment() {
	isEditMode = false
	showComment()
}

function deleteComment(cmtId) {
	const confirmDel = confirm("Bạn có chắc chắn muốn xóa bình luận này không?")

	if (confirmDel) {
		commentRef.child(cmtId)
			.remove()
			.catch((error) => {
				showError(error)
			})
	}
}

function replyComment(userId) {
	$('#commentTxt').val("@[" + userId + "] ")
	// document.getElementById(commentTxt).value = "@[" + userId + "] "
	$('#commentTxt').focus()
	// document.getElementById(commentTxt).focus();
	document.documentElement.scrollTop = 0
}

function updateVote(cmtId, isVoteUp) {
	commentRef.child(cmtId)
		.once('value', (data) => {
			let voteNum = data.val().voteNum
			voteNum = isVoteUp ? ++voteNum : --voteNum

			const updates = {
				voteNum: voteNum
			}
		
			commentRef.child(cmtId).update(
				updates, 
				function(error) {
					if (error) {
						showError(error)
					}
				}
			)
		})
}