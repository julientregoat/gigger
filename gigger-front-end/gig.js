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

    static postComment(comment){
      console.log(comment)
      let commentContent = document.getElementById('new-comment-input').value
      fetch('http://localhost:3000/comments',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({comment: {gig_id: comment.dataset.gig_id, user_id: current_user.id, content: commentContent}})
      }).then(res => console.log(res))
    }

    renderComments(){
      let commentsHTML = ""
      for (const comment of this.comments){
        let commentHTML =
        `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${comment.content}</h5>
            <small>${comment.created_at.slice(0,10)}</small>
          </div>
          <p class="mb-1">${comment.user.username}</p>
        </a>`
        commentsHTML += commentHTML
      }
      return commentsHTML
    }

    renderFull(){
      const showTitle = document.getElementById('show-gig-title')
      const showBody = document.getElementById('show-gig-body')
      const commentsList = document.getElementById('comments-list-group')
      const newCommentButton = document.getElementById('submit-new-comment')

      showTitle.innerHTML = this.title
      showBody.innerHTML = this.body
      commentsList.innerHTML = this.renderComments()
      newCommentButton.dataset.gig_id = this.id
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
