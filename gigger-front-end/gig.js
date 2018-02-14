const Gig = (function() {
  return class Gig {
    constructor({ id, title, body, poster, tag, created_at, comments}) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.poster = poster.name;
      this.tag = tag.name;
      this.createdAt = created_at.slice(0, 10);
      this.comments = comments
    }

    static editComment(commentElement){
      console.log(commentElement)
    }

    static deleteComment(commentElement){
      let commentID = commentElement.dataset.comment_id
      fetch(`http://localhost:3000/comments/${commentID}`, {method: 'DELETE'})
      .then(res => {
        document.getElementById(`comment-${commentID}`).remove()
        alert('Comment deleted.')})
    }

    static generateCommentHTML(comment){
      let commentHTML =
      `<a href="#" id="comment-${comment.id}"class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${comment.content}</h5>
          <small>${comment.created_at.slice(0,10)}</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">${comment.user.username}</p>
          ${comment.user.username === current_user.username ? `<div><button type="button" class="btn btn-warning btn-sm" data-comment_id="${comment.id}" onclick="Gig.editComment(this)">Edit</button><button type="button" class="btn btn-danger btn-sm" data-comment_id="${comment.id}" onclick="Gig.deleteComment(this)">Delete</button></div>` : ""}
        </div>
      </a>`
      return commentHTML
    }

    renderComments(){
      let commentsHTML = ""
      for (const comment of this.comments){
        commentsHTML += Gig.generateCommentHTML(comment)
      }
      return commentsHTML
    }

    static postComment(comment){
      let commentContent = document.getElementById('new-comment-input').value
      const commentsList = document.getElementById('comments-list-group')
      fetch('http://localhost:3000/comments',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({comment: {gig_id: comment.dataset.gig_id, user_id: current_user.id, content: commentContent}})
      })
      .then(res => res.json())
      .then(comment => {
        if (comment.message){
          alert('You must be logged in to comment.')
        } else {
          commentsList.innerHTML += Gig.generateCommentHTML(comment)
        }
      }) //append new commment pessemisticly
    }

    renderFull(){
      const showTitle = document.getElementById('show-gig-title')
      const showBody = document.getElementById('show-gig-body')
      const showCommentsButton= document.getElementById('show-gig-comments')
      const commentsList = document.getElementById('comments-list-group')
      const newCommentButton = document.getElementById('submit-new-comment')

      showTitle.innerHTML = this.title
      showBody.innerHTML = this.body
      commentsList.innerHTML = this.renderComments()
      newCommentButton.dataset.gig_id = this.id
      showCommentsButton.className = "btn btn-danger col-3"
    }

    render(){
      let newGig = document.createElement('a')
      newGig.className = "list-group-item list-group-item-action flex-column align-items-start"
      newGig.href = "#"
      newGig.innerHTML =
      `<div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${this.title}</h5>
        <small>${this.createdAt}</small>
      </div>
      <p class="mb-1">${this.body.slice(0,60)}</p>
      ${Tag.renderBadge(this.tag)}`
      newGig.addEventListener('click', this.renderFull.bind(this))
      return newGig
    }

  };
})();
