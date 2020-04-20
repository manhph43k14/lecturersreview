	window.localStorage.clear();
		var currentPost, username, jsonLocalStorageLength, postsNumber;
		
		// on create new Status
		function onNewPost() {
			username = document.getElementById('username-input').value;
			currentPost = document.getElementById('status-textarea').value;			
			jsonLocalStorageLength = window.localStorage.length;
			newPostNumber = jsonLocalStorageLength+1;

			var newPost = new statusStruct(newPostNumber, username, currentPost, 0, 0, [""]);
			window.localStorage.setItem('post'+newPostNumber , JSON.stringify(newPost.statusJSON));

			// show the status update on UI
			createStatusUpdateUI("statusTable", username, currentPost, newPostNumber);

			// clear text fields
			document.getElementById('username-input').value = '';
			document.getElementById('status-textarea').value = '';
		}

		// on press "Post" status button
		function createStatusUpdateUI(appendUITo, username, currentPost, _thisPostId ){
			var td, postdivid, posttableid;
			var postdiv = document.createElement('div');
			postdiv.setAttribute("id", "post"+_thisPostId);
			var table = document.createElement('table');
			for(var i=0; i<3; i++){
				var tr = document.createElement('tr');
				for(var c=0; c<2; c++){
					if(i==0){
						if(c==0){
							td = document.createElement("td");
							var im = document.createElement("img");
							im.setAttribute("style", "width: inherit; box-shadow: 0px 3px 5px #888888;");
							im.setAttribute("src", "img/user.jpg");

							td.setAttribute("rowspan", 3);
							td.setAttribute("style", "width: 70px; padding: 5px;");
							td.appendChild(im);						
							tr.appendChild(td);
						} else{
							td = document.createElement("td");
							td.setAttribute("style","color: #5C1EFB;");
							td.innerHTML = username;														
							tr.appendChild(td);							
						}
					} else if(i==1){
						if(c==0){
							td = document.createElement("td");
							td.innerHTML = currentPost;													
							tr.appendChild(td);
						}
					} else if(i==2){
						if(c==0){

							td = document.createElement("td");
							td.setAttribute("style", "color: #8A95A7;");
							
							var imUpCaret = document.createElement("img");
							imUpCaret.setAttribute("src","img/up-arrow-caret.png");
							imUpCaret.setAttribute("style","cursor: pointer;");
							imUpCaret.setAttribute("onclick", "onUpVote(this)");
							td.appendChild(imUpCaret);						

							var imDownCaret = document.createElement("img");
							imDownCaret.setAttribute("src","img/down-arrow-caret.png");
							imDownCaret.setAttribute("style","cursor: pointer;");
							imDownCaret.setAttribute("onclick", "onDownVote(this)");
							
							td.appendChild(imDownCaret);						

							td.innerHTML += '&nbsp;';

							var voteScoreSpan = document.createElement('span');
							voteScoreSpan.setAttribute("id","voteScore");
							voteScoreSpan.innerHTML = 0;	
							td.appendChild(voteScoreSpan);						
							
							td.innerHTML += '&nbsp;';

							var replyAnchor = document.createElement('a');
							replyAnchor.setAttribute("style","cursor: pointer;");
							replyAnchor.setAttribute("onclick", 'onNewComment(this)');
							replyAnchor.innerHTML = "Reply";
							td.appendChild(replyAnchor);						

							td.innerHTML += '&nbsp;';
							td.innerHTML += '&nbsp;';
							td.innerHTML += '&nbsp;';
						

							tr.appendChild(td);						
						}
					}
				}
				table.appendChild(tr);
			}
			var thisPostId = document.createElement('span');
			thisPostId.setAttribute("style","display:none");
			thisPostId.innerHTML = _thisPostId;
			table.appendChild(thisPostId);

			postdiv.appendChild(table);
			document.getElementById(appendUITo).appendChild(postdiv);

		}

		// on press "reply" button
		function onNewComment(el){
			//show reply form
			showReplyForm(el);
		}
		var commentNumber;
		var level;
		var postnumb = 1;

		// for showing the reply form
		function showReplyForm(element){
			
			var toBeAppendedTo = element.parentNode.parentNode.parentNode.parentNode;
			var postId = toBeAppendedTo.id;
			
			var numbers = postId.match(/\d+/g).map(Number);
			level = numbers.length;
			var marginLeftToLevel = level*80;

			if(level>1){
				var id,id1;
				id = postId.split('-')[0];
				id1 = postId.split('-')[1];
				postObj = JSON.parse(window.localStorage.getItem(id))["comments"];
				for(i=1; i<level; i++){
					if(postObj[numbers[i]] == null || postObj[numbers[i]] == undefined || postObj[numbers[i]]["comments"].length <= 1 ){
						commentNumber = 1;	
						postnumb = commentNumber;
						break;
					} else{
						postObj = postObj[numbers[i]]["comments"];
						commentNumber = postObj.length;	
						postnumb = commentNumber;
						
					}
				}
				level++;
			}
			
			var replydiv = document.createElement('div');			
			replydiv.setAttribute("id",postId+"-comment"+postnumb+"-form");
			replydiv.setAttribute("style","width: 50%; margin-left:80px");
			
			var textarea = document.createElement('textarea');
			textarea.setAttribute("id",postId+"-comment"+level+"-text_form");
			textarea.setAttribute("placeholder","comment");
			textarea.setAttribute("style","width: 70%;");

			var usernameinput = document.createElement('input');
			var replybtninput = document.createElement('input');
			usernameinput.setAttribute("id",postId+"-comment"+level+"-username_form");
			usernameinput.setAttribute("type","text");
			usernameinput.setAttribute("placeholder","username");
			replybtninput.setAttribute("type","button");
			replybtninput.setAttribute("onclick","createReplyUpdate(this)");
			replybtninput.value = "Comment";
			replybtninput.setAttribute("style","margin: 15px; vwidth: 50px;");

			var usernamespan = document.createElement('span');
			var replybtnspan = document.createElement('span');
			usernamespan.appendChild(usernameinput);
			replybtnspan.appendChild(replybtninput);
			
			var div = document.createElement('div');
			div.appendChild(usernamespan);
			div.appendChild(replybtnspan);

			replydiv.appendChild(textarea);
			replydiv.appendChild(div);
			toBeAppendedTo.appendChild(replydiv);
		}
		
		// on storing the reply to localstorage
		function createReplyUpdate(el){
			
			var level ;
			//fetching the comment, username. Store them to local storage in the status's object.
			var replyText = document.getElementById(el.parentNode.parentNode.parentNode.childNodes[0].id);
			var usernameComment = document.getElementById(el.parentNode.parentNode.parentNode.childNodes[1].firstChild.firstChild.id);
			var postId = el.parentNode.parentNode.parentNode.id;
			level = postId.split('-').length - 2;
			var commentId = postId.split('-form')[0];
			
			var newComment = new replyStruct(commentId, postId.split('-')[0], usernameComment.value, replyText.value, 0, 0, []);
			var status = window.localStorage.getItem(postId.split('-')[0]);
			status = JSON.parse(status);
			status['comments'].push(newComment);
			window.localStorage.removeItem(postId.split('-')[0]);
			window.localStorage.setItem(postId.split('-')[0],JSON.stringify(status));

			// showing the comment below corresponding post
			createReplyUpdateUI(el, newComment);
		}

		// on press "post" for 
		function createReplyUpdateUI(el, newCom){
			// removing the reply form
			var elToRemove = el.parentNode.parentNode.parentNode;
			el.parentNode.parentNode.parentNode.parentNode.removeChild(elToRemove);

			// create the reply UI
			var thisComment = newCom;
			var appendReplyTo = document.getElementById(thisComment['postId']);
			var replyId = thisComment['commentId'];
			var reply = thisComment['comment'];
			var user = thisComment['username']; 

			var mainReplyDiv = document.createElement('div');
			mainReplyDiv.setAttribute("id",replyId);
			mainReplyDiv.setAttribute("style","width: 50%; margin-left:"+level*80+"px");

			var table = document.createElement('table');
			for(var i=0; i<3; i++){
				var tr = document.createElement('tr');
				for(var c=0; c<2; c++){
					if(i==0){
						if(c==0){
							td = document.createElement("td");
							var im = document.createElement("img");
							im.setAttribute("style", "width: inherit; box-shadow: 0px 3px 5px #888888;");
							im.setAttribute("src", "img/user.jpg");

							td.setAttribute("rowspan", 3);
							td.setAttribute("style", "width: 70px; padding: 5px;");
							td.appendChild(im);						
							tr.appendChild(td);
						} else{
							td = document.createElement("td");
							td.setAttribute("style","color: #5C1EFB;");
							td.innerHTML = user;														
							tr.appendChild(td);							
						}
					} else if(i==1){
						if(c==0){
							td = document.createElement("td");
							td.innerHTML = reply;																																
							tr.appendChild(td);
						}
					} else if(i==2){
						if(c==0){

							td = document.createElement("td");
							td.setAttribute("style", "color: #8A95A7;");
							
							var imUpCaret = document.createElement("img");
							imUpCaret.setAttribute("src","img/up-arrow-caret.png");
							imUpCaret.setAttribute("style","cursor: pointer;");
							imUpCaret.setAttribute("onclick","onUpVote(this)");
							td.appendChild(imUpCaret);						

							var imDownCaret = document.createElement("img");
							imDownCaret.setAttribute("src","img/down-arrow-caret.png");
							imDownCaret.setAttribute("style","cursor: pointer;");
							imDownCaret.setAttribute("onclick", "onDownVote(this)");
							td.appendChild(imDownCaret);						

							td.innerHTML += '&nbsp;';

							var voteScoreSpan = document.createElement('span');
							voteScoreSpan.setAttribute("id","voteScore");
							voteScoreSpan.innerHTML = 0;	
							td.appendChild(voteScoreSpan);						
							
							td.innerHTML += '&nbsp;';

							var replyAnchor = document.createElement('a');
							replyAnchor.setAttribute("style","cursor: pointer;");
							replyAnchor.setAttribute("onclick",'onNewComment(this)');
							replyAnchor.innerHTML = "Reply";
							td.appendChild(replyAnchor);						

							td.innerHTML += '&nbsp;';
							td.innerHTML += '&nbsp;';
							td.innerHTML += '&nbsp;';

												

							tr.appendChild(td);						
						}
					}
				}
				table.appendChild(tr);
				mainReplyDiv.appendChild(table);
			}
			appendReplyTo.appendChild(mainReplyDiv);

		}

		function statusStruct(postId, username, status, upvote, downvote, comments){
			this.postId = postId;
			this.username = username;
			this.status = status;
			this.upvote = upvote;
			this.downvote = downvote;
			this.comments = [replyStruct];
			this.statusJSON = {'postId':this.postId,'username':this.username, 'status':this.status,'upvote': this.upvote, 'downvote': this.downvote, 'comments':this.comments};
			
		}

		function replyStruct(commentId, postId, username, comment, upvote, downvote, comments){
			this.commentId = commentId;
			this.postId = postId;
			this.username = username;
			this.comment = comment;
			this.upvote = upvote;
			this.downvote = downvote;
			this.comments = [replyStruct];
			
			this.replyJSON = {'commentId':this.commentId, 'postId':this.postId, 'username':this.username, 'status':this.comment,'upvote': this.upvote, 'downvote': this.downvote, 'comments':this.comments};
		}

		function onUpVote(el){
			el.parentNode.childNodes[3].innerHTML = parseInt(el.parentNode.childNodes[3].innerHTML) + 1;
			if(parseInt(el.parentNode.childNodes[3].innerHTML)>0){
				el.parentNode.childNodes[3].setAttribute("style","color: #0f0");		
			} else if(parseInt(el.parentNode.childNodes[3].innerHTML)==0 ){
				el.parentNode.childNodes[3].setAttribute("style","color: ##8A95A7");		
			}
		}
		
		function onDownVote(el){
			el.parentNode.childNodes[3].innerHTML = parseInt(el.parentNode.childNodes[3].innerHTML) - 1;
			if(parseInt(el.parentNode.childNodes[3].innerHTML)<0){
				el.parentNode.childNodes[3].setAttribute("style","color: #f00");		
			} else if(parseInt(el.parentNode.childNodes[3].innerHTML)==0 ){
				el.parentNode.childNodes[3].setAttribute("style","color: ##8A95A7");		
			}
		}